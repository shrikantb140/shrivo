"use client";

import { siteConfig } from "@/lib/portfolio";
import { motion, useReducedMotion } from "framer-motion";

export function ResumeCta() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      aria-labelledby="resume-heading"
      className="relative border-b-2 border-border bg-accent text-accent-foreground overflow-clip"
    >
      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-[95vw] py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-70">
              RESUME — DOWNLOAD & EXPLORE
            </p>
            <h2
              id="resume-heading"
              className="mt-4 text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85]"
            >
              Let&apos;s Build
              <br />
              Something
              <br />
              <span className="bg-background text-foreground px-2">Useful.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed opacity-80">
              Explore my resume, skills and development journey.
              <br />
              Open to freelance, internships and entry-level roles.
            </p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <a
              href={siteConfig.resumeUrl}
              target={siteConfig.resumeUrl.startsWith("http") ? "_blank" : undefined}
              rel={siteConfig.resumeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex h-16 items-center justify-center gap-3 border-2 border-background bg-background text-foreground px-8 text-base font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              <span>Download Resume</span>
              <span className="h-8 w-8 border-2 border-foreground flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-colors">
                ↓
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex h-14 items-center justify-center border-2 border-background/30 bg-transparent px-8 text-sm font-bold uppercase tracking-widest hover:bg-background hover:text-foreground hover:border-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            >
              View Selected Work
            </a>
           
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-background/20">
          <div className="border-r-2 border-background/20 p-4 md:p-6">
            <p className="text-3xl md:text-4xl font-bold tracking-tighter">03+</p>
            <p className="text-xs font-bold tracking-widest uppercase opacity-70">Projects</p>
          </div>
          <div className="border-r-2 border-background/20 p-4 md:p-6">
            <p className="text-3xl md:text-4xl font-bold tracking-tighter">8+</p>
            <p className="text-xs font-bold tracking-widest uppercase opacity-70">Core Skills</p>
          </div>
          <div className="border-r-2 border-background/20 p-4 md:p-6">
            <p className="text-3xl md:text-4xl font-bold tracking-tighter">100%</p>
            <p className="text-xs font-bold tracking-widest uppercase opacity-70">Responsive</p>
          </div>
          <div className="p-4 md:p-6 bg-background text-foreground">
            <p className="text-3xl md:text-4xl font-bold tracking-tighter">2026</p>
            <p className="text-xs font-bold tracking-widest uppercase opacity-70">Ready</p>
          </div>
        </div>
      </div>
    </section>
  );
}
