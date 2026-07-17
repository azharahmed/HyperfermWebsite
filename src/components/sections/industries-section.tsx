"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// ─── Industries Data ────────────────────────────────────────────────────────
// The image paths are configured here in this data array for easy modification later.
const industries = [
  {
    num: "01",
    title: "Alternative Proteins",
    description: "Precision fermentation for dairy, meat, and next-gen protein production.",
    pill: "PRECISION FERMENTATION",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=640&q=80&auto=format&fit=crop",
    alt: "Precision fermentation bioreactors for alternative protein production",
    layout: "split", // desktop: 50/50 horizontal split (text left, image right)
    colSpan: "lg:col-span-2 md:col-span-2",
  },
  {
    num: "02",
    title: "Food Ingredients",
    description: "Consistent production of flavors, cultures, enzymes, and additives.",
    pill: "INGREDIENT SCALE-UP",
    image: "/b.png",
    alt: "Broccoli representing food ingredients",
    layout: "top", // image as top strip
    colSpan: "lg:col-span-1 md:col-span-1",
  },
  {
    num: "03",
    title: "Specialty Chemicals",
    description: "Microbial production of high-value chemical compounds.",
    pill: "INDUSTRIAL BIOTECH",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=640&q=80&auto=format&fit=crop",
    alt: "Chemical compound analysis in a modern biotech lab",
    layout: "top", // image as top strip
    colSpan: "lg:col-span-1 md:col-span-1",
  },
  {
    num: "04",
    title: "Functional Enzymes",
    description: "Stable enzyme manufacturing with better yield control.",
    pill: "ENZYME SYSTEMS",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=640&q=80&auto=format&fit=crop",
    alt: "Microscope visualization of enzyme structure",
    layout: "split", // desktop: 50/50 horizontal split (text left, image right)
    colSpan: "lg:col-span-2 md:col-span-2",
  },
  {
    num: "05",
    title: "Bio-Based Materials",
    description: "Renewable polymers, fibers, and biomaterials at commercial scale.",
    pill: "BIOFABRICATION",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&q=80&auto=format&fit=crop",
    alt: "Biofabricated fiber and polymer structures under research",
    layout: "top", // image as top strip
    colSpan: "lg:col-span-1 md:col-span-1",
  },
  {
    num: "06",
    title: "Nutraceuticals",
    description: "Controlled production of probiotics, vitamins, and bioactive ingredients.",
    pill: "BIOACTIVE PRODUCTION",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=640&q=80&auto=format&fit=crop",
    alt: "Production of high-quality probiotic ingredients and capsules",
    layout: "split", // desktop: 50/50 horizontal split (text left, image right)
    colSpan: "lg:col-span-2 md:col-span-2",
  },
] as const;

export function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 md:py-32 overflow-hidden bg-[#FAF9F6]">
      {/* Clean Ivory Background - No glossy SaaS glows */}

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="space-y-4 mb-20 max-w-[800px]">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-blue block">
            INDUSTRIES WE IMPACT
          </span>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.25rem)] leading-[1.1] text-ink">
            INDUSTRIES WE ENABLE
          </h2>
          <p className="font-ui font-light text-base md:text-lg text-ink-muted leading-relaxed">
            Our technology scales biomanufacturing across global commercial sectors, ensuring predictability and industrial efficiency.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind, i) => {
            const isSplit = ind.layout === "split";

            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-85px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
                className={`group relative bg-white border border-zinc-200 hover:border-black rounded-[14px] overflow-hidden transition-all duration-300 flex flex-col justify-between p-6 shadow-none ${ind.colSpan}`}
              >
                {/* Content Layout */}
                {isSplit ? (
                  /* Split Layout (horizontal on desktop, vertical on mobile) */
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch w-full h-full">
                    {/* Left side: text content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Header Row */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs font-mono font-semibold text-blue-600">
                            {ind.num}
                          </span>
                          <span className="inline-block px-2.5 py-0.5 rounded-full border border-black/[0.06] bg-zinc-50 text-[9px] font-mono tracking-wider uppercase text-zinc-500">
                            {ind.pill}
                          </span>
                        </div>
                        {/* Title & Description */}
                        <h3 className="font-sans text-[1.25rem] text-ink font-bold tracking-tight leading-snug mb-3">
                          {ind.title}
                        </h3>
                        <p className="font-ui font-light text-sm text-ink-muted leading-relaxed pb-12 md:pb-4">
                          {ind.description}
                        </p>
                      </div>
                    </div>

                    {/* Right side: Cropped biotech image */}
                    <div className="w-full md:w-[42%] flex items-center">
                      <div className="relative w-full h-[180px] md:h-full min-h-[160px] md:min-h-[180px] overflow-hidden rounded-lg border border-black/[0.04] bg-white">
                        <Image
                          src={ind.image}
                          alt={ind.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className={`${
                            'objectFit' in ind && ind.objectFit === 'contain' 
                              ? 'object-contain scale-[1.35] group-hover:scale-[1.42]' 
                              : 'object-cover group-hover:scale-[1.02]'
                          } transition-transform duration-500 ease-out`}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Top Layout (vertical top-strip image) */
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Header Row */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-semibold text-blue-600">
                          {ind.num}
                        </span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full border border-black/[0.06] bg-zinc-50 text-[9px] font-mono tracking-wider uppercase text-zinc-500">
                          {ind.pill}
                        </span>
                      </div>

                      {/* Small Cropped Biotech Image */}
                      {ind.num === "02" ? (
                        <div className="relative h-[170px] w-full overflow-hidden rounded-xl mb-5">
                          <img
                            src="/b.png"
                            alt="Broccoli food ingredients"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-[150px] overflow-hidden rounded-lg border border-black/[0.04] mb-5 bg-white">
                          <Image
                            src={ind.image}
                            alt={ind.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={`${
                              'objectFit' in ind && ind.objectFit === 'contain' 
                                ? 'object-contain scale-[1.35] group-hover:scale-[1.42]' 
                                : 'object-cover group-hover:scale-[1.02]'
                            } transition-transform duration-500 ease-out`}
                            unoptimized
                          />
                        </div>
                      )}

                      {/* Title & Description */}
                      <h3 className="font-sans text-[1.25rem] text-ink font-bold tracking-tight leading-snug mb-3">
                        {ind.title}
                      </h3>
                      <p className="font-ui font-light text-sm text-ink-muted leading-relaxed pb-12">
                        {ind.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Circular Black Arrow Button (Bottom-Right of Card) */}
                <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Caption */}
        <div className="mt-20 text-center">
          <p className="text-sm italic font-ui font-light text-ink-subtle">
            These sectors are among the fastest-growing applications for synthetic biology and precision fermentation.
          </p>
        </div>

      </div>
    </section>
  );
}
