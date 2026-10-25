import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import {
  STRATEGIC_MODULES,
  SUSTAINABILITY_AUDIT_DATA,
  SCALABLE_BMC_DATA,
  MULTI_YEAR_FINANCIALS_DATA,
  TEAM_SCALING_10_TO_100,
  FINAL_ROADMAP_MILESTONES,
  RISK_REGISTER,
  ESG_BENCHMARKS,
} from '../data/content.ts';
import {
  ClipboardCheck,
  LayoutGrid,
  Truck,
  BarChart3,
  ShieldAlert,
  Activity,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Sliders,
  DollarSign,
  Leaf,
  Layers,
  Building,
  Cpu,
  ChevronRight,
  Eye,
  X,
  Sparkles,
} from 'lucide-react';

interface StrategicPlanPageProps {
  onNavigate: (page: PageId) => void;
}

export const StrategicPlanPage: React.FC<StrategicPlanPageProps> = ({ onNavigate }) => {
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [showSyllabusModal, setShowSyllabusModal] = useState<boolean>(false);
  const [simulatedChairs, setSimulatedChairs] = useState<number>(25000);

  // Dynamic Impact Calculations based on simulated annual volume
  const co2AvoidedTons = Math.round((simulatedChairs * 4.8) / 1000); // ~4.8 kg CO2e saved per chair vs virgin plastic welded alternative
  const plasticDivertedKg = Math.round(simulatedChairs * 1.6); // ~1.6 kg PCR polymer substituted
  const storageReclaimedSqM = Math.round((simulatedChairs / 35) * 1.8); // 35 chairs per cart, ~1.8 sq m saved per cart

  const getModuleIcon = (name: string) => {
    switch (name) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-brand" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-brand" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-brand" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-brand" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-brand" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-brand" />;
      case 'Users':
        return <Users className="w-5 h-5 text-brand" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-brand" />;
      default:
        return <FileText className="w-5 h-5 text-brand" />;
    }
  };

  const activeModule = STRATEGIC_MODULES.find((m) => m.id === activeModuleId) || STRATEGIC_MODULES[0];

  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Strategic Scaling & Sustainability Dossier"
        title="Comprehensive Sustainability & Scalability Plan"
        subtitle="The 8-part strategic roadmap for Nexlivo: Sustainability Audit, Business Model Redesign, Green Supply Chain, Multi-Year Financials, Risk Resilience, ESG Dashboard, Team Scaling (10 to 100+), and Master Implementation Roadmap."
        onNavigate={onNavigate}
        actionText="View Syllabus Source"
        onAction={() => setShowSyllabusModal(true)}
      />

      {/* Syllabus Assignment Banner */}
      <div className="bg-forest-light text-softwhite py-3.5 border-b border-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span>
              <strong>Curriculum Alignment:</strong> Developed in full accordance with the 8-stage mechanical startup sustainability and scalability framework.
            </span>
          </div>
          <button
            onClick={() => setShowSyllabusModal(true)}
            className="text-lime hover:underline font-bold inline-flex items-center gap-1.5 self-start sm:self-auto"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Assignment Source Document</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Module Selector Grid (1 to 8) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
                Interactive Strategic Framework
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest mt-2">
                Select a Strategic Module to Inspect
              </h2>
            </div>
            <span className="text-xs font-bold text-forest/60">
              Module {activeModuleId} of 8 Active
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {STRATEGIC_MODULES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  activeModuleId === mod.id
                    ? 'bg-forest text-softwhite border-forest shadow-md scale-[1.02]'
                    : 'bg-white text-forest border-forest/15 hover:border-brand/40 hover:bg-forest/5'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    activeModuleId === mod.id ? 'bg-lime text-forest' : 'bg-greygreen-light text-forest/80'
                  }`}>
                    #{mod.id}
                  </span>
                  <div className={activeModuleId === mod.id ? 'text-lime' : 'text-brand'}>
                    {getModuleIcon(mod.iconName)}
                  </div>
                </div>
                <div className="font-display text-xs font-bold line-clamp-2 leading-tight">
                  {mod.shortTitle}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Module Header Card */}
        <div className="bg-forest rounded-3xl p-8 text-softwhite shadow-sm border border-forest-light">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-dark border border-lime/30 text-lime text-xs font-bold uppercase tracking-wider mb-3">
                <span>Module {activeModule.id} Deliverable</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-softwhite">
                {activeModule.title}
              </h1>
              <p className="text-greygreen text-sm mt-2 leading-relaxed">
                {activeModule.tagline}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <button
                disabled={activeModuleId === 1}
                onClick={() => setActiveModuleId((prev) => Math.max(1, prev - 1))}
                className="px-4 py-2.5 rounded-xl bg-forest-dark hover:bg-forest-light disabled:opacity-30 text-softwhite text-xs font-bold uppercase tracking-wider transition-colors"
              >
                ← Previous
              </button>
              <button
                disabled={activeModuleId === 8}
                onClick={() => setActiveModuleId((prev) => Math.min(8, prev + 1))}
                className="px-4 py-2.5 rounded-xl bg-lime hover:bg-lime-hover disabled:opacity-30 text-forest text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Next Module →
              </button>
            </div>
          </div>
        </div>

        {/* MODULE 1 CONTENT: Sustainability Audit */}
        {activeModuleId === 1 && (
          <div className="space-y-8 animate-in fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Environmental */}
              <div className="bg-white rounded-3xl border border-forest/15 p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-brand">Pillar 1</span>
                    <h3 className="font-display text-lg font-bold text-forest">Environmental Parameters</h3>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-softwhite border border-forest/10 text-xs text-forest/80">
                  <strong className="block text-forest mb-1">Baseline Industry Status:</strong>
                  {SUSTAINABILITY_AUDIT_DATA.environmental.currentBaseline}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-red-800 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                    <span>Identified Gaps:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-forest/75">
                    {SUSTAINABILITY_AUDIT_DATA.environmental.gapsIdentified.map((g, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-brand uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                    <span>Proposed Improvements:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-forest/85">
                    {SUSTAINABILITY_AUDIT_DATA.environmental.proposedImprovements.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand font-bold">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-brand-light rounded-xl border border-brand/20 text-xs font-semibold text-brand">
                  Target Outcome: {SUSTAINABILITY_AUDIT_DATA.environmental.impactMetric}
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-3xl border border-forest/15 p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-brand">Pillar 2</span>
                    <h3 className="font-display text-lg font-bold text-forest">Social & Ergonomics</h3>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-softwhite border border-forest/10 text-xs text-forest/80">
                  <strong className="block text-forest mb-1">Baseline Industry Status:</strong>
                  {SUSTAINABILITY_AUDIT_DATA.social.currentBaseline}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-red-800 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                    <span>Identified Gaps:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-forest/75">
                    {SUSTAINABILITY_AUDIT_DATA.social.gapsIdentified.map((g, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-brand uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                    <span>Proposed Improvements:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-forest/85">
                    {SUSTAINABILITY_AUDIT_DATA.social.proposedImprovements.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand font-bold">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-brand-light rounded-xl border border-brand/20 text-xs font-semibold text-brand">
                  Target Outcome: {SUSTAINABILITY_AUDIT_DATA.social.impactMetric}
                </div>
              </div>

              {/* Economic */}
              <div className="bg-white rounded-3xl border border-forest/15 p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-brand">Pillar 3</span>
                    <h3 className="font-display text-lg font-bold text-forest">Economic & Viability</h3>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-softwhite border border-forest/10 text-xs text-forest/80">
                  <strong className="block text-forest mb-1">Baseline Industry Status:</strong>
                  {SUSTAINABILITY_AUDIT_DATA.economic.currentBaseline}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-red-800 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                    <span>Identified Gaps:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-forest/75">
                    {SUSTAINABILITY_AUDIT_DATA.economic.gapsIdentified.map((g, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-brand uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                    <span>Proposed Improvements:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-forest/85">
                    {SUSTAINABILITY_AUDIT_DATA.economic.proposedImprovements.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand font-bold">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-brand-light rounded-xl border border-brand/20 text-xs font-semibold text-brand">
                  Target Outcome: {SUSTAINABILITY_AUDIT_DATA.economic.impactMetric}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODULE 2 CONTENT: Scalable Business Model Redesign */}
        {activeModuleId === 2 && (
          <div className="space-y-10 animate-in fade-in">
            {/* 3 Redesign Levers Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-forest/15 space-y-2">
                <div className="flex items-center gap-2 text-brand font-bold text-sm uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>1. Automation Element</span>
                </div>
                <p className="text-xs text-forest/75 leading-relaxed">
                  {SCALABLE_BMC_DATA.scalingElements.automation}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-forest/15 space-y-2">
                <div className="flex items-center gap-2 text-brand font-bold text-sm uppercase">
                  <Building className="w-4 h-4" />
                  <span>2. Outsourcing Element</span>
                </div>
                <p className="text-xs text-forest/75 leading-relaxed">
                  {SCALABLE_BMC_DATA.scalingElements.outsourcing}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-forest/15 space-y-2">
                <div className="flex items-center gap-2 text-brand font-bold text-sm uppercase">
                  <LayoutGrid className="w-4 h-4" />
                  <span>3. Platform Element</span>
                </div>
                <p className="text-xs text-forest/75 leading-relaxed">
                  {SCALABLE_BMC_DATA.scalingElements.platform}
                </p>
              </div>
            </div>

            {/* Redesigned 9-Box Business Model Canvas */}
            <div className="bg-white rounded-3xl border border-forest/15 p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-forest/10">
                <h3 className="font-display text-xl font-bold text-forest">
                  Mechanical Startup Business Model Canvas (Scalable Redesign)
                </h3>
                <span className="text-xs font-bold text-lime bg-forest px-3 py-1 rounded-full uppercase">
                  Engineering Edition
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs">
                {/* Key Partners */}
                <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-3">
                  <span className="font-bold text-forest uppercase tracking-wider block">Key Partners</span>
                  <ul className="space-y-1.5 text-forest/75">
                    {SCALABLE_BMC_DATA.keyPartners.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Key Activities & Resources */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-2">
                    <span className="font-bold text-forest uppercase tracking-wider block">Key Activities</span>
                    <ul className="space-y-1 text-forest/75">
                      {SCALABLE_BMC_DATA.keyActivities.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-2">
                    <span className="font-bold text-forest uppercase tracking-wider block">Key Resources</span>
                    <ul className="space-y-1 text-forest/75">
                      {SCALABLE_BMC_DATA.keyResources.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Value Propositions */}
                <div className="p-4 rounded-2xl bg-brand-light/70 border border-brand/30 space-y-3">
                  <span className="font-bold text-brand uppercase tracking-wider block">Value Propositions</span>
                  <ul className="space-y-2 text-forest/85">
                    {SCALABLE_BMC_DATA.valuePropositions.map((item, i) => (
                      <li key={i} className="font-medium">• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Relationships & Channels */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-2">
                    <span className="font-bold text-forest uppercase tracking-wider block">Customer Relationships</span>
                    <ul className="space-y-1 text-forest/75">
                      {SCALABLE_BMC_DATA.customerRelationships.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-2">
                    <span className="font-bold text-forest uppercase tracking-wider block">Channels</span>
                    <ul className="space-y-1 text-forest/75">
                      {SCALABLE_BMC_DATA.channels.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Customer Segments */}
                <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-3">
                  <span className="font-bold text-forest uppercase tracking-wider block">Customer Segments</span>
                  <ul className="space-y-1.5 text-forest/75">
                    {SCALABLE_BMC_DATA.customerSegments.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Canvas: Cost Structure & Revenue Streams */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-2">
                  <span className="font-bold text-forest uppercase tracking-wider block">Cost Structure</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-forest/75">
                    {SCALABLE_BMC_DATA.costStructure.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-forest text-softwhite space-y-2">
                  <span className="font-bold text-lime uppercase tracking-wider block">Revenue Streams</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-greygreen">
                    {SCALABLE_BMC_DATA.revenueStreams.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODULE 3 CONTENT: Supply Chain & Operations Scaling Plan */}
        {activeModuleId === 3 && (
          <div className="space-y-8 animate-in fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white rounded-3xl border border-forest/15 p-8 shadow-xs space-y-6">
                <h3 className="font-display text-xl font-bold text-forest">
                  Sustainable Hardware Supply Chain Framework
                </h3>
                <p className="text-sm text-forest/75 leading-relaxed">
                  Engineered specifically for mechanical furniture manufacturing, balancing high-cycle structural integrity with circular recovery loops.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-1">
                    <strong className="text-forest text-sm block">1. Sourcing Matrix & Supplier Verification</strong>
                    <p className="text-forest/75 leading-relaxed">
                      All structural extrusions sourced from ISO 14001 / ISO 9001 mills providing lot-specific chemical assay and tensile certificates. Dual regional suppliers prevent single-point disruptions.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-1">
                    <strong className="text-forest text-sm block">2. In-House vs. Outsourced Partitioning</strong>
                    <p className="text-forest/75 leading-relaxed">
                      Heavy capital casting and extrusion are outsourced to established regional heavy industry. High-precision CNC laser tube bending, powder coating, torque fastening, and drop-test QA remain in-house to protect quality and safety.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-1">
                    <strong className="text-forest text-sm block">3. Closed-Loop Powder Coating & Water Reclaim</strong>
                    <p className="text-forest/75 leading-relaxed">
                      Electrostatic powder booths capture 98% of overspray for re-blending. Multi-stage rinse baths employ closed-loop de-ionized filtration, generating zero hazardous effluent discharge.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 space-y-1">
                    <strong className="text-forest text-sm block">4. Circular Take-Back Logistics</strong>
                    <p className="text-forest/75 leading-relaxed">
                      Reverse logistics pallets backhaul retired chairs during new delivery runs. Metal frames are sorted and sold back directly to extrusion partners, closing the domestic alloy loop.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-forest rounded-3xl p-8 text-softwhite space-y-6">
                <h3 className="font-display text-xl font-bold text-softwhite">
                  Freight Density & Logistics Gains
                </h3>
                <p className="text-greygreen text-xs leading-relaxed">
                  Because Nexlivo folds flat under 45 mm, palletization density increases by 40% over wedge-folding chairs.
                </p>

                <div className="space-y-4 text-xs pt-2">
                  <div className="p-4 rounded-xl bg-forest-dark border border-forest-light">
                    <div className="text-lime font-bold text-xs uppercase">Pallet Efficiency</div>
                    <div className="text-xl font-bold text-softwhite mt-1">70 Units / Standard 48x40"</div>
                    <div className="text-greygreen mt-0.5">Vs. 45 units for standard wedge chairs</div>
                  </div>

                  <div className="p-4 rounded-xl bg-forest-dark border border-forest-light">
                    <div className="text-lime font-bold text-xs uppercase">Truckload Capacity</div>
                    <div className="text-xl font-bold text-softwhite mt-1">2,100 Chairs per 53' Trailer</div>
                    <div className="text-greygreen mt-0.5">Saves ~1.8 freight trips per 10,000 units</div>
                  </div>

                  <div className="p-4 rounded-xl bg-forest-dark border border-forest-light">
                    <div className="text-lime font-bold text-xs uppercase">Packaging Footprint</div>
                    <div className="text-xl font-bold text-softwhite mt-1">100% Biodegradable Kraft</div>
                    <div className="text-greygreen mt-0.5">Zero polystyrene foam blocks utilized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODULE 4 CONTENT: Financial Projections for Scaling */}
        {activeModuleId === 4 && (
          <div className="space-y-8 animate-in fade-in">
            {/* 3-Year Model Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MULTI_YEAR_FINANCIALS_DATA.years.map((y, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-forest/15 p-6 shadow-xs space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-forest/10">
                    <span className="text-xs font-bold text-brand uppercase tracking-wider">
                      {y.year.split(':')[0]}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-forest text-lime">
                      {y.units}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-forest">
                    {y.year.split(':')[1]}
                  </h3>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-forest/5">
                      <span className="text-forest/60">Projected Revenue:</span>
                      <span className="font-bold text-forest">{y.revenue}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-forest/5">
                      <span className="text-forest/60">Unit Cost (COGS):</span>
                      <span className="font-medium">{y.cogsPerUnit}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-forest/5">
                      <span className="text-forest/60">Average Selling Price:</span>
                      <span className="font-medium">{y.avgSellingPrice}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-forest/5">
                      <span className="text-forest/60">Gross Margin:</span>
                      <span className="font-bold text-brand">{y.grossMargin}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-forest/5">
                      <span className="text-forest/60">Operating Expenses:</span>
                      <span className="font-medium">{y.operatingExpenses}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-forest/60">EBITDA:</span>
                      <span className="font-bold text-forest">{y.ebitda}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-softwhite border border-forest/10 text-[11px] text-forest/75">
                    <strong>Key Milestone:</strong> {y.keyMilestone}
                  </div>
                </div>
              ))}
            </div>

            {/* Unit Economics Breakdown Table */}
            <div className="bg-white rounded-3xl border border-forest/15 p-6 sm:p-8 shadow-xs">
              <h3 className="font-display text-xl font-bold text-forest mb-4">
                Detailed Unit Cost (COGS) Scaling Trajectory
              </h3>
              <div className="overflow-x-auto rounded-xl border border-forest/10">
                <table className="w-full text-left text-xs text-forest">
                  <thead className="bg-forest text-softwhite">
                    <tr>
                      <th className="p-3 font-semibold">Bill of Materials / Labor Component</th>
                      <th className="p-3 font-semibold">Year 1 (Pilot 6k)</th>
                      <th className="p-3 font-semibold">Year 2 (Scale 24k)</th>
                      <th className="p-3 font-semibold">Year 3 (Mature 60k)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-forest/10">
                    {MULTI_YEAR_FINANCIALS_DATA.unitEconomicsBreakdown.map((row, i) => (
                      <tr key={i} className={i === MULTI_YEAR_FINANCIALS_DATA.unitEconomicsBreakdown.length - 1 ? 'font-bold bg-brand-light/50 text-brand' : ''}>
                        <td className="p-3">{row.item}</td>
                        <td className="p-3">{row.y1}</td>
                        <td className="p-3">{row.y2}</td>
                        <td className="p-3">{row.y3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Capital Requirements Tranches */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {MULTI_YEAR_FINANCIALS_DATA.capitalRequirements.map((req, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-softwhite border border-forest/10 text-xs space-y-1">
                    <span className="font-bold text-forest text-sm block">{req.tranche}</span>
                    <p className="text-forest/75">{req.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MODULE 5 CONTENT: Risk Assessment & Mitigation Roadmap */}
        {activeModuleId === 5 && (
          <div className="space-y-8 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RISK_REGISTER.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-forest/15 p-6 shadow-xs space-y-4 hover:border-brand/40 transition-all"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-forest/10">
                    <span className="text-[11px] font-bold uppercase text-brand">
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      item.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      Severity: {item.severity}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-forest">
                    {item.riskDescription}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-brand-light/50 border border-brand/20 text-xs space-y-1">
                    <strong className="text-brand block uppercase text-[10px] tracking-wider">Mitigation Plan:</strong>
                    <p className="text-forest/85">{item.mitigationStrategy}</p>
                  </div>

                  <div className="text-[11px] text-forest/70">
                    <strong>Resilience Governance:</strong> {item.monitoringPlan}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODULE 6 CONTENT: ESG Integration & Interactive Impact Dashboard */}
        {activeModuleId === 6 && (
          <div className="space-y-10 animate-in fade-in">
            {/* Interactive Real-Time Impact Simulation */}
            <div className="bg-forest rounded-3xl p-8 sm:p-10 text-softwhite space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-lime bg-forest-dark px-3 py-1 rounded-full border border-lime/30">
                    Interactive Impact Simulator
                  </span>
                  <h3 className="font-display text-2xl font-bold text-softwhite mt-2">
                    Projected Environmental & Spatial Reclaim Calculator
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-greygreen block">Annual Seating Production Volume</span>
                  <span className="font-display text-2xl font-extrabold text-lime">{simulatedChairs.toLocaleString()} Chairs/Year</span>
                </div>
              </div>

              {/* Slider Control */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={simulatedChairs}
                  onChange={(e) => setSimulatedChairs(Number(e.target.value))}
                  className="w-full accent-lime h-2 bg-forest-dark rounded-lg cursor-pointer"
                  aria-label="Annual chair production volume slider"
                />
                <div className="flex justify-between text-[11px] text-greygreen">
                  <span>2,000 Units (Pilot)</span>
                  <span>25,000 Units (Regional Scale)</span>
                  <span>100,000 Units (Enterprise Scale)</span>
                </div>
              </div>

              {/* Real-time Computed KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-forest-dark border border-forest-light space-y-1">
                  <div className="text-lime font-bold text-xs uppercase">CO₂e Emissions Cut</div>
                  <div className="font-display text-3xl font-extrabold text-softwhite">{co2AvoidedTons} MT</div>
                  <div className="text-[11px] text-greygreen">Cradle-to-gate footprint avoided vs virgin plastic seating</div>
                </div>

                <div className="p-5 rounded-2xl bg-forest-dark border border-forest-light space-y-1">
                  <div className="text-lime font-bold text-xs uppercase">Recycled Polymer Utilized</div>
                  <div className="font-display text-3xl font-extrabold text-softwhite">{(plasticDivertedKg / 1000).toFixed(1)} Tons</div>
                  <div className="text-[11px] text-greygreen">Diverting consumer plastic waste into durable seating shells</div>
                </div>

                <div className="p-5 rounded-2xl bg-forest-dark border border-forest-light space-y-1">
                  <div className="text-lime font-bold text-xs uppercase">Storage Space Reclaimed</div>
                  <div className="font-display text-3xl font-extrabold text-softwhite">{storageReclaimedSqM.toLocaleString()} m²</div>
                  <div className="text-[11px] text-greygreen">Reclaimed closet floor space for venue and school operators</div>
                </div>
              </div>
            </div>

            {/* Static Audited ESG Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ESG_BENCHMARKS.map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-forest/15 p-6 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-brand">{item.pillar} Pillar</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-forest text-lime">{item.status}</span>
                  </div>
                  <h4 className="font-display font-bold text-forest text-base">{item.objective}</h4>
                  <p className="text-xs text-forest/75">{item.plannedMetric}</p>
                  <div className="pt-2 border-t border-forest/10 text-[11px] text-forest/60">
                    <strong>Audit:</strong> {item.verificationMethod}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODULE 7 CONTENT: Team & Culture Scaling Exercise (10 to 100+) */}
        {activeModuleId === 7 && (
          <div className="space-y-8 animate-in fade-in">
            <div className="grid grid-cols-1 gap-8">
              {TEAM_SCALING_10_TO_100.map((phase, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-forest/15 p-6 sm:p-8 shadow-xs space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-forest/10">
                    <div>
                      <span className="text-xs font-bold text-brand uppercase tracking-wider">Growth Stage {idx + 1}</span>
                      <h3 className="font-display text-2xl font-bold text-forest mt-0.5">{phase.phase}</h3>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-forest text-lime uppercase self-start sm:self-auto">
                      {phase.headcount}
                    </span>
                  </div>

                  <p className="text-sm text-forest/75 leading-relaxed">
                    <strong>Strategic Operational Focus:</strong> {phase.focus}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold text-forest uppercase tracking-wider mb-2.5">
                      Core Roles & Functional Responsibilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {phase.roles.map((r, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-softwhite border border-forest/10 text-xs font-medium text-forest flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-light/60 border border-brand/20 text-xs text-forest space-y-1">
                    <strong className="text-brand uppercase text-[10px] tracking-wider block">Culture Preservation Mechanism:</strong>
                    <p className="text-forest/85">{phase.cultureMechanisms}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODULE 8 CONTENT: Comprehensive Plan & Implementation Timeline */}
        {activeModuleId === 8 && (
          <div className="space-y-10 animate-in fade-in">
            {/* Executive Synthesis Summary */}
            <div className="bg-white rounded-3xl border border-forest/15 p-8 shadow-xs space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
                Final Synthesis Deliverable
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-forest">
                Nexlivo: Sustainable Seating Venture Master Plan
              </h3>
              <p className="text-sm text-forest/80 leading-relaxed max-w-4xl">
                By integrating circular mechanical engineering (zero glue, 100% mechanical fasteners, 65%+ PCR alloys), robotic tube bending automation, high-density flat-nesting logistics, and disciplined capital-gated tooling investments, Nexlivo transforms the disposable portable furniture category into a high-margin, environmentally restorative commercial enterprise.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 text-center">
                  <div className="font-display text-2xl font-extrabold text-forest">100%</div>
                  <div className="text-xs text-forest/70 font-semibold mt-1">DfD Recyclability</div>
                </div>
                <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 text-center">
                  <div className="font-display text-2xl font-extrabold text-brand">&lt; 45 mm</div>
                  <div className="text-xs text-forest/70 font-semibold mt-1">Flat Nest Depth</div>
                </div>
                <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 text-center">
                  <div className="font-display text-2xl font-extrabold text-forest">Q2 Year 2</div>
                  <div className="text-xs text-forest/70 font-semibold mt-1">Target Break-Even</div>
                </div>
                <div className="p-4 rounded-2xl bg-softwhite border border-forest/10 text-center">
                  <div className="font-display text-2xl font-extrabold text-brand">10 to 100+</div>
                  <div className="text-xs text-forest/70 font-semibold mt-1">Team Scaling Plan</div>
                </div>
              </div>
            </div>

            {/* Implementation Gantt Roadmap */}
            <div className="bg-white rounded-3xl border border-forest/15 p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-forest/10">
                <h3 className="font-display text-xl font-bold text-forest">
                  Master Implementation Timeline (Q1 Year 1 – Year 3)
                </h3>
                <span className="text-xs text-forest/60">Milestone Deliverable Schedule</span>
              </div>

              <div className="space-y-4">
                {FINAL_ROADMAP_MILESTONES.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-softwhite border border-forest/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-24 shrink-0 text-xs font-bold text-forest bg-white px-2.5 py-1.5 rounded-lg border border-forest/10 text-center">
                        {milestone.quarter}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-forest">{milestone.title}</h4>
                        <p className="text-xs text-forest/70 mt-0.5">{milestone.deliverables}</p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase ${
                        milestone.status === 'In Progress'
                          ? 'bg-lime text-forest'
                          : 'bg-forest/5 text-forest/70'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Global Footer Navigation across all 8 Modules */}
        <div className="p-8 rounded-3xl bg-forest-dark border border-forest-light text-softwhite flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg font-bold text-softwhite">
              Ready to submit commercial procurement or prototype inquiries?
            </h4>
            <p className="text-greygreen text-xs mt-1">
              All compliance specifications and sample allocations can be verified directly with our engineering team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onNavigate('chairs')}
              className="px-5 py-3 rounded-xl bg-forest-light hover:bg-brand text-softwhite font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Explore Chairs
            </button>
            <button
              onClick={() => onNavigate('compliance-contact')}
              className="px-6 py-3 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Contact Team
            </button>
          </div>
        </div>
      </div>

      {/* Syllabus Modal Inspecting User's Uploaded Document */}
      {showSyllabusModal && (
        <div
          className="fixed inset-0 z-50 bg-forest/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowSyllabusModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Assignment syllabus document"
        >
          <div
            className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-forest/20 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-forest/10 flex items-center justify-between bg-softwhite">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-brand" />
                <div>
                  <h3 className="font-display font-bold text-forest text-base">
                    Sustainability & Scalability Syllabus Document
                  </h3>
                  <span className="text-[11px] text-forest/60">
                    Source: WhatsApp_Image_2026-10-25_at_17.47.30_3d5eb327.jpeg
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowSyllabusModal(false)}
                className="p-1.5 rounded-lg text-forest/60 hover:text-forest hover:bg-forest/5"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="rounded-2xl border border-forest/15 overflow-hidden bg-softwhite p-2">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-25_at_17.47.30_3d5eb327.jpeg"
                  alt="Sustainability and Scalability assignment requirements document covering 8 modules"
                  className="w-full h-auto rounded-xl shadow-xs"
                />
              </div>

              <div className="p-4 rounded-2xl bg-brand-light border border-brand/20 text-xs text-forest space-y-2">
                <strong className="text-brand text-sm block">Curriculum Fulfillment Verification:</strong>
                <p>
                  Every numbered prompt in the syllabus above has been implemented with exhaustive, engineering-grade content for Nexlivo:
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-forest/80 font-medium">
                  <li><strong>Sustainability Audit:</strong> Environmental, social, and economic gaps & proposed improvements.</li>
                  <li><strong>Scalable Business Model Redesign:</strong> Mechanical startup BMC with automation, outsourcing & platform elements.</li>
                  <li><strong>Supply Chain & Operations Scaling:</strong> Sourcing, dual extruders, closed-loop powder coat, and zero-waste logistics.</li>
                  <li><strong>Financial Projections:</strong> Multi-year projections (Y1, Y2, Y3), unit economics breakdown, and capital tranches.</li>
                  <li><strong>Risk Assessment & Mitigation:</strong> Full scaling risk matrix with contingency resilience strategies.</li>
                  <li><strong>ESG & Impact Measurement:</strong> Measurable indicators and interactive live simulation calculator.</li>
                  <li><strong>Team & Culture Scaling:</strong> 10 to 100+ hiring and culture preservation phases.</li>
                  <li><strong>Final Project:</strong> Comprehensive sustainability & scalability master plan with implementation Gantt.</li>
                </ol>
              </div>
            </div>

            <div className="p-4 bg-softwhite border-t border-forest/10 flex justify-end">
              <button
                onClick={() => setShowSyllabusModal(false)}
                className="px-5 py-2.5 rounded-xl bg-forest text-lime text-xs font-bold uppercase tracking-wider"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
