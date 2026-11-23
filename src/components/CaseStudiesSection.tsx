import { useState } from 'react';
import { ArrowUpRight, Building2 } from 'lucide-react';
import { CASE_STUDIES, GENERATED_IMAGES, LINKS } from '../data/arbitrageData';

export function CaseStudiesSection() {
  const [selectedId, setSelectedId] = useState<string>(CASE_STUDIES[0].id);
  const [imgFailed, setImgFailed] = useState(false);

  const activeStudy = CASE_STUDIES.find((c) => c.id === selectedId) ?? CASE_STUDIES[0];

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="border-b border-white/10 bg-[#0A0A0D] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#FF733E]">
            Agency &amp; Lead-Gen Operator Case Studies
          </p>
          <h2
            id="case-studies-heading"
            className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-4xl"
          >
            Real Agencies Slashing AI Burn While Scaling Lead Volume
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#A1A1AA]">
            Inspect before-and-after stack ledgers from agencies that replaced per-task Zapier/Make workflows and blanket frontier API calls with the CostImplodeAI Latenode template.
          </p>
        </div>

        {/* Interactive Case Study Selector Tabs */}
        <div
          role="tablist"
          aria-label="Agency Case Studies"
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {CASE_STUDIES.map((study) => {
            const isActive = study.id === activeStudy.id;
            return (
              <button
                key={study.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedId(study.id)}
                className={`flex flex-col items-start rounded-lg border p-4 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F] ${
                  isActive
                    ? 'border-[#FF5A1F] bg-[#16161C]'
                    : 'border-white/10 bg-[#111115] hover:border-white/25'
                }`}
              >
                <div className="flex w-full items-baseline justify-between gap-2">
                  <span className="font-display text-base font-bold text-[#F5F5F7]">
                    {study.agencyName}
                  </span>
                  <span className="font-mono text-sm font-bold text-[#FF5A1F] tabular-nums shrink-0">
                    -{study.savingsPercent}
                  </span>
                </div>
                <span className="mt-1 text-xs text-[#A1A1AA]">
                  {study.sector} · {study.location}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Deep Breakdown */}
        <div
          role="tabpanel"
          className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch"
        >
          {/* Left: Full Breakdown & Attributable Quote */}
          <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#121216] p-6 sm:p-8 lg:col-span-8">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-medium text-[#A1A1AA]">
                    {activeStudy.agencyName} · {activeStudy.sector}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold text-[#F5F5F7]">
                    {activeStudy.headlineMetric}
                  </h3>
                </div>
                <p className="font-mono text-xs text-[#FF733E] tabular-nums">
                  License Paid Back in {activeStudy.paybackTime}
                </p>
              </div>

              {/* Quantified Before/After Metrics Strip */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-md border border-white/8 bg-[#0A0A0D] p-3.5">
                  <p className="text-xs text-[#A1A1AA]">Legacy Monthly</p>
                  <p className="mt-1 font-mono text-base font-semibold text-[#A1A1AA] line-through tabular-nums">
                    {activeStudy.beforeMonthly}
                  </p>
                </div>
                <div className="rounded-md border border-white/8 bg-[#0A0A0D] p-3.5">
                  <p className="text-xs text-[#A1A1AA]">With Arbitrage</p>
                  <p className="mt-1 font-mono text-base font-bold text-[#F5F5F7] tabular-nums">
                    {activeStudy.afterMonthly}
                  </p>
                </div>
                <div className="rounded-md border border-white/8 bg-[#0A0A0D] p-3.5">
                  <p className="text-xs text-[#A1A1AA]">Annual Saved</p>
                  <p className="mt-1 font-mono text-base font-bold text-[#FF5A1F] tabular-nums">
                    {activeStudy.annualRecovered}
                  </p>
                </div>
                <div className="rounded-md border border-white/8 bg-[#0A0A0D] p-3.5">
                  <p className="text-xs text-[#A1A1AA]">Scale Outcome</p>
                  <p className="mt-1 font-mono text-sm font-semibold text-[#F5F5F7] tabular-nums">
                    {activeStudy.leadVolumeChange}
                  </p>
                </div>
              </div>

              {/* Challenge & Deployment Narrative */}
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold text-[#A1A1AA]">
                    Legacy Stack Bottleneck ({activeStudy.legacyStack})
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#D4D4D8]">
                    {activeStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#FF733E]">
                    CostImplodeAI Latenode Deployment
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#D4D4D8]">
                    {activeStudy.deployment}
                  </p>
                </div>
              </div>
            </div>

            {/* Attributable Executive Testimonial */}
            <blockquote className="mt-7 border-t border-white/10 pt-6">
              <p className="text-base font-medium leading-relaxed text-[#F5F5F7]">
                “{activeStudy.quote}”
              </p>
              <footer className="mt-3 text-xs text-[#A1A1AA]">
                <span className="font-semibold text-white">{activeStudy.authorName}</span>
                <span aria-hidden="true" className="mx-2 text-white/25">
                  ·
                </span>
                <span>{activeStudy.authorRole}</span>
              </footer>
            </blockquote>
          </div>

          {/* Right: Editorial Agency Visual + Direct Action */}
          <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-[#121216] lg:col-span-4">
            <div className="relative flex-1 min-h-[240px]">
              {!imgFailed ? (
                <img
                  src={GENERATED_IMAGES.agencyDesk}
                  alt="Modern dark obsidian agency command suite representing high-margin AI automation teams"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-2 bg-[#16161D] p-6 text-center">
                  <Building2 className="h-8 w-8 text-[#FF5A1F]" aria-hidden="true" />
                  <p className="font-display text-base font-bold text-white">
                    Agency Margin Protection
                  </p>
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121216] via-[#121216]/60 to-transparent p-6 pt-16">
                <p className="font-mono text-xs text-[#FF733E]">Commercial Agency License</p>
                <p className="mt-1 text-sm font-medium text-[#F5F5F7]">
                  Deploy once, replicate across every client retainer without paying per-seat fees.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 p-6">
              <a
                href={LINKS.whopCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-md bg-[#FF5A1F] px-5 py-3 text-sm font-bold text-[#070709] transition-colors duration-150 hover:bg-[#FF733E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
              >
                <span>Deploy This Stack Today — $299</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
