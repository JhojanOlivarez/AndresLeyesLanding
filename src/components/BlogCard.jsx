function BlogCard({ post }) {
  return (
    <article className="rounded-[2rem] border border-white/60 bg-white p-7 shadow-soft transition hover:-translate-y-2 hover:shadow-glow">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate">
        {post.category}
      </span>
      <h3 className="mt-4 font-display text-2xl font-semibold text-brand-ink">{post.title}</h3>
      <p className="mt-4 text-sm leading-7 text-brand-slate">{post.excerpt}</p>
      <div className="mt-6 text-sm font-semibold text-brand-navy">Leer artículo</div>
    </article>
  );
}

export default BlogCard;
