export default function ExpertiseCard({ number, title, items }) {
  return (
    <article className="card-hover rounded-[22px] border border-[#dfdbd2] bg-white p-7">
      <div className="mb-8 text-[11px] font-bold tracking-[.18em] text-[#b08d57]">{number}</div>
      <h3 className="serif text-2xl">{title}</h3>
      <div className="mt-5 space-y-2 text-sm leading-6 text-[#5b6168]">
        {items.map((item) => <div key={item}>{item}</div>)}
      </div>
    </article>
  );
}
