import { ArrowUpRight, Check } from 'lucide-react';
import { LINKS } from '../data/arbitrageData';

const TEMPLATE_DELIVERABLES = [
  'Complete importable Latenode AI Arbitrage Template JSON blueprint',
  'Dynamic tiered LLM prompt router (economy parsing + frontier escalation)',
  'Pre-wired B2B lead scraping, ICP scoring, enrichment & outreach workflow',
  'Unlimited internal and client-facing commercial agency deployment rights',
  'Model cost-matrix spreadsheet & 20-minute video/text onboarding guide',
  'Instant delivery and lifetime blueprint ownership via Whop',
];

const MAINTENANCE_DELIVERABLES = [
  'Monthly LLM benchmark audits & prompt-routing updates as model prices drop',
  'Proactive Latenode node maintenance and API schema updates',
  'Quarterly custom routing review to maintain 45%–70% cost compression',
  'Priority technical troubleshooting from BotVibe AI LLC engineers',
  'Optional add-on—cancel anytime directly inside your Whop dashboard',
];

export function OfferPricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-b border-white/10 bg-[#070709] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#FF733E]">
            Direct Whop Checkout &amp; Instant Onboarding
          </p>
          <h2
            id="pricing-heading"
            className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-4xl"
          >
            Own the Arbitrage Engine Outright for $299
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#A1A1AA]">
            No bloated enterprise contracts or recurring tax on your savings. Purchase the template once on Whop, import it into Latenode, and optionally add monthly managed maintenance if you want BotVibe AI LLC keeping your model routing sharp every month.
          </p>
        </div>

        {/* 2-Column Asymmetric Offer Layout */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Primary Conversion Offer: $299 One-Time */}
          <div className="flex flex-col justify-between rounded-lg border border-[#FF5A1F]/60 bg-[#121216] p-7 sm:p-9 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-semibold text-[#FF733E]">
                    Core License · Most Agencies Start Here
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold text-[#F5F5F7]">
                    Latenode AI Arbitrage Template
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-mono text-4xl font-bold text-[#F5F5F7] tabular-nums">$299</p>
                  <p className="text-xs text-[#A1A1AA]">One-time payment on Whop</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm text-[#E4E4E7]">
                {TEMPLATE_DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5A1F]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href={LINKS.whopCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md bg-[#FF5A1F] px-6 py-3 text-base font-bold text-[#070709] transition-colors duration-150 hover:bg-[#FF733E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
              >
                <span>Buy Latenode AI Arbitrage Template on Whop — $299</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </a>
              <p className="mt-3 text-center text-xs text-[#A1A1AA]">
                Secure checkout hosted on Whop ({LINKS.whopCheckout}) · Instant file unlock
              </p>
            </div>
          </div>

          {/* Optional Add-On Offer: $299/Month Maintenance */}
          <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#101014] p-7 sm:p-9 lg:col-span-5">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-semibold text-[#A1A1AA]">
                    Optional Ongoing Care
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-[#F5F5F7]">
                    Managed Maintenance
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-mono text-3xl font-bold text-[#F5F5F7] tabular-nums">
                    $299<span className="text-base font-normal text-[#A1A1AA]">/mo</span>
                  </p>
                  <p className="text-xs text-[#A1A1AA]">Optional · Cancel anytime</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm text-[#D4D4D8]">
                {MAINTENANCE_DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#A1A1AA]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href={LINKS.whopCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-[#18181F] px-5 py-3 text-sm font-bold text-[#F5F5F7] transition-colors duration-150 hover:border-[#FF5A1F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
              >
                <span>Add Managed Maintenance on Whop</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
              </a>
              <p className="mt-3 text-center text-xs text-[#A1A1AA]">
                Available directly alongside the template on Whop
              </p>
            </div>
          </div>
        </div>

        {/* Latenode.com Affiliate Setup Strip */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-lg border border-white/10 bg-[#0E0E12] p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-base font-bold text-[#F5F5F7]">
              Running the Blueprint on Latenode.com
            </p>
            <p className="mt-1 text-sm text-[#A1A1AA]">
              Don’t have a Latenode workspace yet? Spin up your account through our official partner link at Latenode.shop so you can import the JSON blueprint immediately after checkout.
            </p>
          </div>
          <a
            href={LINKS.latenodeAffiliate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md border border-white/15 bg-[#15151C] px-4 py-2 text-sm font-semibold text-[#F5F5F7] transition-colors hover:border-[#FF5A1F] hover:text-[#FF733E] whitespace-nowrap shrink-0"
          >
            <span>Open Latenode.com (Latenode.shop)</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
