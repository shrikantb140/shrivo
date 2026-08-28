"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/lib/portfolio";
import { Marquee } from "@/components/ui/marquee";
import { marqueeTech } from "@/lib/portfolio";

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative border-b-2 border-border bg-background overflow-clip"
    >
      {/* Header */}
      <div className="mx-auto max-w-[95vw] py-16 md:py-24">
        <div className="flex flex-col gap-2 border-b-2 border-border pb-8 md:pb-12">
          <div className="flex items-baseline gap-4">
            <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground">02</span>
            <h2
              id="skills-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none uppercase"
            >
              Skills
            </h2>
          </div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
            SKILLS / 02 — WHAT I WORK WITH
          </p>
        </div>

        <div className="relative mt-8 md:mt-12">
          {/* Decorative */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 -top-10 hidden lg:block text-[12rem] font-bold leading-none tracking-tighter text-muted/10 select-none"
          >
            02
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-border">
            {/* Legend */}
            <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 border-b-2 border-border bg-muted/20 text-xs font-bold tracking-widest uppercase">
              <div className="border-r-2 border-border p-3 flex items-center gap-2">
                <span className="h-3 w-3 bg-accent border border-accent" aria-hidden="true" />
                Core — Daily Use
              </div>
              <div className="border-r-2 border-border p-3 flex items-center gap-2">
                <span className="h-3 w-3 bg-transparent border-2 border-border" aria-hidden="true" />
                Learning — Growing
              </div>
              <div className="hidden md:flex col-span-2 p-3 text-muted-foreground justify-end">
                Hover to inspect — kinetic rows
              </div>
            </div>

            {/* Skill groups */}
            {skillGroups.map((group, gi) => (
              <div
                key={group.title}
                className={`relative lg:col-span-6 ${gi % 2 === 0 ? "lg:border-r-2" : ""} border-b-2 border-border last:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b-0`}
              >
                <div className="flex items-center justify-between border-b border-border bg-muted/30 px-6 py-4">
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight flex items-center gap-3">
                    <span className="text-accent">◆</span> {group.title}
                  </h3>
                  <span
                    className={`text-[10px] font-bold tracking-[0.18em] uppercase px-2 py-1 border ${
                      group.variant === "core"
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-transparent text-muted-foreground border-border"
                    }`}
                  >
                    {group.label}
                  </span>
                </div>

                <ul className="divide-y divide-border">
                  {group.skills.map((skill, si) => (
                    <motion.li
                      key={skill}
                      initial={shouldReduceMotion ? undefined : { opacity: 0 }}
                      whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.04, duration: 0.3 }}
                      className="group relative flex items-center justify-between px-6 py-4 md:py-5 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-xs font-bold tracking-widest tabular-nums opacity-40 group-hover:opacity-100">
                          {(si + 1).toString().padStart(2, "0")}
                        </span>
                        <span className="text-base md:text-lg font-bold uppercase tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                          {skill}
                        </span>
                      </span>

                      <span className="flex items-center gap-3">
                        <span
                          className={`hidden md:inline text-xs font-bold tracking-widest uppercase opacity-60 group-hover:opacity-100 ${
                            group.variant === "core" ? "" : "italic"
                          }`}
                        >
                          {group.variant === "core" ? "CORE" : "LEARNING"}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-6 w-6 border border-current flex items-center justify-center text-xs opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all"
                        >
                          →
                        </span>
                      </span>

                      {/* hover line */}
                      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-[1px] bg-current opacity-0 group-hover:opacity-20" />
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="mt-4 text-xs md:text-sm text-muted-foreground max-w-3xl">
            Proficiency varies — core skills are used daily; full-stack items are actively being
            strengthened through projects and freelance work.
          </p>
        </div>
      </div>

      {/* Marquee strip */}
      <Marquee
        items={marqueeTech}
        speed="fast"
        variant="accent"
        ariaLabel="Technologies marquee"
        className="border-y-2"
      />
    </section>
  );
}
