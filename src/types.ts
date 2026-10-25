export type PageId =
  | 'home'
  | 'chairs'
  | 'why-choose'
  | 'who-we-serve'
  | 'business-model'
  | 'production-process'
  | 'sustainability'
  | 'supply-chain'
  | 'financial-outlook'
  | 'risk-assessment'
  | 'esg-impact'
  | 'team-culture'
  | 'compliance-contact'
  | 'strategic-plan';

export interface StrategicModule {
  id: number;
  title: string;
  shortTitle: string;
  tagline: string;
  scope: string;
  iconName: string;
}

export interface NavItem {
  id: PageId;
  label: string;
  shortLabel?: string;
  category: 'Overview' | 'Chairs & Value' | 'Operations & Business' | 'Governance & Contact';
  description: string;
}

export interface ChairConcept {
  id: string;
  name: string;
  tagline: string;
  targetUse: string;
  conceptStatus: 'Design Concept' | 'Prototype Stage' | 'Planned Engineering';
  highlights: string[];
  dimensionsEstimated: {
    unfolded: string;
    folded: string;
    targetWeight: string;
    loadCapacityTarget: string;
  };
  keyMaterialsProposed: string[];
  designFocus: string;
  bestFor: string[];
  disclaimer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  metric?: string;
  iconName: string;
}

export interface CustomerSegment {
  title: string;
  subtitle: string;
  iconName: string;
  painPoint: string;
  solution: string;
  keyRequirements: string[];
}

export interface ProcessStage {
  step: number;
  stageName: string;
  description: string;
  plannedActions: string[];
  qualityControlGate: string;
}

export interface RiskItem {
  category: string;
  riskDescription: string;
  severity: 'High' | 'Medium' | 'Low';
  probability: 'High' | 'Medium' | 'Low';
  mitigationStrategy: string;
  monitoringPlan: string;
}

export interface ESGMetric {
  pillar: 'Environmental' | 'Social' | 'Governance';
  objective: string;
  plannedMetric: string;
  status: string;
  verificationMethod: string;
}

export interface TeamRole {
  role: string;
  phase: 'Founder Stage' | 'Seed Hiring' | 'Growth Phase';
  primaryResponsibilities: string[];
  culturePrinciple: string;
}

export interface ComplianceItem {
  domain: string;
  standardOrReg: string;
  currentStatus: 'Preliminary Review' | 'Lab Protocol Planned' | 'Advisory Consultation';
  verificationRequirement: string;
}
