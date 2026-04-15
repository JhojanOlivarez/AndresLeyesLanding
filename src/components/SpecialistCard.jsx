function SpecialistCard({ specialist }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-soft">
      <div className="h-48 bg-[linear-gradient(135deg,rgba(11,60,93,0.95),rgba(92,167,199,0.55))]" />
      <div className="p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
          {specialist.role}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-brand-ink">
          {specialist.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-brand-slate">{specialist.description}</p>
        <div className="mt-6 rounded-2xl bg-brand-mist px-4 py-3 text-sm font-semibold text-brand-navy">
          {specialist.metrics}
        </div>
      </div>
    </article>
  );
}

export default SpecialistCard;
