import React from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import { PRODUCTION_STAGES } from '../data/content.ts';
import { ChairIllustration } from '../components/ChairIllustration.tsx';
import {
  CheckCircle2,
  Info,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ProductionProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProductionProcessPage: React.FC<ProductionProcessPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Manufacturing Architecture"
        title="Our Production Process (Planned Operations)"
        subtitle="A detailed breakdown of our proposed 5-stage manufacturing flow: from certified alloy verification and CNC profiling to modular assembly and drop-tested packaging."
        onNavigate={onNavigate}
        actionText="View Sustainability Goals"
        onAction={() => onNavigate('sustainability')}
      />

      {/* Advisory Bar */}
      <div className="bg-brand-light border-b border-brand/20 py-3 text-xs text-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Info className="w-4 h-4 text-brand shrink-0" />
          <span>
            <strong>Pre-Production Planning Notice:</strong> The manufacturing workflows, inspection gates, and tooling stations described below represent planned engineering operations for our upcoming pilot production facility.
          </span>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Factory Workflow SVG Illustration */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-forest/15 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Linear Flow Overview
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest mt-3">
              Planned 5-Stage Pilot Line Diagram
            </h2>
            <p className="text-forest/70 text-sm mt-1">
              Engineered with dedicated quality control gates after each step to prevent downstream compounding defects.
            </p>
          </div>

          <ChairIllustration type="factory" className="w-full max-w-3xl mx-auto" />
        </div>

        {/* Detailed 5 Production Stages */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest">
              Stage-by-Stage Technical Implementation
            </h2>
            <p className="text-forest/75 text-sm mt-1">
              Every stage incorporates automated error-proofing (Poka-Yoke) and standardized inspection criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {PRODUCTION_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="bg-white rounded-3xl border border-forest/15 p-6 sm:p-8 shadow-xs hover:border-brand/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Step indicator & title */}
                <div className="lg:col-span-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-lime text-xs font-bold uppercase tracking-wider mb-3">
                    Stage {stage.step} of 5
                  </div>
                  <h3 className="font-display text-xl font-bold text-forest">
                    {stage.stageName}
                  </h3>
                  <p className="text-sm text-forest/70 mt-2 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Planned Actions */}
                <div className="lg:col-span-4 space-y-2">
                  <h4 className="text-xs font-bold text-forest uppercase tracking-wider">
                    Planned Standard Operating Procedures:
                  </h4>
                  <ul className="space-y-2 text-xs text-forest/80">
                    {stage.plannedActions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quality Gate */}
                <div className="lg:col-span-4 bg-softwhite rounded-2xl p-5 border border-forest/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-forest">
                    <ShieldCheck className="w-4 h-4 text-brand" />
                    <span>Quality Control Gate {stage.step}</span>
                  </div>
                  <p className="text-xs text-forest/75 leading-relaxed">
                    {stage.qualityControlGate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Management Standards */}
        <div className="rounded-3xl bg-forest p-8 sm:p-12 text-softwhite flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-lime bg-forest-light px-3 py-1 rounded-full border border-lime/30">
              Quality Assurance Philosophy
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-softwhite mt-3">
              Planned ISO 9001 Alignment from Day One
            </h3>
            <p className="text-greygreen text-sm mt-2 leading-relaxed">
              We are authoring all standard operating procedures (SOPs), lot tracking protocols, and inspection checklists to meet ISO 9001 quality management guidelines before factory ribbon cutting.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button
              onClick={() => onNavigate('supply-chain')}
              className="px-5 py-3.5 rounded-xl bg-forest-light hover:bg-brand text-softwhite font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Supply Chain & Ops
            </button>
            <button
              onClick={() => onNavigate('compliance-contact')}
              className="px-6 py-3.5 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Tour Pilot Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
