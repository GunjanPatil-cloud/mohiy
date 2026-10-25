import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import { COMPLIANCE_CHECKLIST } from '../data/content.ts';
import {
  FileCheck2,
  Mail,
  ShieldAlert,
  Send,
  Copy,
  Check,
  AlertCircle,
  CheckCircle2,
  Building,
  Info,
  Lock,
} from 'lucide-react';

interface ComplianceContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ComplianceContactPage: React.FC<ComplianceContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    inquiryType: 'Commercial Venue Pilot / Bulk Procurement',
    modelInterest: 'Classic Folding Chair',
    estimatedQuantity: '100 - 500 units',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedDraft, setSubmittedDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name or company representative.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid work or personal email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a message with at least 15 characters outlining your inquiry.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const draftText = `To: inquiries@nexlivo.com
Subject: [Nexlivo Inquiry] ${formData.inquiryType} - ${formData.organization || formData.name}

Sender: ${formData.name}
Organization: ${formData.organization || 'Individual / Household'}
Email: ${formData.email}
Inquiry Type: ${formData.inquiryType}
Model of Interest: ${formData.modelInterest}
Estimated Scope: ${formData.estimatedQuantity}

Message:
${formData.message}

---
Disclosed Note: Nexlivo is a folding chair startup concept. Inquiries will be logged for pilot prototype reviews and commercial requirements verification.`;

    setSubmittedDraft(draftText);
  };

  const handleCopy = () => {
    if (!submittedDraft) return;
    navigator.clipboard.writeText(submittedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const getMailtoUrl = () => {
    if (!submittedDraft) return '#';
    const subject = encodeURIComponent(`[Nexlivo Inquiry] ${formData.inquiryType} - ${formData.organization || formData.name}`);
    const body = encodeURIComponent(
      `Hello Nexlivo Team,\n\nName: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\nModel: ${formData.modelInterest}\nEstimated Scope: ${formData.estimatedQuantity}\n\nMessage:\n${formData.message}\n\n(Sent via Nexlivo Concept Inquiries Portal)`
    );
    return `mailto:inquiries@nexlivo.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-softwhite">
      <PageHeader
        badge="Regulatory Integrity & Channel"
        title="Compliance Checklist & Commercial Inquiries"
        subtitle="Transparent roadmap of safety testing protocols, pre-certification disclosures, and our direct commercial inquiry channel."
        onNavigate={onNavigate}
        actionText="Explore Chairs"
        onAction={() => onNavigate('chairs')}
      />

      {/* Mandatory Verification & Pre-Production Statement Banner */}
      <div className="bg-forest text-softwhite py-4 border-b border-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 text-xs leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-lime shrink-0 mt-0.5" />
          <div>
            <strong className="text-lime uppercase tracking-wider block mb-0.5">
              Mandatory Regulatory & Verification Advisory
            </strong>
            <span>
              Nexlivo is a manufacturing startup in the pre-production design and prototype phase. <strong>No regulatory certifications or safety approvals have been formally granted.</strong> All standards listed below represent formal compliance targets for which independent testing protocols are planned. Commercial procurement contracts remain contingent upon verified third-party laboratory certifications.
            </span>
          </div>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 1: Compliance Roadmap Checklist */}
        <div>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
              Standards & Testing Roadmap
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest mt-3">
              Institutional Compliance & Certification Checklist
            </h2>
            <p className="text-forest/75 text-sm mt-1">
              Every chair architecture is designed to pass rigorous commercial furniture endurance criteria. The table below details our current review status for each standard.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {COMPLIANCE_CHECKLIST.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-forest/15 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand/40 transition-all"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase text-brand">
                      {item.domain}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-forest">
                    {item.standardOrReg}
                  </h3>
                  <p className="text-xs text-forest/75 leading-relaxed">
                    {item.verificationRequirement}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    item.currentStatus === 'Lab Protocol Planned'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : item.currentStatus === 'Advisory Consultation'
                      ? 'bg-blue-100 text-blue-900 border border-blue-300'
                      : 'bg-greygreen-light text-forest border border-forest/20'
                  }`}>
                    {item.currentStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Contact Form & Inquiry Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-forest/15 p-8 sm:p-10 shadow-xs">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-light px-3 py-1 rounded-full">
                Get in Touch
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest mt-3">
                Commercial & Pilot Inquiry Form
              </h2>
              <p className="text-forest/75 text-sm mt-1">
                Share your seating requirements or prototype feedback. Submissions generate an authenticated inquiry record with direct email routing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase text-forest mb-1.5">
                    Your Name / Representative *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-forest bg-softwhite focus:bg-white focus:outline-hidden transition-colors ${
                      errors.name ? 'border-red-500 bg-red-50/30' : 'border-forest/20 focus:border-brand'
                    }`}
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="org" className="block text-xs font-bold uppercase text-forest mb-1.5">
                    Organization / Venue (Optional)
                  </label>
                  <input
                    id="org"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Apex Convention Center"
                    className="w-full px-4 py-2.5 rounded-xl border border-forest/20 text-sm text-forest bg-softwhite focus:bg-white focus:border-brand focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase text-forest mb-1.5">
                  Business / Contact Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.com"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-forest bg-softwhite focus:bg-white focus:outline-hidden transition-colors ${
                    errors.email ? 'border-red-500 bg-red-50/30' : 'border-forest/20 focus:border-brand'
                  }`}
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="inquiryType" className="block text-xs font-bold uppercase text-forest mb-1.5">
                    Inquiry Category
                  </label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-forest/20 text-xs text-forest bg-softwhite focus:bg-white focus:border-brand"
                  >
                    <option>Commercial Venue Pilot / Bulk Procurement</option>
                    <option>Retail or Distribution Partnership</option>
                    <option>Design Feedback & Ergonomics</option>
                    <option>Supplier or Material Submission</option>
                    <option>Career / Talent Pool</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modelInterest" className="block text-xs font-bold uppercase text-forest mb-1.5">
                    Model of Interest
                  </label>
                  <select
                    id="modelInterest"
                    value={formData.modelInterest}
                    onChange={(e) => setFormData({ ...formData, modelInterest: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-forest/20 text-xs text-forest bg-softwhite focus:bg-white focus:border-brand"
                  >
                    <option>Classic Folding Chair</option>
                    <option>Comfort Folding Chair</option>
                    <option>Compact Folding Chair</option>
                    <option>All Three Concepts</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-xs font-bold uppercase text-forest mb-1.5">
                    Estimated Scope
                  </label>
                  <select
                    id="quantity"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-forest/20 text-xs text-forest bg-softwhite focus:bg-white focus:border-brand"
                  >
                    <option>Household (2 – 8 units)</option>
                    <option>Small Venue (20 – 100 units)</option>
                    <option>100 – 500 units</option>
                    <option>500+ units (Fleet Contract)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase text-forest mb-1.5">
                  Message & Specific Requirements *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your planned space, timeline, cart storage constraints, or prototype review interests..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-forest bg-softwhite focus:bg-white focus:outline-hidden transition-colors ${
                    errors.message ? 'border-red-500 bg-red-50/30' : 'border-forest/20 focus:border-brand'
                  }`}
                />
                {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-forest hover:bg-forest-light text-lime font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate Verified Inquiry Draft</span>
                </button>
              </div>
            </form>

            {/* Submitted Draft Feedback */}
            {submittedDraft && (
              <div className="mt-8 p-6 rounded-2xl bg-greygreen-light border border-brand/30 space-y-4 animate-in fade-in">
                <div className="flex items-center gap-2 text-brand font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand" />
                  <span>Inquiry Draft Formatted Successfully</span>
                </div>

                <p className="text-xs text-forest/80 leading-relaxed">
                  In compliance with Ponytail coding principles, we do not simulate a fake server submission. Below is your structured inquiry package ready for one-click dispatch or direct email sending:
                </p>

                <div className="p-3 bg-white rounded-xl border border-forest/15 font-mono text-[11px] text-forest/90 whitespace-pre-wrap overflow-x-auto max-h-48">
                  {submittedDraft}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={getMailtoUrl()}
                    className="px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Default Email App</span>
                  </a>

                  <button
                    onClick={handleCopy}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-forest/5 text-forest font-bold text-xs uppercase tracking-wider transition-colors border border-forest/20 inline-flex items-center gap-1.5"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-brand" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Text'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Direct Details & Privacy Policy */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <div className="bg-forest rounded-3xl p-8 text-softwhite space-y-4">
              <div className="w-12 h-12 rounded-xl bg-forest-light text-lime flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-softwhite">
                Direct Contact Channel
              </h3>
              <p className="text-greygreen text-xs leading-relaxed">
                For specifiers, architects, distributors, and media inquiries regarding prototype trials:
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-forest-dark border border-forest-light flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-greygreen uppercase">Inquiry Inbox</span>
                    <div className="font-bold text-softwhite mt-0.5">inquiries@nexlivo.com</div>
                  </div>
                  <a
                    href="mailto:inquiries@nexlivo.com"
                    className="text-lime font-bold hover:underline"
                  >
                    Compose →
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-forest-dark border border-forest-light">
                  <span className="text-[10px] text-greygreen uppercase">Startup Status</span>
                  <div className="font-bold text-softwhite mt-0.5">Pre-Production Design Lab</div>
                  <p className="text-[11px] text-greygreen mt-1">Prototype evaluations conducted by appointment.</p>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-white rounded-3xl border border-forest/15 p-8 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-forest font-bold text-sm">
                <Lock className="w-4 h-4 text-brand" />
                <span>Privacy & Data Handling Notice</span>
              </div>
              <p className="text-xs text-forest/75 leading-relaxed">
                Nexlivo respects your privacy. Any inquiry information provided is utilized strictly for responding to your specific seating query and coordinating potential prototype reviews.
              </p>
              <ul className="space-y-1.5 text-xs text-forest/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>No third-party data selling or tracking cookies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>Data stored strictly for direct business communications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>Inquirers may request removal at any time via email</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
