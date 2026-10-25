import React, { useState, useEffect } from 'react';
import { PageId } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';

// All 13 Pages
import { HomePage } from './pages/HomePage.tsx';
import { ChairsPage } from './pages/ChairsPage.tsx';
import { WhyChoosePage } from './pages/WhyChoosePage.tsx';
import { WhoWeServePage } from './pages/WhoWeServePage.tsx';
import { BusinessModelPage } from './pages/BusinessModelPage.tsx';
import { ProductionProcessPage } from './pages/ProductionProcessPage.tsx';
import { SustainabilityPage } from './pages/SustainabilityPage.tsx';
import { SupplyChainPage } from './pages/SupplyChainPage.tsx';
import { FinancialOutlookPage } from './pages/FinancialOutlookPage.tsx';
import { RiskAssessmentPage } from './pages/RiskAssessmentPage.tsx';
import { ESGImpactPage } from './pages/ESGImpactPage.tsx';
import { TeamCulturePage } from './pages/TeamCulturePage.tsx';
import { ComplianceContactPage } from './pages/ComplianceContactPage.tsx';
import { StrategicPlanPage } from './pages/StrategicPlanPage.tsx';

const VALID_PAGES: PageId[] = [
  'home',
  'chairs',
  'why-choose',
  'who-we-serve',
  'business-model',
  'production-process',
  'sustainability',
  'supply-chain',
  'financial-outlook',
  'risk-assessment',
  'esg-impact',
  'team-culture',
  'compliance-contact',
  'strategic-plan',
];

export default function App() {
  // Initialize page from window.location.hash
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace(/^#\/?/, '') as PageId;
    return VALID_PAGES.includes(hash) ? hash : 'home';
  };

  const [activePage, setActivePage] = useState<PageId>(getPageFromHash);

  // Sync hash on navigation
  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser Back/Forward hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setActivePage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync document title dynamically
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Nexlivo — Smart Seating. Lasting Comfort.',
      chairs: 'Our Chairs | Nexlivo Folding Furniture Concepts',
      'why-choose': 'Why Choose Nexlivo | Space-Saving & Ergonomics',
      'who-we-serve': 'Who We Serve | Commercial, Education & Homes',
      'business-model': 'Our Business Model | Commercial Strategy',
      'production-process': 'Production Process | 5-Stage Pilot Line Plans',
      sustainability: 'Sustainability Goals | Circular Design & DfD',
      'supply-chain': 'Supply Chain & Operations | Logistics Blueprint',
      'financial-outlook': 'Growth & Financial Outlook | Unit Economics Model',
      'risk-assessment': 'Risk Assessment Register | Mitigation Controls',
      'esg-impact': 'ESG & Impact Framework | Target Milestones',
      'team-culture': 'Our Team & Culture | Planned Roles & Safety',
      'compliance-contact': 'Compliance & Contact | Inquiries & Standards',
      'strategic-plan': 'Sustainability & Scalability Plan | Nexlivo 8-Part Strategy',
    };
    document.title = titles[activePage] || 'Nexlivo — Smart Seating. Lasting Comfort.';
  }, [activePage]);

  // Render active page
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'chairs':
        return <ChairsPage onNavigate={handleNavigate} />;
      case 'why-choose':
        return <WhyChoosePage onNavigate={handleNavigate} />;
      case 'who-we-serve':
        return <WhoWeServePage onNavigate={handleNavigate} />;
      case 'business-model':
        return <BusinessModelPage onNavigate={handleNavigate} />;
      case 'production-process':
        return <ProductionProcessPage onNavigate={handleNavigate} />;
      case 'sustainability':
        return <SustainabilityPage onNavigate={handleNavigate} />;
      case 'supply-chain':
        return <SupplyChainPage onNavigate={handleNavigate} />;
      case 'financial-outlook':
        return <FinancialOutlookPage onNavigate={handleNavigate} />;
      case 'risk-assessment':
        return <RiskAssessmentPage onNavigate={handleNavigate} />;
      case 'esg-impact':
        return <ESGImpactPage onNavigate={handleNavigate} />;
      case 'team-culture':
        return <TeamCulturePage onNavigate={handleNavigate} />;
      case 'compliance-contact':
        return <ComplianceContactPage onNavigate={handleNavigate} />;
      case 'strategic-plan':
        return <StrategicPlanPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-softwhite text-forest selection:bg-lime selection:text-forest">
      {/* Skip to Content Accessible Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 px-4 py-2 bg-forest text-lime rounded-lg font-bold text-xs"
      >
        Skip to main content
      </a>

      {/* Main Header */}
      <Header activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Page Area */}
      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      {/* Comprehensive Dark Forest-Green Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
