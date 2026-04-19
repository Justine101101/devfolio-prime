import { motion } from "framer-motion";
import { Code, Server, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "End-to-end web apps built with Laravel and React. Fast, responsive, and production-ready.",
    items: ["SPA & SSR", "Auth & roles", "Payments", "Deploy & CI"],
  },
  {
    icon: Server,
    title: "API Development",
    desc: "Clean, documented REST APIs with proper validation, auth, and versioning.",
    items: ["REST & JSON", "OpenAPI docs", "Rate limiting", "Webhooks"],
  },
  {
    icon: Sparkles,
    title: "UI / UX Design",
    desc: "Pixel-perfect interfaces designed in Figma and built with Tailwind for a premium feel.",
    items: ["Design systems", "Prototyping", "Responsive", "Accessibility"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative bg-secondary/20">
      <SectionHeader
        eyebrow="Services"
        title="What I do best"
        description="From concept to deploy — I deliver products that look great and scale beautifully."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-elegant"
          >
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <ul className="mt-6 space-y-2 border-t border-border/40 pt-5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
