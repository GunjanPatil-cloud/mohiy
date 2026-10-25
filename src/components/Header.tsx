import React, { useState, useEffect, useRef } from 'react';
import { PageId, NavItem } from '../types.ts';
import { NAVIGATION_ITEMS } from '../data/content.ts';
import { Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [operationsOpen, setOperationsOpen] = useState(false);
  const [governanceOpen, setGovernanceOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Close menus on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setOperationsOpen(false);
        setGovernanceOpen(false);
        setSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setOperationsOpen(false);
    setGovernanceOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const operationsPages: NavItem[] = NAVIGATION_ITEMS.filter(
    (item) => item.category === 'Operations & Business'
  );

  const governancePages: NavItem[] = NAVIGATION_ITEMS.filter(
    (item) => item.category === 'Governance & Contact'
  );

  const filteredPages = searchQuery.trim()
    ? NAVIGATION_ITEMS.filter(
        (item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : NAVIGATION_ITEMS;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-forest/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left rounded-lg p-1 transition-transform focus-visible:outline-brand"
              aria-label="Nexlivo Home"
            >
              <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-lime shadow-xs group-hover:bg-brand transition-colors">
                {/* Custom Minimal Chair Silhouette Vector */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 21l3-12" />
                  <path d="M19 21l-3-12" />
                  <path d="M7 14h10" />
                  <path d="M8 9h8" />
                  <path d="M9 3h6v6H9z" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-forest block leading-none">
                  Nexlivo
                </span>
                <span className="text-[10px] font-medium tracking-wider uppercase text-forest/70 block mt-1">
                  Smart Seating. Lasting Comfort.
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'home'
                  ? 'text-forest bg-forest/8'
                  : 'text-forest/80 hover:text-forest hover:bg-forest/5'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('chairs')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'chairs'
                  ? 'text-forest bg-forest/8'
                  : 'text-forest/80 hover:text-forest hover:bg-forest/5'
              }`}
            >
              Our Chairs
            </button>

            <button
              onClick={() => handleNavClick('why-choose')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'why-choose'
                  ? 'text-forest bg-forest/8'
                  : 'text-forest/80 hover:text-forest hover:bg-forest/5'
              }`}
            >
              Why Nexlivo
            </button>

            <button
              onClick={() => handleNavClick('who-we-serve')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'who-we-serve'
                  ? 'text-forest bg-forest/8'
                  : 'text-forest/80 hover:text-forest hover:bg-forest/5'
              }`}
            >
              Who We Serve
            </button>

            <button
              onClick={() => handleNavClick('strategic-plan')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-1.5 ${
                activePage === 'strategic-plan'
                  ? 'text-forest bg-lime/30 border border-lime'
                  : 'text-forest bg-lime/15 hover:bg-lime/25 border border-lime/40'
              }`}
              title="View the 8-Part Comprehensive Sustainability and Scalability Plan"
            >
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>8-Part Scaling Plan</span>
            </button>

            {/* Operations Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setOperationsOpen(!operationsOpen);
                  setGovernanceOpen(false);
                }}
                onBlur={() => setTimeout(() => setOperationsOpen(false), 200)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  operationsPages.some((p) => p.id === activePage)
                    ? 'text-forest bg-forest/8'
                    : 'text-forest/80 hover:text-forest hover:bg-forest/5'
                }`}
                aria-expanded={operationsOpen}
                aria-haspopup="true"
              >
                <span>Operations & Plan</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${operationsOpen ? 'rotate-180' : ''}`} />
              </button>

              {operationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white border border-forest/10 shadow-lg p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-forest/60">
                    Production & Strategy
                  </div>
                  {operationsPages.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs flex flex-col gap-0.5 transition-colors ${
                        activePage === item.id
                          ? 'bg-brand/10 text-brand font-semibold'
                          : 'hover:bg-forest/5 text-forest/80 hover:text-forest'
                      }`}
                    >
                      <span className="font-semibold text-sm">{item.label}</span>
                      <span className="text-[11px] text-forest/60 line-clamp-1">{item.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Governance & Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setGovernanceOpen(!governanceOpen);
                  setOperationsOpen(false);
                }}
                onBlur={() => setTimeout(() => setGovernanceOpen(false), 200)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  governancePages.some((p) => p.id === activePage)
                    ? 'text-forest bg-forest/8'
                    : 'text-forest/80 hover:text-forest hover:bg-forest/5'
                }`}
                aria-expanded={governanceOpen}
                aria-haspopup="true"
              >
                <span>Governance & Contact</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${governanceOpen ? 'rotate-180' : ''}`} />
              </button>

              {governanceOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 rounded-2xl bg-white border border-forest/10 shadow-lg p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-forest/60">
                    Trust & Organization
                  </div>
                  {governancePages.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs flex flex-col gap-0.5 transition-colors ${
                        activePage === item.id
                          ? 'bg-brand/10 text-brand font-semibold'
                          : 'hover:bg-forest/5 text-forest/80 hover:text-forest'
                      }`}
                    >
                      <span className="font-semibold text-sm">{item.label}</span>
                      <span className="text-[11px] text-forest/60 line-clamp-1">{item.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Quick Actions (Search Modal + Direct CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-xl text-forest/70 hover:text-forest hover:bg-forest/5 transition-colors border border-forest/10 flex items-center gap-2 text-xs"
              title="Search all 13 pages (Ctrl+K)"
              aria-label="Open search menu"
            >
              <Search className="w-4 h-4 text-forest/80" />
              <span className="text-forest/60">Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-greygreen/50 text-forest/70 rounded">⌘K</kbd>
            </button>

            <button
              onClick={() => handleNavClick('compliance-contact')}
              className="px-4 py-2.5 rounded-xl bg-forest hover:bg-forest-light text-lime font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-forest hover:bg-forest/5"
              aria-label="Search pages"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-forest hover:bg-forest/5"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          ref={mobileNavRef}
          className="lg:hidden border-t border-forest/10 bg-white px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-xl"
        >
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-forest/50 mb-2">
                Overview & Chairs
              </div>
              <div className="grid grid-cols-1 gap-1">
                {NAVIGATION_ITEMS.filter(
                  (i) => i.category === 'Overview' || i.category === 'Chairs & Value'
                ).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      activePage === item.id
                        ? 'bg-forest text-lime font-bold'
                        : 'text-forest hover:bg-forest/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs opacity-60">→</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-forest/50 mb-2">
                Operations & Business Model
              </div>
              <div className="grid grid-cols-1 gap-1">
                {operationsPages.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      activePage === item.id
                        ? 'bg-forest text-lime font-bold'
                        : 'text-forest hover:bg-forest/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs opacity-60">→</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-forest/50 mb-2">
                Governance, Team & Contact
              </div>
              <div className="grid grid-cols-1 gap-1">
                {governancePages.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      activePage === item.id
                        ? 'bg-forest text-lime font-bold'
                        : 'text-forest hover:bg-forest/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs opacity-60">→</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-forest/10 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('strategic-plan')}
                className="w-full py-3 rounded-xl bg-forest text-lime font-bold text-sm text-center flex items-center justify-center gap-2 border border-lime/30"
              >
                <span>8-Part Sustainability & Scaling Plan</span>
                <span>→</span>
              </button>
              <button
                onClick={() => handleNavClick('chairs')}
                className="w-full py-3 rounded-xl bg-brand text-white font-bold text-sm text-center"
              >
                Explore Our Chairs
              </button>
              <button
                onClick={() => handleNavClick('business-model')}
                className="w-full py-3 rounded-xl bg-greygreen-light text-forest font-bold text-sm text-center hover:bg-greygreen"
              >
                Our Business Model
              </button>
              <button
                onClick={() => handleNavClick('compliance-contact')}
                className="w-full py-3 rounded-xl bg-forest text-lime font-bold text-sm text-center"
              >
                Contact & Compliance
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instant Search / Quick Switcher Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-forest/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Search pages"
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-forest/15 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-forest/10 flex items-center gap-3">
              <Search className="w-5 h-5 text-forest/60" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Jump to any of the 13 startup sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-forest text-sm font-medium focus:outline-hidden placeholder:text-forest/40"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-md text-forest/40 hover:text-forest"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filteredPages.length === 0 ? (
                <div className="p-6 text-center text-sm text-forest/60">
                  No matching section found for "{searchQuery}".
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {filteredPages.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="w-full text-left p-3 rounded-xl hover:bg-forest/5 flex items-start justify-between group transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-forest group-hover:text-brand">
                            {item.label}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-forest/50 bg-greygreen-light px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-forest/70 mt-0.5">{item.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-forest/30 group-hover:text-brand group-hover:translate-x-1 transition-all mt-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-3 bg-softwhite border-t border-forest/10 flex items-center justify-between text-[11px] text-forest/60">
              <span>Tip: Press <strong>ESC</strong> to dismiss or click a section to jump</span>
              <span>13 Pages Documented</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
