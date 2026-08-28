"use client";

import { motion, useReducedMotion } from "framer-motion";

export function About() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      id="about"
      className="relative overflow-clip border-b-2 border-border bg-background"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[95vw] py-16 md:py-24 lg:py-32">
        <div className="flex flex-col gap-2 border-b-2 border-border pb-8 md:pb-12">
          <div className="flex items-baseline gap-4">
            <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground">
              01
            </span>
            <h2
              id="about-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none uppercase"
            >
              About
            </h2>
            <span
              aria-hidden="true"
              className="hidden md:block h-[3px] flex-1 max-w-[200px] bg-accent ml-4"
            />
          </div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
            ABOUT / 01 — WHO I AM
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 lg:gap-16 pt-8 md:pt-12">
          {/* Decorative 01 */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 right-0 hidden lg:block text-[12rem] xl:text-[16rem] font-bold leading-none tracking-tighter text-muted/10 select-none"
          >
            01
          </span>

          {/* Left: intro text */}
          <div className="relative">
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Frontend developer &{" "}
                <span className="bg-accent px-1 text-accent-foreground">Computer Science</span>{" "}
                student
                <br />
                building modern web experiences
                <br />
                <span className="text-muted-foreground">that are fast, accessible & alive.</span>
              </p>

              <div className="max-w-2xl border-l-2 border-accent pl-6">
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                  I&apos;m Shrikant — a fresher and freelancer focused on clean interfaces,
                  modern tooling, and learning relentlessly. I craft responsive, interactive
                  websites with React & Next.js, and I&apos;m steadily expanding toward{" "}
                  <span className="font-bold text-foreground">
                    full-stack development
                  </span>{" "}
                  with Node.js, APIs and databases.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="border-2 border-border bg-muted px-4 py-2 text-xs font-bold tracking-widest uppercase">
                  Clean Code
                </span>
                <span className="border-2 border-border bg-muted px-4 py-2 text-xs font-bold tracking-widest uppercase">
                  Responsive First
                </span>
                <span className="border-2 border-accent bg-accent text-accent-foreground px-4 py-2 text-xs font-bold tracking-widest uppercase">
                  Always Learning
                </span>
              </div>
            </motion.div>

            {/* Swiss quote block */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-border"
            >
              <div className="p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-border">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground">
                  Status
                </p>
                <p className="mt-3 text-lg font-bold uppercase tracking-tight">
                  Fresher + Freelancer
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Open to opportunities</p>
              </div>
              <div className="p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-border">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground">
                  Focus
                </p>
                <p className="mt-3 text-lg font-bold uppercase tracking-tight">
                  Frontend / Web Development
                </p>
                <p className="mt-2 text-sm text-muted-foreground">React · Next.js · Tailwind</p>
              </div>
              <div className="p-6 md:p-8 bg-accent text-accent-foreground">
                <p className="text-xs font-bold tracking-[0.18em] uppercase opacity-70">Goal</p>
                <p className="mt-3 text-lg font-bold uppercase tracking-tight">
                  Full-Stack Developer
                </p>
                <p className="mt-2 text-sm opacity-80">MERN · APIs · Systems</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Swiss poster meta */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="border-2 border-border p-6 md:p-8 bg-muted/30">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Currently
              </p>
              <ul className="mt-4 space-y-3 text-sm md:text-base font-medium">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                  <span>Building responsive interfaces with component-driven architecture</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                  <span>Learning backend patterns — REST, auth, databases</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                  <span>Available for freelance: landing pages, portfolios, business sites</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="border-2 border-border p-5">
                <p className="text-3xl font-bold tracking-tighter">2026</p>
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Graduation
                </p>
              </div>
              <div className="border-2 border-foreground bg-foreground text-background p-5">
                <p className="text-3xl font-bold tracking-tighter">PUNE</p>
                <p className="text-xs font-bold tracking-widest uppercase opacity-70">
                  Based in
                </p>
              </div>
            </div>

            <div className="border-2 border-border p-0 overflow-hidden">
              <div className="bg-foreground text-background px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase">
                Approach
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {["Iterate", "Ship", "Learn", "Refine", "Build"].map((w) => (
                  <span
                    key={w}
                    className="border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-widest"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
