"use client";

import * as React from "react";

interface MarqueeProps {
  items: string[];
  speed?: "fast" | "slow" | "normal";
  direction?: "left" | "right";
  variant?: "accent" | "outline" | "muted";
  className?: string;
  ariaLabel?: string;
}

export function Marquee({
  items,
  speed = "normal",
  direction = "left",
  variant = "muted",
  className = "",
  ariaLabel,
}: MarqueeProps) {
  const duplicated = [...items, ...items, ...items, ...items];

  const speedClass =
    speed === "fast"
      ? "animate-marquee-fast"
      : speed === "slow"
        ? "animate-marquee-slow"
        : "animate-marquee";

  const directionClass =
    direction === "right" ? "animate-marquee-reverse" : "";

  const variantClasses = {
    accent: "bg-accent text-accent-foreground border-y-2 border-accent",
    outline: "bg-background text-foreground border-y-2 border-border",
    muted: "bg-muted text-foreground border-y-2 border-border",
  }[variant];

  return (
    <div
      role="marquee"
      aria-label={ariaLabel}
      aria-hidden={false}
      className={`relative flex overflow-hidden select-none ${variantClasses} ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-8 py-4 will-change-transform ${speedClass} ${directionClass} motion-reduce:animate-none`}
      >
        {duplicated.map((item, i) => (
          <React.Fragment key={`${item}-${i}`}>
            <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest uppercase whitespace-nowrap">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 bg-current opacity-60"
            />
          </React.Fragment>
        ))}
      </div>
      {/* Duplicate for seamless loop - hidden from screen readers */}
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-8 py-4 will-change-transform ${speedClass} ${directionClass} motion-reduce:animate-none`}
      >
        {duplicated.map((item, i) => (
          <React.Fragment key={`${item}-dup-${i}`}>
            <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="h-2 w-2 shrink-0 bg-current opacity-60" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export function InlineMarquee({
  text,
  repeat = 6,
  className = "",
}: {
  text: string;
  repeat?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden border-y-2 border-border bg-background ${className}`}
    >
      <div className="flex animate-marquee whitespace-nowrap will-change-transform motion-reduce:animate-none">
        {Array.from({ length: repeat }).map((_, i) => (
          <span
            key={i}
            className="px-6 py-3 text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground"
          >
            {text} <span className="mx-6 text-accent">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
