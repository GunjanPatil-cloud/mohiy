import React from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import { TEAM_ROLES } from '../data/content.ts';
import {
  Users,
  ShieldCheck,
  MessageSquare,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Heart,
  HardHat,
} from 'lucide-react';

interface TeamCulturePageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamCulturePage: React.FC<TeamCulturePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Organization & People"
        title="Our Team & Workplace Culture (Planned Organization)"
        subtitle="Designing a culture grounded in mechanical craftsmanship, rigorous worker safety, open technical debate, and zero-defect quality discipline."
        onNavigate={onNavigate}
        actionText="View Compliance Checklist"
        onAction={() => onNavigate('compliance-contact')}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Culture Core Values */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Culture Pillars
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest mt-3">
              Four Working Commitments
            </h2>
            <p className="text-forest/75 text-base mt-2">
              Our proposed work environment is built to attract craftspeople and engineers who care deeply about tangible product durability and ergonomic human health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl border border-forest/15 p-6 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest text-lime flex items-center justify-center">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest">Zero-Harm Safety</h3>
              <p className="text-xs text-forest/75 leading-relaxed">
                Factory safety is our prime directive: automated light curtains, certified hearing protection, and ergonomic assembly rotators protect technicians.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-forest/15 p-6 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest text-lime flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest">Open Escalation</h3>
              <p className="text-xs text-forest/75 leading-relaxed">
                Any assembly technician has the authority to pause the line if a dimensional deviation or hinge burr exceeds safety tolerances.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-forest/15 p-6 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest text-lime flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest">Continuous Training</h3>
              <p className="text-xs text-forest/75 leading-relaxed">
                Structured apprenticeships in CAD modeling, CNC mandrel tube-bending, electrostatic powder application, and ISO quality auditing.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-forest/15 p-6 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest text-lime flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest">Living Wages</h3>
              <p className="text-xs text-forest/75 leading-relaxed">
                Planned competitive wages with equity incentives, comprehensive health benefits, and profit sharing once commercial break-even is achieved.
              </p>
            </div>
          </div>
        </div>

        {/* Proposed Staffing & Functional Roles */}
        <div>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Organizational Roadmap
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest mt-3">
              Proposed Roles & Phased Responsibilities
            </h2>
            <p className="text-forest/75 text-sm mt-1">
              Outlining the functional architecture of our planned manufacturing startup from founding design through scale assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-forest/15 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-forest text-lime uppercase tracking-wider">
                      {role.phase}
                    </span>
                    <span className="text-xs text-forest/60">Position #{idx + 1}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-forest mb-2">
                    {role.role}
                  </h3>

                  <div className="p-3 rounded-xl bg-brand-light/60 border border-brand/20 text-xs text-forest mb-4">
                    <strong className="text-brand block text-[11px] uppercase tracking-wider">Guiding Principle:</strong>
                    "{role.culturePrinciple}"
                  </div>

                  <h4 className="text-xs font-bold text-forest uppercase tracking-wider mb-2">
                    Primary Responsibilities:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-forest/75">
                    {role.primaryResponsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/60">
                  <span>Planned hiring horizon for pilot commissioning</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career & Collaboration Inquiries */}
        <div className="bg-forest rounded-3xl p-8 sm:p-12 text-softwhite flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-softwhite">
              Interested in Joining Our Engineering or Operations Talent Pool?
            </h3>
            <p className="text-greygreen text-sm mt-2 leading-relaxed">
              We welcome introductory notes from industrial designers, CNC machinists, quality engineers, and furniture sales representatives interested in future roles.
            </p>
          </div>
          <button
            onClick={() => onNavigate('compliance-contact')}
            className="px-6 py-3.5 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-xs uppercase tracking-wider transition-colors shadow-sm shrink-0"
          >
            Send Introductory Note
          </button>
        </div>
      </section>
    </div>
  );
};
