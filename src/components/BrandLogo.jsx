import { brand } from "../data/siteData";

function BrandLogo({ className = "", compact = false, light = false }) {
  return (
    <div className={`flex items-center gap-3 transition-all duration-200 hover:scale-[1.02] ${className}`}>
      <div className="relative group">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-cyan opacity-80 blur-md group-hover:blur-lg transition-all duration-300" />
        <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 bg-gradient-to-br from-brand-navy to-brand-ink shadow-xl">
          <img
            src={brand.logo}
            alt={brand.name}
            className={`${compact ? "h-11 w-11" : "h-14 w-14"} object-cover transition-transform duration-300 group-hover:scale-110`}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center leading-none">
        <h1 className={`font-display font-bold tracking-tight ${light ? "text-white" : "text-brand-navy"} ${compact ? "text-lg" : "text-xl lg:text-2xl"} drop-shadow-sm`}>
          Andrés Leyes
        </h1>
        <p className={`font-medium ${light ? "text-white/80" : "text-brand-slate"} ${compact ? "text-xs" : "text-sm"} tracking-wide uppercase mt-0.5`}>
          Especialista en Fisioterapia
        </p>
      </div>
    </div>
  );
}

export default BrandLogo;
