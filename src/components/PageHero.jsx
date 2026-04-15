import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats = [],
  visual,
}) {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="section-shell relative grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="headline mt-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="copy mt-6 max-w-2xl"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            {primaryCta ? (
              <Link
                to={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-brand-navy px-7 py-4 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-1 hover:bg-brand-ink"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-brand-navy/15 bg-white/70 px-7 py-4 text-sm font-semibold text-brand-navy transition hover:-translate-y-1 hover:border-brand-cyan/50 hover:bg-white"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/30 to-brand-cyan/10" />
          <div className="relative">
            {visual ? (
              visual
            ) : (
              <div className="grid gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/60 bg-brand-navy p-6 text-white shadow-soft"
                  >
                    <div className="font-display text-4xl font-semibold">{stat.value}</div>
                    <p className="mt-3 text-sm leading-7 text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
