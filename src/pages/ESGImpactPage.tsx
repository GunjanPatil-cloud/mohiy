import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import { ESG_BENCHMARKS } from '../data/content.ts';
import {
  Leaf,
  Users,
  Building,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Shield,
  Sparkles,
} from 'lucide-react';

interface ESGImpactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ESGImpactPage: React.FC<ESGImpactPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Environmental' | 'Social' | 'Governance'>('All');

  const filteredMetrics = activeTab === 'All'
    ? ESG_BENCHMARKS
    : ESG_BENCHMARKS.filter((m) => m.pillar === activeTab);

  const getPillarIcon = (pillar: string) => {
    switch (pillar) {
      case 'Environmental':
        return <Leaf className="w-5 h-5 text-brand" />;
      case 'Social':
        return <Users className="w-5 h-5 text-brand" />;
      case 'Governance':
        return <Building className="w-5 h-5 text-brand" />;
      default:
        return <Shield className="w-5 h-5 text-brand" />;
    }
  };

  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Accountability & Impact"
        title="ESG & Impact Framework (Target Milestones)"
        subtitle="Tangible environmental, social, and governance metrics established to hold Nexlivo accountable throughout its development lifecycle."
        onNavigate={onNavigate}
        actionText="View Team & Culture"
        onAction={() => onNavigate('team-culture')}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Pillar Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest">
              Planned Impact Indicators
            </h2>
            <p className="text-forest/75 text-sm mt-1">
              Select an ESG pillar to inspect targeted milestones and planned validation methods.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Environmental', 'Social', 'Governance'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === tab
                    ? 'bg-forest text-lime'
                    : 'bg-white border border-forest/15 text-forest/75 hover:bg-forest/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMetrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-forest/15 p-8 shadow-xs flex flex-col justify-between hover:border-brand/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-greygreen-light flex items-center justify-center">
                      {getPillarIcon(item.pillar)}
                    </div>
                    <span className="text-xs font-bold text-brand uppercase tracking-wider">
                      {item.pillar} Pillar
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-forest text-lime uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-forest mb-3">
                  {item.objective}
                </h3>

                <p className="text-sm text-forest/80 leading-relaxed mb-6 bg-softwhite p-4 rounded-2xl border border-forest/5">
                  <strong className="text-forest block mb-1">Target Milestone:</strong>
                  {item.plannedMetric}
                </p>
              </div>

              <div className="pt-4 border-t border-forest/10 flex items-start gap-2.5 text-xs text-forest/70">
                <FileCheck2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="text-forest">Verification Protocol: </strong>
                  <span>{item.verificationMethod}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Transparency Promise */}
        <div className="bg-forest rounded-3xl p-8 sm:p-12 text-softwhite">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-lime bg-forest-light px-3 py-1 rounded-full border border-lime/30">
              Corporate Integrity
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-softwhite mt-3">
              Independent Audits & Public Disclosures
            </h3>
            <p className="text-greygreen text-sm mt-2 leading-relaxed">
              We pledge to publish complete third-party testing certificates and supplier ethical compliance audits once operations commence. Green claims must be proven by certified laboratories, not marketing departments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
