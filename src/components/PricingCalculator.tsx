import { useMemo, useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import {
  CALCULATOR_PRESETS,
  LINKS,
  type LegacyPlatform,
  calculateArbitrageROI,
} from '../data/arbitrageData';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

export function PricingCalculator() {
  const [activePreset, setActivePreset] = useState<'solo' | 'agency' | 'enterprise' | 'custom'>(
    'agency'
  );
  const [platform, setPlatform] = useState<LegacyPlatform>('zapier');
  const [monthlyAutomationSpend, setMonthlyAutomationSpend] = useState<number>(1450);
  const [monthlyLlmSpend, setMonthlyLlmSpend] = useState<number>(2100);
  const [monthlyLeadVolume, setMonthlyLeadVolume] = useState<number>(30000);
  const [includeMaintenance, setIncludeMaintenance] = useState<boolean>(false);

  const applyPreset = (presetId: 'solo' | 'agency' | 'enterprise') => {
    const found = CALCULATOR_PRESETS.find((p) => p.id === presetId);
    if (!found) return;
    setActivePreset(presetId);
    setPlatform(found.platform);
    setMonthlyAutomationSpend(found.monthlyAutomationSpend);
    setMonthlyLlmSpend(found.monthlyLlmSpend);
    setMonthlyLeadVolume(found.monthlyLeadVolume);
  };

  const result = useMemo(
    () =>
      calculateArbitrageROI({
        platform,
        monthlyAutomationSpend,
        monthlyLlmSpend,
        monthlyLeadVolume,
        includeMaintenance,
      }),
    [platform, monthlyAutomationSpend, monthlyLlmSpend, monthlyLeadVolume, includeMaintenance]
  );

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="border-b border-white/10 bg-[#0A0A0D] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#FF733E]">
            Interactive Full-Stack Arbitrage &amp; ROI Calculator
          </p>
          <h2
            id="calculator-heading"
            className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-4xl"
          >
            Calculate How Much Cash Your Current AI Stack Is Burning
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#A1A1AA]">
            Model your real monthly Zapier or Make automation spend alongside OpenAI/Anthropic API bills to see exact Latenode arbitrage savings, cost-per-lead compression, and license payback speed.
          </p>
        </div>

        {/* Agency Stack Presets */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs font-medium text-[#A1A1AA]">Load agency profile:</span>
          {CALCULATOR_PRESETS.map((preset) => {
            const isSelected = activePreset === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.id)}
                className={`min-h-[40px] rounded-md border px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F] ${
                  isSelected
                    ? 'border-[#FF5A1F] bg-[#FF5A1F]/15 text-white'
                    : 'border-white/10 bg-[#121216] text-[#A1A1AA] hover:border-white/25 hover:text-white'
                }`}
              >
                {preset.label} · {preset.subtitle}
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Calculator Grid */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Panel: Inputs */}
          <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#121216] p-6 sm:p-8 lg:col-span-7">
            <div className="space-y-7">
              {/* Current Automation Platform Selector */}
              <div>
                <label className="block text-sm font-semibold text-[#F5F5F7]">
                  Current Automation Platform
                </label>
                <p className="mt-1 text-xs text-[#A1A1AA]">
                  Per-task Zapier and per-operation Make plans compress differently on Latenode CPU-second credits.
                </p>
                <div
                  role="group"
                  aria-label="Current Automation Platform"
                  className="mt-3 grid grid-cols-3 gap-2 rounded-md bg-[#0A0A0D] p-1 border border-white/10"
                >
                  {(
                    [
                      { id: 'zapier', label: 'Zapier' },
                      { id: 'make', label: 'Make.com' },
                      { id: 'mixed', label: 'Mixed Stack' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setPlatform(item.id);
                        setActivePreset('custom');
                      }}
                      className={`min-h-[40px] rounded px-3 py-2 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F] ${
                        platform === item.id
                          ? 'bg-[#FF5A1F] text-[#070709]'
                          : 'text-[#A1A1AA] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Monthly Automation Bill */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="automation-spend"
                    className="text-sm font-semibold text-[#F5F5F7]"
                  >
                    Monthly Workflow Platform Spend
                  </label>
                  <span className="font-mono text-lg font-bold text-[#FF733E] tabular-nums">
                    {formatCurrency(monthlyAutomationSpend)}/mo
                  </span>
                </div>
                <input
                  id="automation-spend"
                  type="range"
                  min={150}
                  max={6000}
                  step={50}
                  value={monthlyAutomationSpend}
                  onChange={(e) => {
                    setMonthlyAutomationSpend(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="arbitrage-slider mt-3"
                />
                <div className="mt-1.5 flex justify-between font-mono text-xs text-[#71717A] tabular-nums">
                  <span>$150</span>
                  <span>$3,000</span>
                  <span>$6,000</span>
                </div>
              </div>

              {/* Slider 2: Monthly LLM API Spend */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label htmlFor="llm-spend" className="text-sm font-semibold text-[#F5F5F7]">
                    Monthly LLM API Spend (OpenAI / Claude / OpenRouter)
                  </label>
                  <span className="font-mono text-lg font-bold text-[#FF733E] tabular-nums">
                    {formatCurrency(monthlyLlmSpend)}/mo
                  </span>
                </div>
                <input
                  id="llm-spend"
                  type="range"
                  min={200}
                  max={8000}
                  step={50}
                  value={monthlyLlmSpend}
                  onChange={(e) => {
                    setMonthlyLlmSpend(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="arbitrage-slider mt-3"
                />
                <div className="mt-1.5 flex justify-between font-mono text-xs text-[#71717A] tabular-nums">
                  <span>$200</span>
                  <span>$4,000</span>
                  <span>$8,000</span>
                </div>
              </div>

              {/* Slider 3: Monthly Lead Volume */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label htmlFor="lead-volume" className="text-sm font-semibold text-[#F5F5F7]">
                    Monthly Leads Scraped, Enriched &amp; Qualified
                  </label>
                  <span className="font-mono text-lg font-bold text-[#F5F5F7] tabular-nums">
                    {formatNumber(monthlyLeadVolume)} leads
                  </span>
                </div>
                <input
                  id="lead-volume"
                  type="range"
                  min={2000}
                  max={120000}
                  step={1000}
                  value={monthlyLeadVolume}
                  onChange={(e) => {
                    setMonthlyLeadVolume(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="arbitrage-slider mt-3"
                />
                <div className="mt-1.5 flex justify-between font-mono text-xs text-[#71717A] tabular-nums">
                  <span>2,000</span>
                  <span>60,000</span>
                  <span>120,000</span>
                </div>
              </div>
            </div>

            {/* Optional Maintenance Toggle */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <button
                type="button"
                role="switch"
                aria-checked={includeMaintenance}
                onClick={() => setIncludeMaintenance((prev) => !prev)}
                className="flex w-full items-center justify-between gap-4 rounded-md border border-white/10 bg-[#0A0A0D] p-4 text-left transition-colors hover:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
              >
                <div>
                  <p className="text-sm font-semibold text-[#F5F5F7]">
                    Include Optional Managed Maintenance ($299/mo)
                  </p>
                  <p className="mt-0.5 text-xs text-[#A1A1AA]">
                    Continuous model-price recalibration &amp; node updates on top of your $299 one-time license.
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className={`flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors ${
                    includeMaintenance ? 'bg-[#FF5A1F]' : 'bg-[#27272F]'
                  }`}
                >
                  <span
                    className={`h-5 w-5 rounded-full bg-white transition-transform ${
                      includeMaintenance ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Right Panel: Live Arbitrage Ledger */}
          <div className="flex flex-col justify-between rounded-lg border border-[#FF5A1F]/40 bg-[#121216] p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-medium text-[#A1A1AA]">Projected Stack Reduction</p>
                  <p className="mt-1 font-mono text-4xl font-bold text-[#FF5A1F] tabular-nums sm:text-5xl">
                    {result.savingsPercent}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-[#A1A1AA]">$299 License Payback</p>
                  <p className="mt-1 font-mono text-2xl font-bold text-[#F5F5F7] tabular-nums">
                    {result.paybackDays} {result.paybackDays === 1 ? 'Day' : 'Days'}
                  </p>
                </div>
              </div>

              {/* Financial Breakdown Ledger */}
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#A1A1AA]">Current Monthly AI + Workflow Burn</dt>
                  <dd className="font-mono font-semibold text-[#D4D4D8] line-through decoration-white/40 tabular-nums">
                    {formatCurrency(result.currentTotalMonthly)}/mo
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#A1A1AA]">
                    Latenode Execution Est. (-{result.automationReductionPct}%)
                  </dt>
                  <dd className="font-mono font-medium text-[#F5F5F7] tabular-nums">
                    {formatCurrency(result.projectedAutomationCost)}/mo
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#A1A1AA]">
                    Routed LLM Spend Est. (-{result.llmReductionPct}%)
                  </dt>
                  <dd className="font-mono font-medium text-[#F5F5F7] tabular-nums">
                    {formatCurrency(result.projectedLlmCost)}/mo
                  </dd>
                </div>

                {includeMaintenance && (
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-[#A1A1AA]">Optional Managed Maintenance</dt>
                    <dd className="font-mono font-medium text-[#F5F5F7] tabular-nums">$299/mo</dd>
                  </div>
                )}

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-semibold text-[#F5F5F7]">Net Monthly Profit Recovered</dt>
                    <dd className="font-mono text-2xl font-bold text-[#FF5A1F] tabular-nums">
                      +{formatCurrency(result.monthlySavings)}/mo
                    </dd>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <dt className="text-xs text-[#A1A1AA]">Annualized Margin Added</dt>
                    <dd className="font-mono text-base font-semibold text-white tabular-nums">
                      {formatCurrency(result.annualSavings)} / year
                    </dd>
                  </div>
                </div>
              </dl>

              {/* Lead-Gen Unit Economics Row */}
              <div className="mt-6 rounded-md border border-white/10 bg-[#0A0A0D] p-4">
                <p className="text-xs font-medium text-[#A1A1AA]">
                  Lead-Generation Unit Cost (Per 1,000 Enriched Leads)
                </p>
                <div className="mt-2 flex items-baseline justify-between gap-3">
                  <span className="font-mono text-sm text-[#71717A] line-through tabular-nums">
                    ${result.currentCostPer1kLeads.toFixed(2)}
                  </span>
                  <span className="font-mono text-xl font-bold text-[#F5F5F7] tabular-nums">
                    ${result.newCostPer1kLeads.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Contextual Conversion CTA */}
            <div className="mt-7">
              <a
                href={LINKS.whopCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[#FF5A1F] px-5 py-3 text-base font-bold text-[#070709] transition-colors duration-150 hover:bg-[#FF733E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
              >
                <span>Lock In {formatCurrency(result.annualSavings)}/yr Savings — $299</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </a>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-[#A1A1AA]">
                <Check className="h-3.5 w-3.5 text-[#FF5A1F]" aria-hidden="true" />
                <span>Instant Whop delivery · Commercial agency license included</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
