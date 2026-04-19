import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ eyebrow, title, highlight, description, align = "left" }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`mb-20 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-xl`}>
      <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
      {eyebrow}
    </div>
    <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-balance md:text-5xl lg:text-6xl">
      <span className="text-gradient">{title}</span>
      {highlight && <> <span className="text-gradient-primary">{highlight}</span></>}
    </h2>
    {description && (
      <p className="mt-5 max-w-2xl text-base text-muted-foreground text-balance md:text-lg">
        {description}
      </p>
    )}
  </motion.div>
);
