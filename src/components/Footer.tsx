import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '../data/arbitrageData';

interface FooterProps {
  onNavigate: (path: string, hash?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#070709] py-12 text-sm text-[#A1A1AA]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-12">
          {/* Brand & Ownership */}
          <div className="md:col-span-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="font-display text-lg font-extrabold tracking-tight text-[#F5F5F7]"
            >
              CostImplode<span className="text-[#FF5A1F]">AI</span>.com
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#A1A1AA]">
              High-converting Latenode AI Arbitrage Template engineered for AI automation agencies and lead-generation operators cutting AI costs by 45% to 70%.
            </p>
            <p className="mt-4 text-xs text-[#D4D4D8]">
              Owned and Operated by{' '}
              <strong className="font-semibold text-white">{LINKS.companyName}</strong>{' '}
              <span aria-hidden="true" className="mx-1 text-white/30">
                ·
              </span>{' '}
              <a
                href={LINKS.botvibeHome}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#FF733E] underline underline-offset-4 hover:text-white"
              >
                BotVibe.ai
              </a>
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-[#F5F5F7]">Navigation</p>
            <ul className="mt-3 space-y-2.5 text-sm">
              {[
                { label: 'ROI Calculator', hash: '#calculator' },
                { label: 'Arbitrage System', hash: '#arbitrage' },
                { label: 'Case Studies', hash: '#case-studies' },
                { label: 'Pricing', hash: '#pricing' },
                { label: 'FAQ', hash: '#faq' },
              ].map((link) => (
                <li key={link.hash}>
                  <a
                    href={link.hash}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/', link.hash);
                    }}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem & Platform Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-[#F5F5F7]">Platform &amp; Discovery</p>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <a
                  href={LINKS.whopCheckout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FF733E] hover:text-white"
                >
                  <span>Whop Checkout ($299)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={LINKS.latenodeAffiliate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  <span>Latenode.com (via Latenode.shop)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={LINKS.botvibeHome}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  <span>BotVibe.ai</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li className="pt-1 font-mono text-xs text-[#71717A]">
                <a href="/llms.txt" className="hover:text-white">
                  llms.txt
                </a>{' '}
                ·{' '}
                <a href="/sitemap.xml" className="hover:text-white">
                  sitemap.xml
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-[#F5F5F7]">Legal</p>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/privacy-policy');
                  }}
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-use"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/terms-of-use');
                  }}
                  className="transition-colors hover:text-white"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Quiet Legal Strip */}
        <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-[#71717A] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {LINKS.companyName}. All rights reserved. Owned and Operated by{' '}
            <a
              href={LINKS.botvibeHome}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-white"
            >
              BotVibe AI LLC (BotVibe.ai)
            </a>
            .
          </p>
          <p>
            Partner Notice: Latenode.shop is an affiliate redirect to Latenode.com.
          </p>
        </div>
      </div>
    </footer>
  );
}
