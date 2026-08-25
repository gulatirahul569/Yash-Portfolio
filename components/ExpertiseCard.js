export default function ExpertiseCard({ number, title, items }) {
  return (
    <article className="card-hover group relative overflow-hidden rounded-[22px] border border-[#dfdbd2] bg-white p-7">
      {/* gold accent bar that grows in from the left on hover */}
      <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-[#b08d57] to-[#d9c5a7] transition-transform duration-300 ease-out group-hover:scale-y-100" />

      <div className="mb-8 flex items-center justify-between">
        <div className="text-[11px] font-bold tracking-[.18em] text-[#b08d57]">{number}</div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dfdbd2] text-[10px] font-bold text-[#b08d57] transition-all duration-300 group-hover:border-[#b08d57] group-hover:bg-[#b08d57] group-hover:text-white">
          §
        </div>
      </div>

      <h3 className="serif text-2xl transition-colors duration-300 group-hover:text-[#101820]">{title}</h3>
      <div className="mt-5 space-y-2 text-sm leading-6 text-[#5b6168]">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#b08d57]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}