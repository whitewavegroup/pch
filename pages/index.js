import { useMemo, useState } from 'react';
import { copy } from '../lib/i18n';
import Hero from '../components/ui/Hero';
import CategoryGrid from '../components/ui/CategoryGrid';
import SponsorBanner from '../components/ui/SponsorBanner';
import PremiumPricingSection from '../components/ui/PremiumPricingSection';
import Testimonials from '../components/ui/Testimonials';

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => copy[lang], [lang]);
  const [leadCreditsOn, setLeadCreditsOn] = useState(false); // default OFF
  const [demoModeOn, setDemoModeOn] = useState(true); // default ON

  return (
    <div>
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5Zm7-3h2v6h-2V9Zm4.1-2h3a5 5 0 1 1 0 10h-3v-2h3a3 3 0 1 0 0-6h-3V7Z"/></svg>
            </div>
            <div>
              <div className="text-xl font-bold leading-tight">{lang==='en' ? t.brandA : t.brandB}</div>
              <div className="text-xs text-gray-500">{lang==='en' ? t.taglineA : t.taglineB}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang==='en'?'es':'en')} className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">
              {lang==='en' ? 'EN / ES' : 'ES / EN'}
            </button>
            <a href="/directory" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">{t.search}</a>
            <details className="relative">
              <summary className="list-none cursor-pointer rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">{t.admin}</summary>
              <div className="absolute right-0 mt-2 w-72 rounded-xl border bg-white p-4 shadow-xl">
                <p className="text-sm font-semibold">{t.monetization}</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>{t.leadCredits}</span>
                    <button onClick={() => setLeadCreditsOn(v=>!v)} className={`rounded-full px-3 py-1 text-xs ${leadCreditsOn ? 'bg-green-100 text-green-700':'bg-gray-100 text-gray-700'}`}>
                      {leadCreditsOn ? t.on : t.off}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t.demoMode}</span>
                    <button onClick={() => setDemoModeOn(v=>!v)} className={`rounded-full px-3 py-1 text-xs ${demoModeOn ? 'bg-green-100 text-green-700':'bg-gray-100 text-gray-700'}`}>
                      {demoModeOn ? t.on : t.off}
                    </button>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </header>

      <Hero t={t} />
      <CategoryGrid lang={lang} />
      <SponsorBanner />
      <PremiumPricingSection
        lang={lang}
        demoMode={demoModeOn}
        onSelectPlan={(plan)=>{
          if (demoModeOn) alert((lang==='es'?'Aplicado plan: ':'Applied plan: ')+plan);
          else alert('Stripe test checkout would open.');
        }}
      />
      <Testimonials lang={lang} />

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} ProConnectHub / MiContacto</div>
          <div className="flex items-center gap-4">
            <span>{lang==='en' ? `Lead Credits: ${leadCreditsOn?'ON':'OFF'}` : `Créditos: ${leadCreditsOn?'ENC':'APAG'}`}</span>
            <span>{lang==='en' ? `Demo Mode: ${demoModeOn?'ON':'OFF'}` : `Demo: ${demoModeOn?'ENC':'APAG'}`}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
