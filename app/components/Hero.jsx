'use client'
import Link from 'next/link'; import { useI18n } from '../lib/i18n';
export default function Hero(){
  const { t } = useI18n();
  return (
    <section className="relative gradient">
      <div className="container-limit pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1]">{t.tagline}</h1>
            <p className="mt-4 text-lg opacity-90">{t.pitch}</p>
            <ul className="mt-4 space-y-1 opacity-90">
              {t.bullets.map((b,i)=>(<li key={i}>• {b}</li>))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link href="#lead" className="btn btn-primary">{t.cta_secondary}</Link>
              <Link href="#categories" className="btn btn-ghost">{t.cta_primary}</Link>
            </div>
          </div>
          <div className="card p-4 md:p-6">
            <video className="w-full rounded-xl" autoPlay muted loop playsInline poster="/logo.svg">
              <source src="" type="video/mp4" />
            </video>
            <div className="small mt-3 opacity-80">Showcase your rig, setlists, gear list, certifications and availability in minutes.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
