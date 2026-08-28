"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks, siteConfig } from "@/lib/portfolio";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-300 ${
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur-md border-border"
          : "bg-background border-border/50"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[64px] md:h-[72px] max-w-[95vw] items-center justify-between gap-4"
      >
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Shrikant Bhojane — Home"
        >
          <span className="text-[11px] font-bold tracking-[0.18em] leading-none text-muted-foreground group-hover:text-accent transition-colors hidden lg:block">
            2026 / PUNE
          </span>
          <span className="text-base md:text-lg font-bold tracking-tighter uppercase leading-none">
            SHRIKANT BHOJANE<span className="text-accent">.</span>
          </span>
          <span className="hidden md:inline-flex h-6 items-center border-2 border-border px-2 text-[10px] font-bold tracking-widest uppercase group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            FD — FS
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-2 bottom-1 h-[2px] scale-x-0 bg-accent transition-transform group-hover:scale-x-100 group-focus-visible:scale-x-100 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.resumeUrl}
            target={siteConfig.resumeUrl.startsWith("http") ? "_blank" : undefined}
            rel={siteConfig.resumeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            className="hidden md:inline-flex h-11 items-center justify-center border-2 border-accent bg-accent px-6 text-sm font-bold uppercase tracking-widest text-accent-foreground hover:scale-[1.02] active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex h-11 items-center justify-center border-2 border-border px-6 text-sm font-bold uppercase tracking-widest hover:border-foreground hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Hire Me
          </a>

          {/* Mobile menu button */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center border-2 border-border bg-background text-foreground hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[2px] w-5 bg-current transition-all ${isOpen ? "translate-y-[8px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[2px] w-5 bg-current transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`block h-[2px] w-5 bg-current transition-all ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute inset-x-0 top-[64px] md:top-[72px] border-b-2 border-border bg-background max-h-[calc(100dvh-64px)] overflow-y-auto"
          >
            <div className="mx-auto max-w-[95vw] py-8">
              <ul className="flex flex-col">
                {navigationLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border last:border-0"
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-6 text-4xl font-bold tracking-tighter uppercase hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
                    >
                      <span>{link.label}</span>
                      <span className="text-sm font-bold tracking-widest text-muted-foreground">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.resumeUrl}
                  onClick={() => setIsOpen(false)}
                  className="flex h-14 items-center justify-center border-2 border-accent bg-accent text-sm font-bold uppercase tracking-widest text-accent-foreground"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex h-14 items-center justify-center border-2 border-border text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                >
                  Hire Me
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
                <span className="border border-border px-3 py-1.5">FRESHER</span>
                <span className="border border-border px-3 py-1.5">FREELANCER</span>
                <span className="border border-border px-3 py-1.5">PUNE — 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
