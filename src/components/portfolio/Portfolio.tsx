import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const FILTERS = ["All", "Web App", "Mobile", "UI/UX", "Branding"] as const;
type Filter = typeof FILTERS[number];

interface Project {
  title: string;
  category: Exclude<Filter, "All">;
  image: string;
  stack: string[];
  description: string;
  features: string[];
  year: string;
}

const projects: Project[] = [
  { title: "Analytics Dashboard", category: "Web App", image: p1, stack: ["React", "Laravel", "MySQL"], description: "Real-time analytics dashboard for SaaS metrics with charting and insights.", features: ["Live charts", "Custom date ranges", "Export to CSV", "Role-based access"], year: "2025" },
  { title: "FitTrack Mobile", category: "Mobile", image: p2, stack: ["React Native", "Supabase"], description: "Cross-platform fitness tracker with workouts, history, and social challenges.", features: ["Workout library", "Progress charts", "Friends & sharing", "Offline mode"], year: "2025" },
  { title: "Lumen E-commerce", category: "Web App", image: p3, stack: ["Laravel", "React", "Stripe"], description: "Modern e-commerce storefront with cart, checkout, and admin order management.", features: ["Stripe payments", "Admin panel", "Inventory mgmt", "Email notifications"], year: "2024" },
  { title: "Calkion Identity", category: "Branding", image: p4, stack: ["Figma", "Illustrator"], description: "Complete brand identity system: logo, stationery, and guidelines.", features: ["Logo system", "Color palette", "Typography", "Brand book"], year: "2024" },
  { title: "Design System Kit", category: "UI/UX", image: p5, stack: ["Figma", "Tailwind"], description: "Reusable component library and design system for SaaS products.", features: ["100+ components", "Dark mode", "Accessibility", "Tokens"], year: "2024" },
  { title: "API Developer Hub", category: "Web App", image: p6, stack: ["Laravel", "OpenAPI", "React"], description: "Developer portal with interactive API docs, playgrounds, and SDK downloads.", features: ["Interactive docs", "Auth keys", "Sandbox", "Versioning"], year: "2025" },
];

export const Portfolio = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-divider)" }} />

      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected"
          highlight="work."
          description="A curated collection of projects spanning web, mobile, and design."
        />
      </div>

      {/* Filters */}
      <div className="mb-12 flex flex-wrap items-center gap-1 rounded-full border border-white/[0.06] bg-card/50 p-1 backdrop-blur-xl w-fit">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
              filter === f ? "text-background" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-foreground"
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.button
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelected(p)}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card text-left transition-all duration-500 hover:border-white/20"
            >
              {/* Image */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-80" />

                {/* Year tag top-right */}
                <div className="absolute top-3 right-3 rounded-full border border-white/10 bg-background/60 px-2.5 py-0.5 font-mono text-[10px] text-foreground/80 backdrop-blur-md">
                  {p.year}
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{p.category}</div>
                    <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl border-white/10 bg-card/95 p-0 backdrop-blur-2xl">
          {selected && (
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  <span>{selected.category}</span>
                  <span className="text-border">/</span>
                  <span className="text-muted-foreground">{selected.year}</span>
                </div>
                <DialogTitle className="mt-2 font-display text-3xl font-bold tracking-tight">{selected.title}</DialogTitle>
                <DialogDescription className="mt-3 text-base text-muted-foreground">
                  {selected.description}
                </DialogDescription>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Tech Used</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.stack.map((s) => (
                        <span key={s} className="rounded-md border border-white/10 bg-secondary px-2.5 py-1 font-mono text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Features</p>
                    <ul className="space-y-1.5">
                      {selected.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:scale-[1.02]">
                  Visit live project <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
