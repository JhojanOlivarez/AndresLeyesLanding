function SectionIntro({ eyebrow, title, description, align = "left", light = false }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <span className={light ? "eyebrow border-white/20 bg-white/10 text-white" : "eyebrow"}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-5 font-display text-3xl font-semibold sm:text-4xl ${
          light ? "text-white" : "text-brand-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 ${light ? "text-white/75" : "copy"}`}>{description}</p>
      ) : null}
    </div>
  );
}

export default SectionIntro;
