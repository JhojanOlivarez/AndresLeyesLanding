import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { brand } from "../data/siteData";

function ServicesHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats = [],
}) {
  return (
    <section className="relative overflow-hidden pt-16 min-h-[85vh] flex items-center justify-center">
      {/* Fondo radial sofisticado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)] z-0" />
      
      {/* Logo elaborado y sorprendente - extremo inferior izquierda */}
      
      {/* Múltiples círculos con efectos glow para el logo */}
      <div 
        className="pointer-events-none absolute left-[2%] bottom-[8%] w-[450px] h-[450px] rounded-full border-2 border-cyan-300/40 z-10 hidden lg:block animate-pulse"
        style={{boxShadow: '0 0 60px rgba(34, 211, 238, 0.4)'}}
      />
      <div 
        className="pointer-events-none absolute left-[2%] bottom-[8%] w-[400px] h-[400px] rounded-full border border-blue-400/50 z-10 hidden lg:block"
        style={{transform: 'translateX(25px) translateY(-25px)', boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)'}}
      />
      <div 
        className="pointer-events-none absolute left-[2%] bottom-[8%] w-[350px] h-[350px] rounded-full border border-white/30 z-10 hidden lg:block"
        style={{transform: 'translateX(50px) translateY(-50px)'}}
      />
      
      {/* Fondo circular con gradientes para el logo */}
      <div 
        className="pointer-events-none absolute left-[2%] bottom-[8%] w-[320px] h-[320px] rounded-full z-10 hidden lg:block"
        style={{
          transform: 'translateX(65px) translateY(-65px)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(59,130,246,0.2) 40%, rgba(34,211,238,0.15) 70%, transparent 100%)',
          boxShadow: 'inset 0 0 80px rgba(255,255,255,0.3), 0 0 100px rgba(59,130,246,0.3)'
        }}
      />
      
      {/* Logo principal - lado izquierdo */}
      <img
        src={brand.logo}
        alt="Logo overlay"
        className="pointer-events-none select-none absolute left-[2%] bottom-[8%] w-[280px] max-w-[38vw] z-20 object-contain hidden lg:block"
        style={{
          filter: 'contrast(1.3) saturate(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 30px rgba(34,211,238,0.8)) drop-shadow(0 0 50px rgba(59,130,246,0.6))',
          transform: 'translateX(90px) translateY(-90px)',
          animation: 'logoGlow 3s ease-in-out infinite',
          opacity: '0.95'
        }}
      />
      
      {/* Partículas flotantes alrededor del logo */}
      <div className="pointer-events-none absolute left-[5%] bottom-[12%] w-3 h-3 rounded-full bg-cyan-300/80 z-15 hidden lg:block animate-bounce" style={{animationDelay: '0s', boxShadow: '0 0 10px rgba(34,211,238,0.8)'}} />
      <div className="pointer-events-none absolute left-[8%] bottom-[18%] w-2 h-2 rounded-full bg-blue-400/70 z-15 hidden lg:block animate-bounce" style={{animationDelay: '0.5s', boxShadow: '0 0 8px rgba(59,130,246,0.6)'}} />
      <div className="pointer-events-none absolute left-[3%] bottom-[22%] w-2 h-2 rounded-full bg-white/90 z-15 hidden lg:block animate-bounce" style={{animationDelay: '1s', boxShadow: '0 0 12px rgba(255,255,255,0.9)'}} />
      <div className="pointer-events-none absolute left-[12%] bottom-[15%] w-2 h-2 rounded-full bg-cyan-200/80 z-15 hidden lg:block animate-bounce" style={{animationDelay: '1.5s', boxShadow: '0 0 8px rgba(34,211,238,0.7)'}} />
      
      {/* Rayos de luz más intensos */}
      <div 
        className="pointer-events-none absolute left-[2%] bottom-[8%] w-[350px] h-[3px] z-10 hidden lg:block"
        style={{
          transform: 'translateX(100px) translateY(-100px) rotate(-45deg)',
          background: 'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.9) 50%, transparent 100%)',
          boxShadow: '0 0 20px rgba(34,211,238,0.7)'
        }}
      />
      <div 
        className="pointer-events-none absolute left-[2%] bottom-[8%] w-[300px] h-[2px] z-10 hidden lg:block"
        style={{
          transform: 'translateX(85px) translateY(-85px) rotate(30deg)',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
          boxShadow: '0 0 15px rgba(255,255,255,0.6)'
        }}
      />

      <div className="section-shell relative grid gap-16 py-12 lg:grid-cols-2 lg:items-center lg:py-20 z-20">
        {/* Columna izquierda: texto y CTA */}
        <div className="relative z-20 flex flex-col items-start justify-center space-y-8">
          <span className="eyebrow mb-0">{eyebrow}</span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="headline text-brand-navy drop-shadow-sm leading-[1.1]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="copy text-brand-slate text-lg leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
          
          {/* CTAs premium */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {primaryCta && (
              <Link
                to={primaryCta.href}
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-white font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm0 5.25h.007v.008H3.75V12zm0 5.25h.007v.008H3.75v-.008z" />
                </svg>
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center gap-3 rounded-2xl border-2 border-blue-500 px-8 py-4 text-blue-700 bg-white/90 backdrop-blur-sm font-semibold shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg>
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>

          {/* Stats si existen */}
          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200/60"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-brand-slate leading-5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
        
        {/* Columna derecha: Imagen FrameAndres con efectos premium */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-20 flex items-center justify-center"
        >
          <div className="relative group">
            {/* Efectos de fondo para la imagen */}
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-blue-400/20 via-cyan-300/15 to-blue-600/25 blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-white/60 to-cyan-100/40 group-hover:from-white/80 group-hover:to-cyan-100/60 transition-all duration-500" />
            
            {/* Frame decorativo */}
            <div className="absolute -inset-1 rounded-[2.5rem] border-2 border-gradient-to-br from-blue-300/50 to-cyan-400/50 animate-pulse" />
            
            {/* Imagen principal */}
            <img
              src="/media/FrameAndres.jpeg"
              alt="Andres Leyes - Servicios de Fisioterapia"
              className="relative rounded-[2.5rem] shadow-2xl object-cover w-full max-w-[520px] h-[600px] lg:h-[700px] border-4 border-white/60 group-hover:border-white/80 transition-all duration-500"
              style={{objectPosition: 'center center'}}
            />
            
            {/* Overlay con información */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-lg p-6 shadow-xl border border-white/50">
              <h3 className="font-display text-xl font-bold text-brand-navy mb-2">Andrés Leyes</h3>
              <p className="text-sm text-brand-slate">Especialista en Fisioterapia Clínica</p>
              <div className="flex gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-brand-slate">Disponible para consultas</span>
              </div>
            </div>
            
            {/* Elementos flotantes decorativos */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-bounce shadow-lg" />
            <div className="absolute -bottom-2 -left-3 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 animate-bounce shadow-lg" style={{animationDelay: '0.5s'}} />
            <div className="absolute top-1/4 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-white to-cyan-200 animate-pulse shadow-lg" style={{animationDelay: '1s'}} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesHero;