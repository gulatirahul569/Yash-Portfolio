export default function SectionHeading({ number, label, title, description }) {
  return (
    <div className="mb-12">
      <div className="section-label eyebrow">
        {number} — {label}
      </div>
      <h2 className="serif max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-8 text-[#5b6168]">{description}</p>}
    </div>
  );
}
