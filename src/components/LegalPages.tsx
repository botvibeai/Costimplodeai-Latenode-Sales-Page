import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { LINKS } from '../data/arbitrageData';

interface LegalPageProps {
  onBack: () => void;
  onNavigate: (path: string) => void;
}

export function PrivacyPolicyPage({ onBack, onNavigate }: LegalPageProps) {
  return (
    <article className="mx-auto max-w-[860px] px-5 py-14 sm:px-8 sm:py-20">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#FF733E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span>Back to CostImplodeAI.com</span>
      </button>

      <header className="mt-6 border-b border-white/10 pb-8">
        <p className="text-xs font-medium text-[#A1A1AA]">
          Legal Documentation · Last Updated November 2026
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#C4C4CC]">
          This Privacy Policy explains how <strong>{LINKS.companyName}</strong> (“BotVibe AI,” “we,” “our,” or “us”), operator of <strong>{LINKS.siteDomain}</strong> and{' '}
          <a
            href={LINKS.botvibeHome}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-[#FF5A1F] underline-offset-4"
          >
            BotVibe.ai
          </a>
          , handles information when you visit our website or purchase the Latenode AI Arbitrage Template.
        </p>
      </header>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            CostImplodeAI.com is designed as a lightweight, high-speed sales and ROI estimation site. Values entered into our interactive pricing calculator run strictly inside your browser and are not transmitted to or stored on BotVibe AI LLC servers.
          </p>
          <p className="mt-3">
            When you click a purchase link to complete checkout, you are redirected to our third-party merchant platform, <strong>Whop</strong> ({LINKS.whopCheckout}). Payment details, billing addresses, and account credentials are collected and processed directly by Whop under Whop’s Privacy Policy. BotVibe AI LLC receives only standard transaction confirmation metadata (such as buyer name, email, and license tier) necessary to fulfill template delivery and optional monthly maintenance services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            2. Third-Party Services &amp; Affiliate Redirects
          </h2>
          <p className="mt-2">
            Our site links directly to external partners, including Whop ({LINKS.whopCheckout}) for digital product checkout and Latenode.com via our affiliate redirect domain{' '}
            <a
              href={LINKS.latenodeAffiliate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-[#FF5A1F] underline-offset-4"
            >
              Latenode.shop
            </a>
            . Clicking an affiliate redirect may allow the destination platform to place a referral tracking cookie in accordance with their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            3. How We Use Information
          </h2>
          <p className="mt-2">
            We use transaction contact information strictly to deliver purchased Latenode templates, provide updates under the optional $299/month managed maintenance plan, respond to technical support inquiries, and comply with applicable legal or tax obligations. We never sell or rent customer personal data to third-party data brokers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            4. Data Retention &amp; Your Rights
          </h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of customer support records held by BotVibe AI LLC by contacting us via{' '}
            <a
              href={LINKS.botvibeHome}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-[#FF5A1F] underline-offset-4"
            >
              BotVibe.ai
            </a>{' '}
            or managing your billing profile directly inside your Whop dashboard.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            5. Contact &amp; Operator Details
          </h2>
          <p className="mt-2">
            CostImplodeAI.com is owned and operated by <strong>{LINKS.companyName}</strong> ({LINKS.botvibeHome}). For privacy inquiries or terms review, you may also review our{' '}
            <button
              type="button"
              onClick={() => onNavigate('/terms-of-use')}
              className="font-semibold text-[#FF733E] underline underline-offset-4 hover:text-white"
            >
              Terms of Use
            </button>
            .
          </p>
        </section>
      </div>
    </article>
  );
}

export function TermsOfUsePage({ onBack, onNavigate }: LegalPageProps) {
  return (
    <article className="mx-auto max-w-[860px] px-5 py-14 sm:px-8 sm:py-20">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#FF733E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span>Back to CostImplodeAI.com</span>
      </button>

      <header className="mt-6 border-b border-white/10 pb-8">
        <p className="text-xs font-medium text-[#A1A1AA]">
          Legal Documentation · Last Updated November 2026
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#C4C4CC]">
          By accessing <strong>{LINKS.siteDomain}</strong> or purchasing the Latenode AI Arbitrage Template from <strong>{LINKS.companyName}</strong> ({LINKS.botvibeHome}), you agree to these Terms of Use.
        </p>
      </header>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            1. License Grant &amp; Agency Usage Rights
          </h2>
          <p className="mt-2">
            Upon completing the one-time $299 purchase via Whop ({LINKS.whopCheckout}), BotVibe AI LLC grants you a non-exclusive, perpetual commercial license to import, modify, and deploy the Latenode AI Arbitrage Template across your internal workflows and client automation accounts. You may not resell, redistribute, publish, or package the raw template JSON blueprint itself as a competing template product or public repository.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            2. Pricing, Payments &amp; Optional Managed Maintenance
          </h2>
          <p className="mt-2">
            All purchases and optional $299/month Managed Maintenance subscriptions are billed and managed through Whop ({LINKS.whopCheckout}). Due to the immediate digital download nature of automation blueprints, all one-time template sales are subject to the delivery and refund terms presented at Whop checkout. Monthly maintenance subscriptions may be canceled at any time prior to the next billing date inside Whop.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            3. Savings Estimates &amp; No Guarantee of Specific Results
          </h2>
          <p className="mt-2">
            The 45% to 70% average AI cost reduction figures, interactive ROI calculator outputs, and agency case studies displayed on CostImplodeAI.com reflect typical savings achieved when transitioning from per-task automation tools and unrouted frontier API calls to tiered LLM routing on Latenode. Actual savings and lead-generation revenue depend on your workflow complexity, prompt volume, third-party LLM provider pricing, and operational execution.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            4. Affiliate Disclosure (Latenode.shop)
          </h2>
          <p className="mt-2">
            CostImplodeAI.com and BotVibe AI LLC are independent of Latenode.com. Links to Latenode.com routed via{' '}
            <a
              href={LINKS.latenodeAffiliate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-[#FF5A1F] underline-offset-4"
            >
              Latenode.shop
            </a>{' '}
            are affiliate links—meaning BotVibe AI LLC may earn a referral commission at no additional cost to you when you create or upgrade a Latenode workspace through that redirect.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-[#F5F5F7]">
            5. Limitation of Liability &amp; Governing Operator
          </h2>
          <p className="mt-2">
            Templates and workflows are provided “as is.” BotVibe AI LLC is not liable for third-party API downtime, model provider pricing changes, or Latenode platform interruptions. Owned and operated by <strong>{LINKS.companyName}</strong> (
            <a
              href={LINKS.botvibeHome}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-[#FF5A1F] underline-offset-4"
            >
              BotVibe.ai
            </a>
            ). View our{' '}
            <button
              type="button"
              onClick={() => onNavigate('/privacy-policy')}
              className="font-semibold text-[#FF733E] underline underline-offset-4 hover:text-white"
            >
              Privacy Policy
            </button>{' '}
            or proceed directly to{' '}
            <a
              href={LINKS.whopCheckout}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#FF733E] underline underline-offset-4 hover:text-white"
            >
              <span>Whop Checkout</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
