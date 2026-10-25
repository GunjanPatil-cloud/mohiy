import React from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import {
  Maximize2,
  Sliders,
  CheckCircle2,
  ShieldCheck,
  Recycle,
  Sparkles,
  ArrowRight,
  Zap,
  Repeat,
  HeartHandshake,
} from 'lucide-react';

interface WhyChoosePageProps {
  onNavigate: (page: PageId) => void;
}

export const WhyChoosePage: React.FC<WhyChoosePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Design Philosophy & Value"
        title="Why Choose Nexlivo Seating"
        subtitle="Addressing the fundamental flaws of legacy folding chairs: poor posture, flimsy rivets, bulky stowing, and rapid landfill disposal."
        onNavigate={onNavigate}
        actionText="Explore Chair Lineup"
        onAction={() => onNavigate('chairs')}
      />

      {/* Main 5 Pillars of Why Nexlivo */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Pillar 1: Space-Saving Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-bold uppercase tracking-wider">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Space-Saving Engineering</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              Reclaim 70% of Storage Footprint with Sub-45mm Flat Stowing
            </h2>
            <p className="text-forest/80 text-base leading-relaxed">
              Conventional metal folding chairs pivot with bulky offset hinges, leaving a wedge-shaped profile that wastes storage capacity and slips off transport dollies.
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              Nexlivo engineers planar alignment: when folded, the seat pan recesses completely inside the leg boundary. A single standard 4-foot mobile cart can cleanly hold up to 35 Nexlivo chairs—transforming event turnover speed and closet utility.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-forest/10">
                <div className="text-2xl font-extrabold text-brand font-display">&lt; 45 mm</div>
                <div className="text-xs text-forest/70 font-semibold mt-1">Folded Profile Depth</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-forest/10">
                <div className="text-2xl font-extrabold text-forest font-display">35 Units</div>
                <div className="text-xs text-forest/70 font-semibold mt-1">Per Standard Mobile Cart</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-forest p-8 text-softwhite space-y-6 shadow-sm border border-forest-light">
              <div className="flex items-center justify-between pb-4 border-b border-forest-light">
                <span className="font-bold text-lime text-xs uppercase tracking-wider">Storage Comparison</span>
                <span className="text-[11px] text-greygreen">Based on 100-chair inventory</span>
              </div>
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Legacy Folding Chairs (Wedge Fold)</span>
                    <span className="text-red-300">~14.5 sq. meters storage required</span>
                  </div>
                  <div className="w-full bg-forest-light h-3 rounded-full overflow-hidden">
                    <div className="bg-red-400 h-full w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Nexlivo Planar Nest Architecture</span>
                    <span className="text-lime">~4.2 sq. meters storage required</span>
                  </div>
                  <div className="w-full bg-forest-light h-3 rounded-full overflow-hidden">
                    <div className="bg-lime h-full w-[28%]" />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-greygreen italic pt-2">
                * Planned engineering analysis based on CAD nesting calculations. Saves facility space for high-density venues and urban spaces.
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 2: Versatile Use */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-forest/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand font-bold text-xs">
                  01
                </div>
                <h4 className="font-bold text-forest text-sm">Dining Overflow</h4>
                <p className="text-xs text-forest/70">
                  Clean styling complements contemporary dining aesthetics without looking like cheap temporary plastic.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-forest/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand font-bold text-xs">
                  02
                </div>
                <h4 className="font-bold text-forest text-sm">Corporate Workshops</h4>
                <p className="text-xs text-forest/70">
                  Quick-connect ganging channels allow facilities teams to stage 100 seminar chairs in minutes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-forest/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand font-bold text-xs">
                  03
                </div>
                <h4 className="font-bold text-forest text-sm">Educational Auditoriums</h4>
                <p className="text-xs text-forest/70">
                  Quiet polymer floor glides prevent floor scraping and disruption during student exams or assemblies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-forest/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand font-bold text-xs">
                  04
                </div>
                <h4 className="font-bold text-forest text-sm">Micro-Living & Patios</h4>
                <p className="text-xs text-forest/70">
                  Lightweight enough to carry outdoors for balcony sun, sturdy enough for daily home office work.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5" />
              <span>Versatile Functionality</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              One Refined System Across Every Environment
            </h2>
            <p className="text-forest/80 text-base leading-relaxed">
              Why should portable furniture look utilitarian and depressing? Nexlivo bridges the gap between commercial-grade strength and Scandinavian aesthetic elegance.
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              Our powder-coated forest and brand-green palettes blend seamlessly into creative agencies, modern living rooms, hotel ballrooms, and university libraries alike.
            </p>
          </div>
        </div>

        {/* Pillar 3: Practical Ergonomics & Anti-Pinch Safety */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Posture & Safety Innovation</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              Eliminating Finger Pinches and Spinal Fatigue
            </h2>
            <p className="text-forest/80 text-base leading-relaxed">
              Anyone who has handled standard folding chairs knows the fear of sheared finger pinches and the discomfort of flat, unyielding plastic backs.
            </p>
            <div className="space-y-3 text-xs text-forest/80">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-forest/10">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="text-forest">Enclosed Hinge Shield:</strong> Pivot links are fully recessed, leaving zero exposed scissor pinch-points during rapid opening or folding.
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-forest/10">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="text-forest">15° Lumbar Declination Angle:</strong> Replaces 90° flat boards with posture-aligned curvature supporting the lower back for multi-hour events.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-greygreen-light rounded-3xl p-8 border border-forest/15 space-y-6">
              <h3 className="font-display font-bold text-xl text-forest">
                Engineering Target Benchmarks
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-forest/10">
                  <div className="text-brand font-bold text-xs uppercase">Cycle Durability</div>
                  <div className="font-display text-xl font-bold text-forest mt-1">100,000+</div>
                  <div className="text-forest/60 mt-1">Target folding cycles tested in prototype rigs</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-forest/10">
                  <div className="text-brand font-bold text-xs uppercase">Fastener Standard</div>
                  <div className="font-display text-xl font-bold text-forest mt-1">Grade 8.8 / SS</div>
                  <div className="text-forest/60 mt-1">Stainless & hardened steel lock fasteners</div>
                </div>
              </div>
              <p className="text-[11px] text-forest/60">
                * Proposed durability benchmarks targeted prior to commercial tooling investment.
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 4 & 5: Quality Process & Responsible Business */}
        <div className="bg-white rounded-3xl border border-forest/15 p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Commitment to Longevity
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-forest mt-3">
              Quality-Focused Processes & Responsible Goals
            </h3>
            <p className="text-forest/70 text-sm mt-2">
              Unlike cheap disposable imports, our business concept is architected around circular economics: modular components that can be repaired, replaced, and recycled without landfilling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-softwhite border border-forest/10 space-y-3">
              <Recycle className="w-6 h-6 text-brand" />
              <h4 className="font-bold text-forest text-base">Replaceable Field Parts</h4>
              <p className="text-xs text-forest/70 leading-relaxed">
                If a venue scuffs a seat shell or wears a floor glide after 5 years, replacement parts can be ordered and swapped with a single hex key.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-softwhite border border-forest/10 space-y-3">
              <Zap className="w-6 h-6 text-brand" />
              <h4 className="font-bold text-forest text-base">Zero-Solvent Powder Coating</h4>
              <p className="text-xs text-forest/70 leading-relaxed">
                Electrostatic dry powder coating eliminates hazardous volatile organic compounds (VOCs) and provides unmatched scratch resistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-softwhite border border-forest/10 space-y-3">
              <HeartHandshake className="w-6 h-6 text-brand" />
              <h4 className="font-bold text-forest text-base">Transparent Verification</h4>
              <p className="text-xs text-forest/70 leading-relaxed">
                We make no unverified greenwashing claims. Every recyclability and strength metric is tied directly to accredited test protocols.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-forest/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-forest/70">
              Want to see how these goals are integrated into our operations?
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate('production-process')}
                className="px-4 py-2 rounded-xl bg-forest-light text-softwhite hover:bg-forest text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Production Process
              </button>
              <button
                onClick={() => onNavigate('sustainability')}
                className="px-4 py-2 rounded-xl bg-brand text-softwhite hover:bg-brand-hover text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Sustainability Goals
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
