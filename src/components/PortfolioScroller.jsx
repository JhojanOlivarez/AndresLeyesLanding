import { motion } from "framer-motion";

function PortfolioScroller({ items }) {
  return (
    <div className="no-scrollbar -mx-4 overflow-x-auto px-4">
      <div className="flex min-w-max gap-5 pb-3">
        {items.map((item, index) => (
          <motion.article
            key={`${item.title}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative w-[290px] overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy p-6 text-white shadow-glow sm:w-[340px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,199,161,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(92,167,199,0.2),transparent_35%)]" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                {item.label}
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default PortfolioScroller;
