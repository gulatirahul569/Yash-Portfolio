import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import ExpertiseCard from "@/components/ExpertiseCard";
import { ArrowRight, Mail, Phone, Linkedin, MapPin, FileText } from "lucide-react";

const expertise = [
  { number: "01", title: "Corporate Law", items: ["Companies Act compliance", "Statutory registers & filings", "Corporate disclosures"] },
  { number: "02", title: "Legal Drafting", items: ["Agreements & pleadings", "Affidavits & legal documents", "Policies & compliance notes"] },
  { number: "03", title: "Regulatory Compliance", items: ["FCGPR / FIRC review", "Regulatory documentation", "Multi-year compliance tracking"] },
  { number: "04", title: "Intellectual Property", items: ["Trademark infringement research", "Brand protection", "IP enforcement support"] },
  { number: "05", title: "Litigation", items: ["Civil & criminal matters", "Trial-stage exposure", "Court filings & case preparation"] },
  { number: "06", title: "Legal Research", items: ["Case law interpretation", "Statutory research", "Legal strategy & submissions"] },
];

const strengths = [
  "Legal Research & Analysis", "Case Law Interpretation", "Drafting & Documentation", "Advocacy",
  "Negotiation & Conflict Resolution", "Persuasive Writing", "Client Handling", "Critical Thinking"
];

const timeline = [
  { year: "2025", place: "District Court Panchkula", title: "Litigation Support", text: "Assisted in drafting plaints, written statements and bail applications; observed trial-stage litigation, evidence and client interactions." },
  { year: "2025", place: "District Court Panchkula", title: "Case Preparation", text: "Assisted Advocate Naresh Mehta with case files, legal research, proceedings and legal documentation." },
  { year: "2024", place: "Punjab & Haryana High Court", title: "Advanced Legal Research & Drafting", text: "Conducted case-law research and drafted/reviewed writs and counter affidavits while observing litigation strategy and judicial reasoning." },
  { year: "2023", place: "Punjab & Haryana High Court", title: "Research & Court Exposure", text: "Conducted legal research, prepared case summaries and observed proceedings under Advocate Rattan Singh Longia." },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <section className="grid-line-bg overflow-hidden border-b border-black/5">
        <div className="container-shell grid min-h-[calc(100vh-76px)] items-center gap-14 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div className="fade-up">
            <div className="eyebrow">Corporate Legal Professional</div>
            <h1 className="serif mt-5 max-w-3xl text-5xl leading-[1.02] md:text-7xl lg:text-[82px]">
              Legal insight backed by practical experience.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5b6168] md:text-lg">
              Recently qualified law graduate with practical exposure to corporate legal work, regulatory compliance, legal drafting, research, intellectual property and litigation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#experience" className="inline-flex items-center gap-2 rounded-full  px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.13em] text-white transition hover:bg-[#24313b] ">
                View Experience <ArrowRight size={15} />
              </a>
              <a href="/yash-sharma-resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-[#b08d57] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.13em] text-[#101820] transition hover:bg-[#b08d57] hover:text-white">
                <FileText size={15} /> Download CV
              </a>
            </div>
            <div className="mt-11 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#777f86]">
              <span>Corporate</span><span>Compliance</span><span>Litigation</span><span>Legal Research</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:justify-self-end">
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[34px] border border-[#b08d57]/50" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-[#e8e2d9]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d7c9b7] via-[#ece7df] to-[#b9b4ad]" />
              <div className="absolute inset-0">
                <img
                  src="/YS-portrait.jpeg"
                  alt="Yash Sharma"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>
            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-[#dfdbd2] bg-white px-5 py-4 shadow-sm sm:block">
              <div className="eyebrow">Focus</div>
              <div className="serif mt-1 text-lg">Corporate & Commercial Law</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfdbd2] bg-white">
        <div className="container-shell grid divide-y divide-[#dfdbd2] py-2 md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            ["01", "Corporate Experience", "Adidas India"],
            ["02", "Legal Research", "Civil • Criminal • Commercial"],
            ["03", "Courtroom Exposure", "High Court & District Courts"],
            ["04", "Education", "B.A. LL.B. • 2021–2026"],
          ].map(([no, title, value]) => (
            <div key={no} className="px-0 py-6 md:px-7 md:py-7 first:md:pl-0 last:md:pr-0">
              <div className="text-[10px] font-bold tracking-[.18em] text-[#b08d57]">{no}</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#777f86]">{title}</div>
              <div className="mt-1 text-sm font-semibold text-[#101820]">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 md:py-32">
        <div className="container-shell">
          <SectionHeading number="01" label="About" title="A legal professional focused on thoughtful research, precise drafting and practical problem-solving." />
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="rounded-[28px] border border-[#dfdbd2] bg-[#ede9e1] p-8">
              <div className="eyebrow">Professional Profile</div>
              <div className="serif mt-4 text-4xl">Yash Sharma</div>
              <div className="mt-3 text-sm leading-7 text-[#5b6168]">Recently qualified law graduate with experience spanning corporate legal support, compliance, drafting, legal research and litigation exposure.</div>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#5b6168]">
              <p>Yash brings practical exposure from a corporate legal environment as well as High Court and District Court work. His experience includes trademark research, brand protection, Companies Act compliance, foreign-exchange documentation review, drafting and internal legal support.</p>
              <p>The portfolio is intentionally designed around credibility, clarity and professional restraint — presenting legal work in a way that feels appropriate for corporate legal teams, law firms and professional networks.</p>
              <a href="#expertise" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.14em] text-[#101820]">Explore expertise <ArrowRight size={14} className="text-[#b08d57]" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="border-y border-[#dfdbd2] bg-[#f1eee8] py-24 md:py-32">
        <div className="container-shell">
          <SectionHeading number="02" label="Areas of Expertise" title="Legal capabilities shaped by corporate and courtroom exposure." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {expertise.map((item) => <ExpertiseCard key={item.number} {...item} />)}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 md:py-32">
        <div className="container-shell">
          <SectionHeading number="03" label="Corporate Experience" title="Corporate legal experience at Adidas India." description="A focused presentation of the corporate legal responsibilities reflected in the resume." />
          <article className="relative overflow-hidden rounded-[30px] bg-[#101820] p-8 text-white md:p-12">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#b08d57]/10 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 pb-8">
                <div><div className="eyebrow">Gurgaon</div><h3 className="serif mt-3 text-4xl md:text-5xl">Adidas India</h3><div className="mt-2 text-sm text-white/60">Marketing Private Limited · Corporate Legal Experience</div></div>
                <div className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-white/70">Corporate Legal</div>
              </div>
              <div className="mt-9 grid gap-5 md:grid-cols-2">
                {[
                  ["Trademark & Brand Protection", "Conducted legal research on trademark infringement and brand protection."],
                  ["Corporate Compliance", "Assisted with Companies Act compliance, statutory registers, filings and disclosure requirements."],
                  ["Regulatory Documentation", "Reviewed FCGPR and FIRC documents across multiple years for compliance tracking."],
                  ["Internal Legal Support", "Supported drafting of internal legal documents, policies and compliance notes."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[.035] p-6">
                    <div className="text-sm font-bold">{title}</div>
                    <div className="mt-3 text-sm leading-6 text-white/60">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-[#dfdbd2] bg-white py-24 md:py-32">
        <div className="container-shell">
          <SectionHeading number="04" label="Litigation & Courtroom Exposure" title="Practical exposure across High Court and District Court matters." />
          <div className="relative ml-2 border-l border-[#d5c4a9] pl-8 md:ml-10 md:pl-12">
            <div className="space-y-12">
              {timeline.map((item) => (
                <div key={`${item.year}-${item.place}`} className="relative">
                  <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-white bg-[#b08d57] shadow-[0_0_0_1px_#b08d57] md:-left-[61px]" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-bold tracking-[.17em] text-[#b08d57]">{item.year}</span>
                    <span className="text-xs font-semibold uppercase tracking-[.12em] text-[#777f86]">{item.place}</span>
                  </div>
                  <h3 className="serif mt-3 text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[#5b6168]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-24 md:py-32">
        <div className="container-shell">
          <SectionHeading number="05" label="Education" title="Legal education with a foundation in company law, drafting and advocacy." />
          <div className="grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
            <div className="rounded-[28px] border border-[#dfdbd2] bg-white p-8 md:p-10">
              <div className="eyebrow">2021 — 2026</div>
              <h3 className="serif mt-3 text-4xl">B.A. LL.B.</h3>
              <p className="mt-2 text-sm font-semibold text-[#3e4650]">Chandigarh Group of Colleges, Jhanjeri</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Constitutional Law", "Company Law", "Criminal Law", "Legal Drafting", "Moot Court Practice"].map((item) => <div key={item} className="rounded-xl bg-[#f4f1eb] px-4 py-3 text-sm font-medium">{item}</div>)}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-[24px] border border-[#dfdbd2] bg-white p-7"><div className="serif text-4xl">84.4%</div><div className="mt-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#777f86]">12th Grade · CBSE</div><div className="mt-2 text-sm font-semibold">Army Public School, Chandimandir</div></div>
              <div className="rounded-[24px] border border-[#dfdbd2] bg-white p-7"><div className="serif text-4xl">82.4%</div><div className="mt-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#777f86]">10th Grade · CBSE</div><div className="mt-2 text-sm font-semibold">Army Public School, Chandimandir</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfdbd2] bg-[#f1eee8] py-24 md:py-32">
        <div className="container-shell">
          <SectionHeading number="06" label="Professional Strengths" title="Capabilities that support effective legal work." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((skill, index) => <div key={skill} className="rounded-2xl border border-[#dfdbd2] bg-white p-6"><div className="text-[10px] font-bold tracking-[.16em] text-[#b08d57]">0{index + 1}</div><div className="serif mt-4 text-xl">{skill}</div></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-shell grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div><div className="section-label eyebrow">07 — Achievements</div><h2 className="serif text-4xl md:text-5xl">Discipline beyond academics.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#dfdbd2] bg-white p-6"><div className="text-[10px] font-bold uppercase tracking-[.16em] text-[#b08d57]">2019</div><div className="mt-2 text-lg font-semibold">NCC A Certificate Holder</div></div>
            <div className="rounded-2xl border border-[#dfdbd2] bg-white p-6"><div className="text-[10px] font-bold uppercase tracking-[.16em] text-[#b08d57]">2018</div><div className="mt-2 text-lg font-semibold">NCC Camp</div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#101820] py-24 text-white md:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div><div className="eyebrow">Let's Connect</div><h2 className="serif mt-5 max-w-3xl text-5xl leading-tight md:text-7xl">Open to professional opportunities and meaningful legal conversations.</h2><p className="mt-6 max-w-2xl text-base leading-8 text-white/60">For professional opportunities, legal collaboration or networking, connect using the details below.</p></div>
          <div className="rounded-[26px] border border-white/10 bg-white/[.035] p-7 md:p-8">
            <div className="space-y-5">
              <a href="mailto:yashsharma2433@gmail.com" className="flex items-center gap-4 border-b border-white/10 pb-5 text-sm"><Mail size={18} className="text-[#b08d57]" /> yashsharma2433@gmail.com</a>
              <a href="tel:7009590577" className="flex items-center gap-4 border-b border-white/10 pb-5 text-sm"><Phone size={18} className="text-[#b08d57]" /> 7009590577</a>
              <a href="https://www.linkedin.com/in/yashrrma" target="_blank" rel="noreferrer" className="flex items-center gap-4 border-b border-white/10 pb-5 text-sm"><Linkedin size={18} className="text-[#b08d57]" /> LinkedIn Profile</a>
              <div className="flex items-center gap-4 text-sm"><MapPin size={18} className="text-[#b08d57]" /> Chandigarh region</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b1116] py-8 text-white/45">
        <div className="container-shell flex flex-col gap-3 text-[10px] font-bold uppercase tracking-[.16em] sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Yash Sharma. All rights reserved.</div>
          <div>Corporate Legal Professional</div>
        </div>
      </footer>
    </main>
  );
}
