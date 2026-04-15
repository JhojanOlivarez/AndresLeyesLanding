function TestimonialCard({ testimonial }) {
  return (
    <article className="glass-panel rounded-[2rem] p-7 shadow-soft">
      <p className="text-lg leading-8 text-brand-ink">“{testimonial.quote}”</p>
      <div className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-brand-slate">
        {testimonial.name}
      </div>
    </article>
  );
}

export default TestimonialCard;
