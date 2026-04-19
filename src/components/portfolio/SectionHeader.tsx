import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ eyebrow, title, description }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="mb-16 max-w-2xl"
  >
    <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
      <span className="h-1 w-1 rounded-full bg-primary" />
      {eyebrow}
    </div>
    <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
      <span className="text-gradient">{title}</span>
    </h2>
    {description && (
      <p className="mt-5 text-base text-muted-foreground md:text-lg">{description}</p>
    )}
  </motion.div>
);
