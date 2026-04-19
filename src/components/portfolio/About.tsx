import { motion } from "framer-motion";
import { Lightbulb, Code2, Palette, Zap, Shield, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const stack = [
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Language" },
  { name: "MySQL", category: "Database" },
  { name: "Supabase", category: "BaaS" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind", category: "Styling" },
  { name: "REST APIs", category: "Architecture" },
];

const cards = [
  { icon: Lightbulb, title: "Problem Solving", desc: "Breaking down complex challenges into elegant, maintainable solutions.", span: "md:col-span-2" },
  { icon: Code2, title: "Clean Code", desc: "Readable, scalable, well-tested code that ages gracefully.", span: "" },
  { icon: Palette, title: "UI / UX Focus", desc: "Interfaces that feel intuitive, responsive, and delightful.", span: "" },
  { icon: Zap, title: "Performance", desc: "Sub-100ms interactions and snappy load times by default.", span: "" },
  { icon: Shield, title: "Secure by Design", desc: "Auth, RLS, input validation, and OWASP best practices baked in.", span: "" },
  { icon: Rocket, title: "Ship Fast", desc: "MVP to production in days, not months. CI/CD ready.", span: "md:col-span-2" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-divider)" }} />

      <SectionHeader
        eyebrow="About"
        title="Engineered for"
        highlight="craft & scale."
        description="Fresh BSIT graduate with a love for clean architecture, fast UIs, and pragmatic engineering. I build SaaS products, internal tools, and APIs that scale."
      />

      {/* Bento grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-card p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-elegant ${c.span}`}
          >
            <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="relative">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-primary transition-all group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-glow-soft">
                <c.icon className="h-[18px] w-[18px]" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stack list — table style like Stripe */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Tech Stack</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">Tools I work with daily</h3>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-card backdrop-blur-xl">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex items-center justify-between border-b border-white/[0.04] px-6 py-4 transition-colors last:border-0 hover:bg-white/[0.02]"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted-foreground/60">0{i + 1}</span>
                <span className="font-display text-base font-semibold transition-colors group-hover:text-primary">{s.name}</span>
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.category}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
