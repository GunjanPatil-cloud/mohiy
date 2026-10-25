import React from 'react';
import { PageId } from '../types.ts';
import { NAVIGATION_ITEMS } from '../data/content.ts';
import { ShieldCheck, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const chairLinks = NAVIGATION_ITEMS.filter((i) => i.category === 'Chairs & Value');
  const operationsLinks = NAVIGATION_ITEMS.filter((i) => i.category === 'Operations & Business');
  const governanceLinks = NAVIGATION_ITEMS.filter((i) => i.category === 'Governance & Contact');

  return (
    <footer className="bg-forest text-softwhite pt-16 pb-12 border-t border-forest-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Concept Banner */}
        <div className="bg-forest-dark border border-forest-light rounded-2xl p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 text-lime text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Pre-Production Transparency</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-softwhite">
              Interested in shaping the next generation of seating?
            </h3>
            <p className="text-greygreen text-sm mt-1">
              Nexlivo is currently preparing prototype validation and facility commissioning. We welcome early inquiries from venue operators, educational distributors, and commercial buyers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleNav('chairs')}
              className="px-5 py-3 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Chairs</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNav('compliance-contact')}
              className="px-5 py-3 rounded-xl bg-forest-light hover:bg-brand text-softwhite font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Submit Commercial Inquiry</span>
            </button>
          </div>
        </div>

        {/* 4-Column Navigation Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center text-lime shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 21l3-12" />
                  <path d="M19 21l-3-12" />
                  <path d="M7 14h10" />
                  <path d="M8 9h8" />
                  <path d="M9 3h6v6H9z" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-softwhite">
                Nexlivo
              </span>
            </div>
            <p className="text-lime text-xs font-semibold uppercase tracking-wider mb-3">
              Smart Seating. Lasting Comfort.
            </p>
            <p className="text-greygreen text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              An engineering-driven startup dedicated to elevating portable seating through flat-nesting geometry, clean mechanical fasteners, and responsible circular materials.
            </p>

            <div className="space-y-2 text-xs text-greygreen">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-lime" />
                <span>inquiries@nexlivo.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-lime" />
                <span>Startup Concept Headquarters — Design & Prototyping</span>
              </div>
            </div>
          </div>

          {/* Col 2: Products & Value */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-lime mb-4">
              Chairs & Value
            </h4>
            <ul className="space-y-2.5 text-xs text-greygreen">
              {chairLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="hover:text-softwhite hover:underline text-left transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Operations & Model */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-lime mb-4">
              Operations & Model
            </h4>
            <ul className="space-y-2.5 text-xs text-greygreen">
              {operationsLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="hover:text-softwhite hover:underline text-left transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Governance & Contact */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-lime mb-4">
              Governance & Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-greygreen">
              {governanceLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="hover:text-softwhite hover:underline text-left transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal & Startup Concept Disclosure */}
        <div className="pt-8 border-t border-forest-light/60">
          <div className="bg-forest-dark/80 rounded-xl p-4 text-[11px] text-greygreen/90 leading-relaxed mb-6 border border-forest-light/30">
            <strong className="text-softwhite">Startup Concept Disclosure:</strong> Nexlivo is a folding chair manufacturing concept and startup blueprint. Product designs, structural dimensions, weight metrics, and financial figures discussed on this website represent proposed engineering design targets, planning projections, and simulation models. Nexlivo is not yet offering commercial delivery, and no formal safety certifications (e.g. ANSI/BIFMA, EN 12520) have been issued prior to completed third-party testing protocols. All trademarks, designs, and conceptual schematics are proprietary works under active prototype evaluation.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-greygreen/70 gap-4">
            <p>© {new Date().getFullYear()} Nexlivo Concepts. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleNav('compliance-contact')}
                className="hover:text-softwhite transition-colors"
              >
                Privacy & Compliance Notice
              </button>
              <button
                onClick={scrollToTop}
                className="hover:text-lime transition-colors inline-flex items-center gap-1 font-semibold"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
