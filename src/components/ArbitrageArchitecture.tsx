import { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import {
  GENERATED_IMAGES,
  LINKS,
  MECHANISM_PILLARS,
  MODEL_ROUTING_TABLE,
} from '../data/arbitrageData';

export function ArbitrageArchitecture() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="arbitrage"
      aria-labelledby="arbitrage-heading"
      className="border-b border-white/10 bg-[#070709] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-sm font-medium text-[#FF733E]">
              How Latenode AI Arbitrage Works
            </p>
            <h2
              id="arbitrage-heading"
              className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-4xl"
            >
              Engineered to Strip Waste Out of Every Lead-Gen Run
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href={LINKS.latenodeAffiliate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#F5F5F7] underline decoration-[#FF5A1F] underline-offset-4 transition-colors hover:text-[#FF733E]"
            >
              <span>Launch your Latenode.com workspace (Latenode.shop)</span>
              <ArrowUpRight className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Asymmetric 12-Column Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {MECHANISM_PILLARS.map((pillar) => (
            <article
              key={pillar.number}
              className={`flex flex-col justify-between rounded-lg border border-white/10 bg-[#121216] p-6 sm:p-8 ${
                pillar.span === 'wide' ? 'lg:col-span-7' : 'lg:col-span-5'
              }`}
            >
              <div>
                <h3 className="font-display text-xl font-bold text-[#F5F5F7]">
                  <span className="mr-2 font-mono text-base font-semibold text-[#FF5A1F]">
                    {pillar.number}
                  </span>
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#C4C4CC] sm:text-base">
                  {pillar.summary}
                </p>
              </div>
              <p className="mt-6 border-t border-white/10 pt-4 font-mono text-xs font-medium text-[#FF733E]">
                {pillar.impact}
              </p>
            </article>
          ))}
        </div>

        {/* Visual Architecture + Live Token Routing Cost Matrix */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#121216] lg:col-span-5">
            {!imgFailed ? (
              <img
                src={GENERATED_IMAGES.routingMatrix}
                alt="Isometric dark server routing nodes linked by orange optical conduits illustrating Latenode tiered LLM routing"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="h-full min-h-[260px] w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-[260px] flex-col items-center justify-center gap-2 bg-[#14141A] p-8 text-center">
                <Layers className="h-8 w-8 text-[#FF5A1F]" aria-hidden="true" />
                <p className="font-display text-base font-bold text-white">
                  Tiered Multi-Model Routing Matrix
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#121216] p-6 sm:p-8 lg:col-span-7">
            <div>
              <h3 className="font-display text-xl font-bold text-[#F5F5F7]">
                Prompt Complexity Arbitrage Ledger
              </h3>
              <p className="mt-1.5 text-sm text-[#A1A1AA]">
                Typical agency lead-enrichment token distribution before vs. after deploying the CostImplodeAI router on Latenode.
              </p>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-xs text-[#A1A1AA]">
                      <th className="py-2.5 pr-4 font-medium">Workflow Stage</th>
                      <th className="py-2.5 px-3 font-medium">Volume</th>
                      <th className="py-2.5 px-3 font-medium">Legacy / 1M</th>
                      <th className="py-2.5 px-3 font-medium">Arbitrage / 1M</th>
                      <th className="py-2.5 pl-3 text-right font-medium">Delta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8">
                    {MODEL_ROUTING_TABLE.map((row) => (
                      <tr key={row.stage}>
                        <td className="py-3 pr-4">
                          <div className="font-medium text-[#F5F5F7]">{row.stage}</div>
                          <div className="text-xs text-[#71717A]">{row.arbitrageTier}</div>
                        </td>
                        <td className="py-3 px-3 font-mono text-[#D4D4D8] tabular-nums">
                          {row.shareOfVolume}
                        </td>
                        <td className="py-3 px-3 font-mono text-[#71717A] line-through tabular-nums">
                          {row.legacyCostPer1M}
                        </td>
                        <td className="py-3 px-3 font-mono font-semibold text-[#F5F5F7] tabular-nums">
                          {row.routedCostPer1M}
                        </td>
                        <td className="py-3 pl-3 text-right font-mono font-bold text-[#FF5A1F] tabular-nums">
                          {row.reduction}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <p className="text-xs text-[#A1A1AA]">
                Need a Latenode.com account first? Open via our partner redirect{' '}
                <a
                  href={LINKS.latenodeAffiliate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline decoration-[#FF5A1F] underline-offset-4 hover:text-[#FF733E]"
                >
                  Latenode.shop
                </a>{' '}
                (affiliate link).
              </p>
              <a
                href={LINKS.whopCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#FF733E] hover:text-white whitespace-nowrap shrink-0"
              >
                <span>Get the Blueprint on Whop</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
