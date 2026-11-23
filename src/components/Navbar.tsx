import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { LINKS } from '../data/arbitrageData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string, hash?: string) => void;
}

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (hash: string) => {
    setMobileOpen(false);
    onNavigate('/', hash);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070709]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            onNavigate('/');
          }}
          className="font-display text-lg font-extrabold tracking-tight text-[#F5F5F7] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5A1F]"
        >
          CostImplode<span className="text-[#FF5A1F]">AI</span>
        </a>

        {/* Zone 2: 4 Concise Single-Line Text Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]"
        >
          <a
            href="#calculator"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#calculator');
            }}
            className={`transition-colors duration-150 hover:text-white hover:underline underline-offset-8 decoration-[#FF5A1F] whitespace-nowrap shrink-0 ${
              currentPath === '/' ? '' : 'text-[#A1A1AA]'
            }`}
          >
            Calculator
          </a>
          <a
            href="#arbitrage"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#arbitrage');
            }}
            className="transition-colors duration-150 hover:text-white hover:underline underline-offset-8 decoration-[#FF5A1F] whitespace-nowrap shrink-0"
          >
            Arbitrage
          </a>
          <a
            href="#case-studies"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#case-studies');
            }}
            className="transition-colors duration-150 hover:text-white hover:underline underline-offset-8 decoration-[#FF5A1F] whitespace-nowrap shrink-0"
          >
            Case Studies
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#faq');
            }}
            className="transition-colors duration-150 hover:text-white hover:underline underline-offset-8 decoration-[#FF5A1F] whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={LINKS.whopCheckout}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md bg-[#FF5A1F] px-4 py-2 text-sm font-semibold text-[#070709] transition-colors duration-150 hover:bg-[#FF733E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F] whitespace-nowrap shrink-0"
          >
            <span>Get Template — $299</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-[#F5F5F7] md:hidden hover:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0C0C10] px-5 py-4 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {[
              { label: 'Calculator', hash: '#calculator' },
              { label: 'Arbitrage', hash: '#arbitrage' },
              { label: 'Case Studies', hash: '#case-studies' },
              { label: 'Pricing', hash: '#pricing' },
              { label: 'FAQ', hash: '#faq' },
            ].map((item) => (
              <a
                key={item.hash}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.hash);
                }}
                className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-[#E4E4E7] hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
