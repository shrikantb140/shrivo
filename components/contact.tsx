"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/portfolio";
import { motion } from "framer-motion";
import { Cossette_Texte } from "next/font/google";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("submitting");
    try {
      const formData = new FormData(form);
      formData.append("access_key", "8073dd5e-d5da-4218-8ef1-bf48ce5e56d9");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();

        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("idle");
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-b-2 border-border bg-background overflow-clip"
    >
      <div className="mx-auto max-w-[95vw] py-16 md:py-24 lg:py-32">
        <div className="flex flex-col gap-2 border-b-2 border-border pb-8 md:pb-12">
          <div className="flex items-baseline gap-4">
            <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground">06</span>
            <h2
              id="contact-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none uppercase"
            >
              Contact
            </h2>
          </div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
            CONTACT / 06 — LET&apos;S TALK
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mt-8 md:mt-12 border-2 border-border">
          {/* Left: editorial heading + info */}
          <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-border p-6 md:p-8 lg:p-10 flex flex-col">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
              Have a Project
              <br />
              <span className="bg-accent text-accent-foreground px-1">In Mind?</span>
            </h3>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;re a recruiter, client, or fellow builder — I&apos;d love to hear
              about your idea. Freelance, internships, or just a conversation about the web.
            </p>

            <div className="mt-8 space-y-0 border-2 border-border">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center justify-between p-4 border-b-2 border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
              >
                <span className="flex flex-col">
                  <span className="text-xs font-bold tracking-widest uppercase opacity-60">
                    Email
                  </span>
                  <span className="text-sm md:text-base font-bold tracking-tight break-all">
                    {siteConfig.email}
                  </span>
                </span>
                <span className="h-8 w-8 shrink-0 border-2 border-current flex items-center justify-center group-hover:rotate-45 transition-transform">
                  ↗
                </span>
              </a>

              <div className="grid grid-cols-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border-r-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                >
                  GitHub <span>↗</span>
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 hover:bg-foreground hover:text-background transition-colors text-xs font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                >
                  LinkedIn <span>↗</span>
                </a>
              </div>

              <div className="grid grid-cols-2 border-t-2 border-border">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border-r-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                >
                  Instagram <span>↗</span>
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 hover:bg-foreground hover:text-background transition-colors text-xs font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                >
                  X / Twitter <span>↗</span>
                </a>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 border-t-2 border-border">
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Phone
                </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-sm font-bold hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 border-2 border-accent bg-accent text-accent-foreground p-4">
              <p className="text-xs font-bold tracking-widest uppercase opacity-80">
                Response Time
              </p>
              <p className="mt-1 text-sm font-bold">Usually within 24 hours</p>
            </div>
          </div>

          {/* Right: form — brutalist bottom-border inputs */}
          <div className="lg:col-span-7 p-6 md:p-8 lg:p-10 bg-muted/5">
            <form onSubmit={handleSubmit} noValidate className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground group-focus-within:text-accent transition-colors"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="YOUR NAME"
                    className="mt-2 h-[56px] w-full bg-transparent border-b-2 border-border px-0 text-base md:text-lg font-bold uppercase placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground group-focus-within:text-accent transition-colors"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="YOUR@EMAIL.COM"
                    className="mt-2 h-[56px] w-full bg-transparent border-b-2 border-border px-0 text-base md:text-lg font-bold uppercase placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="project"
                  className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground group-focus-within:text-accent transition-colors"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  defaultValue=""
                  className="mt-2 h-[56px] w-full bg-transparent border-b-2 border-border px-0 text-base md:text-lg font-bold uppercase focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="" disabled>
                    SELECT A SERVICE
                  </option>
                  <option value="web-development">Web Development</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="portfolio">Portfolio / Business Website</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground group-focus-within:text-accent transition-colors"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                  className="mt-2 w-full bg-transparent border-b-2 border-border px-0 py-4 text-base md:text-lg font-bold uppercase placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors resize-none min-h-[120px]"
                />
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-14 items-center justify-center bg-accent border-2 border-accent px-10 text-sm font-bold uppercase tracking-widest text-accent-foreground hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background min-w-[200px]"
                >
                  {status === "submitting"
                    ? "Sending..."
                    : status === "success"
                      ? "Message Sent ✓"
                      : "Send Message →"}
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground max-w-xs">
                  By sending, you agree to be contacted about your project. No spam.
                </p>
              </div>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  aria-live="polite"
                  className="mt-4 border-2 border-accent bg-accent/10 px-4 py-3 text-sm font-bold"
                >
                  Thanks — I&apos;ll get back to you soon!
                </motion.p>
              )}
            </form>


          </div>
        </div>
      </div>
    </section>
  );
}
