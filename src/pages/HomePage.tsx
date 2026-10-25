import React from 'react';
import { PageId } from '../types.ts';
import { KEY_BENEFITS, CHAIR_CONCEPTS } from '../data/content.ts';
import { ChairIllustration } from '../components/ChairIllustration.tsx';
import {
  ArrowRight,
  Maximize2,
  ShieldCheck,
  Lock,
  Recycle,
  Sparkles,
  Layers,
  CheckCircle2,
  Building2,
  Briefcase,
  FileCheck2,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Maximize2':
        return <Maximize2 className="w-6 h-6 text-brand" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-brand" />;
      case 'Recycle':
        return <Recycle className="w-6 h-6 text-brand" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand" />;
    }
  };

  return (
    <div className="bg-softwhite">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-forest text-softwhite pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Narrative & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-light border border-lime/30 text-lime text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-lime" />
                <span>Next-Generation Folding Furniture Concept</span>
              </div>

              <div className="space-y-2">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-softwhite leading-none">
                  Smart Seating. <br />
                  <span className="text-lime">Lasting Comfort.</span>
                </h1>
                <p className="text-xl sm:text-2xl text-greygreen font-medium pt-2">
                  Engineered folding chairs designed to nest flatter, endure longer, and support proper human posture.
                </p>
              </div>

              <p className="text-base text-greygreen/90 leading-relaxed max-w-2xl">
                Nexlivo is a manufacturing startup concept reinventing portable seating. By combining aerospace-grade hinge geometry, contoured spinal ergonomics, and pure mechanical fasteners designed for circular disassembly, we eliminate the pain, instability, and waste of disposable folding chairs.
              </p>

              {/* Action Buttons: Explore Our Chairs, Our Business Model, Contact Us */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('chairs')}
                  className="px-6 py-4 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-sm uppercase tracking-wider transition-all shadow-md flex items-center gap-2.5 focus-visible:outline-lime"
                >
                  <span>Explore Our Chairs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('strategic-plan')}
                  className="px-6 py-4 rounded-xl bg-lime/20 hover:bg-lime/30 text-lime font-bold text-sm uppercase tracking-wider transition-all border border-lime/50 flex items-center gap-2 focus-visible:outline-lime shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-lime" />
                  <span>8-Part Scaling Plan</span>
                </button>

                <button
                  onClick={() => onNavigate('business-model')}
                  className="px-6 py-4 rounded-xl bg-forest-light hover:bg-brand text-softwhite font-bold text-sm uppercase tracking-wider transition-all border border-forest-light focus-visible:outline-lime"
                >
                  Our Business Model
                </button>

                <button
                  onClick={() => onNavigate('compliance-contact')}
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-softwhite font-bold text-sm uppercase tracking-wider transition-all backdrop-blur-xs focus-visible:outline-white"
                >
                  Contact Us
                </button>
              </div>

              {/* Status Banner */}
              <div className="pt-6 border-t border-forest-light/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-greygreen">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  <span>Pre-Production Validation Stage</span>
                </div>
                <div>•</div>
                <div>Zero Glue Mechanical Fasteners</div>
                <div>•</div>
                <div>Sub-45mm Stowed Footprint Target</div>
              </div>
            </div>

            {/* Right Column: Hero Concept Vector Diagram */}
            <div className="lg:col-span-5 relative">
              <ChairIllustration type="hero" className="w-full max-w-lg mx-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic 8-Module Syllabus Spotlight Banner */}
      <section className="bg-forest-dark border-y border-forest-light py-10 text-softwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-forest to-forest-light/90 rounded-3xl p-6 sm:p-8 border border-lime/20 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 text-lime text-xs font-bold uppercase tracking-wider">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Executive Framework Deliverable</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-softwhite">
                Comprehensive Sustainability & Scalability Plan
              </h3>
              <p className="text-greygreen text-sm leading-relaxed">
                Explore our full 8-module strategic dossier: Sustainability Audit, Business Model Canvas Redesign with Automation, Green Supply Chain, Multi-Year Financial Projections, Risk Contingency Roadmap, Live ESG Impact Dashboard, 10-to-100+ Team Scaling, and Master Implementation Gantt.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('strategic-plan')}
                className="px-6 py-3.5 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <span>Launch 8-Part Strategy Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-20 bg-white border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Why We Are Building This
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest mt-3 tracking-tight">
              Four Core Engineering Principles
            </h2>
            <p className="text-forest/70 text-base mt-2">
              Most folding chairs sacrifice human posture for convenience or use cheap rivets that loosen within a year. Nexlivo is engineered from the ground up to solve these structural trade-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {KEY_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-softwhite border border-forest/10 hover:border-brand/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-forest/10 flex items-center justify-center mb-5 group-hover:bg-brand-light transition-colors">
                    {getIcon(benefit.iconName)}
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold text-brand bg-brand-light mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="font-display text-lg font-bold text-forest group-hover:text-brand transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-forest/70 mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Concepts Preview */}
      <section className="py-20 bg-softwhite border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
                Product Lineup Concepts
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest mt-3 tracking-tight">
                Three Distinct Seating Architectures
              </h2>
              <p className="text-forest/70 text-base mt-2 max-w-2xl">
                Targeted configurations tailored for high-capacity venue operations, ergonomic professional spaces, and compact urban dwellings.
              </p>
            </div>

            <button
              onClick={() => onNavigate('chairs')}
              className="px-5 py-3 rounded-xl bg-forest hover:bg-forest-light text-lime font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 self-start md:self-auto"
            >
              <span>View Full Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CHAIR_CONCEPTS.map((chair) => (
              <div
                key={chair.id}
                className="bg-white rounded-2xl border border-forest/10 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-forest/5 text-forest/80 uppercase tracking-wider">
                      {chair.conceptStatus}
                    </span>
                    <span className="text-xs text-forest/60">
                      Fold: {chair.dimensionsEstimated.folded.split('×')[1] || '< 45mm'}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-forest mb-2">
                    {chair.name}
                  </h3>
                  <p className="text-sm text-forest/70 mb-4 line-clamp-2">
                    {chair.tagline}
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-forest/80 bg-softwhite p-3 rounded-xl border border-forest/5">
                    <div className="font-semibold text-forest">Target Load: {chair.dimensionsEstimated.loadCapacityTarget}</div>
                    <div>Target Weight: {chair.dimensionsEstimated.targetWeight}</div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-forest/70 mb-4">
                    {chair.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-greygreen-light border-t border-forest/5">
                  <button
                    onClick={() => onNavigate('chairs')}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-forest hover:text-softwhite text-forest text-xs font-bold uppercase tracking-wider transition-all border border-forest/10 flex items-center justify-center gap-1.5"
                  >
                    <span>Inspect Design Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Overview & Venture Roadmap */}
      <section className="py-20 bg-forest text-softwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-lime bg-forest-light px-3 py-1 rounded-full border border-lime/30">
                Business Overview
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-softwhite tracking-tight">
                A Scalable Model Built on Direct Demand & Institutional Volumes
              </h2>
              <p className="text-greygreen text-base leading-relaxed">
                Nexlivo is positioned to capture value across multiple channels. Our business strategy combines high-margin direct-to-consumer online packs for urban apartments with predictable volume contracts for event rental firms, universities, and co-working spaces.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-forest-light border border-forest/30">
                  <Building2 className="w-5 h-5 text-lime mb-2" />
                  <div className="font-bold text-softwhite text-sm">Institutional B2B</div>
                  <div className="text-xs text-greygreen mt-1">
                    Rolling transport cart bundles and contract sample trials.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-forest-light border border-forest/30">
                  <Briefcase className="w-5 h-5 text-lime mb-2" />
                  <div className="font-bold text-softwhite text-sm">Direct-to-Consumer</div>
                  <div className="text-xs text-greygreen mt-1">
                    2-packs and 4-packs flat-boxed with zero styrofoam.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('business-model')}
                  className="px-6 py-3.5 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <span>Read Full Business Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('production-process')}
                  className="px-6 py-3.5 rounded-xl bg-forest-light hover:bg-brand text-softwhite font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Production Process
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-forest-dark border border-forest-light rounded-2xl p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-forest-light">
                  <span className="font-display font-bold text-lg text-softwhite">
                    Startup Validation Milestones
                  </span>
                  <span className="text-[10px] uppercase font-bold text-lime bg-lime/10 px-2.5 py-1 rounded-md">
                    Planning Phase
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-lime/10 text-lime flex items-center justify-center font-bold text-xs shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="font-semibold text-softwhite text-sm">Design & Finite Element Analysis</h4>
                      <p className="text-xs text-greygreen mt-0.5">
                        Completed computational stress models optimizing hinge load transfer and material reduction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-lime text-forest flex items-center justify-center font-bold text-xs shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="font-semibold text-softwhite text-sm">Physical Prototype Testing (Current)</h4>
                      <p className="text-xs text-greygreen mt-0.5">
                        Fabricating first metal prototypes for lab proof-load drop tests and ergonomic validation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-forest-light text-greygreen flex items-center justify-center font-bold text-xs shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="font-semibold text-softwhite text-sm">Independent Lab Certification</h4>
                      <p className="text-xs text-greygreen mt-0.5">
                        Planned testing against ANSI/BIFMA X5.1 and EN 12520 durability standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-forest-light text-greygreen flex items-center justify-center font-bold text-xs shrink-0">
                      04
                    </div>
                    <div>
                      <h4 className="font-semibold text-softwhite text-sm">Commercial Pilot Run</h4>
                      <p className="text-xs text-greygreen mt-0.5">
                        Staged production run for verified commercial test accounts and design feedback.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-forest-light text-[11px] text-greygreen flex items-center justify-between">
                  <span>Transparent timeline subject to engineering gates</span>
                  <button
                    onClick={() => onNavigate('compliance-contact')}
                    className="text-lime hover:underline font-semibold"
                  >
                    View Compliance Status →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Grid */}
      <section className="py-16 bg-softwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greygreen-light border border-forest/15 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Participate in Our Beta Testing
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-forest mt-2">
                Evaluate Nexlivo in Your Venue or Office
              </h3>
              <p className="text-forest/70 text-sm mt-2">
                Are you an event manager, facilities director, or interior designer? Register for prototype sample reviews and pre-order pilot allocations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                onClick={() => onNavigate('who-we-serve')}
                className="px-5 py-3 rounded-xl bg-white hover:bg-forest hover:text-softwhite text-forest font-bold text-xs uppercase tracking-wider transition-all border border-forest/15"
              >
                Who We Serve
              </button>
              <button
                onClick={() => onNavigate('compliance-contact')}
                className="px-6 py-3.5 rounded-xl bg-forest hover:bg-forest-light text-lime font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
