export default function Hero({ t }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            {t.heroTitle}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{t.heroSub}</p>
          <div className="mt-8 flex gap-3">
            <a href="#directory" className="inline-flex items-center justify-center rounded-xl bg-[#1F4FFF] px-5 py-3 text-white font-medium hover:bg-[#173FCC] transition">
              {t.search}
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 hover:border-slate-400 transition">
              {t.list}
            </a>
          </div>
        </div>
      </div>
      <svg className="absolute -right-16 -top-16 opacity-20" width="420" height="420" viewBox="0 0 420 420" fill="none">
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#1F4FFF" />
          </pattern>
        </defs>
        <rect width="420" height="420" fill="url(#dots)"/>
      </svg>
    </section>
  );
}
