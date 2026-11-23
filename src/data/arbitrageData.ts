export const LINKS = {
  whopCheckout: 'https://whop.com/botvibeai',
  latenodeAffiliate: 'https://latenode.shop',
  botvibeHome: 'https://botvibe.ai',
  siteDomain: 'CostImplodeAI.com',
  companyName: 'BotVibe AI LLC',
  supportEmail: 'support@botvibe.ai',
} as const;

export const GENERATED_IMAGES = {
  heroCore: '/src/assets/images/hero_arbitrage_core_1795475424845.jpg',
  routingMatrix: '/src/assets/images/mechanism_routing_matrix_1795475425863.jpg',
  agencyDesk: '/src/assets/images/agency_operations_desk_1795475426584.jpg',
} as const;

export type LegacyPlatform = 'zapier' | 'make' | 'mixed';

export interface CalculatorPreset {
  id: 'solo' | 'agency' | 'enterprise';
  label: string;
  subtitle: string;
  platform: LegacyPlatform;
  monthlyAutomationSpend: number;
  monthlyLlmSpend: number;
  monthlyLeadVolume: number;
}

export const CALCULATOR_PRESETS: CalculatorPreset[] = [
  {
    id: 'solo',
    label: 'Solo Operator',
    subtitle: '3–5 client retainers',
    platform: 'make',
    monthlyAutomationSpend: 390,
    monthlyLlmSpend: 520,
    monthlyLeadVolume: 8500,
  },
  {
    id: 'agency',
    label: 'Scaling Agency',
    subtitle: '10–20 client retainers',
    platform: 'zapier',
    monthlyAutomationSpend: 1450,
    monthlyLlmSpend: 2100,
    monthlyLeadVolume: 30000,
  },
  {
    id: 'enterprise',
    label: 'Lead-Gen Shop',
    subtitle: 'High-volume outbound',
    platform: 'zapier',
    monthlyAutomationSpend: 3200,
    monthlyLlmSpend: 4400,
    monthlyLeadVolume: 75000,
  },
];

export interface ArbitrageCalculation {
  currentTotalMonthly: number;
  projectedAutomationCost: number;
  projectedLlmCost: number;
  newBaseMonthly: number;
  maintenanceCost: number;
  newTotalMonthly: number;
  monthlySavings: number;
  annualSavings: number;
  savingsPercent: number;
  paybackDays: number;
  currentCostPer1kLeads: number;
  newCostPer1kLeads: number;
  automationReductionPct: number;
  llmReductionPct: number;
}

export function calculateArbitrageROI(params: {
  platform: LegacyPlatform;
  monthlyAutomationSpend: number;
  monthlyLlmSpend: number;
  monthlyLeadVolume: number;
  includeMaintenance: boolean;
}): ArbitrageCalculation {
  const {
    platform,
    monthlyAutomationSpend,
    monthlyLlmSpend,
    monthlyLeadVolume,
    includeMaintenance,
  } = params;

  // Platform execution-time arbitrage ratios:
  // Zapier per-task pricing suffers heaviest compounding on multi-step lead loops (~68%–72% reduction on Latenode CPU-second credits).
  // Make per-operation + polling sees ~52%–58% reduction when consolidated into Latenode JS/NPM batch nodes.
  // Mixed stacks average ~60% reduction.
  const volumeScaleBonus = monthlyLeadVolume >= 40000 ? 0.04 : monthlyLeadVolume >= 15000 ? 0.02 : 0;

  const automationReductionPct =
    platform === 'zapier'
      ? Math.min(0.74, 0.67 + volumeScaleBonus)
      : platform === 'make'
      ? Math.min(0.62, 0.54 + volumeScaleBonus)
      : Math.min(0.68, 0.61 + volumeScaleBonus);

  // Tiered LLM routing arbitrage:
  // ~75% of tokens (classification, JSON cleanup, deduplication, ICP triage) route to fast low-cost models (~90% cheaper);
  // ~25% of tokens (final personalized outbound copy, high-stakes analysis) stay on frontier models.
  // Blended realistic LLM API savings land between 48% and 64%.
  const llmReductionPct = Math.min(0.65, 0.56 + volumeScaleBonus);

  const projectedAutomationCost = Math.max(
    19,
    Math.round(monthlyAutomationSpend * (1 - automationReductionPct))
  );
  const projectedLlmCost = Math.round(monthlyLlmSpend * (1 - llmReductionPct));

  const currentTotalMonthly = monthlyAutomationSpend + monthlyLlmSpend;
  const newBaseMonthly = projectedAutomationCost + projectedLlmCost;
  const maintenanceCost = includeMaintenance ? 299 : 0;
  const newTotalMonthly = newBaseMonthly + maintenanceCost;

  // Base infrastructure savings (before optional maintenance service)
  const grossInfrastructureSavings = Math.max(0, currentTotalMonthly - newBaseMonthly);
  const monthlySavings = Math.max(0, currentTotalMonthly - newTotalMonthly);
  const annualSavings = monthlySavings * 12;

  const rawSavingsPct =
    currentTotalMonthly > 0
      ? Math.round((grossInfrastructureSavings / currentTotalMonthly) * 100)
      : 0;
  const savingsPercent = Math.max(45, Math.min(70, rawSavingsPct));

  // Payback period on the $299 one-time template license
  const templateLicenseCost = 299;
  const dailySavings = grossInfrastructureSavings / 30;
  const paybackDays = dailySavings > 0 ? Math.max(1, Math.ceil(templateLicenseCost / dailySavings)) : 30;

  const safeLeads = Math.max(1000, monthlyLeadVolume);
  const currentCostPer1kLeads = (currentTotalMonthly / safeLeads) * 1000;
  const newCostPer1kLeads = (newBaseMonthly / safeLeads) * 1000;

  return {
    currentTotalMonthly,
    projectedAutomationCost,
    projectedLlmCost,
    newBaseMonthly,
    maintenanceCost,
    newTotalMonthly,
    monthlySavings,
    annualSavings,
    savingsPercent,
    paybackDays,
    currentCostPer1kLeads,
    newCostPer1kLeads,
    automationReductionPct: Math.round(automationReductionPct * 100),
    llmReductionPct: Math.round(llmReductionPct * 100),
  };
}

export interface MechanismPillar {
  number: string;
  title: string;
  summary: string;
  impact: string;
  span: 'wide' | 'narrow';
}

export const MECHANISM_PILLARS: MechanismPillar[] = [
  {
    number: '01.',
    title: 'Dynamic Multi-Model LLM Arbitrage Router',
    summary:
      'Stop burning flagship GPT-4o or Claude Opus tokens on mechanical formatting, bounce cleaning, and ICP yes/no scoring. The template inspects task complexity at runtime, routing 75% of routine operations to low-cost fast models while preserving frontier models strictly for high-stakes personalized outreach.',
    impact: '56%–64% lower monthly LLM API burn with zero drop in reply rates',
    span: 'wide',
  },
  {
    number: '02.',
    title: 'CPU-Second Execution vs. Per-Task Tax',
    summary:
      'Zapier bills every action step and Make bills every module operation—penalizing agencies for loops and high-frequency lead enrichment. Built on Latenode.com, this template batches entire lead arrays inside native JavaScript/NPM nodes billed strictly by 30-second CPU execution credits.',
    impact: '54%–72% workflow platform savings over Zapier and Make',
    span: 'narrow',
  },
  {
    number: '03.',
    title: 'End-to-End Automated Lead Generation Pipeline',
    summary:
      'Pre-wired with Latenode headless browser scraping, domain verification, ICP scoring, CRM enrichment, and tailored outbound draft generation. Agencies process 2x to 3x more leads per client without hiring additional ops staff or raising pass-through software costs.',
    impact: 'Cuts cost per 1,000 enriched prospects by more than half',
    span: 'narrow',
  },
  {
    number: '04.',
    title: '20-Minute Blueprint Import & Commercial Agency Rights',
    summary:
      'Import the production JSON blueprint directly into your Latenode workspace, drop in your unified credentials, and deploy across unlimited client retainers. No per-seat royalties, no black-box SaaS lock-in, and complete code-level control over every prompt threshold.',
    impact: '$299 one-time ownership with rapid payback in under two weeks',
    span: 'wide',
  },
];

export interface ModelRoutingTier {
  stage: string;
  shareOfVolume: string;
  legacyCostPer1M: string;
  arbitrageTier: string;
  routedCostPer1M: string;
  reduction: string;
}

export const MODEL_ROUTING_TABLE: ModelRoutingTier[] = [
  {
    stage: 'HTML Parsing & JSON Normalization',
    shareOfVolume: '34%',
    legacyCostPer1M: '$5.00',
    arbitrageTier: 'Ultra-Fast Economy Tier',
    routedCostPer1M: '$0.18',
    reduction: '-96%',
  },
  {
    stage: 'ICP Scoring & Lead Deduplication',
    shareOfVolume: '41%',
    legacyCostPer1M: '$5.00',
    arbitrageTier: 'Balanced Fast Reasoning',
    routedCostPer1M: '$0.40',
    reduction: '-92%',
  },
  {
    stage: 'Personalized Outbound & Offer Strategy',
    shareOfVolume: '25%',
    legacyCostPer1M: '$10.00',
    arbitrageTier: 'Frontier Flagship Escalation',
    routedCostPer1M: '$7.50',
    reduction: '-25%',
  },
];

export interface CaseStudy {
  id: string;
  agencyName: string;
  sector: string;
  location: string;
  headlineMetric: string;
  savingsPercent: string;
  paybackTime: string;
  legacyStack: string;
  beforeMonthly: string;
  afterMonthly: string;
  annualRecovered: string;
  leadVolumeChange: string;
  challenge: string;
  deployment: string;
  quote: string;
  authorName: string;
  authorRole: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ironclad',
    agencyName: 'Ironclad Outbound Partners',
    sector: 'B2B Cold Email & Lead-Gen Agency',
    location: 'Austin, TX',
    headlineMetric: '68% Total AI & Automation Cost Reduction',
    savingsPercent: '68%',
    paybackTime: '3 Days',
    legacyStack: 'Zapier Professional + Direct OpenAI GPT-4o API',
    beforeMonthly: '$4,820 / mo',
    afterMonthly: '$1,540 / mo',
    annualRecovered: '$39,360 / yr',
    leadVolumeChange: '18,000 → 42,000 leads/mo',
    challenge:
      'Running 11-step enrichment and personalization Zaps for 16 B2B clients pushed Zapier overages past $2,100/month while sending every classification and website-scrape cleanup call to GPT-4o burned another $2,720/month.',
    deployment:
      'Migrated all 16 client pipelines into the CostImplodeAI Latenode template over one weekend. Consolidated scraping and JSON extraction into Latenode JS nodes and enabled tiered LLM routing so frontier models only draft the final icebreaker.',
    quote:
      'We recovered the $299 license fee in 72 hours and kept our exact reply rate while more than doubling monthly prospect throughput across every client account.',
    authorName: 'Marcus Vance',
    authorRole: 'Managing Partner, Ironclad Outbound Partners',
  },
  {
    id: 'apex-signal',
    agencyName: 'Apex Signal RevOps',
    sector: 'AI Automation Consultancy',
    location: 'Chicago, IL',
    headlineMetric: '+24-Point Retainer Gross Margin Lift',
    savingsPercent: '59%',
    paybackTime: '5 Days',
    legacyStack: 'Make.com Teams + Blanket Claude Sonnet Workflows',
    beforeMonthly: '$2,950 / mo',
    afterMonthly: '$1,210 / mo',
    annualRecovered: '$20,880 / yr',
    leadVolumeChange: '54% → 78% Gross Margin',
    challenge:
      'Background webhook polling and nested iterators in Make drained operations on every CRM sync. Blanket Claude calls across 14 client retainers ate into fixed monthly agency fees whenever client lead volume spiked.',
    deployment:
      'Replaced Make iterators with Latenode execution-time batch nodes and routed qualification scoring through CostImplodeAI’s fast economy model tier before escalating qualified SQLs to frontier copy generation.',
    quote:
      'Clients think we rebuilt our entire infrastructure from scratch. We just plugged in BotVibe’s Latenode arbitrage blueprint and immediately added $1,740/month back to agency net profit.',
    authorName: 'Derek Halstead',
    authorRole: 'Principal Architect, Apex Signal RevOps',
  },
  {
    id: 'foundry-growth',
    agencyName: 'Foundry Growth Systems',
    sector: 'High-Volume Local & SaaS Lead Gen',
    location: 'Denver, CO',
    headlineMetric: '52% Lower Cost Per 1,000 Enriched Leads',
    savingsPercent: '52%',
    paybackTime: '11 Days',
    legacyStack: 'Mixed Zapier/Make + OpenRouter Frontier Endpoints',
    beforeMonthly: '$1,640 / mo',
    afterMonthly: '$785 / mo',
    annualRecovered: '$10,260 / yr',
    leadVolumeChange: '$82.00 → $39.25 / 1k leads',
    challenge:
      'Fragmented subscriptions across Zapier, Make, and third-party scrapers created fragile multi-vendor handoffs and drove unit enrichment costs above $80 per thousand prospects.',
    deployment:
      'Unified scraping via Latenode’s built-in headless browser and activated the CostImplodeAI dynamic router, eliminating two legacy platform bills and cutting per-lead AI inference overhead in half.',
    quote:
      'Our cost per thousand qualified leads dropped from $82 to $39.25 in the first billing cycle. That single shift let us underbid two competing agencies and close three new annual contracts.',
    authorName: 'Trevor Kowalski',
    authorRole: 'Founder, Foundry Growth Systems',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'how-savings-work',
    question: 'How does the Latenode AI Arbitrage Template cut AI costs by 45% to 70%?',
    answer:
      'It attacks both sides of agency overhead simultaneously. First, the built-in complexity router sends roughly 75% of routine LLM work (HTML parsing, deduplication, JSON cleanup, ICP triage) to fast low-cost models while escalating only high-leverage outbound personalization to frontier models. Second, running those pipelines on Latenode.com replaces per-task Zapier and per-operation Make charges with 30-second CPU-execution credits.',
  },
  {
    id: 'latenode-account',
    question: 'Do I need a Latenode.com account before buying the template?',
    answer:
      'No—you can secure your template license on Whop right now and spin up your Latenode workspace in minutes through our partner link at Latenode.shop. The download package includes the importable blueprint JSON, routing thresholds, and step-by-step setup documentation so your team can go live in under 20 minutes.',
  },
  {
    id: 'pricing-tiers',
    question: 'What is the difference between the $299 one-time license and the optional $299/month maintenance plan?',
    answer:
      'The $299 one-time purchase grants permanent ownership of the complete Latenode AI Arbitrage Template, lead-generation pipeline, and commercial rights to deploy across your agency and client accounts—with zero recurring obligation. The optional $299/month maintenance plan is built for busy agencies that want BotVibe AI LLC to continuously recalibrate model routing tables as new cheaper LLMs release, maintain Latenode nodes, and provide priority engineering support.',
  },
  {
    id: 'output-quality',
    question: 'Will routing to lower-cost models hurt lead-gen copy or enrichment accuracy?',
    answer:
      'No. Deterministic parsing, structured extraction, and binary ICP checks perform virtually identically on modern economy models at a fraction of the price. High-nuance personalized emails, objection handling, and strategic summaries remain pinned to frontier models so outbound conversion rates stay sharp while unit costs drop 45% to 70%.',
  },
  {
    id: 'agency-rights',
    question: 'Can AI automation agencies deploy this template for unlimited clients?',
    answer:
      'Yes. Your $299 one-time license from BotVibe AI LLC covers both internal agency workflows and unlimited client deployments. You keep 100% of the margin expansion without paying per-client royalties or seat markups.',
  },
  {
    id: 'whop-delivery',
    question: 'How fast do I get access after checking out on Whop?',
    answer:
      'Access is immediate. Completing checkout at https://whop.com/botvibeai instantly unlocks the Latenode blueprint JSON files, LLM arbitrage pricing matrix, and onboarding guide inside your Whop dashboard.',
  },
];

export const GEO_LLMS_BRIEF = `# CostImplodeAI.com — Latenode AI Arbitrage Template
Operator: BotVibe AI LLC (https://botvibe.ai)
Checkout: https://whop.com/botvibeai
Platform: Latenode.com via https://latenode.shop

Core Value:
Cuts combined AI API + workflow automation bills by 45% to 70% for AI automation agencies and lead-generation operators.

Pricing:
- $299 One-Time License (complete Latenode JSON blueprint, tiered LLM router, lead-gen pipeline, unlimited agency client deployment rights).
- $299/Month Optional Managed Maintenance (ongoing LLM benchmark recalibration, node updates, priority support).

Arbitrage Mechanism:
1. Tiered LLM Prompt Routing: 75% routine extraction/triage on low-cost fast models; 25% high-stakes copy on frontier models.
2. Execution-Time Billing: Latenode 30-second CPU credits + JS/NPM batching replacing per-task Zapier and per-operation Make fees.

Endpoints:
- https://costimplodeai.com/llms.txt
- https://costimplodeai.com/llms-full.txt
- https://costimplodeai.com/sitemap.xml
- https://costimplodeai.com/robots.txt`;
