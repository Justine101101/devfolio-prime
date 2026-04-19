import { useState } from "react";
import { Home, User, FileText, Briefcase, Wrench, Mail, Github, Linkedin, Facebook, Instagram, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { cn } from "@/lib/utils";

const nav = [
  { id: "home", label: "Home", icon: Home, num: "01" },
  { id: "about", label: "About", icon: User, num: "02" },
  { id: "resume", label: "Resume", icon: FileText, num: "03" },
  { id: "portfolio", label: "Portfolio", icon: Briefcase, num: "04" },
  { id: "services", label: "Services", icon: Wrench, num: "05" },
  { id: "contact", label: "Contact", icon: Mail, num: "06" },
];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

interface SidebarProps {
  active: string;
  onNavigate: (id: string) => void;
}

export const Sidebar = ({ active, onNavigate }: SidebarProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    onNavigate(id);
    setOpen(false);
  };

  const SidebarContent = (
    <div className="flex h-full w-72 flex-col border-r border-sidebar-border bg-sidebar px-6 py-10">
      {/* Logo mark */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-2.5"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow-soft">
          <span className="font-display text-sm font-bold text-primary-foreground">A</span>
        </div>
        <div>
          <div className="font-display text-sm font-bold leading-none">Alex Smith</div>
          <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Portfolio v2.0</div>
        </div>
      </motion.div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="card-elevated p-4"
      >
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-md opacity-50" />
            <img
              src={profileImg}
              alt="Alex Smith"
              width={48}
              height={48}
              className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
            />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-sidebar shadow-[0_0_8px_hsl(142_76%_50%)]" />
          </div>
          <div className="min-w-0">
            <div className="font-display text-sm font-semibold leading-tight">Alex Smith</div>
            <div className="text-[11px] text-muted-foreground">Full-Stack Dev</div>
          </div>
        </div>
      </motion.div>

      {/* Nav */}
      <nav className="mt-8 flex-1">
        <p className="mb-3 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Navigation</p>
        <ul className="space-y-0.5">
          {nav.map((item, i) => {
            const isActive = active === item.id;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
              >
                <button
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    "group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-white/[0.05] text-foreground"
                      : "text-muted-foreground hover:bg-white/[0.03] hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-bar"
                      className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                    />
                  )}
                  <span className="font-mono text-[10px] text-muted-foreground/60 group-hover:text-muted-foreground">{item.num}</span>
                  <item.icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Socials */}
      <div className="border-t border-sidebar-border pt-6">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Connect</p>
        <div className="flex gap-1.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:shadow-glow-soft"
            >
              <s.icon className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-[10px] text-muted-foreground">
          <span className="font-mono">© {new Date().getFullYear()}</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_hsl(142_76%_50%)]" />
            <span className="font-mono uppercase tracking-widest">Online</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-lg glass-strong lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Desktop fixed sidebar */}
      <aside className="fixed top-0 left-0 z-30 hidden h-screen lg:block">
        {SidebarContent}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 z-50 h-screen lg:hidden"
            >
              <div className="relative h-full">
                {SidebarContent}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05]"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
