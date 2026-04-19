import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const timeline = [
  {
    icon: GraduationCap,
    title: "BSIT — Bachelor of Science in Information Technology",
    place: "University · Fresh Graduate",
    period: "2021 — 2025",
    desc: "Focused on full-stack web development, databases, and software engineering. Capstone: a Laravel + React SaaS platform.",
  },
  {
    icon: Briefcase,
    title: "Freelance Full-Stack Developer",
    place: "Self-employed",
    period: "2023 — Present",
    desc: "Built and shipped client web apps using Laravel, React, and Tailwind. Designed REST APIs and managed deployments end-to-end.",
  },
];

const skills = [
  { name: "Laravel", value: 90 },
  { name: "React", value: 80 },
  { name: "SQL & Databases", value: 85 },
  { name: "API Integration", value: 88 },
  { name: "Tailwind CSS", value: 92 },
];

export const Resume = () => {
  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-divider)" }} />

      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative">
        <SectionHeader
          eyebrow="Resume"
          title="Journey &"
          highlight="proficiency."
          description="A snapshot of my education, experience, and what I bring to the table."
        />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Timeline */}
          <div>
            <div className="mb-8 flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Experience</h3>
              <div className="h-px w-12 bg-border" />
            </div>
            <div className="relative space-y-6 border-l border-dashed border-border pl-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-card shadow-glow-soft">
                    <t.icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="card-elevated p-6 transition-all hover:border-white/20">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{t.period}</div>
                    <h4 className="mt-2 font-display text-base font-semibold leading-snug">{t.title}</h4>
                    <div className="mt-1 text-sm text-muted-foreground">{t.place}</div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="mb-8 flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proficiency</h3>
              <div className="h-px w-12 bg-border" />
            </div>
            <div className="card-elevated space-y-6 p-7">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{s.value}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.2 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                      className="h-full rounded-full bg-gradient-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
