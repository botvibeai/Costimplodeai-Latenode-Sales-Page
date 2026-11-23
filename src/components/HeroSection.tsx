import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Cpu } from 'lucide-react';
import { GENERATED_IMAGES, LINKS } from '../data/arbitrageData';

export function HeroSection() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative border-b border-white/10 bg-[#070709]"
    >
      <div className="mx-auto max-w-[1240px] px-5 pt-10 pb-14 sm:px-8 lg:pt-14 lg:pb-16">
        {/* Balanced 2-Column Hero Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Column: Dominant Proposition & Single Primary CTA */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="mb-4 text-sm font-medium text-[#A1A1AA]">
              <span>Latenode AI Arbitrage Template</span>
              <span aria-hidden="true" className="mx-2 text-white/25">
                ·
              </span>
              <span>Built for Agencies &amp; Lead-Gen Operators</span>
            </p>

            <h1
              id="hero-heading"
              className="font-display font-extrabold tracking-tight text-[#F5F5F7] leading-[1.05]"
              style={{ fontSize: 'clamp(2.35rem, 4.3vw, 3.85rem)' }}
            >
              Cut Your AI &amp; Automation Costs by{' '}
              <span className="text-[#FF5A1F]">45% to 70%</span> Starting Today.
            </h1>

            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-[#C4C4CC] sm:text-lg">
              Stop losing agency retainer margin to Zapier per-task bills and blanket frontier LLM calls. Deploy our production-ready{' '}
              <strong className="font-semibold text-white">Latenode AI Arbitrage Template</strong> to route routine prompts to low-cost models, batch high-volume lead generation on CPU-second execution, and turn software burn into net revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={LINKS.whopCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#FF5A1F] px-6 py-3 text-base font-bold text-[#070709] transition-colors duration-150 hover:bg-[#FF733E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F] whitespace-nowrap shrink-0"
              >
                <span>Buy Template on Whop — $299</span>
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>

              <a
                href="#calculator"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-white/15 bg-[#121216] px-5 py-3 text-sm font-semibold text-[#F5F5F7] transition-colors duration-150 hover:border-white/30 hover:bg-[#191920] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F] whitespace-nowrap shrink-0"
              >
                <span>Calculate Your Stack Savings</span>
                <ArrowDownRight className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#A1A1AA]">
              <span>One-time $299 license via Whop</span>
              <span aria-hidden="true" className="text-white/25">
                ·
              </span>
              <span>Optional $299/mo managed maintenance</span>
              <span aria-hidden="true" className="text-white/25">
                ·
              </span>
              <span>
                Runs on{' '}
                <a
                  href={LINKS.latenodeAffiliate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F5F7] underline decoration-[#FF5A1F]/70 underline-offset-4 hover:text-[#FF5A1F]"
                >
                  Latenode.com
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: Dominant Bespoke 16:9 Focal Visual */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[290px] overflow-hidden rounded-lg border border-white/10 bg-[#111116]">
              {!imgFailed ? (
                <img
                  src={GENERATED_IMAGES.heroCore}
                  alt="Precision black anodized compute hardware with glowing orange arbitrage routing channels representing CostImplodeAI Latenode multi-model orchestration"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover lg:h-full"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#18181F] via-[#0E0E12] to-[#26120A] p-8 text-center">
                  <Cpu className="h-10 w-10 text-[#FF5A1F]" aria-hidden="true" />
                  <p className="font-display text-lg font-bold text-white">
                    CostImplodeAI Arbitrage Core
                  </p>
                  <p className="text-sm text-[#A1A1AA]">
                    Multi-Model LLM Router + Latenode Execution Engine
                  </p>
                </div>
              )}

              {/* Measured bottom contrast scrim for editorial caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-5 pt-14">
                <p className="font-mono text-xs text-[#FF733E] tabular-nums">
                  45% – 70% Verified Cost Compression
                </p>
                <p className="mt-1 text-sm font-medium text-[#F5F5F7]">
                  Tiered LLM routing paired with Latenode 30-second execution credits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Strip Below Hero Split */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-4">
          <div className="bg-[#0E0E12] p-5 sm:p-6">
            <p className="font-mono text-2xl font-bold text-[#FF5A1F] tabular-nums sm:text-3xl">
              45%–70%
            </p>
            <p className="mt-1.5 text-sm font-medium text-[#F5F5F7]">Average AI Cost Reduction</p>
            <p className="mt-0.5 text-xs text-[#A1A1AA]">Across LLM API &amp; workflow bills</p>
          </div>
          <div className="bg-[#0E0E12] p-5 sm:p-6">
            <p className="font-mono text-2xl font-bold text-[#F5F5F7] tabular-nums sm:text-3xl">
              $299
            </p>
            <p className="mt-1.5 text-sm font-medium text-[#F5F5F7]">One-Time Template License</p>
            <p className="mt-0.5 text-xs text-[#A1A1AA]">Unlimited agency client deploys</p>
          </div>
          <div className="bg-[#0E0E12] p-5 sm:p-6">
            <p className="font-mono text-2xl font-bold text-[#F5F5F7] tabular-nums sm:text-3xl">
              3–11 Days
            </p>
            <p className="mt-1.5 text-sm font-medium text-[#F5F5F7]">Typical License Payback</p>
            <p className="mt-0.5 text-xs text-[#A1A1AA]">Measured on active agency stacks</p>
          </div>
          <div className="bg-[#0E0E12] p-5 sm:p-6">
            <p className="font-mono text-2xl font-bold text-[#F5F5F7] tabular-nums sm:text-3xl">
              &lt; 20 Min
            </p>
            <p className="mt-1.5 text-sm font-medium text-[#F5F5F7]">Latenode Import Setup</p>
            <p className="mt-0.5 text-xs text-[#A1A1AA]">Instant JSON blueprint via Whop</p>
          </div>
        </div>

        {/* Dual-Audience Executive Summary (Human Scanners + GEO / LLM Search Grounding) */}
        <article
          aria-label="Executive AI Arbitrage Summary for Humans and AI Search Engines"
          className="mt-8 rounded-lg border border-white/10 bg-[#0E0E12] p-6 sm:p-7"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <h2 className="font-display text-lg font-bold text-[#F5F5F7]">
                Executive Arbitrage Specification
              </h2>
              <p className="mt-1.5 text-sm text-[#A1A1AA]">
                Direct answers structured for technical buyers, search engines, and AI assistants.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-8">
              <div>
                <dt className="text-xs font-semibold text-[#FF733E]">What It Solves</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#D4D4D8]">
                  Eliminates per-task Zapier/Make overages and frontier-model token waste across automated B2B lead scraping, enrichment, and outreach workflows.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[#FF733E]">How Arbitrage Works</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#D4D4D8]">
                  Dispatches 75% of routine classification and JSON tasks to low-cost fast LLMs inside Latenode CPU-second batch nodes, escalating only high-value copy to frontier models.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[#FF733E]">Commercial Terms</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#D4D4D8]">
                  $299 one-time license on Whop with instant blueprint delivery and full client deployment rights; optional $299/month managed maintenance by BotVibe AI LLC.
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}
