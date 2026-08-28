"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/portfolio";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 80]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -40]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 40]);

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Hero — Shrikant Bhojane, Frontend Developer"
      className="relative overflow-clip border-b-2 border-border bg-background"
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #3F3F46 1px, transparent 1px), linear-gradient(to bottom, #3F3F46 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={shouldReduceMotion ? undefined : { scale, opacity }}
        className="relative mx-auto max-w-[95vw] pt-[96px] md:pt-[112px]"
      >
        {/* Top meta bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-border py-4 text-xs font-bold tracking-[0.18em] uppercase">
          <div className="flex flex-wrap gap-2">
            <span className="border-2 border-border bg-muted px-3 py-1.5">Fresher</span>
            <span className="border-2 border-border bg-muted px-3 py-1.5">Freelancer</span>
            <span className="border-2 border-accent bg-accent text-accent-foreground px-3 py-1.5">
              Web Developer
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-muted-foreground">
            <span>Available for freelance — 2026</span>
            <span className="h-2 w-2 bg-accent animate-pulse" aria-hidden="true" />
            <span>Pune, India</span>
          </div>
        </div>

        {/* Giant typography */}
        <div className="relative py-8 md:py-12 lg:py-16">
          {/* Decorative large 01 */}
          <span
            aria-hidden="true"
            className="absolute right-0 top-4 md:top-8 text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tighter text-muted/20 select-none pointer-events-none"
          >
            01
          </span>

          <div className="relative">
            <motion.div style={shouldReduceMotion ? undefined : { x: xLeft }}>
              <h1 className="font-bold uppercase tracking-tighter leading-[0.8]">
                <span
                  className="block text-[clamp(3rem,12vw,14rem)]"
                  style={{ fontSize: "clamp(3rem, 12vw, 14rem)" }}
                >
                  SHRIKANT
                </span>
                <span
                  className="block text-accent text-[clamp(3rem,12vw,14rem)]"
                  style={{ fontSize: "clamp(3rem, 12vw, 14rem)" }}
                >
                  BHOJANE
                </span>
              </h1>
            </motion.div>

            {/* Role lockup */}
            <motion.div
              style={shouldReduceMotion ? undefined : { x: xRight }}
              className="mt-6 md:mt-8 flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12 border-t-2 border-border pt-6 md:pt-8"
            >
              <div className="shrink-0">
                <p className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none uppercase">
                  Frontend
                  <br />
                  <span className="text-muted-foreground">Developer</span>
                </p>
              </div>

              <div className="flex-1 lg:max-w-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-medium leading-snug">
                  Building digital experiences that{" "}
                  <span className="bg-accent px-1 font-bold text-accent-foreground">
                    move
                  </span>{" "}
                  — from frontend to full-stack.
                </p>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                  Computer Science student & freelancer crafting modern, responsive
                  and interactive web experiences.
                </p>
              </div>

              <div className="hidden lg:flex flex-col gap-2 text-xs font-bold tracking-widest uppercase">
                <span className="border-2 border-border px-4 py-2 text-center">EST. 2026</span>
                <span className="bg-foreground text-background px-4 py-2 text-center">
                  PUNE — INDIA
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              style={shouldReduceMotion ? undefined : { y }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#work"
                className="inline-flex h-14 items-center justify-center bg-accent border-2 border-accent px-8 text-sm font-bold uppercase tracking-widest text-accent-foreground hover:scale-[1.02] active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Projects →
              </a>
              <a
                href={siteConfig.resumeUrl}
                target={siteConfig.resumeUrl.startsWith("http") ? "_blank" : undefined}
                rel={siteConfig.resumeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-14 items-center justify-center border-2 border-border bg-transparent px-8 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Download Resume
              </a>
              <span className="hidden md:inline-flex items-center text-xs font-bold tracking-widest uppercase text-muted-foreground px-4">
                SCROLL ↓
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom stats bar — Swiss poster style */}
        <div className="grid grid-cols-3 border-t-2 border-border">
          <div className="border-r-2 border-border p-4 md:p-6">
            <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">03+</p>
            <p className="mt-1 text-xs font-bold tracking-widest uppercase text-muted-foreground">
              Projects Built
            </p>
          </div>
          <div className="border-r-2 border-border p-4 md:p-6">
            <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">100%</p>
            <p className="mt-1 text-xs font-bold tracking-widest uppercase text-muted-foreground">
              Responsive
            </p>
          </div>
          <div className="p-4 md:p-6 bg-accent text-accent-foreground">
            <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">∞</p>
            <p className="mt-1 text-xs font-bold tracking-widest uppercase">Learning</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
