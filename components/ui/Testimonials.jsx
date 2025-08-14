export default function Testimonials({ lang='en' }) {
  const t = lang==='en'
    ? { title:'What clients are saying', cta:'See more stories' }
    : { title:'Lo que dicen los clientes', cta:'Ver más historias' };
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{t.title}</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
              <div className="flex items-center gap-1">{'★★★★★'.split('').map((s,idx)=>(<span key={idx} className="text-amber-400">★</span>))}</div>
              <p className="mt-3 text-slate-700 text-sm">
                {lang==='en'
                 ? "Fast response and great sound. Booking again!"
                 : "Respuesta rápida y excelente sonido. ¡Repetimos seguro!"}
              </p>
              <div className="mt-4 text-xs text-slate-500">Austin, TX · Live Sound</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:border-slate-400">
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
