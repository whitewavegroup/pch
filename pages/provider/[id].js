import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { copy } from '../../lib/i18n';
import { SAMPLE_LISTINGS } from '../../features/directory/sampleData';

function StarRating({ value=5 }) {
  return (
    <div className="flex items-center gap-1">
    {[1,2,3,4,5].map(i => (
      <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i<=value ? 'text-amber-400' : 'text-slate-300'}`} fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z"/>
      </svg>
    ))}
    </div>
  );
}

export default function ProviderProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [lang, setLang] = useState('en');
  const t = useMemo(()=>copy[lang],[lang]);
  const [leadCreditsOn, setLeadCreditsOn] = useState(false);
  const [creditsLeft, setCreditsLeft] = useState(5);

  const item = SAMPLE_LISTINGS.find(x => String(x.id) === String(id)) || SAMPLE_LISTINGS[0];
  const displayName = item.name[lang];
  const bio = item.bio[lang];
  const location = item.locationLabel[lang];

  function onContact() {
    if (!leadCreditsOn) return alert(t.sent);
    if (creditsLeft <= 0) return alert(t.limitReached);
    setCreditsLeft(creditsLeft-1);
    alert(`${t.sent}\n${t.creditsLeft(creditsLeft-1)}`);
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px  -6 py-3">
          <div className="text-xl font-bold">{lang==='en'?t.brandA:t.brandB}</div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang==='en'?'es':'en')} className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">
              {lang==='en' ? 'EN / ES' : 'ES / EN'}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600'} alt="" className="h-64 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-slate-900/10" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-2xl bg-white/80 backdrop-blur p-5 shadow-[0_16px_56px_rgba(2,6,23,0.2)]">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">{displayName}</h1>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    {lang==='es' ? 'Destacado' : 'Featured'}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-3 text-sm text-slate-600">
                  <StarRating value={5} />
                  <span>·</span>
                  <span>{lang==='es'?'Ubicación':'Location'}: {location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={onContact} className="rounded-xl bg-[#1F4FFF] px-5 py-2.5 text-white font-medium hover:bg-[#173FCC] transition">
                  {t.contact}
                </button>
                <a href="https://example.com" target="_blank" className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-900 hover:border-slate-400 transition">
                  {lang==='es'?'Sitio web':'Website'}
                </a>
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-500">{t.foundYouOn}</div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_12px_40px_rgba(2,6,23,0.06)]">
              <h2 className="text-xl font-semibold text-slate-900">{lang==='es'?'Acerca de':'About'}</h2>
              <p className="mt-2 text-slate-700">{bio}</p>
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-900">{lang==='es'?'Galería':'Gallery'}</h3>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {['https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600',
                    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600',
                    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600'].map((src,i)=>(
                    <img key={i} src={src} className="h-28 w-full rounded-xl object-cover" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_12px_40px_rgba(2,6,23,0.06)]">
              <h3 className="text-lg font-semibold text-slate-900">{lang==='es'?'Tarifa':'Rate'}</h3>
              <div className="mt-1 text-slate-700">{lang==='es'?'$800–$1,200 / día':'$800–$1,200 / day'}</div>
              <div className="mt-4 h-px w-full bg-slate-100" />
              <form onSubmit={(e)=>{e.preventDefault(); onContact();}} className="mt-4 space-y-3">
                <input className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F4FFF]/40" placeholder={lang==='es'?'Tu nombre':'Your name'} />
                <input className="w/full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F4FFF]/40" placeholder={lang==='es'?'Tu email':'Your email'} />
                <textarea rows={4} className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F4FFF]/40" placeholder={lang==='es'?'Cuéntanos tu proyecto':'Tell us about your project'} />
                <button className="w-full rounded-xl bg-[#1F4FFF] px-4 py-2 text-white font-medium hover:bg-[#173FCC] transition">{t.contact}</button>
                {leadCreditsOn && (<div className="pt-2 text-center text-xs text-slate-500">{t.creditsLeft(creditsLeft)}</div>)}
              </form>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_12px_40px_rgba(2,6,23,0.06)]">
              <h3 className="text-lg font-semibold text-slate-900">Social</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <a target="_blank" className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200" href="https://instagram.com/miami.lx">Instagram</a>
                <a target="_blank" className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200" href="https://youtube.com/miamilx">YouTube</a>
                <a target="_blank" className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200" href="https://example.com">Website</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} ProConnectHub / MiContacto</div>
          <div className="flex items-center gap-4">
            <span>{lang==='en' ? `Lead Credits: ${leadCreditsOn?'ON':'OFF'}` : `Créditos: ${leadCreditsOn?'ENC':'APAG'}`}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
