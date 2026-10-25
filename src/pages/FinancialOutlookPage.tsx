import React from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import {
  TrendingUp,
  PieChart,
  DollarSign,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Layers,
} from 'lucide-react';

interface FinancialOutlookPageProps {
  onNavigate: (page: PageId) => void;
}

export const FinancialOutlookPage: React.FC<FinancialOutlookPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Financial Framework & Modeling"
        title="Our Growth & Financial Outlook (Proposed Model)"
        subtitle="Transparent financial architecture: unit economics modeling, proposed capital allocation, operating cost structure, and break-even sensitivity."
        onNavigate={onNavigate}
        actionText="View Risk Assessment"
        onAction={() => onNavigate('risk-assessment')}
      />

      {/* Advisory Bar */}
      <div className="bg-forest-light text-softwhite py-3 border-b border-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs">
          <AlertCircle className="w-4 h-4 text-lime shrink-0" />
          <span>
            <strong>Financial Planning Disclosure:</strong> The figures and proportions presented below reflect proposed startup financial models, budgetary estimates, and break-even simulations. They do not represent past financial results or guaranteed investment returns.
          </span>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Unit Economics Conceptual Equation */}
        <div className="bg-white rounded-3xl border border-forest/15 p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Unit Economics Architecture
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest mt-3">
              Contribution Margin Strategy
            </h2>
            <p className="text-forest/75 text-sm mt-1">
              By designing for high assembly velocity and nesting density, our target manufacturing cost leaves healthy gross margin across both retail and wholesale tiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-softwhite border border-forest/10 space-y-2">
              <span className="text-forest/60 font-semibold uppercase tracking-wider">Bill of Materials (BOM)</span>
              <div className="font-display text-lg font-bold text-forest">Target: 38% – 42%</div>
              <p className="text-forest/70">
                Extruded aluminum, recycled resin seat shells, stainless lock fasteners, and floor glides.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-softwhite border border-forest/10 space-y-2">
              <span className="text-forest/60 font-semibold uppercase tracking-wider">Assembly & Finishing</span>
              <div className="font-display text-lg font-bold text-forest">Target: 14% – 18%</div>
              <p className="text-forest/70">
                Automated bending, zero-VOC powder-coating line, torque-controlled assembly, and QA cycle testing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-softwhite border border-forest/10 space-y-2">
              <span className="text-forest/60 font-semibold uppercase tracking-wider">Freight & Packaging</span>
              <div className="font-display text-lg font-bold text-forest">Target: 8% – 12%</div>
              <p className="text-forest/70">
                Sub-45mm flat packing yields high pallet density, cutting freight costs per chair by an estimated 40%.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-forest text-softwhite space-y-2">
              <span className="text-lime font-bold uppercase tracking-wider">Target Gross Margin</span>
              <div className="font-display text-lg font-bold text-lime">Target: 32% – 40%</div>
              <p className="text-greygreen">
                Blended across direct-to-consumer online packs and bulk contract institutional volume tiers.
              </p>
            </div>
          </div>
        </div>

        {/* Proposed Startup Capital Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Capital Budgeting
            </span>
            <h2 className="font-display text-3xl font-bold text-forest">
              Proposed Startup Capital Deployment
            </h2>
            <p className="text-forest/75 text-sm leading-relaxed">
              We allocate the majority of initial seed funds toward tooling, lab verification, and physical quality assurance rather than vanity advertising.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-white border border-forest/10 flex items-start justify-between">
                <div>
                  <strong className="text-forest text-sm">Tooling & Molds (35%)</strong>
                  <p className="text-forest/70 mt-0.5">Extrusion dies, stamping jigs, bending fixtures, and injection cavities.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-forest/10 flex items-start justify-between">
                <div>
                  <strong className="text-forest text-sm">Testing, Certification & Compliance (20%)</strong>
                  <p className="text-forest/70 mt-0.5">ANSI/BIFMA X5.1 lab tests, EN 12520, flammability, and environmental audits.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-forest/10 flex items-start justify-between">
                <div>
                  <strong className="text-forest text-sm">Working Capital & Buffer Inventory (25%)</strong>
                  <p className="text-forest/70 mt-0.5">45-day raw material buffer and initial 500-unit pilot batch production.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-forest/10 flex items-start justify-between">
                <div>
                  <strong className="text-forest text-sm">Commercial Launch & B2B Sales (20%)</strong>
                  <p className="text-forest/70 mt-0.5">E-commerce platform, venue sample program, and distributor partner portal.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-forest rounded-3xl p-8 text-softwhite space-y-6">
              <h3 className="font-display text-xl font-bold text-softwhite">
                Cash-Flow & Break-Even Simulation
              </h3>
              <p className="text-xs text-greygreen leading-relaxed">
                Our model targets break-even operations on a run-rate of approximately 1,200 to 1,500 chairs per month under conservative overhead assumptions.
              </p>

              <div className="space-y-4 text-xs pt-2">
                <div className="p-4 rounded-xl bg-forest-dark border border-forest-light space-y-1">
                  <div className="flex justify-between font-bold text-softwhite">
                    <span>Fixed Monthly Overhead (Estimated)</span>
                    <span className="text-lime">Lean Cell Model</span>
                  </div>
                  <p className="text-greygreen">Covers assembly lease, core technician payroll, software, insurance, and utilities.</p>
                </div>

                <div className="p-4 rounded-xl bg-forest-dark border border-forest-light space-y-1">
                  <div className="flex justify-between font-bold text-softwhite">
                    <span>Target Break-Even Volume</span>
                    <span className="text-lime">1,200 – 1,500 Units / Mo</span>
                  </div>
                  <p className="text-greygreen">Achievable through 3–4 anchor venue or educational accounts plus online retail.</p>
                </div>

                <div className="p-4 rounded-xl bg-forest-dark border border-forest-light space-y-1">
                  <div className="flex justify-between font-bold text-softwhite">
                    <span>Cash Runway Objective</span>
                    <span className="text-lime">18 Months Minimum</span>
                  </div>
                  <p className="text-greygreen">Provides adequate buffer to navigate certification timelines and initial vendor ramp.</p>
                </div>
              </div>

              <p className="text-[10px] text-greygreen italic pt-2">
                * Note: Model numbers are engineering and financial projections for venture planning.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-3xl border border-forest/15 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-forest">
              Review Our Full Risk Management Register
            </h3>
            <p className="text-xs text-forest/70 mt-1">
              Explore how we mitigate supply chain volatility, tool degradation, and cash-flow risks.
            </p>
          </div>
          <button
            onClick={() => onNavigate('risk-assessment')}
            className="px-5 py-3 rounded-xl bg-forest hover:bg-forest-light text-lime font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <span>Risk Assessment Register</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
