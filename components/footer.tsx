import { siteConfig } from "@/lib/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t-2 border-border bg-foreground text-background overflow-clip">
      {/* Giant background type */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden select-none"
      >
        <p className="text-[18vw] font-bold leading-none tracking-tighter whitespace-nowrap opacity-[0.04] translate-y-[14%]">
          SHRIKANT BHOJANE
        </p>
      </div>

      <div className="relative mx-auto max-w-[95vw] py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-6">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none">
              Shrikant
              <br />
              Bhojane<span className="text-accent">.</span>
            </p>
            <p className="mt-3 inline-flex border-2 border-background/20 px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase">
              Frontend Developer — Fresher + Freelancer
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-70">
              Building from frontend to full-stack. Available for freelance, internships and
              entry-level roles. Pune, India — 2026.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-50">
                Navigate
              </p>
              <ul className="mt-4 space-y-3 text-sm font-bold uppercase tracking-wide">
                <li>
                  <a href="#work" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-50">Connect</p>
              <ul className="mt-4 space-y-3 text-sm font-bold uppercase tracking-wide">
                <li>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
                  >
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
                  >
                    X / Twitter ↗
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
                  >
                    Email ↗
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-50">Get in touch</p>
              <div className="mt-4 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-sm font-bold break-all hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.resumeUrl}
                  target={siteConfig.resumeUrl.startsWith("http") ? "_blank" : undefined}
                  rel={siteConfig.resumeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-11 items-center justify-center bg-accent text-accent-foreground border-2 border-accent px-6 text-xs font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
                >
                  Resume ↓
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t-2 border-background/10 pt-6 text-xs font-bold tracking-widest uppercase">
          <p className="opacity-60">
            © {year} Shrikant Bhojane. Built with Next.js, Tailwind & Framer Motion. No templates.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="border border-background/20 px-3 py-1.5">Kinetic Typography</span>
            <span className="border border-background/20 px-3 py-1.5">Brutalist Editorial</span>
            <span className="border border-accent bg-accent text-accent-foreground px-3 py-1.5">
              Pune — India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
