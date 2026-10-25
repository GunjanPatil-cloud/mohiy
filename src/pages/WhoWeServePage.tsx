import React from 'react';
import { PageId } from '../types.ts';
import { CUSTOMER_SEGMENTS } from '../data/content.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import {
  Home,
  Briefcase,
  GraduationCap,
  CalendarDays,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface WhoWeServePageProps {
  onNavigate: (page: PageId) => void;
}

export const WhoWeServePage: React.FC<WhoWeServePageProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-6 h-6 text-brand" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-brand" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-brand" />;
      case 'CalendarDays':
        return <CalendarDays className="w-6 h-6 text-brand" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand" />;
    }
  };

  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Audience & Market Verticals"
        title="Who We Serve"
        subtitle="Engineered for distinct environments where space is at a premium, mobility is essential, and durability cannot be compromised."
        onNavigate={onNavigate}
        actionText="Submit Pilot Inquiry"
        onAction={() => onNavigate('compliance-contact')}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Grid */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
            Tailored Seating Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest mt-3">
            Target Segments & Operational Demands
          </h2>
          <p className="text-forest/75 text-base mt-2">
            Every customer vertical faces unique friction with temporary seating. Here is how Nexlivo’s planned architectures directly address their pain points.
          </p>
        </div>

        {/* 4 Detailed Segment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CUSTOMER_SEGMENTS.map((segment, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-forest/15 p-8 shadow-xs flex flex-col justify-between hover:border-brand/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-greygreen-light flex items-center justify-center border border-forest/10">
                    {getIcon(segment.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-forest">
                      {segment.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand uppercase tracking-wider">
                      {segment.subtitle}
                    </p>
                  </div>
                </div>

                {/* Pain Point vs Solution comparison */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-red-50/60 border border-red-100 space-y-1 text-xs">
                    <div className="flex items-center gap-2 font-bold text-red-900">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>Existing Market Pain Point:</span>
                    </div>
                    <p className="text-red-800 leading-relaxed pl-6">
                      {segment.painPoint}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-light/60 border border-brand/20 space-y-1 text-xs">
                    <div className="flex items-center gap-2 font-bold text-brand">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                      <span>Nexlivo Planned Solution:</span>
                    </div>
                    <p className="text-forest/80 leading-relaxed pl-6">
                      {segment.solution}
                    </p>
                  </div>
                </div>

                {/* Key Technical Requirements */}
                <div>
                  <h4 className="text-xs font-bold text-forest uppercase tracking-wider mb-2.5">
                    Critical Operational Requirements:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {segment.keyRequirements.map((req, i) => (
                      <span
                        key={i}
                        className="text-xs bg-softwhite border border-forest/10 text-forest font-medium px-3 py-1 rounded-lg"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Segment-specific Action */}
              <div className="mt-8 pt-6 border-t border-forest/10 flex items-center justify-between">
                <span className="text-xs text-forest/60">
                  Concept testing program open
                </span>
                <button
                  onClick={() => onNavigate('compliance-contact')}
                  className="px-4 py-2 rounded-xl bg-forest hover:bg-forest-light text-lime text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Inquire for {segment.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Volume Procurement & Facilities Consultation Banner */}
        <div className="rounded-3xl bg-forest p-8 sm:p-12 text-softwhite flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-lime bg-forest-light px-3 py-1 rounded-full border border-lime/30">
              Bulk Venue Procurement
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-softwhite mt-3">
              Planning Seating for Over 100 Occupants?
            </h3>
            <p className="text-greygreen text-sm mt-2 leading-relaxed">
              We consult directly with facilities directors, school districts, and event managers to model floor plans, cart staging, and field maintenance economics.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button
              onClick={() => onNavigate('business-model')}
              className="px-5 py-3.5 rounded-xl bg-forest-light hover:bg-brand text-softwhite font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Our Business Model
            </button>
            <button
              onClick={() => onNavigate('compliance-contact')}
              className="px-6 py-3.5 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Contact Commercial Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
