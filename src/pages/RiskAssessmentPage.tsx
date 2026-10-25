import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import { RISK_REGISTER } from '../data/content.ts';
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Filter,
  ArrowRight,
  Info,
} from 'lucide-react';

interface RiskAssessmentPageProps {
  onNavigate: (page: PageId) => void;
}

export const RiskAssessmentPage: React.FC<RiskAssessmentPageProps> = ({ onNavigate }) => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');

  const filteredRisks = selectedSeverity === 'All'
    ? RISK_REGISTER
    : RISK_REGISTER.filter((r) => r.severity === selectedSeverity);

  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Enterprise Risk Governance"
        title="Comprehensive Startup Risk Assessment & Mitigation"
        subtitle="Transparent inventory of manufacturing, financial, operational, and regulatory risks—along with active engineering and governance controls."
        onNavigate={onNavigate}
        actionText="View ESG Milestones"
        onAction={() => onNavigate('esg-impact')}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro & Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest">
              Active Risk Matrix & Controls
            </h2>
            <p className="text-forest/75 text-sm mt-1">
              Evaluated on potential impact severity and operational occurrence probability.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-forest/70 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Severity Filter:</span>
            </span>
            {['All', 'High', 'Medium'].map((sev) => (
              <button
                key={sev}
                onClick={() => setSelectedSeverity(sev)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  selectedSeverity === sev
                    ? 'bg-forest text-lime'
                    : 'bg-white border border-forest/15 text-forest/75 hover:bg-forest/5'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>
        </div>

        {/* Risk Items Cards */}
        <div className="grid grid-cols-1 gap-6">
          {filteredRisks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-forest/15 p-6 sm:p-8 shadow-xs hover:border-brand/40 transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-forest/10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    item.severity === 'High' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-brand uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-forest">
                      {item.riskDescription}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md uppercase ${
                    item.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    Severity: {item.severity}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-forest/5 text-forest/80 uppercase">
                    Prob: {item.probability}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
                {/* Mitigation Strategy */}
                <div className="lg:col-span-7 p-4 rounded-2xl bg-brand-light/50 border border-brand/20 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-brand text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Proposed Mitigation Strategy:</span>
                  </div>
                  <p className="text-forest/85 leading-relaxed pl-6">
                    {item.mitigationStrategy}
                  </p>
                </div>

                {/* Monitoring & Audit Plan */}
                <div className="lg:col-span-5 p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-forest text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-forest/60" />
                    <span>Monitoring & Governance Protocol:</span>
                  </div>
                  <p className="text-forest/75 leading-relaxed pl-6">
                    {item.monitoringPlan}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Compliance Pledge Banner */}
        <div className="rounded-3xl bg-forest p-8 sm:p-12 text-softwhite flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-lime bg-forest-light px-3 py-1 rounded-full border border-lime/30">
              Risk Philosophy
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-softwhite mt-3">
              Proactive Prevention Outweighs Warranty Claims
            </h3>
            <p className="text-greygreen text-sm mt-2 leading-relaxed">
              We operate under an open risk register. Every risk factor has a defined engineering owner, test criteria, and escalation procedure before commercial distribution begins.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button
              onClick={() => onNavigate('compliance-contact')}
              className="px-6 py-3.5 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Review Compliance Checklist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
