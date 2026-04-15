function ContactCard({ label, value, detail }) {
  return (
    <div className="rounded-[1.75rem] border border-white/60 bg-white p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate">{label}</p>
      <h3 className="mt-3 text-xl font-semibold text-brand-ink">{value}</h3>
      <p className="mt-2 text-sm leading-7 text-brand-slate">{detail}</p>
    </div>
  );
}

export default ContactCard;
