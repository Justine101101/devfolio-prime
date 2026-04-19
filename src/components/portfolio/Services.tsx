import { motion } from "framer-motion";
import { Code, Server, Sparkles, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "End-to-end web apps built with Laravel and React. Fast, responsive, and production-ready.",
    items: ["SPA & SSR", "Auth & roles", "Payments", "Deploy & CI"],
    price: "from $1.5k",
  },
  {
    icon: Server,
    title: "API Development",
    desc: "Clean, documented REST APIs with proper validation, auth, and versioning.",
    items: ["REST & JSON", "OpenAPI docs", "Rate limiting", "Webhooks"],
    price: "from $1k",
  },
  {
    icon: Sparkles,
    title: "UI / UX Design",
    desc: "Pixel-perfect interfaces designed in Figma and built with Tailwind for a premium feel.",
    items: ["Design systems", "Prototyping", "Responsive", "Accessibility"],
    price: "from $800",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-divider)" }} />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 bg-primary/10 blur-[120px]" />

      <div className="relative">
        <SectionHeader
          eyebrow="Services"
          title="What I"
          highlight="do best."
          description="From concept to deploy — I deliver products that look great and scale beautifully."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-card p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-elegant"
            >
              <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-primary transition-all group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-glow-soft">
                    <s.icon className="h-[18px] w-[18px]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:rotate-12" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Starting</span>
                  <span className="font-display text-sm font-semibold text-foreground">{s.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
