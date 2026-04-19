import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
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
}

const projects: Project[] = [
  {
    title: "Analytics Dashboard",
    category: "Web App",
    image: p1,
    stack: ["React", "Laravel", "MySQL"],
    description: "A real-time analytics dashboard for SaaS metrics with charting and insight generation.",
    features: ["Live charts", "Custom date ranges", "Export to CSV", "Role-based access"],
  },
  {
    title: "FitTrack Mobile",
    category: "Mobile",
    image: p2,
    stack: ["React Native", "Supabase"],
    description: "Cross-platform fitness tracker with workouts, history, and social challenges.",
    features: ["Workout library", "Progress charts", "Friends & sharing", "Offline mode"],
  },
  {
    title: "Lumen E-commerce",
    category: "Web App",
    image: p3,
    stack: ["Laravel", "React", "Stripe"],
    description: "Modern e-commerce storefront with cart, checkout, and admin order management.",
    features: ["Stripe payments", "Admin panel", "Inventory mgmt", "Email notifications"],
  },
  {
    title: "Calkion Brand Identity",
    category: "Branding",
    image: p4,
    stack: ["Figma", "Illustrator"],
    description: "Complete brand identity system including logo, stationery, and guidelines.",
    features: ["Logo system", "Color palette", "Typography", "Brand book"],
  },
  {
    title: "Design System Kit",
    category: "UI/UX",
    image: p5,
    stack: ["Figma", "Tailwind"],
    description: "A reusable component library and design system for SaaS products.",
    features: ["100+ components", "Dark mode", "Accessibility", "Tokens"],
  },
  {
    title: "API Developer Hub",
    category: "Web App",
    image: p6,
    stack: ["Laravel", "OpenAPI", "React"],
    description: "Developer portal with interactive API docs, playgrounds, and SDK downloads.",
    features: ["Interactive docs", "Auth keys", "Sandbox", "Versioning"],
  },
];

export const Portfolio = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding relative">
      <SectionHeader
        eyebrow="Portfolio"
        title="Selected work"
        description="A curated collection of projects spanning web, mobile, and design."
      />

      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              filter === f
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-primary shadow-glow"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.button
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelected(p)}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card text-left transition-all duration-500 hover:border-primary/60 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex translate-y-4 flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md bg-primary/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View Details <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{p.category}</div>
                <h3 className="mt-1.5 font-display text-lg font-semibold">{p.title}</h3>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl border-border/60 bg-card/95 p-0 backdrop-blur-2xl">
          {selected && (
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{selected.category}</div>
                <DialogTitle className="mt-2 font-display text-3xl font-bold">{selected.title}</DialogTitle>
                <DialogDescription className="mt-3 text-base text-muted-foreground">
                  {selected.description}
                </DialogDescription>

                <div className="mt-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tech Used</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map((s) => (
                      <span key={s} className="rounded-lg border border-border/60 bg-secondary/50 px-3 py-1 text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Features</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
