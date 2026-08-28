"use client";

import { services } from "@/lib/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { marqueePhilosophy } from "@/lib/portfolio";

export function Services() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative border-b-2 border-border bg-background overflow-clip"
    >
      <div className="mx-auto max-w-[95vw] py-16 md:py-24">
        <div className="flex flex-col gap-2 border-b-2 border-border pb-8 md:pb-12">
          <div className="flex items-baseline gap-4">
            <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground">04</span>
            <h2
              id="services-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none uppercase"
            >
              Services
            </h2>
          </div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
            SERVICES / 04 — WHAT I CAN BUILD FOR YOU
          </p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`group relative flex flex-col p-8 md:p-10 border-border bg-background hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors duration-300
                ${i % 2 === 0 ? "md:border-r-2" : ""}
                ${i < 3 ? "border-b-2 lg:border-b-2" : "border-b-2 md:border-b-0"}
                ${i === 2 ? "md:col-span-2 lg:col-span-1 lg:border-r-0" : ""}
                ${i === 3 ? "lg:border-r-2 lg:border-b-0" : ""}
                ${i === 4 ? "md:col-span-2 lg:col-span-2 lg:border-b-0" : ""}
              `}
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-6xl md:text-7xl font-bold tracking-tighter leading-none text-muted/30 group-hover:text-accent-foreground/30 transition-colors">
                  {service.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-10 w-10 border-2 border-border group-hover:border-accent-foreground/30 flex items-center justify-center text-lg group-hover:rotate-45 transition-all duration-300"
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-none">
                {service.title}
              </h3>

              <p className="mt-4 text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-90">
                {service.description}
              </p>

              <div className="mt-6 h-[2px] w-12 bg-border group-hover:bg-accent-foreground/40 group-hover:w-20 transition-all duration-300" />

              {/* Bottom accent */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="border-2 border-border p-4 flex items-center gap-3">
            <span className="h-2 w-2 bg-accent shrink-0" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Fast Delivery
            </span>
          </div>
          <div className="border-2 border-border p-4 flex items-center gap-3">
            <span className="h-2 w-2 bg-accent shrink-0" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Responsive & Accessible
            </span>
          </div>
          <div className="border-2 border-accent bg-accent text-accent-foreground p-4 flex items-center gap-3">
            <span className="h-2 w-2 bg-accent-foreground shrink-0" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase">Freelance Ready</span>
          </div>
        </div>
      </div>

      <Marquee
        items={marqueePhilosophy}
        speed="slow"
        variant="muted"
        ariaLabel="Philosophy marquee"
      />
    </section>
  );
}
