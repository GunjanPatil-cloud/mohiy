import {
  NavItem,
  ChairConcept,
  BenefitItem,
  CustomerSegment,
  ProcessStage,
  RiskItem,
  ESGMetric,
  TeamRole,
  ComplianceItem,
} from '../types.ts';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    category: 'Overview',
    description: 'Welcome to Nexlivo: Smart seating concepts and venture overview',
  },
  {
    id: 'chairs',
    label: 'Our Chairs',
    shortLabel: 'Chairs',
    category: 'Chairs & Value',
    description: 'Explore proposed concept designs: Classic, Comfort, and Compact',
  },
  {
    id: 'why-choose',
    label: 'Why Choose Nexlivo',
    shortLabel: 'Why Nexlivo',
    category: 'Chairs & Value',
    description: 'Ergonomic geometry, ultra-slim stowing, and engineering focus',
  },
  {
    id: 'who-we-serve',
    label: 'Who We Serve',
    shortLabel: 'Audience',
    category: 'Chairs & Value',
    description: 'Households, modern offices, schools, and dynamic event spaces',
  },
  {
    id: 'business-model',
    label: 'Our Business Model',
    shortLabel: 'Business Model',
    category: 'Operations & Business',
    description: 'Direct sales, institutional bulk orders, and commercial roll-out strategy',
  },
  {
    id: 'production-process',
    label: 'Our Production Process',
    shortLabel: 'Production',
    category: 'Operations & Business',
    description: 'Planned 5-stage manufacturing from certified alloys to final QA',
  },
  {
    id: 'sustainability',
    label: 'Sustainability Goals',
    shortLabel: 'Sustainability',
    category: 'Operations & Business',
    description: 'Circular design intentions, non-toxic finishes, and waste reduction goals',
  },
  {
    id: 'supply-chain',
    label: 'Supply Chain & Operations',
    shortLabel: 'Supply Chain',
    category: 'Operations & Business',
    description: 'Supplier audit frameworks, regional fulfillment, and buffer inventory planning',
  },
  {
    id: 'financial-outlook',
    label: 'Growth & Financial Outlook',
    shortLabel: 'Financials',
    category: 'Operations & Business',
    description: 'Proposed startup capitalization, unit economics framework, and break-even targets',
  },
  {
    id: 'risk-assessment',
    label: 'Risk Assessment',
    shortLabel: 'Risks',
    category: 'Governance & Contact',
    description: 'Transparent risk matrix and active mitigation protocols',
  },
  {
    id: 'esg-impact',
    label: 'ESG & Impact',
    shortLabel: 'ESG',
    category: 'Governance & Contact',
    description: 'Targeted environmental, social, and governance benchmark milestones',
  },
  {
    id: 'team-culture',
    label: 'Our Team & Culture',
    shortLabel: 'Team',
    category: 'Governance & Contact',
    description: 'Planned organizational structure, safety pledges, and future hiring roadmaps',
  },
  {
    id: 'compliance-contact',
    label: 'Compliance & Contact',
    shortLabel: 'Contact',
    category: 'Governance & Contact',
    description: 'Regulatory verification status, compliance roadmap, and commercial inquiry channel',
  },
  {
    id: 'strategic-plan',
    label: 'Sustainability & Scalability Plan',
    shortLabel: '8-Pillar Plan',
    category: 'Operations & Business',
    description: 'Comprehensive 8-Part Strategic Roadmap for Mechanical Startup Scaling',
  },
];

export const CHAIR_CONCEPTS: ChairConcept[] = [
  {
    id: 'classic',
    name: 'Classic Folding Chair',
    tagline: 'Timeless silhouette reimagined with silent, pinched-proof folding joints.',
    targetUse: 'General indoor events, community venues, dining overflow, and multi-purpose halls.',
    conceptStatus: 'Prototype Stage',
    highlights: [
      'Self-locking hinge mechanism with anti-pinch finger guard geometry',
      'Dual curved lumbar slats engineered for balanced spinal support',
      'Flat-fold depth under 45 mm for dense cart racking and transit efficiency',
      'Non-marking thermoplastic polymer foot caps designed to protect delicate flooring',
    ],
    dimensionsEstimated: {
      unfolded: 'Approx. 46 cm W × 49 cm D × 81 cm H',
      folded: 'Approx. 46 cm W × 4.5 cm D × 94 cm H',
      targetWeight: 'Target: 3.8 – 4.2 kg (subject to prototype alloy selection)',
      loadCapacityTarget: 'Engineering target: 136 kg (300 lbs) pending standard testing',
    },
    keyMaterialsProposed: [
      'High-tensile lightweight steel frame (powder-coated finish)',
      'UV-stabilized polypropylene resin seat pan and backrest',
      'Stainless steel pivot fasteners',
    ],
    designFocus: 'High-cycle durability, easy wiping, and ultra-dense nested storage.',
    bestFor: ['Event halls', 'Rental companies', 'Churches & community spaces', 'Home patios'],
    disclaimer: 'Concept specifications are engineering design targets under active prototype review. Final weights, dimensions, and ratings will be confirmed post third-party laboratory testing.',
  },
  {
    id: 'comfort',
    name: 'Comfort Folding Chair',
    tagline: 'Ergonomic contoured seat with breathable suspension fabric for multi-hour seating.',
    targetUse: 'Conference rooms, executive workshops, home offices, and extended training seminars.',
    conceptStatus: 'Design Concept',
    highlights: [
      'Breathable tensioned composite mesh or high-resilience foam core pad option',
      'Adaptive thoracic flex curve accommodating varied posture shifts',
      'Integrated rear recess handle for effortless one-handed relocation',
      'Ganging clip channels planned for neat auditorium row alignments',
    ],
    dimensionsEstimated: {
      unfolded: 'Approx. 50 cm W × 52 cm D × 86 cm H',
      folded: 'Approx. 50 cm W × 6.5 cm D × 99 cm H',
      targetWeight: 'Target: 4.6 – 5.1 kg (with reinforced lumbar suspension)',
      loadCapacityTarget: 'Engineering target: 150 kg (330 lbs) pending BIFMA X5.1 evaluation',
    },
    keyMaterialsProposed: [
      'Aero-grade aluminum-alloy tubular subframe with matte forest finish',
      'Post-consumer recycled polyester mesh weave',
      'Low-VOC molded elastomer lumbar supports',
    ],
    designFocus: 'All-day comfort without sacrificing the agility of a storable folding architecture.',
    bestFor: ['Corporate conference centers', 'Co-working spaces', 'Educational seminar rooms', 'Executive home workstations'],
    disclaimer: 'Comfort Folding Chair is a conceptual design. Structural prototypes are being prepared for cyclic fatigue and ergonomic validation.',
  },
  {
    id: 'compact',
    name: 'Compact Folding Chair',
    tagline: 'Ultra-slender geometry engineered to stow in the tightest urban apartments and RVs.',
    targetUse: 'Micro-apartments, mobile hospitality, balcony cafes, and modular pop-up studios.',
    conceptStatus: 'Planned Engineering',
    highlights: [
      'Ultra-thin 32 mm profile when folded — fits easily under beds or closet nooks',
      'One-motion scissor fold with magnetic latch retention',
      'Integrated wall-bracket hang hole for vertical decorative storage',
      'Reinforced bridge ribbing providing rigidity with minimal material mass',
    ],
    dimensionsEstimated: {
      unfolded: 'Approx. 43 cm W × 46 cm D × 78 cm H',
      folded: 'Approx. 43 cm W × 3.2 cm D × 88 cm H',
      targetWeight: 'Target: 2.9 – 3.3 kg (ultra-lightweight focus)',
      loadCapacityTarget: 'Engineering target: 120 kg (265 lbs) pending dynamic drop testing',
    },
    keyMaterialsProposed: [
      'Cold-formed recycled structural aluminum alloy',
      'Reinforced birch veneer or composite bamboo composite core',
      'Anodized hardware fasteners',
    ],
    designFocus: 'Minimalist aesthetic, minimum stowed footprint, and agile portability.',
    bestFor: ['Urban apartments & studios', 'Balconies & breakfast corners', 'Pop-up retail & kiosks', 'Van life & recreational vehicles'],
    disclaimer: 'Concept engineering specifications reflect early finite-element model goals. Not currently available for commercial sale.',
  },
];

export const KEY_BENEFITS: BenefitItem[] = [
  {
    title: 'Space-Saving Precision',
    description: 'Engineered with flat-nesting hinges to stow up to 35 chairs on a standard rolling rack, reclaiming up to 70% floor space compared to non-nesting designs.',
    metric: '< 45 mm',
    iconName: 'Maximize2',
  },
  {
    title: 'Ergonomic Longevity',
    description: 'Contoured lumbar curvature and deliberate pelvic angle geometry planned to prevent posture fatigue across multi-hour seminars or dinner gatherings.',
    metric: '15° Tilt',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Silent Anti-Pinch Hinge',
    description: 'Proprietary concealed link joints shield fingers and prevent sudden snaps during rapid folding, deploying safely in fast-turnaround event setups.',
    metric: '100% Safe',
    iconName: 'Lock',
  },
  {
    title: 'Responsible Material Loop',
    description: 'Architected for disassembly: mechanically fastened assemblies eliminate toxic glue bonds so aluminum, steel, and polymers can be recycled cleanly at end-of-life.',
    metric: 'Zero Glue',
    iconName: 'Recycle',
  },
];

export const CUSTOMER_SEGMENTS: CustomerSegment[] = [
  {
    title: 'Modern Households & Urban Dwellers',
    subtitle: 'Flexible entertaining without clutter',
    iconName: 'Home',
    painPoint: 'Clunky temporary chairs that look cheap, feel uncomfortable, and take up entire storage closets when not in use.',
    solution: 'Designer-grade folding seats that look stunning around the dining table and slip flat behind doors, under sofas, or hang on wall brackets.',
    keyRequirements: ['Aesthetic elegance', 'Compact stowing (< 5cm)', 'Floor-friendly feet', 'Easy wipe-down surfaces'],
  },
  {
    title: 'Offices & Co-Working Hubs',
    subtitle: 'Dynamic reconfigurable team spaces',
    iconName: 'Briefcase',
    painPoint: 'All-hands meetings and workshop conversions require fast seating deployment, but standard folding chairs look unprofessional and cause back aches.',
    solution: 'Polished brand-green and forest finishes with supportive lumbar contouring that maintain executive decor while enabling 5-minute hall transitions.',
    keyRequirements: ['Professional aesthetic', 'High-density cart compatibility', 'Durable powder-coat finishes', 'Ergonomic comfort'],
  },
  {
    title: 'Schools & Training Institutions',
    subtitle: 'High-traffic flexibility and student durability',
    iconName: 'GraduationCap',
    painPoint: 'Heavy metal chairs that rattle loudly, wear down linoleum floors, and create pinch hazards for students and staff.',
    solution: 'Lightweight frames with anti-pinch enclosed pivot points, quiet polymer feet, and rugged stain-resistant shells built for hundreds of cycles.',
    keyRequirements: ['Anti-pinch safety hinges', 'Impact-resistant edges', 'Stacking and cart agility', 'Budget-conscious longevity'],
  },
  {
    title: 'Event Organizers & Venue Rentals',
    subtitle: 'Rapid logistics, high load-cycle capacity',
    iconName: 'CalendarDays',
    painPoint: 'High replacement rates from broken hinges, loose rivets, paint chipping, and slow loading times that drive up labor costs.',
    solution: 'Modular, field-serviceable components with standard fasteners, allowing damaged parts to be swapped in minutes rather than junking entire chairs.',
    keyRequirements: ['Rapid setup/takedown speed', 'Field-replaceable feet & slats', 'High payload safety targets', 'Weather-resistant coating'],
  },
];

export const BUSINESS_MODEL_STREAMS = [
  {
    title: 'Direct-to-Consumer (D2C)',
    description: 'E-commerce platform offering 2-pack and 4-pack sets directly to households, work-from-home pros, and small boutique studios.',
    sharePlanned: '25% of Year 1 Volume Target',
    focus: 'Brand storytelling, design-forward packaging, direct feedback loops for rapid iteration.',
  },
  {
    title: 'Commercial Bulk & B2B Contracts',
    description: 'Direct procurement channel catering to event venues, universities, co-working operators, and corporate headquarters.',
    sharePlanned: '55% of Year 1 Volume Target',
    focus: 'Tiered volume pricing, custom color matching, rolling transport racks, and scheduled delivery.',
  },
  {
    title: 'Specialty Retail & Interior Partners',
    description: 'Consignment and wholesale distribution with modern furniture retailers, architecture specifiers, and office interior dealers.',
    sharePlanned: '20% of Year 1 Volume Target',
    focus: 'Showroom displays, physical touch-and-feel validation, and designer trade partner discounts.',
  },
];

export const PRODUCTION_STAGES: ProcessStage[] = [
  {
    step: 1,
    stageName: 'Material Sourcing & Alloy Verification',
    description: 'Procuring certified structural aluminum alloys and recycled engineering polymers with raw material mill test certificates.',
    plannedActions: [
      'Screening suppliers for ISO 9001 and verified mill inspection reports',
      'Batch tensile and thickness verification before cutting',
      'Auditing non-toxic, lead-free architectural powder-coat pigments',
    ],
    qualityControlGate: 'Batch chemical and physical hardness check; reject non-compliant raw coil/extrusion.',
  },
  {
    step: 2,
    stageName: 'Precision CNC Cutting, Bending & Stamping',
    description: 'Automated tube bending and laser profiling to produce consistent frame geometries with microscopic tolerances.',
    plannedActions: [
      'Multi-axis mandrel bending to prevent ovalization and structural kinks',
      'Laser profiling of pivot hinge tabs for vibration-free alignment',
      'Robotic deburring of all edges to eliminate burrs and sharp points',
    ],
    qualityControlGate: 'Optical coordinate measuring machine (CMM) sampling of frame dimensional tolerances (±0.2 mm).',
  },
  {
    step: 3,
    stageName: 'Pre-Treatment & Architectural Powder Coating',
    description: 'Multi-stage phosphate-free cleaning and electrostatically applied thermo-cured exterior powder coating.',
    plannedActions: [
      'De-greasing and de-ionized water rinse baths',
      'Zirconium eco-conversion coating for corrosion protection',
      'Precision oven baking at 190°C for uniform gloss and chip-resistant adhesion',
    ],
    qualityControlGate: 'Cross-hatch adhesion tape test and 240-hour ASTM B117 salt-spray corrosion chamber sampling.',
  },
  {
    step: 4,
    stageName: 'Modular Mechanical Assembly',
    description: 'Final assembly utilizing stainless steel lock bolts and anti-pinch bushings without adhesive welding.',
    plannedActions: [
      'Torque-controlled calibrated pneumatic fastening',
      'Press-fit silent vibration-dampening nylon hinge washers',
      'Assembly of ergonomic seat shells and non-marking floor protector boots',
    ],
    qualityControlGate: '100% individual cycle inspection: smooth folding action, alignment check, and lock verification.',
  },
  {
    step: 5,
    stageName: 'Eco-Protective Packaging & Transit Prep',
    description: 'Carton packaging constructed from 100% recycled unbleached kraft board with zero molded polystyrene.',
    plannedActions: [
      'Corner edge guards engineered from molded sugarcane pulp',
      'Biodegradable dust liner sleeve protecting frame finishes',
      'Barcoded tracking label for batch tracing and provenance tracking',
    ],
    qualityControlGate: 'ISTA 1A packaged drop-test simulation before pallet staging.',
  },
];

export const SUSTAINABILITY_PILLARS = [
  {
    title: 'Design for Disassembly (DfD)',
    description: 'Every Nexlivo chair concept is planned with zero irreversible adhesives. Frames, fasteners, and seat pads can be separated in under 4 minutes with standard hand tools, ensuring clean single-stream recycling at end of lifecycle.',
    target: '100% separable components',
  },
  {
    title: 'Recycled & Recyclable Feedstock',
    description: 'Targeting a minimum 65% recycled content in structural aluminum and steel, paired with post-consumer recycled (PCR) polypropylene seat shells and unbleached corrugated boxing.',
    target: '>= 65% recycled content target',
  },
  {
    title: 'Closed-Loop Powder Coating',
    description: 'Utilizing low-VOC, solvent-free electrostatic powder coating systems that recover overspray with up to 98% efficiency, generating virtually zero atmospheric hazardous pollutants.',
    target: 'Zero volatile solvent emissions',
  },
  {
    title: 'Space-Efficient Logistics Footprint',
    description: 'Because our proposed chairs fold flatter than standard market alternatives, freight density is increased by an estimated 40%, significantly reducing freight fuel consumption and carbon footprint per unit transported.',
    target: '+40% freight transport efficiency',
  },
];

export const RISK_REGISTER: RiskItem[] = [
  {
    category: 'Supply Chain & Sourcing',
    riskDescription: 'Fluctuations in global aluminum and alloy pricing, coupled with lead-time delays from raw material extruders.',
    severity: 'High',
    probability: 'Medium',
    mitigationStrategy: 'Establish dual-sourced domestic and regional extruder relationships; hold 45-day buffer stock of standard extrusions; evaluate fixed-price quarterly alloy purchasing contracts.',
    monitoringPlan: 'Bi-weekly index monitoring against London Metal Exchange (LME) and supplier on-time delivery audits.',
  },
  {
    category: 'Product Quality & Safety',
    riskDescription: 'Hinge pin wear, fastener loosening, or unexpected frame deflection under repetitive cyclic loading in commercial settings.',
    severity: 'High',
    probability: 'Low',
    mitigationStrategy: 'Design to exceed ANSI/BIFMA X5.1 static and proof-load safety criteria; implement mechanical thread-locking fasteners and self-lubricating bronze-embedded bushings; execute 100,000-cycle lab fatigue testing prior to mass tooling.',
    monitoringPlan: 'Standardized factory drop-testing gates, serialized batch tracking, and field return forensic tracking.',
  },
  {
    category: 'Capital & Cash Flow',
    riskDescription: 'High upfront tooling capital (die molds, stamping fixtures) leading to cash drain before commercial production reaches break-even scale.',
    severity: 'High',
    probability: 'Medium',
    mitigationStrategy: 'Phase tooling investments: begin with modular soft-tooling and CNC prototyping before commissioning high-volume multi-cavity injection dies; secure B2B pre-orders with milestone deposits.',
    monitoringPlan: 'Monthly cash-burn forecasting, strict working capital controls, and quarterly milestone-gated capital deployment.',
  },
  {
    category: 'Regulatory & Certification',
    riskDescription: 'Delays in acquiring third-party laboratory safety test certificates or regional flammability approvals (e.g., California TB 133 / EN 1021).',
    severity: 'Medium',
    probability: 'Medium',
    mitigationStrategy: 'Engage accredited independent testing laboratories early during prototype phase for pre-compliance screening; select inherently flame-retardant materials that already carry resin certifications.',
    monitoringPlan: 'Direct partnership with ISO/IEC 17025 accredited test partners and transparent status disclosure on all customer materials.',
  },
  {
    category: 'Operational & Workplace Safety',
    riskDescription: 'Machining and metal-bending hazards, ergonomic strain during assembly, or noise pollution in fabrication areas.',
    severity: 'Medium',
    probability: 'Low',
    mitigationStrategy: 'Implement automated light curtains and dual-hand palm buttons on all press brakes; mandate OSHA-compliant hearing and eye PPE; rotate assembly cell workstations to prevent repetitive strain.',
    monitoringPlan: 'Daily safety huddles, zero-lost-time injury targets, and monthly joint worker-management safety walk-throughs.',
  },
];

export const ESG_BENCHMARKS: ESGMetric[] = [
  {
    pillar: 'Environmental',
    objective: 'Circular Material Utilization',
    plannedMetric: 'Target 65%+ recycled content in metal framework and 100% recyclable shipping cartons by Q3 Year 1.',
    status: 'Proposed Milestone',
    verificationMethod: 'Third-party mill certificates and recycled-content bills of materials (BOM).',
  },
  {
    pillar: 'Environmental',
    objective: 'Carbon Footprint per Seating Unit',
    plannedMetric: 'Achieve cradle-to-gate carbon footprint 30% below conventional plastic-welded folding chairs.',
    status: 'Proposed Milestone',
    verificationMethod: 'ISO 14040/14044 compliant Life Cycle Assessment (LCA) conducted by independent environmental consultant.',
  },
  {
    pillar: 'Social',
    objective: 'Worker Health, Safety & Ergonomics',
    plannedMetric: 'Target zero lost-time incidents and continuous ergonomic task rotation in planned assembly facilities.',
    status: 'Proposed Standard',
    verificationMethod: 'Internal incident logs, third-party safety audits, and OSHA compliance logging.',
  },
  {
    pillar: 'Social',
    objective: 'Community & Event Space Access',
    plannedMetric: 'Allocate 2% of annual production output to sponsored community centers, youth clubs, and local public libraries.',
    status: 'Planned Initiative',
    verificationMethod: 'Annual verified community donation registry and impact documentation.',
  },
  {
    pillar: 'Governance',
    objective: 'Transparent Compliance & Fair Sourcing',
    plannedMetric: '100% supplier adherence to Nexlivo Supplier Code of Conduct (forbidding child labor, unsafe conditions, and conflict minerals).',
    status: 'Policy Drafted',
    verificationMethod: 'Mandatory supplier sign-off and annual on-site ethical audit protocols.',
  },
  {
    pillar: 'Governance',
    objective: 'Honest Consumer Disclosures',
    plannedMetric: 'No unverified marketing claims; all load capacities and recyclability statements backed by published test reports.',
    status: 'Core Brand Policy',
    verificationMethod: 'Public compliance portal with direct access to laboratory certificates and material disclosures.',
  },
];

export const TEAM_ROLES: TeamRole[] = [
  {
    role: 'Lead Furniture & Industrial Designer',
    phase: 'Founder Stage',
    primaryResponsibilities: [
      'Directing ergonomic geometry, hinge kinematics, and form-factor styling',
      'Creating production-ready 3D CAD models and finite element analysis (FEA)',
      'Designing custom extrusion dies and nesting cart systems',
    ],
    culturePrinciple: 'Simplicity through engineering: eliminate every superfluous bolt.',
  },
  {
    role: 'Head of Manufacturing & Quality Engineering',
    phase: 'Founder Stage',
    primaryResponsibilities: [
      'Establishing supplier quality management (SQM) and incoming inspection rules',
      'Designing assembly jigs, torque limits, and cycle test equipment',
      'Driving continuous process improvement and scrap reduction',
    ],
    culturePrinciple: 'Precision is non-negotiable; safety is our highest duty.',
  },
  {
    role: 'Supply Chain & Operations Manager',
    phase: 'Seed Hiring',
    primaryResponsibilities: [
      'Managing vendor contract negotiations and raw material supply schedules',
      'Overseeing warehousing, freight consolidation, and freight carrier SLAs',
      'Implementing inventory planning software and buffer stock modeling',
    ],
    culturePrinciple: 'Transparent partnerships beat adversarial bargaining.',
  },
  {
    role: 'Commercial B2B & Venue Sales Director',
    phase: 'Seed Hiring',
    primaryResponsibilities: [
      'Pitching enterprise procurement to universities, event centers, and hotels',
      'Building dealer network relationships and showroom partnership agreements',
      'Managing commercial sample programs and high-volume RFPs',
    ],
    culturePrinciple: 'Listen to the facilities crew who actually carry the chairs.',
  },
  {
    role: 'Assembly & QA Technicians (Multi-Member)',
    phase: 'Growth Phase',
    primaryResponsibilities: [
      'Manual and semi-automated mechanical sub-assembly',
      'End-of-line dimensional, folding smoothness, and cosmetic audits',
      'Eco-packaging packaging and barcoded pallet preparation',
    ],
    culturePrinciple: 'Pride of craftsmanship in every carton dispatched.',
  },
];

export const COMPLIANCE_CHECKLIST: ComplianceItem[] = [
  {
    domain: 'Structural Safety & Durability',
    standardOrReg: 'ANSI/BIFMA X5.1 (General Purpose Office / Institutional Chairs)',
    currentStatus: 'Lab Protocol Planned',
    verificationRequirement: 'Formal third-party mechanical testing including static back pull, proof drop tests, cyclic seating impact, and leg strength testing.',
  },
  {
    domain: 'European Furniture Safety',
    standardOrReg: 'EN 12520 (Domestic Furniture — Seating — Mechanical and Structural Safety)',
    currentStatus: 'Preliminary Review',
    verificationRequirement: 'Static load and cyclic endurance evaluation for European distribution compliance.',
  },
  {
    domain: 'Flammability & Fire Resistance',
    standardOrReg: 'California Technical Bulletin 117-2013 / NFPA 260',
    currentStatus: 'Advisory Consultation',
    verificationRequirement: 'Smolder resistance testing for upholstered or polymer components used in hospitality and institutional environments.',
  },
  {
    domain: 'Chemical Safety & VOCs',
    standardOrReg: 'RoHS 3 & REACH SVHC (Substances of Very High Concern)',
    currentStatus: 'Preliminary Review',
    verificationRequirement: 'Material safety data sheets (MSDS) verification ensuring absence of heavy metals, phthalates, and restricted flame retardants.',
  },
  {
    domain: 'Packaging & Transit Integrity',
    standardOrReg: 'ISTA 1A / 3A (International Safe Transit Association)',
    currentStatus: 'Lab Protocol Planned',
    verificationRequirement: 'Drop, vibration, and compression tests simulating parcel and palletized freight logistics.',
  },
];

export const STRATEGIC_MODULES = [
  {
    id: 1,
    title: 'Sustainability Audit of a Startup',
    shortTitle: 'Sustainability Audit',
    tagline: 'Comprehensive assessment across environmental, social, and economic parameters with identified gaps and corrective interventions.',
    scope: 'Analyses lifecycle impacts of mechanical seating manufacturing, highlighting circular material loops and assembly safety.',
    iconName: 'ClipboardCheck',
  },
  {
    id: 2,
    title: 'Scalable Business Model Redesign',
    shortTitle: 'Business Model Redesign',
    tagline: 'Mechanical & engineering Business Model Canvas tailored to scale using robotics automation, outsourcing, and an enterprise B2B platform.',
    scope: 'Adapts traditional hardware economics with automated space-planning software and recurring wear-part replacement revenue.',
    iconName: 'LayoutGrid',
  },
  {
    id: 3,
    title: 'Supply Chain & Operations Scaling Plan',
    shortTitle: 'Supply Chain Scaling',
    tagline: 'Sustainable, resilient supply chain strategy designed for mechanical hardware manufacturing and circular take-back.',
    scope: 'Dual sourcing, local extrusion hubs, closed-loop powder recycling, and zero-waste packaging logistics.',
    iconName: 'Truck',
  },
  {
    id: 4,
    title: 'Financial Projections for Scaling',
    shortTitle: 'Financial Projections',
    tagline: 'Multi-year financial models detailing unit economics, break-even at scale, and phased capital requirement tranches.',
    scope: 'Projected models for Year 1 (Pilot), Year 2 (Regional Scale), and Year 3 (National Fleet Expansion).',
    iconName: 'BarChart3',
  },
  {
    id: 5,
    title: 'Risk Assessment & Mitigation Roadmap',
    shortTitle: 'Risk & Resilience Roadmap',
    tagline: 'Identification of mechanical scaling vulnerabilities and actionable contingency plans with resilience strategies.',
    scope: 'Addresses raw material index shocks, tooling fatigue, institutional payment cycles, and regulatory barriers.',
    iconName: 'ShieldAlert',
  },
  {
    id: 6,
    title: 'ESG Integration & Impact Measurement',
    shortTitle: 'ESG & Impact Dashboard',
    tagline: 'Measurable ESG metric architecture paired with an interactive real-time impact simulation dashboard.',
    scope: 'Quantifies carbon footprint reductions, landfill diversion, technician safety indices, and community equity.',
    iconName: 'Activity',
  },
  {
    id: 7,
    title: 'Team & Culture Scaling Exercise (10 to 100+)',
    shortTitle: 'Team Scaling (10 to 100+)',
    tagline: 'Hiring roadmap and cultural preservation framework spanning from founding 10-person cell to 100+ distributed workforce.',
    scope: 'Phased organizational charts, cross-functional safety councils, stop-work authority, and craftsmanship culture.',
    iconName: 'Users',
  },
  {
    id: 8,
    title: 'Comprehensive Sustainability & Scalability Plan',
    shortTitle: 'Final Master Plan',
    tagline: 'Integrated master execution plan synthesizing all 7 strategic modules with a multi-year implementation Gantt and metric scorecard.',
    scope: 'Executive briefing, milestone deliverables, and investor/stakeholder governance review.',
    iconName: 'Compass',
  },
];

export const SUSTAINABILITY_AUDIT_DATA = {
  environmental: {
    title: 'Environmental Audit Parameters',
    currentBaseline: 'Conventional folding furniture relies on energy-intensive virgin aluminum/steel extraction, solvent-based paint with high VOC emissions, and toxic irreversible polyurethane glues.',
    gapsIdentified: [
      'Virgin alloy dependency without certified post-consumer recycled content tracking',
      'Atmospheric solvent release and non-recoverable overspray in traditional wet-spray painting',
      'Single-use expanded polystyrene (EPS) foam blocks in retail shipping packaging',
      'Irreversible adhesive bonding between seat pans and metal frame preventing clean recycling',
    ],
    proposedImprovements: [
      'Mandate minimum 65% post-consumer recycled aluminum alloy backed by supplier mill test certificates',
      'Transition to 100% electrostatic dry powder coating with 98% overspray recovery and zero VOC emissions',
      'Replace all plastic foam with 100% biodegradable unbleached corrugated kraft board and sugarcane pulp corner buffers',
      'Enforce Design for Disassembly (DfD): 100% mechanical fasteners allowing single-tool teardown under 4 minutes',
    ],
    impactMetric: '-42% estimated cradle-to-gate carbon footprint per seating unit compared to industry baseline',
  },
  social: {
    title: 'Social & Human Capital Audit Parameters',
    currentBaseline: 'Hardware fabrication and stamping environments carry high ergonomic risks, repetitive strain injury (RSI), punch press hazards, and neglected user posture.',
    gapsIdentified: [
      'Repetitive motion fatigue in manual fastener torquing and frame lifting workstations',
      'Exposed scissor action on legacy folding chairs causing frequent consumer finger pinch injuries',
      'Flat unyielding 90° seat geometry causing lower back fatigue during multi-hour gatherings',
      'Lack of formal employee stop-work authority when noticing quality or safety discrepancies',
    ],
    proposedImprovements: [
      'Install pneumatic counterbalance arm balancers and automated 2-hour ergonomic station rotations',
      'Engineer enclosed recessed pivot links with anti-pinch geometry eliminating finger catch points',
      'Incorporate 15° lumbar declination curvature and breathable suspension core to support natural posture',
      'Formalize "Andon" stop-the-line worker protocol with daily joint safety huddles and zero-incident bonuses',
    ],
    impactMetric: 'Target 0 Lost-Time Incidents (LTIR) and 95%+ user ergonomic comfort satisfaction score',
  },
  economic: {
    title: 'Economic & Operational Viability Parameters',
    currentBaseline: 'Hardware startups struggle with high upfront tooling tooling capital (die molds), volatile raw metal commodity pricing, and reliance on single offshore factories.',
    gapsIdentified: [
      'Over-leveraged initial tooling investment before commercial volume validation',
      'Single-source vulnerability for custom extruded aluminum structural profiles',
      'Extended 60–90 day payment collection cycles from institutional enterprise clients',
      'High logistics freight cost due to low packing density in conventional bulky folded chairs',
    ],
    proposedImprovements: [
      'Phase capital: begin with soft modular CNC tooling for pilot batches before committing to high-cavity hard tooling',
      'Qualify dual regional extruders with quarterly fixed-price indexing to insulate against commodity spikes',
      'Require 40% milestone deposits on institutional orders over 200 units to protect working capital',
      'Engineer sub-45mm flat nesting to fit 70 chairs per standard pallet, boosting transport volume efficiency by 40%',
    ],
    impactMetric: '35% reduction in freight cost per unit and protected 18-month cash runway to break-even',
  },
};

export const SCALABLE_BMC_DATA = {
  keyPartners: [
    'Regional ISO 9001 certified aluminum & steel extrusion mills',
    'Low-VOC architectural powder coating specialty applicators',
    'Third-party accredited testing labs (BIFMA X5.1 / ISO 17025)',
    'Enterprise facilities management & event equipment rental dealers',
  ],
  keyActivities: [
    'Precision CNC mandrel bending, laser profiling, and deburring',
    'Modular mechanical assembly & calibrated torque fastening',
    '100% end-of-line cycle, alignment, and cosmetic inspection',
    'B2B space-planning consultation & custom cart fleet delivery',
  ],
  keyResources: [
    'Proprietary enclosed anti-pinch hinge tooling & die sets',
    'Automated pneumatic assembly cells & testing proof rigs',
    'Direct digital B2B ordering and storage calculator portal',
    'Registered industrial design patents and circular CAD models',
  ],
  valuePropositions: [
    'Sub-45mm flat-nesting profile saving 70% storage closet space',
    'Ergonomic 15° lumbar curvature preventing posture strain',
    '100% mechanical fasteners (zero glue) enabling field part swaps',
    'Transparent pre-testing compliance disclosure and verified lifecycle',
  ],
  customerRelationships: [
    'Digital B2B spatial planning portal with instant CAD downloads',
    'Dedicated institutional account managers for universities & venues',
    'Automated 48-hour commercial sample trial program',
    'Post-sale spare parts catalog (feet, slats, bushings) on demand',
  ],
  channels: [
    'Direct-to-Consumer e-commerce platform (2-pack & 4-pack cartons)',
    'Direct B2B procurement channel for institutional venue fleets',
    'Architectural & interior specification dealer network',
  ],
  customerSegments: [
    'Event venues, convention centers, and equipment rental fleets',
    'Universities, training academies, and municipal community halls',
    'Modern agile corporate offices and co-working environments',
    'Urban micro-apartments and design-conscious households',
  ],
  costStructure: [
    'Direct Bill of Materials (recycled aluminum, steel, PCR polymer)',
    'Tooling amortisation & maintenance (extrusion & stamping dies)',
    'Semi-automated assembly cell labor and quality engineering',
    'Freight logistics, plastic-free packaging, and regional staging',
  ],
  revenueStreams: [
    'Core chair hardware unit sales (D2C retail & B2B volume tiers)',
    'High-density mobile transport cart bundles (35-chair capacity)',
    'Modular replacement wear-parts program (pads, glides, screws)',
    'Circular enterprise fleet buy-back & refurbishment program',
  ],
  scalingElements: {
    automation: 'Robotic multi-axis mandrel bending and automated torque fastening to achieve 3-minute assembly cycle times per unit at scale.',
    outsourcing: 'Outsourcing capital-intensive raw casting and extrusion to certified regional mills while retaining precision assembly, torque calibration, and QA in-house.',
    platform: 'Proprietary B2B Space-Planning & Cart Density Calculator web platform allowing venue managers to input room dimensions, calculate chair capacity, and execute 1-click sample RFPs.',
  },
};

export const MULTI_YEAR_FINANCIALS_DATA = {
  years: [
    {
      year: 'Year 1: Pilot & Certification',
      units: '6,000 units',
      revenue: '$510,000',
      cogsPerUnit: '$48.50',
      avgSellingPrice: '$85.00',
      grossMargin: '43.0%',
      operatingExpenses: '$320,000',
      ebitda: '-$101,000 (Tooling investment phase)',
      keyMilestone: 'Lab certification, soft tooling qualification, 5 anchor B2B accounts',
    },
    {
      year: 'Year 2: Regional Scaling & D2C',
      units: '24,000 units',
      revenue: '$1,968,000',
      cogsPerUnit: '$39.20',
      avgSellingPrice: '$82.00',
      grossMargin: '52.2%',
      operatingExpenses: '$680,000',
      ebitda: '+$347,200 (Break-even reached Q2)',
      keyMilestone: 'Hard multi-cavity dies, automated bending, direct online store launch',
    },
    {
      year: 'Year 3: Mature National Expansion',
      units: '60,000 units',
      revenue: '$4,800,000',
      cogsPerUnit: '$34.40',
      avgSellingPrice: '$80.00',
      grossMargin: '57.0%',
      operatingExpenses: '$1,420,000',
      ebitda: '+$1,316,000 (Robust free cash flow)',
      keyMilestone: 'Secondary regional assembly cell, enterprise circular take-back program',
    },
  ],
  unitEconomicsBreakdown: [
    { item: 'Raw Metal Alloys (Recycled Al/Steel)', y1: '$22.00', y2: '$17.50', y3: '$15.20' },
    { item: 'Seat Shell & Lumbar Component', y1: '$12.50', y2: '$9.80', y3: '$8.40' },
    { item: 'Fasteners, Bushings & Glides', y1: '$4.20', y2: '$3.40', y3: '$2.90' },
    { item: 'Assembly & Finishing (Labor + Energy)', y1: '$6.30', y2: '$5.20', y3: '$4.80' },
    { item: 'Eco-Packaging & Pallet Prep', y1: '$3.50', y2: '$3.30', y3: '$3.10' },
    { item: 'Total Unit Cost (COGS)', y1: '$48.50', y2: '$39.20', y3: '$34.40' },
  ],
  capitalRequirements: [
    { tranche: 'Tranche 1: Seed / Pilot ($450,000)', use: 'CNC soft tooling, ANSI/BIFMA lab testing certification, pilot assembly cell lease, and 500-unit proof run.' },
    { tranche: 'Tranche 2: Scale Expansion ($1,200,000)', use: 'High-speed progressive stamping dies, automated bending robotic cells, 45-day raw material buffer stock, and enterprise B2B sales ramp.' },
  ],
};

export const TEAM_SCALING_10_TO_100 = [
  {
    phase: 'Phase 1: Founder Cell (1–10 Members)',
    headcount: '1 to 10 team members',
    focus: 'Prototype iteration, proof testing, initial B2B sales, and pilot SOP creation.',
    roles: [
      'Founding Industrial Designer & Hinge Kinematics Lead',
      'Lead Manufacturing & Tooling Engineer',
      'Quality & Testing Compliance Officer',
      'Commercial B2B Partnerships Lead',
      'Senior Assembly Technicians (x4)',
      'Supply Chain & Operations Generalist',
      'Financial Controller & Bookkeeper (Part-Time)',
    ],
    cultureMechanisms: 'Daily 15-minute standups, direct customer feedback reviews, and open workshop debate on every tolerance.',
  },
  {
    phase: 'Phase 2: Scale Operations (10–35 Members)',
    headcount: '10 to 35 team members',
    focus: 'Transitioning to double-shift assembly, quality auditing, warehouse staging, and e-commerce customer support.',
    roles: [
      'Director of Manufacturing Operations',
      'Procurement & Sourcing Manager (Dual-source audits)',
      '2 Assembly Cell Leads (Shift 1 & Shift 2)',
      'Quality Control Inspectors (x3)',
      'Assembly & Packaging Technicians (x18)',
      'Warehouse & Fulfillment Coordinator',
      'Digital B2B & D2C Customer Support Specialists (x3)',
      'Financial Analyst & Cost Accountant',
    ],
    cultureMechanisms: 'Formalized 5S lean workshops, certified employee safety council, peer craftsmanship recognition, and quarterly milestone profit-sharing.',
  },
  {
    phase: 'Phase 3: Multi-Hub Enterprise (35–100+ Members)',
    headcount: '35 to 100+ team members',
    focus: 'Multi-regional assembly cells, robotics automation, nationwide distributor logistics, and institutional enterprise sales.',
    roles: [
      'VP of Operations & Industrial Engineering',
      'Regional Plant Managers (West & East Hubs)',
      'Robotics & Automation Systems Engineers (x3)',
      'Environmental Health & Safety (EHS) Director',
      'Dedicated ESG, Circularity & LCA Specialist',
      'Cell Team Leaders & Technicians (x50+)',
      'National Enterprise Account Executives (x6)',
      'Supply Chain Planners & Data Analysts (x4)',
      'Product Lifecycle & Continuous Improvement Engineers (x4)',
    ],
    cultureMechanisms: 'Universal stop-work authority on quality, technician equity stock options, annual circularity design hackathons, and community apprentice sponsorships.',
  },
];

export const FINAL_ROADMAP_MILESTONES = [
  { quarter: 'Q1 Year 1', title: 'Prototype Proof & Lab Testing Protocols', status: 'In Progress', deliverables: 'Fabricate 50 prototype units; submit to ISO 17025 lab for ANSI/BIFMA X5.1 static and impact testing.' },
  { quarter: 'Q2 Year 1', title: 'Pilot Facility Lease & Tooling Setup', status: 'Planned', deliverables: 'Commission pilot assembly cell; qualify dual regional extrusion suppliers; author ISO 9001 SOPs.' },
  { quarter: 'Q3 Year 1', title: '500-Unit Commercial Beta Run', status: 'Planned', deliverables: 'Deploy pilot batches into 5 anchor partner event venues and university auditoriums; gather ergonomics logs.' },
  { quarter: 'Q4 Year 1', title: 'Initial Commercial B2B Delivery', status: 'Planned', deliverables: 'Execute first 2,000 units of firm B2B orders; package in 100% plastic-free corrugated cartons.' },
  { quarter: 'Q1-Q2 Year 2', title: 'High-Volume Stamping Dies & Automation', status: 'Planned', deliverables: 'Commission progressive stamping dies; install robotic tube bender; reduce unit assembly time to 3 mins.' },
  { quarter: 'Q3-Q4 Year 2', title: 'Direct E-Commerce & Retail Dealer Launch', status: 'Planned', deliverables: 'Roll out 2-pack/4-pack D2C store; onboard 15 architectural specification dealers; achieve break-even.' },
  { quarter: 'Year 3', title: 'Secondary Regional Hub & Circular Take-Back', status: 'Planned', deliverables: 'Open secondary assembly hub; scale to 60k units/year; activate customer chair take-back & metal recycling loop.' },
];

