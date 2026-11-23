import { useCallback, useEffect, useState } from 'react';
import { ArbitrageArchitecture } from './components/ArbitrageArchitecture';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { PrivacyPolicyPage, TermsOfUsePage } from './components/LegalPages';
import { Navbar } from './components/Navbar';
import { OfferPricingSection } from './components/OfferPricingSection';
import { PricingCalculator } from './components/PricingCalculator';

type RoutePath = '/' | '/privacy-policy' | '/terms-of-use';

function normalizePath(pathname: string): RoutePath {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  if (cleaned === '/privacy-policy') return '/privacy-policy';
  if (cleaned === '/terms-of-use') return '/terms-of-use';
  return '/';
}

export default function App() {
  const [route, setRoute] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (route === '/privacy-policy') {
      document.title = 'Privacy Policy – CostImplodeAI | BotVibe AI LLC';
    } else if (route === '/terms-of-use') {
      document.title = 'Terms of Use – CostImplodeAI | BotVibe AI LLC';
    } else {
      document.title = 'CostImplodeAI – Cut AI & Automation Costs 45–70% on Latenode';
    }
  }, [route]);

  const handleNavigate = useCallback((targetPath: string, hash?: string) => {
    const nextRoute = normalizePath(targetPath);
    const nextUrl = hash ? `${nextRoute}${hash}` : nextRoute;

    if (window.location.pathname + window.location.hash !== nextUrl) {
      window.history.pushState({}, '', nextUrl);
    }
    setRoute(nextRoute);

    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-[#F5F5F7]">
      <Navbar currentPath={route} onNavigate={handleNavigate} />

      <main>
        {route === '/privacy-policy' ? (
          <PrivacyPolicyPage
            onBack={() => handleNavigate('/')}
            onNavigate={(path) => handleNavigate(path)}
          />
        ) : route === '/terms-of-use' ? (
          <TermsOfUsePage
            onBack={() => handleNavigate('/')}
            onNavigate={(path) => handleNavigate(path)}
          />
        ) : (
          <>
            <HeroSection />
            <PricingCalculator />
            <ArbitrageArchitecture />
            <CaseStudiesSection />
            <OfferPricingSection />
            <FaqSection />
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
