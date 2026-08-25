export default function SectionHeading({ number, label, title, description }) {
  return (
    <div className="fade-up mb-12">
      <div className="mb-[22px] flex items-center gap-3.5">
        <span className="eyebrow">
          {number} — {label}
        </span>
        <span className="h-px w-[54px] bg-gradient-to-r from-[#b08d57] to-[#d9c5a7]" />
      </div>
      <h2 className="serif max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-8 text-[#5b6168]">{description}</p>}
    </div>
  );
}