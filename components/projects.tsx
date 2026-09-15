"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/portfolio";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-labelledby="projects-heading"
      className="relative border-b-2 border-border bg-background"
    >
      <div className="mx-auto max-w-[95vw] py-16 md:py-24">
        <div className="flex flex-col gap-2 border-b-2 border-border pb-8 md:pb-12">
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground">03</span>
            <h2
              id="projects-heading"
              className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none uppercase"
            >
              Selected Work
            </h2>
            <span className="text-sm md:text-base font-bold tracking-widest uppercase text-accent border-2 border-accent px-3 py-1">
              03 — FEATURED
            </span>
          </div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
            PROJECTS / PLACEHOLDERS — REPLACE WITH REAL URLs WHEN READY
          </p>
        </div>

        {/* Projects list — editorial asymmetric */}
        <div className="mt-8 md:mt-12 flex flex-col gap-6 md:gap-8">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.article
                key={project.number}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.07 }}
                className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-border overflow-hidden bg-background hover:border-accent transition-colors duration-300 ${project.featured ? "lg:min-h-[420px]" : ""}`}
              >
                {/* Number + meta strip (mobile) */}
                <div className="lg:hidden flex items-center justify-between border-b-2 border-border bg-muted/30 px-4 py-3">
                  <span className="text-2xl font-bold tracking-tighter">{project.number}</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="bg-accent text-accent-foreground px-2 py-1 text-xs font-bold uppercase tracking-widest">
                      Featured
                    </span>
                  )}
                </div>

                {/* Left: content */}
                <div
                  className={`relative lg:col-span-7 flex flex-col p-6 md:p-8 lg:p-10 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* Desktop number */}
                  <div className="hidden lg:flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold tracking-tighter leading-none text-muted/40 group-hover:text-accent transition-colors">
                      {project.number}
                    </span>
                    <span className="h-[2px] w-12 bg-border group-hover:bg-accent transition-colors" />
                    <span className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="ml-auto bg-accent text-accent-foreground px-3 py-1 text-xs font-bold tracking-widest uppercase">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-widest group-hover:border-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      aria-label={`View ${project.title} on GitHub (placeholder)`}
                      className="inline-flex h-11 items-center justify-center border-2 border-border px-6 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      GitHub ↗
                    </a>
                    <a
                      href={project.liveUrl}
                      aria-label={`View ${project.title} live demo (placeholder)`}
                      className="inline-flex h-11 items-center justify-center bg-foreground text-background border-2 border-foreground px-6 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>

                {/* Right: preview */}
                <div
                  className={`relative lg:col-span-5 min-h-[280px] md:min-h-[360px] lg:min-h-0 border-t-2 lg:border-t-0 ${isEven ? "lg:border-l-2 lg:order-2" : "lg:border-r-2 lg:order-1"} border-border bg-muted overflow-hidden`}
                >
                  {/* Placeholder poster preview */}
                  <div className="absolute inset-0 flex flex-col">
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-muted">
                      <div className="flex justify-between items-start">
                        <span className="border-2 border-border bg-background px-3 py-1 text-xs font-bold uppercase tracking-widest">
                          Preview — {project.number}
                        </span>
                        <span className="h-8 w-8 border-2 border-border bg-background flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-colors">
                          ↗
                        </span>
                      </div>

                      <div className="mt-8">
                        <p className="text-5xl md:text-6xl font-bold tracking-tighter leading-none uppercase opacity-10">
                          {project.number}
                        </p>
                        <p className="text-lg font-bold uppercase tracking-tight mt-2">
                          {project.title}
                        </p>
                        <div className="mt-4 h-2 w-full bg-border overflow-hidden">
                          <div className="h-full w-2/3 bg-accent group-hover:w-full transition-all duration-500" />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mt-6">
                        <img src={project.image} alt="" className="w-full absolute top-0 left-0 object-cover" />
                        <div className="h-20 border-2 border-border bg-background/50 group-hover:border-accent/10 transition-colors" />
                        <div className="h-20 border-2 border-border bg-background/50 group-hover:border-accent/10 transition-colors" />
                        <div className="h-20 border-2 border-foreground bg-foreground group-hover:bg-accent group-hover:border-accent transition-colors" />
                      </div>
                    </div>
                    <div className="border-t-2 border-border bg-background px-4 py-3 flex items-center justify-between text-xs font-bold tracking-widest uppercase">
                      <span className="text-muted-foreground"></span>
                      <span className="text-accent">◆ {project.category}</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-accent/10 transition-opacity duration-300" />

                  {/* Image reveal scale */}
                  <div className="absolute inset-0 -z-10 bg-muted group-hover:scale-[1.02] transition-transform duration-500 will-change-transform" />
                </div>

                {/* Bottom accent line on hover */}
                <div className="pointer-events-none absolute bottom-0 inset-x-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-2 border-border p-4 md:p-6 bg-muted/20">
          <a
            href="#contact"
            className="shrink-0 inline-flex h-11 items-center justify-center border-2 border-foreground bg-foreground text-background px-6 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
          >
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  );
}
