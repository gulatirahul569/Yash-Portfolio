"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import ExpertiseCard from "@/components/ExpertiseCard";
import { ArrowRight, Mail, Phone, Linkedin, MapPin, FileText, Scale } from "lucide-react";

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

/* ---------- Scroll-reveal wrapper ---------- */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Gold divider that draws itself in on view ---------- */
function GoldRule({ className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`h-[2px] bg-gradient-to-r from-[#b08d57] via-[#d8bd8d] to-transparent ${className}`}
      style={{
        width: visible ? "72px" : "0px",
        transition: "width 0.9s cubic-bezier(.22,1,.36,1)",
      }}
    />
  );
}

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="grid-line-bg relative overflow-hidden border-b border-black/5">
        {/* faint scales-of-justice watermark, lawyer-theme motif */}
        <Scale
          size={520}
          strokeWidth={0.6}
          className="pointer-events-none absolute -right-24 -top-24 text-[#101820]/[.035] rotate-[8deg] hidden lg:block"
        />

        <div className="container-shell relative grid min-h-[calc(100vh-76px)] items-center gap-14 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <Reveal>
            <div className="eyebrow flex items-center gap-2">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#b08d57] animate-pulse" />
              Corporate Legal Professional
            </div>
            <h1 className="serif mt-5 max-w-3xl text-5xl leading-[1.02] md:text-7xl lg:text-[82px]">
              Legal insight backed by practical experience.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5b6168] md:text-lg">
              Recently qualified law graduate with practical exposure to corporate legal work, regulatory compliance, legal drafting, research, intellectual property and litigation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-full  px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.13em] text-white shadow-[0_8px_24px_-8px_rgba(16,24,32,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24313b] hover:shadow-[0_12px_28px_-8px_rgba(16,24,32,0.6)]"
              >
                View Experience
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="/yash-sharma-resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[#b08d57] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.13em] text-[#101820] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b08d57] hover:text-white hover:shadow-[0_10px_24px_-10px_rgba(176,141,87,0.7)]"
              >
                <FileText size={15} /> Download CV
              </a>
            </div>
            <div className="mt-11 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#777f86]">
              {["Corporate", "Compliance", "Litigation", "Legal Research"].map((tag, i) => (
                <span key={tag} className="relative pl-3 first:pl-0">
                  {i !== 0 && <span className="absolute left-0 top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-[#b08d57]" />}
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-[480px] lg:justify-self-end">
              <div className="absolute -right-5 -top-5 h-full w-full rounded-[34px] border border-[#b08d57]/50 transition-transform duration-700 ease-out hover:-right-3 hover:-top-3" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-[#e8e2d9] shadow-[0_30px_60px_-20px_rgba(16,24,32,0.35)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d7c9b7] via-[#ece7df] to-[#b9b4ad]" />
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/YS-portrait2.jpeg"
                    alt="Yash Sharma"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-[#dfdbd2] bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:block">
                <div className="eyebrow">Focus</div>
                <div className="serif mt-1 text-lg">Corporate &amp; Commercial Law</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STAT STRIP ---------------- */}
      <section className="border-b border-[#dfdbd2] bg-white">
        <div className="container-shell grid divide-y divide-[#dfdbd2] py-2 md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            ["01", "Corporate Experience", "Adidas India"],
            ["02", "Legal Research", "Civil • Criminal • Commercial"],
            ["03", "Courtroom Exposure", "High Court & District Courts"],
            ["04", "Education", "B.A. LL.B. • 2021–2026"],
          ].map(([no, title, value], i) => (
            <Reveal key={no} delay={i * 90} className="group px-0 py-6 md:px-7 md:py-7 first:md:pl-0 last:md:pr-0">
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <div className="text-[10px] font-bold tracking-[.18em] text-[#b08d57]">{no}</div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#777f86]">{title}</div>
                <div className="mt-1 text-sm font-semibold text-[#101820]">{value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="py-24 md:py-32">
        <div className="container-shell">
          <Reveal>
            <SectionHeading number="01" label="About" title="A legal professional focused on thoughtful research, precise drafting and practical problem-solving." />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <Reveal delay={100}>
              <div className="rounded-[28px] border border-[#dfdbd2] bg-[#ede9e1] p-8 transition-shadow duration-300 hover:shadow-[0_20px_45px_-20px_rgba(16,24,32,0.25)]">
                <div className="eyebrow">Professional Profile</div>
                <div className="serif mt-4 text-4xl">Yash Sharma</div>
                <GoldRule className="my-4" />
                <div className="mt-1 text-sm leading-7 text-[#5b6168]">Recently qualified law graduate with experience spanning corporate legal support, compliance, drafting, legal research and litigation exposure.</div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-6 text-base leading-8 text-[#5b6168]">
                <p>Yash brings practical exposure from a corporate legal environment as well as High Court and District Court work. His experience includes trademark research, brand protection, Companies Act compliance, foreign-exchange documentation review, drafting and internal legal support.</p>
                <p>The portfolio is intentionally designed around credibility, clarity and professional restraint — presenting legal work in a way that feels appropriate for corporate legal teams, law firms and professional networks.</p>
                <a href="#expertise" className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.14em] text-[#101820]">
                  Explore expertise
                  <ArrowRight size={14} className="text-[#b08d57] transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- EXPERTISE ---------------- */}
      <section id="expertise" className="border-y border-[#dfdbd2] bg-[#f1eee8] py-24 md:py-32">
        <div className="container-shell">
          <Reveal>
            <SectionHeading number="02" label="Areas of Expertise" title="Legal capabilities shaped by corporate and courtroom exposure." />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {expertise.map((item, i) => (
              <Reveal key={item.number} delay={i * 80} className="transition-transform duration-300 hover:-translate-y-1.5">
                <ExpertiseCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CORPORATE EXPERIENCE ---------------- */}
      <section id="experience" className="py-24 md:py-32">
        <div className="container-shell">
          <Reveal>
            <SectionHeading number="03" label="Corporate Experience" title="Corporate legal experience at Adidas India." description="A focused presentation of the corporate legal responsibilities reflected in the resume." />
          </Reveal>
          <Reveal delay={100}>
            <article className="relative overflow-hidden rounded-[30px] bg-[#101820] p-8 text-white md:p-12">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#b08d57]/10 blur-3xl transition-all duration-700 hover:bg-[#b08d57]/20" />
              <Scale size={220} strokeWidth={0.5} className="pointer-events-none absolute -bottom-10 -left-10 text-white/[.03] rotate-[-10deg] hidden md:block" />
              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 pb-8">
                  <div>
                    <div className="eyebrow">Gurgaon</div>
                    <h3 className="serif mt-3 text-4xl md:text-5xl">Adidas India</h3>
                    <div className="mt-2 text-sm text-white/60">Marketing Private Limited · Corporate Legal Experience</div>
                  </div>
                  <div className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-white/70">Corporate Legal</div>
                </div>
                <div className="mt-9 grid gap-5 md:grid-cols-2">
                  {[
                    ["Trademark & Brand Protection", "Conducted legal research on trademark infringement and brand protection."],
                    ["Corporate Compliance", "Assisted with Companies Act compliance, statutory registers, filings and disclosure requirements."],
                    ["Regulatory Documentation", "Reviewed FCGPR and FIRC documents across multiple years for compliance tracking."],
                    ["Internal Legal Support", "Supported drafting of internal legal documents, policies and compliance notes."],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-white/[.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b08d57]/40 hover:bg-white/[.06]"
                    >
                      <div className="text-sm font-bold">{title}</div>
                      <div className="mt-3 text-sm leading-6 text-white/60">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ---------------- LITIGATION TIMELINE ---------------- */}
      <section className="border-y border-[#dfdbd2] bg-white py-24 md:py-32">
        <div className="container-shell">
          <Reveal>
            <SectionHeading number="04" label="Litigation & Courtroom Exposure" title="Practical exposure across High Court and District Court matters." />
          </Reveal>
          <div className="relative ml-2 border-l border-[#d5c4a9] pl-8 md:ml-10 md:pl-12">
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <Reveal key={`${item.year}-${item.title}`} delay={i * 100} className="group relative">
                  <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-white bg-[#b08d57] shadow-[0_0_0_1px_#b08d57] transition-transform duration-300 group-hover:scale-125 md:-left-[61px]" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-bold tracking-[.17em] text-[#b08d57]">{item.year}</span>
                    <span className="text-xs font-semibold uppercase tracking-[.12em] text-[#777f86]">{item.place}</span>
                  </div>
                  <h3 className="serif mt-3 text-2xl transition-colors duration-300 group-hover:text-[#101820]">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[#5b6168]">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- EDUCATION ---------------- */}
      <section id="education" className="py-24 md:py-32">
        <div className="container-shell">
          <Reveal>
            <SectionHeading number="05" label="Education" title="Legal education with a foundation in company law, drafting and advocacy." />
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
            <Reveal delay={100}>
              <div className="rounded-[28px] border border-[#dfdbd2] bg-white p-8 md:p-10 transition-shadow duration-300 hover:shadow-[0_20px_45px_-20px_rgba(16,24,32,0.2)]">
                <div className="eyebrow">2021 — 2026</div>
                <h3 className="serif mt-3 text-4xl">B.A. LL.B.</h3>
                <p className="mt-2 text-sm font-semibold text-[#3e4650]">Chandigarh Group of Colleges, Jhanjeri</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Constitutional Law", "Company Law", "Criminal Law", "Legal Drafting", "Moot Court Practice"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#f4f1eb] px-4 py-3 text-sm font-medium transition-colors duration-300 hover:bg-[#ece2cf]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="space-y-4">
              <Reveal delay={180}>
                <div className="rounded-[24px] border border-[#dfdbd2] bg-white p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="serif text-4xl">84.4%</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#777f86]">12th Grade · CBSE</div>
                  <div className="mt-2 text-sm font-semibold">Army Public School, Chandimandir</div>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className="rounded-[24px] border border-[#dfdbd2] bg-white p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="serif text-4xl">82.4%</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#777f86]">10th Grade · CBSE</div>
                  <div className="mt-2 text-sm font-semibold">Army Public School, Chandimandir</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STRENGTHS ---------------- */}
      <section className="border-y border-[#dfdbd2] bg-[#f1eee8] py-24 md:py-32">
        <div className="container-shell">
          <Reveal>
            <SectionHeading number="06" label="Professional Strengths" title="Capabilities that support effective legal work." />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((skill, index) => (
              <Reveal key={skill} delay={index * 60}>
                <div className="group rounded-2xl border border-[#dfdbd2] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b08d57]/50 hover:shadow-[0_16px_32px_-16px_rgba(176,141,87,0.35)]">
                  <div className="text-[10px] font-bold tracking-[.16em] text-[#b08d57]">0{index + 1}</div>
                  <div className="serif mt-4 text-xl transition-colors duration-300 group-hover:text-[#101820]">{skill}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ACHIEVEMENTS ---------------- */}
      <section className="py-20 md:py-24">
        <div className="container-shell grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <Reveal>
            <div>
              <div className="section-label eyebrow">07 — Achievements</div>
              <h2 className="serif text-4xl md:text-5xl">Discipline beyond academics.</h2>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-[#dfdbd2] bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-[10px] font-bold uppercase tracking-[.16em] text-[#b08d57]">2019</div>
                <div className="mt-2 text-lg font-semibold">NCC A Certificate Holder</div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="rounded-2xl border border-[#dfdbd2] bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-[10px] font-bold uppercase tracking-[.16em] text-[#b08d57]">2018</div>
                <div className="mt-2 text-lg font-semibold">NCC Camp</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="relative overflow-hidden bg-[#101820] py-24 text-white md:py-32">
        <Scale size={420} strokeWidth={0.5} className="pointer-events-none absolute -right-16 -bottom-16 text-white/[.035] rotate-[6deg] hidden lg:block" />
        <div className="container-shell relative grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div>
              <div className="eyebrow">Let's Connect</div>
              <h2 className="serif mt-5 max-w-3xl text-5xl leading-tight md:text-7xl">Open to professional opportunities and meaningful legal conversations.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">For professional opportunities, legal collaboration or networking, connect using the details below.</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-[26px] border border-white/10 bg-white/[.035] p-7 md:p-8">
              <div className="space-y-5">
                <a href="mailto:yashsharma2433@gmail.com" className="group flex items-center gap-4 border-b border-white/10 pb-5 text-sm transition-colors duration-300 hover:text-[#d8bd8d]">
                  <Mail size={18} className="text-[#b08d57] transition-transform duration-300 group-hover:scale-110" /> yashsharma2433@gmail.com
                </a>
                <a href="tel:7009590577" className="group flex items-center gap-4 border-b border-white/10 pb-5 text-sm transition-colors duration-300 hover:text-[#d8bd8d]">
                  <Phone size={18} className="text-[#b08d57] transition-transform duration-300 group-hover:scale-110" /> 7009590577
                </a>
                <a href="https://www.linkedin.com/in/yashrrma" target="_blank" rel="noreferrer" className="group flex items-center gap-4 border-b border-white/10 pb-5 text-sm transition-colors duration-300 hover:text-[#d8bd8d]">
                  <Linkedin size={18} className="text-[#b08d57] transition-transform duration-300 group-hover:scale-110" /> LinkedIn Profile
                </a>
                <div className="flex items-center gap-4 text-sm">
                  <MapPin size={18} className="text-[#b08d57]" /> Chandigarh region
                </div>
              </div>
            </div>
          </Reveal>
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