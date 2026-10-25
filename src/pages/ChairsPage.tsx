import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { CHAIR_CONCEPTS } from '../data/content.ts';
import { ChairIllustration } from '../components/ChairIllustration.tsx';
import { PageHeader } from '../components/PageHeader.tsx';
import {
  CheckCircle2,
  Info,
  Layers,
  ArrowRight,
  Maximize2,
  Weight,
  Shield,
  HelpCircle,
} from 'lucide-react';

interface ChairsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ChairsPage: React.FC<ChairsPageProps> = ({ onNavigate }) => {
  const [selectedModelId, setSelectedModelId] = useState<string>('classic');
  const [viewModes, setViewModes] = useState<Record<string, 'unfolded' | 'folded'>>({
    classic: 'unfolded',
    comfort: 'unfolded',
    compact: 'unfolded',
  });

  const toggleViewMode = (id: string) => {
    setViewModes((prev) => ({
      ...prev,
      [id]: prev[id] === 'unfolded' ? 'folded' : 'unfolded',
    }));
  };

  const selectedModel = CHAIR_CONCEPTS.find((c) => c.id === selectedModelId) || CHAIR_CONCEPTS[0];

  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Product Concept Lineup"
        title="Engineered For Rapid Setup, Real Posture, and Tight Stowing"
        subtitle="Explore our three proposed folding chair concepts. Each model is engineered around specific ergonomics, transit density, and maintenance requirements."
        onNavigate={onNavigate}
        actionText="Request Commercial Sample"
        onAction={() => onNavigate('compliance-contact')}
      />

      {/* Advisory Banner */}
      <div className="bg-forest-light text-softwhite py-3 border-b border-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-lime shrink-0" />
            <span>
              <strong>Engineering Concept Notice:</strong> The models below represent active pre-production design concepts. Dimensions, target load ratings, and weights are engineering objectives under prototype validation. No commercial sales, official certifications, or retail pricing have been established.
            </span>
          </div>
        </div>
      </div>

      {/* Main Chair Models Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CHAIR_CONCEPTS.map((chair) => {
            const isFolded = viewModes[chair.id] === 'folded';
            return (
              <div
                key={chair.id}
                className="bg-white rounded-3xl border border-forest/15 shadow-sm overflow-hidden flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  {/* Visual Illustration & View Mode Toggle */}
                  <div className="p-6 bg-greygreen-light/40 border-b border-forest/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-forest text-lime uppercase tracking-wider">
                        {chair.conceptStatus}
                      </span>
                      {/* Interactive Folding Toggle */}
                      <button
                        onClick={() => toggleViewMode(chair.id)}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-forest/20 text-forest hover:bg-forest hover:text-white transition-colors flex items-center gap-1.5"
                        title="Toggle folding animation representation"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-brand" />
                        <span>{isFolded ? 'Show Unfolded' : 'Show Folded (Flat)'}</span>
                      </button>
                    </div>

                    <ChairIllustration
                      type={chair.id as 'classic' | 'comfort' | 'compact'}
                      view={isFolded ? 'folded' : 'unfolded'}
                      showDimensions={true}
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h2 className="font-display text-2xl font-bold text-forest">
                      {chair.name}
                    </h2>
                    <p className="text-xs font-semibold text-brand mt-1 uppercase tracking-wider">
                      {chair.designFocus}
                    </p>
                    <p className="text-sm text-forest/75 mt-3 leading-relaxed">
                      {chair.tagline}
                    </p>

                    {/* Target Specifications Block */}
                    <div className="mt-6 p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-2.5 text-xs">
                      <div className="font-bold text-forest uppercase tracking-wider text-[11px] pb-1 border-b border-forest/10 flex items-center justify-between">
                        <span>Proposed Design Targets</span>
                        <span className="text-forest/50 font-normal">Pending lab proof</span>
                      </div>
                      <div className="flex justify-between text-forest/80">
                        <span className="text-forest/60">Unfolded Dimensions:</span>
                        <span className="font-medium">{chair.dimensionsEstimated.unfolded}</span>
                      </div>
                      <div className="flex justify-between text-forest/80">
                        <span className="text-forest/60">Folded Flat Profile:</span>
                        <span className="font-bold text-brand">{chair.dimensionsEstimated.folded}</span>
                      </div>
                      <div className="flex justify-between text-forest/80">
                        <span className="text-forest/60">Target Weight:</span>
                        <span className="font-medium">{chair.dimensionsEstimated.targetWeight}</span>
                      </div>
                      <div className="flex justify-between text-forest/80">
                        <span className="text-forest/60">Load Capacity Goal:</span>
                        <span className="font-semibold text-forest">{chair.dimensionsEstimated.loadCapacityTarget}</span>
                      </div>
                    </div>

                    {/* Proposed Materials */}
                    <div className="mt-5">
                      <h4 className="text-xs font-bold text-forest uppercase tracking-wider mb-2">
                        Key Materials Under Evaluation:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {chair.keyMaterialsProposed.map((mat, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-greygreen-light text-forest/80 px-2.5 py-1 rounded-md"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Engineering Features */}
                    <div className="mt-5">
                      <h4 className="text-xs font-bold text-forest uppercase tracking-wider mb-2">
                        Planned Engineering Highlights:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-forest/75">
                        {chair.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Suited For */}
                    <div className="mt-5">
                      <h4 className="text-xs font-bold text-forest uppercase tracking-wider mb-2">
                        Target Applications:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {chair.bestFor.map((bf, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-brand-light text-forest font-medium px-2 py-0.5 rounded"
                          >
                            {bf}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Disclaimer & Action */}
                <div className="p-6 bg-softwhite border-t border-forest/10 space-y-3">
                  <p className="text-[10px] text-forest/60 leading-tight italic">
                    {chair.disclaimer}
                  </p>
                  <button
                    onClick={() => onNavigate('compliance-contact')}
                    className="w-full py-3 rounded-xl bg-forest hover:bg-forest-light text-lime font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Inquire About {chair.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Concept Comparison Table */}
      <section className="py-16 bg-white border-t border-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Side-by-Side Review
            </span>
            <h2 className="font-display text-3xl font-bold text-forest mt-3">
              Concept Architecture Comparison
            </h2>
            <p className="text-forest/70 text-sm mt-1">
              Engineered for distinct user priorities: high-turnover rental handling, sustained executive comfort, or extreme apartment space optimization.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-forest/15 shadow-xs">
            <table className="w-full text-left text-sm text-forest">
              <thead className="bg-forest text-softwhite text-xs uppercase tracking-wider">
                <tr>
                  <th scope="col" className="p-4 font-semibold">Parameter / Goal</th>
                  <th scope="col" className="p-4 font-semibold">Classic Folding Chair</th>
                  <th scope="col" className="p-4 font-semibold">Comfort Folding Chair</th>
                  <th scope="col" className="p-4 font-semibold">Compact Folding Chair</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10 bg-white text-xs">
                <tr>
                  <td className="p-4 font-bold text-forest bg-softwhite">Primary Focus</td>
                  <td className="p-4">Durable High-Turnover Utility</td>
                  <td className="p-4">Multi-Hour Ergonomic Posture</td>
                  <td className="p-4">Micro-Space & Ultra-Thin Fold</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-forest bg-softwhite">Target Fold Depth</td>
                  <td className="p-4 font-bold text-brand">~45 mm (Flat nest)</td>
                  <td className="p-4 font-bold text-brand">~65 mm (Cushioned nest)</td>
                  <td className="p-4 font-bold text-brand">~32 mm (Ultra-slim profile)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-forest bg-softwhite">Target Weight</td>
                  <td className="p-4">3.8 – 4.2 kg target</td>
                  <td className="p-4">4.6 – 5.1 kg target</td>
                  <td className="p-4">2.9 – 3.3 kg target</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-forest bg-softwhite">Target Proof Load</td>
                  <td className="p-4">136 kg (300 lbs) target</td>
                  <td className="p-4">150 kg (330 lbs) target</td>
                  <td className="p-4">120 kg (265 lbs) target</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-forest bg-softwhite">Lumbar Support</td>
                  <td className="p-4">Curved Polypropylene Slat</td>
                  <td className="p-4">Tensioned Breathable Mesh</td>
                  <td className="p-4">Curved Birch / Composite Core</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-forest bg-softwhite">Fastener Architecture</td>
                  <td className="p-4">100% Mechanical (Zero Glue)</td>
                  <td className="p-4">100% Mechanical (Zero Glue)</td>
                  <td className="p-4">100% Mechanical (Zero Glue)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-forest bg-softwhite">Current Stage</td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded bg-lime text-forest font-bold">Prototype Stage</span></td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded bg-brand/10 text-brand font-bold">Design Concept</span></td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded bg-forest/5 text-forest font-bold">Planned Engineering</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-softwhite border border-forest/10 text-xs text-forest/70 flex items-center justify-between flex-wrap gap-2">
            <span>* All parameters reflect pre-production engineering targets prior to official test certifications.</span>
            <button
              onClick={() => onNavigate('compliance-contact')}
              className="text-brand font-bold hover:underline"
            >
              Learn about our planned testing protocols →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
