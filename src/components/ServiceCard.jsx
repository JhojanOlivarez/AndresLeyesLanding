import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group glass-panel rounded-[2rem] p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-glow">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-2xl text-white transition group-hover:bg-brand-cyan">
        <Icon />
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold text-brand-ink">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-brand-slate">{service.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {(service.outcomes || []).slice(0, 2).map((item) => (
          <span
            key={item}
            className="rounded-full border border-brand-navy/10 bg-brand-mist/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy"
          >
            {item}
          </span>
        ))}
      </div>
      <Link
        to={`/servicios/${service.slug}`}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:gap-3"
      >
        Ver detalle del servicio
        <FiArrowRight />
      </Link>
    </article>
  );
}

export default ServiceCard;
