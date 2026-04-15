import { motion } from "framer-motion";

function PortfolioScroller({ items }) {
  return (
    <>
      {/* Versión móvil: Grid responsivo */}
      <div className="grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 xl:hidden">
        {items.map((item, index) => (
          <motion.article
            key={`mobile-${item.title}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy p-6 text-white shadow-glow"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,199,161,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(92,167,199,0.2),transparent_35%)]" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                {item.label}
              </span>
              <h3 className="mt-6 font-display text-xl sm:text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Versión desktop: Scroll horizontal mejorado */}
      <div className="hidden xl:block">
        <div className="relative">
          {/* Gradientes de fade en los extremos */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent" />
          
          {/* Contenedor scroll con mejor styling */}
          <div className="no-scrollbar overflow-x-auto px-8">
            <div className="flex gap-6 pb-6" style={{width: 'max-content'}}>
              {items.map((item, index) => (
                <motion.article
                  key={`desktop-${item.title}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative w-[360px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy p-8 text-white shadow-glow hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,199,161,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(92,167,199,0.2),transparent_35%)] group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="relative">
                    <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 group-hover:bg-white/20 transition-colors duration-300">
                      {item.label}
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold group-hover:text-cyan-100 transition-colors duration-300">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/75 group-hover:text-white/90 transition-colors duration-300">{item.summary}</p>
                  </div>
                  
                  {/* Borde animado en hover */}
                  <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-cyan-400/30 transition-colors duration-500" />
                </motion.article>
              ))}
            </div>
          </div>
          
          {/* Indicadores de scroll */}
          <div className="flex justify-center mt-4 gap-2">
            {items.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-brand-navy/20" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioScroller;
