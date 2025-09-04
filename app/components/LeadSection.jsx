'use client'
import { useI18n } from '../lib/i18n';
import CombinedLeadForm from './CombinedLeadForm';
export default function LeadSection(){
  const { t } = useI18n();
  return (
    <section id="lead" className="container-limit py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-semibold">{t.sections.lead_title}</h2>
          <p className="mt-3 opacity-90">{t.sections.lead_desc}</p>
          <ul className="mt-4 space-y-2 opacity-90">
            <li>• Templated client intros (English/Spanish) via email.</li>
            <li>• Showcase gear lists, riders, certifications and rates.</li>
            <li>• Sync availability (Google/Outlook) and avoid double-booking.</li>
          </ul>
        </div>
        <CombinedLeadForm />
      </div>
    </section>
  );
}
