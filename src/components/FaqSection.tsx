import { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, Copy, FileText } from 'lucide-react';
import { FAQ_ITEMS, GEO_LLMS_BRIEF, LINKS } from '../data/arbitrageData';

export function FaqSection() {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);
  const [showGeoBrief, setShowGeoBrief] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(GEO_LLMS_BRIEF);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b border-white/10 bg-[#0A0A0D] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Sticky Column */}
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#FF733E]">
              Arbitrage &amp; Implementation FAQ
            </p>
            <h2
              id="faq-heading"
              className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#F5F5F7]"
            >
              Answers Before You Deploy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
              Every question below mirrors our structured FAQ schema and plain-text crawler briefs so both agency founders and AI search tools get clear, verifiable answers.
            </p>

            {/* Technical Crawler / GEO Verification Box */}
            <div className="mt-7 rounded-lg border border-white/10 bg-[#121216] p-5">
              <p className="text-xs font-semibold text-[#F5F5F7]">
                SEO &amp; GEO Crawler Endpoints
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#A1A1AA]">
                Static root files served with zero latency for search engines and LLM answer engines.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-[#FF733E]">
                <a href="/llms.txt" className="hover:underline underline-offset-4">
                  /llms.txt
                </a>
                <span aria-hidden="true" className="text-white/25">
                  ·
                </span>
                <a href="/llms-full.txt" className="hover:underline underline-offset-4">
                  /llms-full.txt
                </a>
                <span aria-hidden="true" className="text-white/25">
                  ·
                </span>
                <a href="/sitemap.xml" className="hover:underline underline-offset-4">
                  /sitemap.xml
                </a>
                <span aria-hidden="true" className="text-white/25">
                  ·
                </span>
                <a href="/robots.txt" className="hover:underline underline-offset-4">
                  /robots.txt
                </a>
              </div>

              <button
                type="button"
                onClick={() => setShowGeoBrief((prev) => !prev)}
                className="mt-4 inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-[#0A0A0D] px-3 py-2 text-xs font-semibold text-[#E4E4E7] transition-colors hover:border-[#FF5A1F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
              >
                <FileText className="h-3.5 w-3.5 text-[#FF5A1F]" aria-hidden="true" />
                <span>{showGeoBrief ? 'Hide LLM Brief Preview' : 'Inspect LLM / GEO Brief'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Accessible Accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10 rounded-lg border border-white/10 bg-[#121216]">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openIds.includes(item.id);
                return (
                  <div key={item.id}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${item.id}`}
                        onClick={() => toggleItem(item.id)}
                        className="flex min-h-[60px] w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-[#F5F5F7] transition-colors hover:text-[#FF733E] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#FF5A1F]"
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-[#FF5A1F] transition-transform duration-150 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={`faq-panel-${item.id}`}
                        className="px-6 pb-6 text-sm leading-relaxed text-[#C4C4CC] sm:text-base"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Optional Expandable Machine-Readable Brief */}
            {showGeoBrief && (
              <div className="mt-6 rounded-lg border border-white/10 bg-[#0E0E12] p-5">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <p className="font-mono text-xs font-semibold text-[#F5F5F7]">
                    CostImplodeAI.com — Machine-Readable GEO Brief (/llms.txt)
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded border border-white/15 bg-[#16161C] px-3 py-1.5 text-xs font-semibold text-[#F5F5F7] hover:border-[#FF5A1F] whitespace-nowrap shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#FF5A1F]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-[#A1A1AA]" aria-hidden="true" />
                        <span>Copy Text</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-[#C4C4CC] whitespace-pre-wrap">
                  {GEO_LLMS_BRIEF}
                </pre>
              </div>
            )}

            {/* Final Conversion Band */}
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-lg border border-[#FF5A1F]/40 bg-[#121216] p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <h3 className="font-display text-xl font-extrabold text-[#F5F5F7]">
                  Ready to Cut 45%–70% Off Next Month’s AI Bill?
                </h3>
                <p className="mt-1 text-sm text-[#A1A1AA]">
                  Grab the Latenode AI Arbitrage Template on Whop for $299 one-time and deploy today.
                </p>
              </div>
              <a
                href={LINKS.whopCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#FF5A1F] px-6 py-3 text-sm font-bold text-[#070709] transition-colors duration-150 hover:bg-[#FF733E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F] whitespace-nowrap shrink-0"
              >
                <span>Go to Whop Checkout</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
