import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const timeline = [
  {
    icon: GraduationCap,
    title: "BSIT — Bachelor of Science in Information Technology",
    place: "University · Fresh Graduate",
    period: "2021 — 2025",
    desc: "Focused on full-stack web development, databases, and software engineering principles. Capstone project on a Laravel + React SaaS platform.",
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
    <section id="resume" className="section-padding relative bg-secondary/20">
      <SectionHeader
        eyebrow="Resume"
        title="My journey & skills"
        description="A snapshot of my education, experience, and what I bring to the table."
      />

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Timeline */}
        <div>
          <h3 className="mb-8 font-display text-xl font-semibold">Education & Experience</h3>
          <div className="relative space-y-8 border-l-2 border-border/60 pl-8">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-accent to-transparent -translate-x-[1px]" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[42px] flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <t.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-xl transition-all hover:border-primary/40">
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">{t.period}</div>
                  <h4 className="mt-2 font-display text-lg font-semibold">{t.title}</h4>
                  <div className="text-sm text-muted-foreground">{t.place}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="mb-8 font-display text-xl font-semibold">Skills & Proficiency</h3>
          <div className="space-y-6">
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
                  <span className="font-mono text-xs text-primary">{s.value}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
