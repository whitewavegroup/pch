import { useMemo, useState } from 'react';
import { copy } from '../lib/i18n';
import { CATEGORIES, SUBS, LOCATIONS, SAMPLE_LISTINGS } from '../features/directory/sampleData';
import ListingCard from '../components/ui/ListingCard';

export default function Directory() {
  const [lang, setLang] = useState('en');
  const t = useMemo(()=>copy[lang],[lang]);
  const [cat, setCat] = useState('all');
  const [sub, setSub] = useState('all');
  const [loc, setLoc] = useState('all');
  const [leadCreditsOn, setLeadCreditsOn] = useState(false);
  const [creditsLeft, setCreditsLeft] = useState(5);

  const filtered = SAMPLE_LISTINGS.filter(l => {
    const catOk = cat==='all' || l.category===cat;
    const subOk = sub==='all' || l.sub===sub;
    const locOk = loc==='all' || l.location===loc;
    return catOk && subOk && locOk;
  });

  function sendMessage() {
    if (!leadCreditsOn) { alert(t.sent); return; }
    if (creditsLeft <= 0) { alert(t.limitReached); return; }
    setCreditsLeft(creditsLeft-1);
    alert(`${t.sent}\n${t.creditsLeft(creditsLeft-1)}`);
  }

  return (
    <div>
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="text-xl font-bold leading-tight">{lang==='en'?t.brandA:t.brandB}</div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang==='en'?'es':'en')} className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">
              {lang==='en' ? 'EN / ES' : 'ES / EN'}
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <label className="text-xs text-gray-500">{t.categories}</label>
              <select value={cat} onChange={e=>setCat(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2">
                <option value="all">{t.all}</option>
                {CATEGORIES.map(c => <option key={c.id} value={c.id}>{lang==='en'?c.en:c.es}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500">{t.subcategories}</label>
              <select value={sub} onChange={e=>setSub(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2">
                <option value="all">{t.all}</option>
                {SUBS.map(s => <option key={s.id} value={s.id}>{lang==='en'?s.en:s.es}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500">{t.locations}</label>
              <select value={loc} onChange={e=>setLoc(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2">
                <option value="all">{t.all}</option>
                {LOCATIONS.map(l => <option key={l.id} value={l.id}>{lang==='en'?l.en:l.es}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map(item => (
            <ListingCard key={item.id} item={item} lang={lang} onContact={sendMessage} />
          ))}
        </div>
      </section>
    </div>
  );
}
