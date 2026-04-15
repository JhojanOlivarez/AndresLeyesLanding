import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { brand } from "../data/siteData";

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
    <section className="relative overflow-hidden pt-16 min-h-[75vh] flex items-start justify-center">
      {/* Fondo radial y logo marca de agua a la izquierda con círculo */}
      <div className="absolute inset-0 bg-hero-radial z-0" />
      
      {/* Logo elaborado y sorprendente - extremo inferior derecha */}
      
      {/* Múltiples círculos con efectos glow para el logo */}
      <div 
        className="pointer-events-none absolute right-[2%] bottom-[8%] w-[450px] h-[450px] rounded-full border-2 border-cyan-300/40 z-10 hidden lg:block animate-pulse"
        style={{boxShadow: '0 0 60px rgba(34, 211, 238, 0.4)'}}
      />
      <div 
        className="pointer-events-none absolute right-[2%] bottom-[8%] w-[400px] h-[400px] rounded-full border border-blue-400/50 z-10 hidden lg:block"
        style={{transform: 'translateX(-25px) translateY(-25px)', boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)'}}
      />
      <div 
        className="pointer-events-none absolute right-[2%] bottom-[8%] w-[350px] h-[350px] rounded-full border border-white/30 z-10 hidden lg:block"
        style={{transform: 'translateX(-50px) translateY(-50px)'}}
      />
      
      {/* Fondo circular con gradientes para el logo MÁS VISIBLE */}
      <div 
        className="pointer-events-none absolute right-[2%] bottom-[8%] w-[320px] h-[320px] rounded-full z-10 hidden lg:block"
        style={{
          transform: 'translateX(-65px) translateY(-65px)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(59,130,246,0.2) 40%, rgba(34,211,238,0.15) 70%, transparent 100%)',
          boxShadow: 'inset 0 0 80px rgba(255,255,255,0.3), 0 0 100px rgba(59,130,246,0.3)'
        }}
      />
      
      {/* Logo principal SÚPER VISIBLE con efectos elaborados - NEGRO OSCURO */}
      <img
        src={brand.logo}
        alt="Logo overlay"
        className="pointer-events-none select-none absolute right-[2%] bottom-[8%] w-[280px] max-w-[38vw] z-20 object-contain hidden lg:block"
        style={{
          filter: 'contrast(1.3) saturate(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 30px rgba(34,211,238,0.8)) drop-shadow(0 0 50px rgba(59,130,246,0.6))',
          transform: 'translateX(-90px) translateY(-90px)',
          animation: 'logoGlow 3s ease-in-out infinite',
          opacity: '0.95'
        }}
      />
      
      {/* Partículas flotantes alrededor del logo MÁS BRILLANTES */}
      <div className="pointer-events-none absolute right-[5%] bottom-[12%] w-3 h-3 rounded-full bg-cyan-300/80 z-15 hidden lg:block animate-bounce" style={{animationDelay: '0s', boxShadow: '0 0 10px rgba(34,211,238,0.8)'}} />
      <div className="pointer-events-none absolute right-[8%] bottom-[18%] w-2 h-2 rounded-full bg-blue-400/70 z-15 hidden lg:block animate-bounce" style={{animationDelay: '0.5s', boxShadow: '0 0 8px rgba(59,130,246,0.6)'}} />
      <div className="pointer-events-none absolute right-[3%] bottom-[22%] w-2 h-2 rounded-full bg-white/90 z-15 hidden lg:block animate-bounce" style={{animationDelay: '1s', boxShadow: '0 0 12px rgba(255,255,255,0.9)'}} />
      <div className="pointer-events-none absolute right-[12%] bottom-[15%] w-2 h-2 rounded-full bg-cyan-200/80 z-15 hidden lg:block animate-bounce" style={{animationDelay: '1.5s', boxShadow: '0 0 8px rgba(34,211,238,0.7)'}} />
      
      {/* Rayos de luz MÁS INTENSOS */}
      <div 
        className="pointer-events-none absolute right-[2%] bottom-[8%] w-[350px] h-[3px] z-10 hidden lg:block"
        style={{
          transform: 'translateX(-100px) translateY(-100px) rotate(45deg)',
          background: 'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.9) 50%, transparent 100%)',
          boxShadow: '0 0 20px rgba(34,211,238,0.7)'
        }}
      />
      <div 
        className="pointer-events-none absolute right-[2%] bottom-[8%] w-[300px] h-[2px] z-10 hidden lg:block"
        style={{
          transform: 'translateX(-85px) translateY(-85px) rotate(-30deg)',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
          boxShadow: '0 0 15px rgba(255,255,255,0.6)'
        }}
      />
      <div className="section-shell relative grid gap-12 py-12 lg:grid-cols-2 lg:items-start lg:py-16 z-20">
        {/* Columna izquierda: texto y botones minimalistas */}
        <div className="relative z-20 flex flex-col items-start justify-start space-y-6" style={{paddingTop: '1rem'}}>
          <span className="eyebrow mb-0">{eyebrow}</span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="headline text-brand-navy drop-shadow-sm leading-[1.1]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="copy text-brand-slate text-lg leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/573186135272?text=Hola%20Andres%20Leyes%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20tus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-green-500 px-8 py-4 text-green-700 bg-white/90 backdrop-blur-sm font-semibold shadow-xl hover:bg-green-50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75 1.7 0 3.3-.425 4.7-1.175l3.3.9-.9-3.3A9.708 9.708 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a3.375 3.375 0 106.75 0 3.375 3.375 0 00-6.75 0z" />
              </svg>
              Escribir WhatsApp
            </a>
            <a
              href="https://www.instagram.com/andresleyes_ft?igsh=MWJlazVkenU0dWpiag=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-pink-500 px-8 py-4 text-pink-700 bg-white/90 backdrop-blur-sm font-semibold shadow-xl hover:bg-pink-50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 2.25h9A5.25 5.25 0 0121.75 7.5v9a5.25 5.25 0 01-5.25 5.25h-9A5.25 5.25 0 012.25 16.5v-9A5.25 5.25 0 017.5 2.25z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75h.008v.008h-.008V6.75z" />
              </svg>
              Ver Instagram
            </a>
          </div>
        </div>
        {/* Columna derecha: foto protagonista */}
        <div className="relative z-20 flex items-center justify-center w-full">
          {visual}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
