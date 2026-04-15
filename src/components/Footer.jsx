import { Link } from "react-router-dom";
import { FiArrowRight, FiInstagram, FiMessageCircle } from "react-icons/fi";
import { brand, navLinks } from "../data/siteData";

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#061C2C] text-white">
      <img
        src={brand.logo}
        alt={brand.name}
        className="pointer-events-none absolute bottom-[-5rem] right-[-4rem] w-80 opacity-[0.06] brightness-0 invert sm:w-[28rem]"
      />

      <div className="section-shell relative py-14">
        <div className="grid gap-8 rounded-[2.6rem] border border-white/10 bg-white/5 p-8 shadow-glow lg:grid-cols-[1.1fr_0.9fr] lg:items-center sm:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Reserva premium</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Llevemos tu proceso a una cita clara, directa y bien guiada.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
              Si ya identificaste el servicio que necesitas, agenda por WhatsApp y recibe una respuesta agil para dar el siguiente paso.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/citas"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-brand-navy transition hover:-translate-y-1"
            >
              Agendar cita
              <FiArrowRight />
            </Link>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              Ver Instagram
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="rounded-[1.6rem] border border-white/10 bg-black/40 p-3 shadow-soft">
                <img src={brand.logo} alt={brand.name} className="h-16 w-16 object-contain" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">{brand.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.22em] text-white/50">Rehabilitacion premium</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-8 text-white/68">
              Una marca clinica construida para proyectar autoridad, acompanar pacientes exigentes y convertir interes en procesos terapeuticos bien ejecutados.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${brand.phoneDisplay.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
              >
                <FiMessageCircle />
                {brand.phoneDisplay}
              </a>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
              >
                <FiInstagram />
                {brand.instagramHandle}
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">Navegacion</p>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">Presencia digital</p>
            <div className="mt-5 rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="font-display text-2xl font-semibold">{brand.profileName}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/5 px-3 py-4">
                  <div className="font-display text-xl font-semibold">{brand.instagramStats.posts}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50">Posts</div>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-4">
                  <div className="font-display text-xl font-semibold">{brand.instagramStats.followers}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50">Seguidores</div>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-4">
                  <div className="font-display text-xl font-semibold">{brand.instagramStats.following}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50">Seguidos</div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/65">
                Contenido orientado a rehabilitacion deportiva, prevencion de lesiones y acompanamiento funcional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
