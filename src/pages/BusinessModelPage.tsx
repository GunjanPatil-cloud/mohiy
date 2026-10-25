import React from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import { BUSINESS_MODEL_STREAMS } from '../data/content.ts';
import {
  ShoppingBag,
  Building,
  Store,
  TrendingUp,
  Truck,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  Layers,
} from 'lucide-react';

interface BusinessModelPageProps {
  onNavigate: (page: PageId) => void;
}

export const BusinessModelPage: React.FC<BusinessModelPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Commercial Strategy"
        title="Our Business Model & Go-To-Market Plan"
        subtitle="A diversified revenue engine structured around high-margin direct-to-consumer sales and resilient institutional B2B volume contracts."
        onNavigate={onNavigate}
        actionText="View Financial Outlook"
        onAction={() => onNavigate('financial-outlook')}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Core Revenue Streams */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Revenue Streams
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest mt-3">
              Three Complementary Sales Channels
            </h2>
            <p className="text-forest/75 text-base mt-2">
              By balancing consumer e-commerce with long-term B2B venue contracts, Nexlivo seeks to maintain steady production baseline volumes while building consumer brand equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUSINESS_MODEL_STREAMS.map((stream, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-forest/15 p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-forest text-lime flex items-center justify-center mb-6">
                    {idx === 0 && <ShoppingBag className="w-6 h-6" />}
                    {idx === 1 && <Building className="w-6 h-6" />}
                    {idx === 2 && <Store className="w-6 h-6" />}
                  </div>

                  <span className="text-[11px] font-bold text-brand bg-brand-light px-2.5 py-1 rounded-md uppercase">
                    {stream.sharePlanned}
                  </span>

                  <h3 className="font-display text-xl font-bold text-forest mt-4 mb-2">
                    {stream.title}
                  </h3>

                  <p className="text-sm text-forest/75 leading-relaxed mb-6">
                    {stream.description}
                  </p>

                  <div className="p-4 rounded-xl bg-softwhite border border-forest/10 text-xs space-y-1">
                    <span className="font-bold text-forest block">Strategic Focus:</span>
                    <p className="text-forest/70">{stream.focus}</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-forest/10">
                  <button
                    onClick={() => onNavigate('compliance-contact')}
                    className="text-xs font-bold text-forest hover:text-brand flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Channel Partner Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Stage Proposed Growth Strategy */}
        <div className="bg-forest rounded-3xl p-8 sm:p-12 text-softwhite">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-lime bg-forest-light px-3 py-1 rounded-full border border-lime/30">
              Phased Scaling
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-softwhite mt-3">
              Proposed 3-Stage Growth Roadmap
            </h2>
            <p className="text-greygreen text-base mt-2">
              We favor disciplined, proof-based capital deployment over reckless expansion. Tooling and marketing outlays are unlocked only upon reaching verified technical and order milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="p-6 rounded-2xl bg-forest-dark border border-forest-light space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-lime uppercase tracking-widest">Phase 1</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-lime/10 text-lime font-bold">Months 1–6</span>
              </div>
              <h3 className="font-display text-xl font-bold text-softwhite">
                Validation & Tooling Qualification
              </h3>
              <ul className="space-y-2 text-xs text-greygreen">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                  <span>CNC soft tooling & 500-unit pilot production run</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                  <span>ANSI/BIFMA X5.1 lab proof testing and certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                  <span>Trial deployment across 5 anchor regional venues</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="p-6 rounded-2xl bg-forest-dark border border-forest-light space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-lime uppercase tracking-widest">Phase 2</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-forest-light text-greygreen font-bold">Months 7–18</span>
              </div>
              <h3 className="font-display text-xl font-bold text-softwhite">
                Commercial Scale & D2C Rollout
              </h3>
              <ul className="space-y-2 text-xs text-greygreen">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                  <span>Commission high-volume stamping & extrusion dies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                  <span>Launch direct e-commerce for 2-pack and 4-pack sets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                  <span>Establish regional fulfillment hub with 48h dispatch</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="p-6 rounded-2xl bg-forest-dark border border-forest-light space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-lime uppercase tracking-widest">Phase 3</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-forest-light text-greygreen font-bold">Months 19–36</span>
              </div>
              <h3 className="font-display text-xl font-bold text-softwhite">
                Regional Hubs & Product Extensions
              </h3>
              <ul className="space-y-2 text-xs text-greygreen">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                  <span>Introduce Comfort and Compact specialized variants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                  <span>Establish secondary regional assembly cell to reduce freight</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                  <span>Launch enterprise circular take-back & refurbishment program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Online Enquiries & Custom B2B RFP Handling */}
        <div className="bg-white rounded-3xl border border-forest/15 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-bold text-forest">
              Online Enquiries & B2B Specifier Portal
            </h3>
            <p className="text-sm text-forest/70 mt-2 leading-relaxed">
              We process inbound inquiries with complete engineering transparency: supplying CAD models for spatial planning, material spec sheets, and clear pre-order terms.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button
              onClick={() => onNavigate('supply-chain')}
              className="px-5 py-3 rounded-xl bg-softwhite hover:bg-greygreen-light text-forest font-bold text-xs uppercase tracking-wider transition-colors border border-forest/10"
            >
              Supply Chain & Ops
            </button>
            <button
              onClick={() => onNavigate('compliance-contact')}
              className="px-6 py-3.5 rounded-xl bg-forest hover:bg-forest-light text-lime font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
            >
              Initiate Commercial RFP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
