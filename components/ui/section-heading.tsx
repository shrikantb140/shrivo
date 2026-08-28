"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "right";
  className?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`relative border-b-2 border-border py-8 md:py-12 ${className}`}
    >
      <div
        className={`flex flex-col md:flex-row md:items-end gap-4 md:gap-8 ${align === "right" ? "md:justify-end md:text-right" : ""}`}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-baseline gap-4"
        >
          <span
            aria-hidden="true"
            className="text-sm font-bold tracking-[0.2em] text-muted-foreground"
          >
            {number}
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.85] uppercase">
            {title}
          </h2>
        </motion.div>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base tracking-widest uppercase text-muted-foreground font-medium max-w-md"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export function DisplayHeading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}) {
  return (
    <Tag
      className={`font-bold uppercase tracking-tighter leading-[0.85] ${className}`}
    >
      {children}
    </Tag>
  );
}
