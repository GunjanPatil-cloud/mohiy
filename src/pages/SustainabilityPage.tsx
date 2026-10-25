import React from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import { SUSTAINABILITY_PILLARS } from '../data/content.ts';
import {
  Recycle,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  ArrowRight,
  Package,
  Sparkles,
} from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: PageId) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Circular Design Mandate"
        title="Our Sustainability Goals & Planned Impact"
        subtitle="Moving folding furniture away from the extract-and-dispose model towards clean circular loops, recycled materials, and zero-solvent finishing."
        onNavigate={onNavigate}
        actionText="View ESG Indicators"
        onAction={() => onNavigate('esg-impact')}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Core Pillars */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Core Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest mt-3">
              Four Planned Environmental Commitments
            </h2>
            <p className="text-forest/75 text-base mt-2">
              True sustainability begins on the CAD screen. By designing for clean disassembly, we ensure every component retains maximum secondary material value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-forest/15 p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-forest text-lime uppercase tracking-wider">
                      {pillar.target}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-forest mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-forest/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-forest/10 flex items-center gap-2 text-xs font-semibold text-brand">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Targeted milestone under lifecycle simulation</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Life-Cycle Assessment (LCA) Protocol Planned */}
        <div className="bg-forest rounded-3xl p-8 sm:p-12 text-softwhite">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-lime bg-forest-light px-3 py-1 rounded-full border border-lime/30">
                Measurement Methodology
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-softwhite tracking-tight">
                No Marketing Gimmicks: Third-Party LCA Verification
              </h2>
              <p className="text-greygreen text-base leading-relaxed">
                Rather than inventing arbitrary "green" badges, Nexlivo will commission an independent Life Cycle Assessment (LCA) conforming to ISO 14040/14044 upon finalizing commercial pilot production.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-forest-dark border border-forest-light">
                  <div className="text-lime font-bold text-xs uppercase">Scope 1 & 2</div>
                  <div className="text-xs text-greygreen mt-1">100% renewable electricity planned for pilot assembly cells.</div>
                </div>
                <div className="p-4 rounded-xl bg-forest-dark border border-forest-light">
                  <div className="text-lime font-bold text-xs uppercase">Packaging</div>
                  <div className="text-xs text-greygreen mt-1">100% unbleached kraft board with molded bagasse pulp. Zero EPS foam.</div>
                </div>
                <div className="p-4 rounded-xl bg-forest-dark border border-forest-light">
                  <div className="text-lime font-bold text-xs uppercase">End-of-Life</div>
                  <div className="text-xs text-greygreen mt-1">Single-tool disassembly under 4 minutes with standard hex driver.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-forest-dark border border-forest-light rounded-2xl p-6 space-y-4">
              <div className="text-sm font-bold text-softwhite pb-2 border-b border-forest-light flex items-center justify-between">
                <span>Material Recovery Targets</span>
                <span className="text-xs text-lime">Target Year 1</span>
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-greygreen mb-1">
                    <span>Recycled Aluminum Frame</span>
                    <span className="font-bold text-lime">Target: 65% PCR</span>
                  </div>
                  <div className="w-full bg-forest-light h-2.5 rounded-full overflow-hidden">
                    <div className="bg-lime h-full w-[65%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-greygreen mb-1">
                    <span>Recycled Polymer Seat Pan</span>
                    <span className="font-bold text-lime">Target: 50% PCR</span>
                  </div>
                  <div className="w-full bg-forest-light h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand h-full w-[50%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-greygreen mb-1">
                    <span>Plastic-Free Protective Packaging</span>
                    <span className="font-bold text-lime">Target: 100%</span>
                  </div>
                  <div className="w-full bg-forest-light h-2.5 rounded-full overflow-hidden">
                    <div className="bg-lime h-full w-[100%]" />
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-greygreen italic pt-2">
                * Planned goals established for raw material supplier contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Prompt */}
        <div className="bg-white rounded-3xl border border-forest/15 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-forest">
              Explore Our Supply Chain & Operations Blueprint
            </h3>
            <p className="text-xs text-forest/70 mt-1">
              Learn how we select ethical suppliers and plan buffer inventory to avoid supply disruptions.
            </p>
          </div>
          <button
            onClick={() => onNavigate('supply-chain')}
            className="px-5 py-3 rounded-xl bg-forest hover:bg-forest-light text-lime font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <span>Supply Chain Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
