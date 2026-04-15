import { FiInstagram, FiMessageCircle } from "react-icons/fi";
import { brand } from "../data/siteData";

function HeroPortraitCard({ eyebrow = "Autoridad clinica", title = "Atencion premium y cercana" }) {
  return (
    <div className="relative overflow-visible rounded-[3rem] bg-[linear-gradient(145deg,#072940_0%,#0B3C5D_48%,#5CA7C7_100%)] p-0 text-white shadow-glow flex flex-col items-center justify-start min-h-[520px] sm:min-h-[580px] lg:min-h-[700px] pt-3 sm:pt-4">
      {/* Logo marca de agua a la derecha */}
      <img
        src={brand.logo}
        alt={brand.name}
        className="pointer-events-none absolute right-[-40px] top-1/2 w-[200px] max-w-[25vw] opacity-12 brightness-0 invert -translate-y-1/2 z-0 hidden md:block"
        style={{filter: 'blur(0.2px)'}}
      />
      {/* Foto protagonista optimizada para mobile */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full" style={{marginTop: '0px'}}>
        <div className="relative w-[85vw] max-w-[320px] h-[350px] sm:w-[70vw] sm:max-w-[400px] sm:h-[480px] lg:max-w-[480px] lg:h-[580px] flex-shrink-0 flex items-end justify-end">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 via-transparent to-brand-cyan/20 shadow-2xl" style={{zIndex: 1, filter: 'blur(2px)'}} />
          <img
            src={brand.heroImage}
            alt="Andres Leyes Fisioterapia"
            className="relative rounded-[2.5rem] shadow-2xl object-cover w-full h-full z-10"
            style={{objectPosition: 'center top'}}
          />
        </div>
        {/* Tarjetas flotantes - Versión mobile mejorada */}
        
        {/* Instagram y WhatsApp para mobile - botones inferiores */}
        <div className="flex gap-4 mt-4 md:hidden">
          <a
            href="https://www.instagram.com/andresleyes_ft?igsh=MWJlazVkenU0dWpiag=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-white/90 px-4 py-3 text-brand-navy shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
            style={{textDecoration: 'none'}}
          >
            <FiInstagram className="text-xl mb-1 text-pink-600" />
            <span className="text-xs font-bold">Instagram</span>
          </a>
          <a
            href="https://wa.me/573186135272?text=Hola%20Andres%20Leyes%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20tus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-brand-navy px-4 py-3 text-white shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
            style={{textDecoration: 'none'}}
          >
            <FiMessageCircle className="text-xl mb-1 text-green-400" />
            <span className="text-xs font-bold">WhatsApp</span>
          </a>
        </div>
        
        {/* Tarjeta Instagram flotante a la izquierda - Desktop */}
        <a
          href="https://www.instagram.com/andresleyes_ft?igsh=MWJlazVkenU0dWpiag=="
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[-55px] top-[40%] -translate-y-1/2 z-20 hidden md:block"
          style={{textDecoration: 'none'}}
        >
          <div className="rounded-2xl bg-white/90 px-6 py-4 text-brand-navy shadow-xl flex flex-col items-center mb-4 hover:scale-105 transition-transform">
            <FiInstagram className="text-2xl mb-1 text-pink-600" />
            <span className="text-xs uppercase tracking-[0.22em] font-bold">Instagram</span>
            <span className="mt-1 text-base font-semibold">{brand.instagramHandle}</span>
          </div>
        </a>
        {/* Tarjeta WhatsApp flotante a la derecha - Desktop */}
        <a
          href="https://wa.me/573186135272?text=Hola%20Andres%20Leyes%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20tus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-[-55px] top-[60%] -translate-y-1/2 z-20 hidden md:block"
          style={{textDecoration: 'none'}}
        >
          <div className="rounded-2xl bg-brand-navy px-6 py-4 text-white shadow-xl flex flex-col items-center mb-4 hover:scale-105 transition-transform">
            <FiMessageCircle className="text-2xl mb-1 text-green-400" />
            <span className="text-xs uppercase tracking-[0.22em] font-bold">WhatsApp</span>
            <span className="mt-1 text-base font-semibold">{brand.phoneDisplay}</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HeroPortraitCard;
