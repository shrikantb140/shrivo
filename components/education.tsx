"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education } from "@/lib/portfolio";

export function Education() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative border-b-2 border-border bg-muted/10 overflow-clip"
    >
      <div className="mx-auto max-w-[95vw] py-16 md:py-24 lg:py-32">
        <div className="flex flex-col gap-2 border-b-2 border-border pb-8 md:pb-12">
          <div className="flex items-baseline gap-4">
            <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground">05</span>
            <h2
              id="education-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none uppercase"
            >
              Education
            </h2>
          </div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
            EDUCATION / 05
          </p>
        </div>

        <div className="relative mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-border bg-background">
          {/* Timeline accent */}
          <div className="hidden lg:block absolute left-[48px] top-0 bottom-0 w-[2px] bg-border" aria-hidden="true" />

          {/* Left timeline content */}
          <div className="lg:col-span-8 p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-10">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-2 border-accent bg-accent text-accent-foreground text-sm font-bold">
                ◆
              </span>
              <div className="h-[2px] flex-1 bg-border" />
              <span className="border-2 border-border px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                {education.status}
              </span>
            </div>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: -12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
                2022 — 2026
              </p>
              <h3 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
                Computer
                <br />
                Science
              </h3>
              <p className="mt-4 text-lg md:text-xl font-bold uppercase tracking-tight text-muted-foreground">
                {education.university}
              </p>
              <div className="mt-6 inline-flex items-center gap-3 border-2 border-foreground bg-foreground text-background px-6 py-3">
                <span className="text-2xl font-bold tracking-tighter">{education.year}</span>
                <span className="text-xs font-bold tracking-widest uppercase opacity-80">
                  Expected
                  <br />
                  Graduation
                </span>
              </div>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-border">
              <div className="p-5 border-b-2 md:border-b-0 md:border-r-2 border-border">
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Degree
                </p>
                <p className="mt-2 font-bold uppercase">Bachelors</p>
              </div>
              <div className="p-5 border-b-2 md:border-b-0 md:border-r-2 border-border">
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Field
                </p>
                <p className="mt-2 font-bold uppercase">Computer Science</p>
              </div>
              <div className="p-5 bg-accent text-accent-foreground">
                <p className="text-xs font-bold tracking-widest uppercase opacity-70">Focus</p>
                <p className="mt-2 font-bold uppercase">Software Development</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No fabricated grades, scores, or certifications — verified academic details only.
            </p>
          </div>

          {/* Right poster */}
          <div className="lg:col-span-4 border-t-2 lg:border-t-0 lg:border-l-2 border-border bg-foreground text-background p-6 md:p-8 lg:p-10 flex flex-col">
            <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-60">Timeline</p>

            <div className="mt-8 space-y-8">
              <div className="flex gap-4">
                <span className="mt-1 h-3 w-3 shrink-0 bg-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase">2022</p>
                  <p className="text-sm opacity-70">Started Computer Science</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="mt-1 h-3 w-3 shrink-0 border-2 border-background bg-transparent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase">2023 — 2025</p>
                  <p className="text-sm opacity-70">Frontend specialization & freelancing</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="mt-1 h-3 w-3 shrink-0 bg-accent animate-pulse" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase text-accent">
                    2026 — PRESENT
                  </p>
                  <p className="text-sm opacity-70">Expanding to full-stack & shipping projects</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-10">
              <div className="border-2 border-background/20 p-4">
                <p className="text-xs font-bold tracking-widest uppercase opacity-60">
                  Philosophy
                </p>
                <p className="mt-2 text-lg font-bold leading-tight">
                  Learn. Build. Iterate.
                  <br />
                  <span className="text-accent">Ship.</span>
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-6 block text-[6rem] font-bold leading-none tracking-tighter opacity-10"
              >
                05
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
