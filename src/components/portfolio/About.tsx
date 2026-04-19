import { motion } from "framer-motion";
import { Lightbulb, Code2, Palette } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const stack = ["Laravel", "PHP", "MySQL", "Supabase", "SQLite", "JavaScript", "React", "Tailwind CSS", "TypeScript", "REST APIs"];

const cards = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Breaking down complex challenges into elegant, maintainable solutions.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing readable, scalable, and well-tested code that ages gracefully.",
  },
  {
    icon: Palette,
    title: "UI / UX Focus",
    desc: "Crafting interfaces that feel intuitive, responsive, and delightful.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <SectionHeader
        eyebrow="About Me"
        title="A passionate developer building the web"
        description="I'm a fresh BSIT graduate with a love for clean architecture, fast UIs, and pragmatic engineering. I build SaaS products, internal tools, and APIs that scale."
      />

      {/* Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-lg border border-border/60 bg-card/50 px-3.5 py-1.5 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-all hover:border-primary/60 hover:text-primary hover:shadow-glow"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card p-7 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-elegant"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
