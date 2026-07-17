"use client";

import { motion } from "framer-motion";
import { Dna, Leaf, GraduationCap, Building2 } from "lucide-react";
import Image from "next/image";

// Custom inline LinkedIn SVG icon to avoid lucide-react casing issues
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const founders = [
  {
    name: "Subramani Ramachandrappa",
    role: "FOUNDER",
    bio: "Subbu has over 20 years of biotech entrepreneurial expertise, specializing in sustainable synthetic biology. His previous venture, Laurus Bio, developed animal-free recombinant proteins and CDMO services.",
    linkedin: "https://www.linkedin.com/in/subramani-ramachandrappa-a7574b6/",
    image: "/team/subramani.png",
    alignRight: false,
    logos: [
      { name: "RICHCORE", color: "text-emerald-600 bg-emerald-50 border-emerald-100", icon: Leaf },
      { name: "Biocon", color: "text-blue-600 bg-blue-50 border-blue-100", icon: Dna },
      { name: "LAURUS Bio", color: "text-teal-600 bg-teal-50 border-teal-100", icon: Leaf },
      { name: "ISB", color: "text-indigo-600 bg-indigo-50 border-indigo-100", icon: GraduationCap }
    ]
  },
  {
    name: "Preeti Dharmagoudar",
    role: "CO-FOUNDER",
    bio: "Preeti brings extensive experience to the leadership team, with an MBA from ISB and a diverse background at Abbott Nutrition and Biocon.",
    linkedin: "https://www.linkedin.com/in/preeti-dharmagoudar-14a0558/",
    image: "/team/preeti.png",
    alignRight: true,
    logos: [
      { name: "Abbott", color: "text-cyan-600 bg-cyan-50 border-cyan-100", icon: Building2 },
      { name: "Biocon", color: "text-blue-600 bg-blue-50 border-blue-100", icon: Dna },
      { name: "ISB", color: "text-indigo-600 bg-indigo-50 border-indigo-100", icon: GraduationCap }
    ]
  },
  {
    name: "Ramanan Thirumoorthy",
    role: "CO-FOUNDER",
    bio: "Ramanan has over 20 years of industrial R&D experience across biocatalysis, enzyme engineering, and recombinant protein technologies. He holds a postgraduate degree from IIT Madras and a PhD in Biophysical Chemistry from the University of Florida, and has contributed 25+ patents and publications.",
    linkedin: "https://www.linkedin.com/in/ramanan-thirumoorthy-5b62b112/",
    image: "/team/ramanan.png",
    alignRight: false,
    logos: [
      { name: "UF", color: "text-orange-600 bg-orange-50 border-orange-100", icon: GraduationCap },
      { name: "IIT Madras", color: "text-amber-800 bg-amber-50 border-amber-100", icon: GraduationCap },
      { name: "University at Buffalo", color: "text-blue-800 bg-blue-50 border-blue-100", icon: GraduationCap },
      { name: "LAURUS Bio", color: "text-teal-600 bg-teal-50 border-teal-100", icon: Leaf }
    ]
  }
];

const advisors = [
  {
    name: "Jay Shetty",
    bio: "President, JayNzyme | Former Research Head, Miles/Solvay Enzymes | Former Vice President and Head, Global Grain Enzymes Applications, GENENCOR | DUPONT | DANISCO",
    linkedin: "https://www.linkedin.com/in/jay-shetty-67104a3/",
    image: "/advisors/jayshetty.png",
    logos: ["Solvay", "Danisco", "Genencor", "Dupont"]
  },
  {
    name: "Dr. Ulrich F. Tillmann",
    bio: "Former Global Product Manager, Merck KGaA | Cell culture supplements expert",
    linkedin: "https://www.linkedin.com/in/ulrich-tillmann-5b5b21/",
    image: "/advisors/ulrich.png",
    logos: ["Merck"]
  },
  {
    name: "Richard LaDuca",
    bio: "Former Senior Director, Technology/Business Development, DUPONT | GENENCOR",
    linkedin: "https://www.linkedin.com/in/richard-laduca-a61b3b/",
    image: "/advisors/richard.png",
    logos: ["Genencor", "Dupont"]
  }
];

export function TeamExpertiseSection() {
  return (
    <section id="team" className="relative py-24 md:py-32 overflow-hidden bg-white text-ink">
      
      {/* Background glow decoration */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-accent-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 space-y-32">
        
        {/* ================= FOUNDERS SECTION ================= */}
        <div className="space-y-16">
          
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="font-ui text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#315cff] via-[#9b3dff] to-[#f05fc7] inline-block relative pb-2">
              Founders
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#315cff] via-[#9b3dff] to-[#f05fc7]" />
            </h2>
          </div>

          {/* Founders List */}
          <div className="space-y-16">
            {founders.map((founder, index) => (
              <div key={founder.name} className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  
                  {/* Founder Photo */}
                  <div className={`lg:col-span-4 flex justify-center ${
                    founder.alignRight ? "lg:order-last" : ""
                  }`}>
                    <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Founder Details */}
                  <div className="lg:col-span-8 space-y-6">
                    
                    {/* Name + Linkedin */}
                    <div className="flex items-center gap-3">
                      <h3 className="font-ui text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#315cff] to-[#9b3dff]">
                        {founder.name}
                      </h3>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Role Title */}
                    <div>
                      <span className="font-ui text-xs font-bold tracking-widest text-slate-500 uppercase border-b border-[#9b3dff] pb-1">
                        {founder.role}
                      </span>
                    </div>

                    {/* Bio */}
                    <p className="font-ui font-light text-slate-600 leading-relaxed text-sm md:text-base">
                      {founder.bio}
                    </p>

                    {/* Associated Corporate Credentials */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-3">Associated Brands</div>
                      <div className="flex flex-wrap gap-2">
                        {founder.logos.map((logo) => {
                          const Icon = logo.icon;
                          return (
                            <span
                              key={logo.name}
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-ui font-medium ${logo.color}`}
                            >
                              <Icon size={12} className="opacity-80" />
                              {logo.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                </motion.div>

                {/* Separator line between founders */}
                {index < founders.length - 1 && (
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                )}
              </div>
            ))}
          </div>

        </div>

        {/* ================= ADVISORS SECTION ================= */}
        <div className="space-y-16 border-t border-slate-100 pt-20">
          
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="font-ui text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#315cff] via-[#9b3dff] to-[#f05fc7] inline-block relative pb-2">
              Advisors
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#315cff] via-[#9b3dff] to-[#f05fc7]" />
            </h2>
          </div>

          {/* Advisors Grid with vertical lines dividing columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-slate-200/80">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center space-y-6 px-8"
              >
                
                {/* Advisor Photo */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md border-2 border-white bg-slate-50">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Name + Linkedin */}
                <div className="flex items-center gap-2">
                  <h3 className="font-ui text-lg font-bold text-ink">
                    {advisor.name}
                  </h3>
                  <a
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 rounded bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <LinkedinIcon className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Bio Description */}
                <p className="font-ui font-light text-slate-500 leading-relaxed text-xs md:text-sm max-w-xs flex-1">
                  {advisor.bio}
                </p>

                {/* Logos / Brand text labels */}
                <div className="w-full pt-4 border-t border-slate-100/80 flex flex-wrap justify-center gap-1.5">
                  {advisor.logos.map((logo) => (
                    <span
                      key={logo}
                      className="text-[9px] font-mono font-bold tracking-wider uppercase bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded"
                    >
                      {logo}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
