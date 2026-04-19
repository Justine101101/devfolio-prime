import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, Github, Linkedin, Twitter } from "lucide-react";
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
    <section id="contact" className="section-padding relative">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something great"
        description="Have a project in mind, a role to discuss, or just want to say hi? Drop a message."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="rounded-2xl border border-border/60 bg-gradient-card p-7 backdrop-blur-xl">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</p>
            <a href="mailto:hello@alexsmith.dev" className="mt-1 block text-base font-medium text-foreground transition-colors hover:text-primary">
              hello@alexsmith.dev
            </a>
          </div>

          <div className="rounded-2xl border border-border/60 bg-gradient-card p-7 backdrop-blur-xl">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Location</p>
            <p className="mt-1 text-base font-medium">Available worldwide · Remote</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-gradient-card p-7 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Find me on</p>
            <div className="mt-4 flex gap-3">
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
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-secondary/50 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
                >
                  <Icon className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-2xl border border-border/60 bg-gradient-card p-8 backdrop-blur-xl space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className="h-12 rounded-xl border-border/60 bg-background/40 backdrop-blur focus-visible:border-primary focus-visible:ring-primary/30"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <Input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className="h-12 rounded-xl border-border/60 bg-background/40 backdrop-blur focus-visible:border-primary focus-visible:ring-primary/30"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <Textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project…"
              className="rounded-xl border-border/60 bg-background/40 backdrop-blur focus-visible:border-primary focus-visible:ring-primary/30"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="group h-12 w-full rounded-xl bg-gradient-primary text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)]"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </motion.form>
      </div>

      <div className="mt-20 border-t border-border/40 pt-8 text-center text-xs text-muted-foreground">
        Designed & built with care · © {new Date().getFullYear()} Alex Smith
      </div>
    </section>
  );
};
