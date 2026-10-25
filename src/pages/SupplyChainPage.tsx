import React from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import {
  Truck,
  Building2,
  Boxes,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Warehouse,
  GitBranch,
} from 'lucide-react';

interface SupplyChainPageProps {
  onNavigate: (page: PageId) => void;
}

export const SupplyChainPage: React.FC<SupplyChainPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Operational Architecture"
        title="Our Supply Chain & Operations Blueprint"
        subtitle="Structuring resilient supplier selection, buffer inventory management, regional warehousing, and ethical vendor audit protocols."
        onNavigate={onNavigate}
        actionText="View Risk Assessment"
        onAction={() => onNavigate('risk-assessment')}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Operations Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl border border-forest/15 p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-forest mb-2">
                1. Dual-Sourced Supplier Selection
              </h3>
              <p className="text-sm text-forest/75 leading-relaxed mb-4">
                To prevent single-point dependency on raw metal extrusions, we will maintain dual-sourced relationships across regional extruders with signed ISO 9001 and RoHS compliance covenants.
              </p>
              <ul className="space-y-1.5 text-xs text-forest/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>Mandatory mill test certificates with every coil</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>Conflict-free metal sourcing documentation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-forest/15 p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-forest mb-2">
                2. Buffer Inventory & Production Planning
              </h3>
              <p className="text-sm text-forest/75 leading-relaxed mb-4">
                Adopting a demand-driven Material Requirements Planning (MRP) framework. We plan to hold 45 days of standard tubular extrusions and hardware fasteners to insulate against seasonal price spikes.
              </p>
              <ul className="space-y-1.5 text-xs text-forest/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>Modular component interchangeability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>Kanban bin replenishment for fasteners</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-forest/15 p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-forest mb-2">
                3. Storage & Regional Distribution
              </h3>
              <p className="text-sm text-forest/75 leading-relaxed mb-4">
                Leveraging the ultra-flat nesting design to maximize pallet density. A single 48x40 standard pallet fits up to 70 packaged chairs, dramatically reducing regional freight costs and carbon emissions.
              </p>
              <ul className="space-y-1.5 text-xs text-forest/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>40% freight density efficiency advantage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>Centrally located regional distribution partner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Responsible Scaling Protocol */}
        <div className="bg-forest rounded-3xl p-8 sm:p-12 text-softwhite">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-lime bg-forest-light px-3 py-1 rounded-full border border-lime/30">
              Scaling Framework
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-softwhite mt-3">
              Responsible Scaling: No Overleveraged Inventory
            </h2>
            <p className="text-greygreen text-base mt-2">
              Many hardware startups fail by overproducing unvalidated inventory. Nexlivo scales through gated volume batches tied to firm B2B letters of intent and verified customer demand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-4 rounded-xl bg-forest-dark border border-forest-light space-y-1">
              <span className="text-lime font-bold text-xs uppercase">Batch 1 (Planned)</span>
              <div className="text-base font-bold text-softwhite">500 Units</div>
              <p className="text-greygreen">Pilot validation, lab testing certification, and initial field feedback.</p>
            </div>

            <div className="p-4 rounded-xl bg-forest-dark border border-forest-light space-y-1">
              <span className="text-lime font-bold text-xs uppercase">Batch 2 (Planned)</span>
              <div className="text-base font-bold text-softwhite">2,500 Units</div>
              <p className="text-greygreen">Anchor institutional venue rollout and initial D2C e-commerce release.</p>
            </div>

            <div className="p-4 rounded-xl bg-forest-dark border border-forest-light space-y-1">
              <span className="text-lime font-bold text-xs uppercase">Batch 3 (Planned)</span>
              <div className="text-base font-bold text-softwhite">10,000 Units</div>
              <p className="text-greygreen">Multi-cavity production tooling and nationwide distributor contracts.</p>
            </div>

            <div className="p-4 rounded-xl bg-forest-dark border border-forest-light space-y-1">
              <span className="text-lime font-bold text-xs uppercase">Future Horizon</span>
              <div className="text-base font-bold text-softwhite">Scale Expansion</div>
              <p className="text-greygreen">Decentralized assembly cells placed close to regional customer clusters.</p>
            </div>
          </div>
        </div>

        {/* CTA to Financials & Team */}
        <div className="bg-white rounded-3xl border border-forest/15 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-forest">
              Explore Our Financial & Growth Outlook
            </h3>
            <p className="text-xs text-forest/70 mt-1">
              Review our proposed unit economics modeling and break-even capital frameworks.
            </p>
          </div>
          <button
            onClick={() => onNavigate('financial-outlook')}
            className="px-5 py-3 rounded-xl bg-forest hover:bg-forest-light text-lime font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <span>Growth & Financial Outlook</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
