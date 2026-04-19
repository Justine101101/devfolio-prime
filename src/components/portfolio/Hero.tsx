import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROLES = [
  "Full-Stack Developer",
  "Laravel Specialist",
  "React Engineer",
  "API Developer",
];

const LOGOS = ["Laravel", "React", "TypeScript", "Tailwind", "Supabase", "MySQL", "Node.js", "PostgreSQL", "Vite", "Figma"];

interface HeroProps {
  onNavigate: (id: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Layered backgrounds: grid + radial glow + aurora */}
      <div className="absolute inset-0 bg-grid bg-grid-fade" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

      {/* Aurora orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
        <div className="h-[600px] w-[1000px] rounded-full bg-primary/20 blur-[120px] animate-aurora" />
      </div>
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[100px] animate-aurora" style={{ animationDelay: "5s" }} />

      {/* Top-right corner badge — like Vercel */}
      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); onNavigate("contact"); }}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl transition-all hover:border-white/20 hover:text-foreground"
        >
          <Sparkles className="h-3 w-3 text-primary" />
          Now booking Q2 2026
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span>Available for new opportunities</span>
          <span className="text-border">•</span>
          <span className="text-foreground/80">Remote worldwide</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-balance md:text-7xl lg:text-[5.5rem]"
        >
          <span className="text-gradient">Building products </span>
          <span className="text-gradient-primary">developers love.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl"
        >
          Hi, I'm <span className="font-semibold text-foreground">Alex Smith</span> — a fresh BSIT
          graduate crafting fast, beautiful, production-grade web apps with Laravel, React, and modern APIs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-7 flex items-center gap-2 font-mono text-sm text-muted-foreground md:text-base"
        >
          <span className="text-primary">$</span>
          <span className="text-foreground">{text}</span>
          <span className="ml-0.5 inline-block h-4 w-[2px] bg-primary animate-blink md:h-5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            size="lg"
            onClick={() => onNavigate("portfolio")}
            className="group h-12 rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/90"
          >
            View Projects
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-white/15 bg-white/[0.03] px-7 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
          >
            <Download className="mr-1.5 h-4 w-4" />
            Download Resume
          </Button>
        </motion.div>
      </div>

      {/* Trust bar — Vercel/Linear style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 pb-16"
      >
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
          Built with the modern stack
        </p>
        <div className="marquee overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 pr-12">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div key={i} className="flex items-center text-base font-display font-semibold text-muted-foreground/70 transition-colors hover:text-foreground md:text-lg">
                {l}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
