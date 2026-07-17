"use client";

import { useEffect, useRef } from "react";

/* -- Configuration --------------------------------------------------------- */

const HERO_VIDEOS = [
  "/hero/hero-video-01.mp4",
  "/hero/hero-video-02.mp4",
  "/hero/hero-video-03.mp4",
] as const;

const POSTER = "/hero/hero-poster.webp";

/**
 * Shared video positioning / sizing classes.
 * No transition-opacity or ease transition classes, enabling a sudden cut.
 */
const VIDEO_CLASS =
  "absolute inset-0 h-full w-full object-cover " +
  "object-[72%_center] md:object-[60%_center] xl:object-[54%_center]";

/* -- Helpers --------------------------------------------------------------- */

function safePlay(video: HTMLVideoElement): void {
  const promise = video.play();
  if (promise !== undefined) {
    promise.catch(() => {
      /* Autoplay blocked - poster / paused frame is acceptable. */
    });
  }
}

/* -- Types ----------------------------------------------------------------- */

interface HeroVideoRotatorProps {
  /** The controlled active index representing the current video to play. */
  activeIndex: number;
}

/* -- Component ------------------------------------------------------------- */

/**
 * HeroVideoRotator (Controlled, Sudden Cut)
 *
 * Renders the hero video elements. Transitions are sudden cuts (no crossfade opacity transitions).
 */
export function HeroVideoRotator({ activeIndex }: HeroVideoRotatorProps) {
  const ref0 = useRef<HTMLVideoElement>(null);
  const ref1 = useRef<HTMLVideoElement>(null);
  const ref2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videos = [ref0.current, ref1.current, ref2.current];
    
    // Play the active video immediately
    const activeVideo = videos[activeIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      safePlay(activeVideo);
    }

    // Instantly pause and rewind all non-active videos to save resources
    videos.forEach((video, index) => {
      if (index !== activeIndex && video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-950">

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

    </div>
  );
}