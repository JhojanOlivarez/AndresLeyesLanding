import { FiInstagram, FiMessageCircle } from "react-icons/fi";
import { brand } from "../data/siteData";

function HeroPortraitCard({ eyebrow = "Autoridad clinica", title = "Atencion premium y cercana" }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#072940_0%,#0B3C5D_48%,#5CA7C7_100%)] p-4 text-white shadow-glow">
      <div className="absolute right-[-8%] top-[-5%] h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-3xl" />
      <img
        src={brand.logo}
        alt={brand.name}
        className="pointer-events-none absolute right-[-2rem] top-6 hidden w-56 opacity-10 brightness-0 invert md:block"
      />
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-white/8 p-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">{eyebrow}</p>
            <h3 className="mt-2 font-display text-xl font-semibold">{title}</h3>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-2">
            <img src={brand.logo} alt={brand.shortName} className="h-12 w-12 object-contain brightness-0 invert" />
          </div>
        </div>

        <div className="relative rounded-[1.6rem] bg-[radial-gradient(circle_at_top,#ffffff_0%,#f2f6f9_46%,#d7e4ec_100%)] p-4">
          <div className="rounded-[1.3rem] border border-brand-navy/10 bg-white/70 p-3 shadow-soft">
            <img
              src={brand.heroImage}
              alt="Andres Leyes Fisioterapia"
              className="mx-auto h-[320px] w-full object-contain sm:h-[420px]"
            />
          </div>

          <div className="absolute bottom-6 left-4 rounded-2xl bg-brand-navy px-4 py-3 text-white shadow-soft">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">WhatsApp</p>
            <p className="mt-1 text-sm font-semibold">{brand.phoneDisplay}</p>
          </div>

          <div className="absolute right-4 top-4 rounded-2xl bg-white px-4 py-3 text-brand-navy shadow-soft">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand-slate">Instagram</p>
            <p className="mt-1 text-sm font-semibold">{brand.instagramHandle}</p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm">
            <div className="flex items-center gap-2 text-white/70">
              <FiInstagram />
              <span>Comunidad activa</span>
            </div>
            <p className="mt-1 font-semibold">
              {brand.instagramStats.followers} seguidores
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm">
            <div className="flex items-center gap-2 text-white/70">
              <FiMessageCircle />
              <span>Reservas directas</span>
            </div>
            <p className="mt-1 font-semibold">Agenda agil por WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPortraitCard;
