import { brand } from "../data/siteData";

function BrandLogo({ className = "", compact = false, light = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-soft">
        <img
          src={brand.logo}
          alt={brand.name}
          className={compact ? "h-12 w-12 object-cover" : "h-16 w-16 object-cover"}
        />
      </div>
      <div>
        <p
          className={`font-display text-base font-semibold leading-tight sm:text-lg ${
            light ? "text-white" : "text-brand-navy"
          }`}
        >
          Andres Leyes
        </p>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-white/70" : "text-brand-slate"
          }`}
        >
          Fisioterapia premium
        </p>
      </div>
    </div>
  );
}

export default BrandLogo;
