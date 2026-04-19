import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-divider)" }} />

      {/* Big glowing gradient backdrop — Vercel CTA style */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build"
          highlight="something great."
          description="Have a project in mind, a role to discuss, or just want to say hi? Drop a message."
          align="center"
        />

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 lg:col-span-2"
          >
            <a href="mailto:hello@alexsmith.dev" className="group block card-elevated p-6 transition-all hover:border-white/20">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-primary" />
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Email</p>
              <p className="mt-1 font-display text-base font-semibold">hello@alexsmith.dev</p>
            </a>

            <div className="card-elevated p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Based</p>
              <p className="mt-1 font-display text-base font-semibold">Remote · Worldwide</p>
            </div>

            <div className="card-elevated p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Find me on</p>
              <div className="mt-4 flex gap-2">
                {[
                  { Icon: Github, href: "https://github.com" },
                  { Icon: Linkedin, href: "https://linkedin.com" },
                  { Icon: Twitter, href: "https://twitter.com" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-glow-soft"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card-elevated space-y-5 p-8 lg:col-span-3"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Name</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="h-11 rounded-lg border-white/[0.08] bg-background/40 backdrop-blur focus-visible:border-primary focus-visible:ring-primary/30"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Email</label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="h-11 rounded-lg border-white/[0.08] bg-background/40 backdrop-blur focus-visible:border-primary focus-visible:ring-primary/30"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Message</label>
              <Textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project…"
                className="rounded-lg border-white/[0.08] bg-background/40 backdrop-blur focus-visible:border-primary focus-visible:ring-primary/30"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="group h-12 w-full rounded-full bg-foreground text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.01] hover:bg-foreground/90"
            >
              {loading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
              ) : (
                <>Send Message <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></>
              )}
            </Button>
          </motion.form>
        </div>

        <div className="mt-24 border-t border-white/[0.06] pt-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} Alex Smith — Crafted with care
          </p>
        </div>
      </div>
    </section>
  );
};
