'use client'
import { useI18n } from '../lib/i18n';
export default function Features(){
  const { t } = useI18n();
  return (
    <section id="features" className="container-limit py-16 md:py-24">
      <h2 className="text-3xl font-semibold mb-8">{t.sections.features_title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.sections.features.map((f,i)=>(
          <div key={i} className="card p-6">
            <div className="text-xl font-semibold">{f.title}</div>
            <p className="mt-2 opacity-80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
