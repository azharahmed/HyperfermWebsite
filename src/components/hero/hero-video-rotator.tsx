"use client";

import { useEffect, useRef, useState } from "react";

/* -- Configuration --------------------------------------------------------- */

const HERO_VIDEOS = [
  "/hero/hero-video-01.mp4",
  "/hero/hero-video-02.mp4",
  "/hero/hero-video-03.mp4",
  "/hero/hero-video-04.mp4",
] as const;

const POSTER = "/hero/hero-poster.webp";

/** How long each video is fully visible before the crossfade begins (ms). */
const DISPLAY_DURATION = 5000;

/** Duration of the opacity crossfade (ms) - must match the CSS transition below. */
const FADE_DURATION = 900;

/**
 * Shared video positioning / sizing classes.
 * All three elements must be identical so crossfades have no jump.
 */
const VIDEO_CLASS =
  "absolute inset-0 h-full w-full object-cover " +
  "object-[72%_center] md:object-[60%_center] xl:object-[54%_center] " +
  "transition-opacity duration-[900ms] ease-in-out";

/* -- Helpers --------------------------------------------------------------- */

function safePlay(video: HTMLVideoElement): void {
  const promise = video.play();
  if (promise !== undefined) {
    promise.catch(() => {
      /* Autoplay blocked - poster / paused frame is acceptable. */
    });
  }
}

function devError(msg: string): void {
  if (process.env.NODE_ENV !== "production") {
    console.error("[HeroVideoRotator]", msg);
  }
}

/* -- Types ----------------------------------------------------------------- */

interface HeroVideoRotatorProps {
  /** Called immediately when the active video index changes. */
  onActiveIndexChange?: (index: number) => void;
}

/* -- Component ------------------------------------------------------------- */

/**
 * HeroVideoRotator
 *
 * Renders all four hero video elements in the same absolute container.
 * Only CSS opacity transitions drive the crossfade - no Framer Motion,
 * no third-party libraries.
 *
 * At any moment:
 *   - The active video: opacity 1, playing.
 *   - All others: opacity 0, paused, currentTime 0.
 *
 * During a crossfade (FADE_DURATION window):
 *   - The incoming video starts playing immediately (opacity animates to 1).
 *   - The outgoing video's opacity animates to 0, then it pauses.
 *
 * Errored videos are skipped automatically. If all videos fail, the static
 * poster is shown. Errors are tracked in a ref to prevent stale closures.
 *
 * Static fallback: reduced motion | mobile < 768px | all videos failed.
 */
export function HeroVideoRotator({ onActiveIndexChange }: HeroVideoRotatorProps) {

  /* -- Reduced-motion ---------------------------------------------------- */
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* -- Mobile (< 768 px) ------------------------------------------------- */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* -- Video refs (one per video, declared unconditionally) --------------- */
  const ref0 = useRef<HTMLVideoElement>(null);
  const ref1 = useRef<HTMLVideoElement>(null);
  const ref2 = useRef<HTMLVideoElement>(null);
  const ref3 = useRef<HTMLVideoElement>(null);

  /* -- Active index for CSS opacity --------------------------------------- */
  const [activeIndex, setActiveIndex] = useState(0);

  /* -- All-failed flag for poster fallback -------------------------------- */
  const [allFailed, setAllFailed] = useState(false);

  /* -- Rotation logic ----------------------------------------------------- */
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const refs = [ref0, ref1, ref2, ref3];
    const videos = refs.map((r) => r.current) as HTMLVideoElement[];

    if (!videos[0]) return;

    let destroyed = false;
    let displayTimer: ReturnType<typeof setTimeout> | null = null;
    let pauseTimer: ReturnType<typeof setTimeout> | null = null;

    /*
     * Error state is kept in a plain ref array so that stale closures inside
     * setTimeout callbacks always read the live value.
     */
    const errored: boolean[] = [false, false, false, false];
    let errorCount = 0;

    /* ------------------------------------------------------------------ */

    function clearTimers() {
      if (displayTimer) { clearTimeout(displayTimer); displayTimer = null; }
      if (pauseTimer)   { clearTimeout(pauseTimer);   pauseTimer   = null; }
    }

    /**
     * Return the next non-errored index after fromIndex.
     * Returns -1 if every video has errored.
     */
    function getNextIndex(fromIndex: number): number {
      for (let step = 1; step <= HERO_VIDEOS.length; step++) {
        const candidate = (fromIndex + step) % HERO_VIDEOS.length;
        if (!errored[candidate]) return candidate;
      }
      return -1;
    }

    /** Resolve once the video has buffered enough to start playing. */
    function waitForReady(video: HTMLVideoElement): Promise<void> {
      return new Promise((resolve, reject) => {
        if (video.readyState >= 3) { resolve(); return; }

        const onReady = () => { cleanup(); resolve(); };
        const onError = () => { cleanup(); reject(); };

        function cleanup() {
          video.removeEventListener("canplay",    onReady);
          video.removeEventListener("loadeddata", onReady);
          video.removeEventListener("error",      onError);
        }

        video.addEventListener("canplay",    onReady, { once: true });
        video.addEventListener("loadeddata", onReady, { once: true });
        video.addEventListener("error",      onError, { once: true });
      });
    }

    /**
     * Crossfade from fromIndex to nextIndex.
     * - Starts the incoming video immediately.
     * - Updates opacity via React state.
     * - After FADE_DURATION: pauses + rewinds the outgoing video, schedules next.
     */
    function activateVideo(nextIndex: number, fromIndex: number) {
      if (destroyed) return;

      const next = videos[nextIndex];
      const from = videos[fromIndex];

      if (!next) return;

      /* Restart incoming from the beginning and play. */
      next.currentTime = 0;
      safePlay(next);

      /* Swap opacity + notify parent simultaneously. */
      setActiveIndex(nextIndex);
      onActiveIndexChange?.(nextIndex);

      /*
       * After the CSS fade completes: pause and rewind the outgoing video
       * so it is invisible and memory-light. Then schedule the next rotation.
       */
      pauseTimer = setTimeout(() => {
        if (destroyed) return;
        if (from) {
          from.pause();
          from.currentTime = 0;
        }
        scheduleNext(nextIndex);
      }, FADE_DURATION);
    }

    /** Wait DISPLAY_DURATION then find and activate the next valid video. */
    function scheduleNext(fromIndex: number) {
      if (destroyed) return;
      displayTimer = setTimeout(() => {
        if (destroyed) return;
        const nextIndex = getNextIndex(fromIndex);
        if (nextIndex === -1) {
          /* Every video has errored - show poster. */
          setAllFailed(true);
          return;
        }
        activateVideo(nextIndex, fromIndex);
      }, DISPLAY_DURATION);
    }

    /* ------------------------------------------------------------------ */

    async function init() {
      /* Play video 0 immediately. */
      videos[0].currentTime = 0;
      safePlay(videos[0]);
      setActiveIndex(0);
      onActiveIndexChange?.(0);

      /*
       * Wait for video 1 before starting the rotation cycle.
       * This ensures the very first transition is smooth.
       * Video 2 will be buffered by the browser during the 5-second display.
       */
      if (videos[1] && !errored[1]) {
        try {
          await waitForReady(videos[1]);
        } catch {
          devError("hero-video-02.mp4 failed to preload; will skip.");
          errored[1] = true;
          errorCount++;
        }
      }

      if (!destroyed) scheduleNext(0);
    }

    /* ------------------------------------------------------------------ */

    /* Persistent error listeners - mark videos as errored as they fire. */
    const errorHandlers = HERO_VIDEOS.map((src, i) => {
      const handler = () => {
        const name = src.split("/").pop();
        devError(`${name} error - skipping in rotation.`);
        if (!errored[i]) {
          errored[i] = true;
          errorCount++;
          if (errorCount >= HERO_VIDEOS.length) {
            setAllFailed(true);
          }
        }
      };
      videos[i]?.addEventListener("error", handler);
      return handler;
    });

    init();

    return () => {
      destroyed = true;
      clearTimers();
      videos.forEach((v) => v?.pause());
      HERO_VIDEOS.forEach((_, i) => {
        videos[i]?.removeEventListener("error", errorHandlers[i]);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, isMobile]);

  /* -- Poster fallback --------------------------------------------------- */
  if (reducedMotion || isMobile || allFailed) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${POSTER})`,
          backgroundSize: "cover",
          backgroundPosition: "72% center",
        }}
      />
    );
  }

  /* -- Four-video crossfade layer ---------------------------------------- */
  return (
    <div className="absolute inset-0 overflow-hidden">

      <video
        ref={ref0}
        muted
        playsInline
        preload="auto"
        poster={POSTER}
        aria-hidden="true"
        className={VIDEO_CLASS}
        style={{ opacity: activeIndex === 0 ? 1 : 0, zIndex: activeIndex === 0 ? 1 : 0 }}
      >
        <source src={HERO_VIDEOS[0]} type="video/mp4" />
      </video>

      <video
        ref={ref1}
        muted
        playsInline
        preload="auto"
        poster={POSTER}
        aria-hidden="true"
        className={VIDEO_CLASS}
        style={{ opacity: activeIndex === 1 ? 1 : 0, zIndex: activeIndex === 1 ? 1 : 0 }}
      >
        <source src={HERO_VIDEOS[1]} type="video/mp4" />
      </video>

      <video
        ref={ref2}
        muted
        playsInline
        preload="auto"
        poster={POSTER}
        aria-hidden="true"
        className={VIDEO_CLASS}
        style={{ opacity: activeIndex === 2 ? 1 : 0, zIndex: activeIndex === 2 ? 1 : 0 }}
      >
        <source src={HERO_VIDEOS[2]} type="video/mp4" />
      </video>

      <video
        ref={ref3}
        muted
        playsInline
        preload="auto"
        poster={POSTER}
        aria-hidden="true"
        className={VIDEO_CLASS}
        style={{ opacity: activeIndex === 3 ? 1 : 0, zIndex: activeIndex === 3 ? 1 : 0 }}
      >
        <source src={HERO_VIDEOS[3]} type="video/mp4" />
      </video>

    </div>
  );
}