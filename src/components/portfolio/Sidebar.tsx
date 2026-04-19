import { useState } from "react";
import { Home, User, FileText, Briefcase, Wrench, Mail, Github, Linkedin, Facebook, Instagram, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { cn } from "@/lib/utils";

const nav = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "services", label: "Services", icon: Wrench },
  { id: "contact", label: "Contact", icon: Mail },
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
    <div className="flex h-full w-72 flex-col bg-sidebar border-r border-sidebar-border px-6 py-10">
      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-60 animate-glow-pulse" />
          <img
            src={profileImg}
            alt="Alex Smith"
            width={128}
            height={128}
            className="relative h-32 w-32 rounded-full object-cover border-2 border-primary/40 shadow-glow"
          />
        </div>
        <h1 className="mt-5 font-display text-xl font-bold tracking-tight">Alex Smith</h1>
        <p className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">
          Full-Stack Dev
        </p>

        <div className="mt-5 flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="group relative flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/50 border border-border/50 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
            >
              <s.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Nav */}
      <nav className="mt-12 flex-1">
        <ul className="space-y-1">
          {nav.map((item, i) => {
            const isActive = active === item.id;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              >
                <button
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    "group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute right-3 h-1.5 w-1.5 rounded-full bg-primary-foreground"
                    />
                  )}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Alex Smith
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
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/60"
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
