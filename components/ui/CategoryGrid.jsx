const categories = [
  { key:'production', en:'Production', es:'Producción', icon:'🎛️', descEN:'Audio, lighting, staging', descES:'Audio, luces, tarimas' },
  { key:'creative', en:'Creative', es:'Creativo', icon:'🎨', descEN:'Design, video, branding', descES:'Diseño, video, marca' },
  { key:'talent', en:'Talent', es:'Talento', icon:'🎤', descEN:'Musicians, DJs, speakers', descES:'Músicos, DJs, conferencistas' },
  { key:'services', en:'Services', es:'Servicios', icon:'🧰', descEN:'Rentals, logistics, planning', descES:'Rentas, logística, planeación' },
];
export default function CategoryGrid({ lang='en', onSelect }) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-12 md:grid-cols-2 lg:grid-cols-4">
      {categories.map(c => (
        <button key={c.key}
          onClick={() => onSelect?.(c.key)}
          className="group w-full rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-[0_8px_24px_rgba(2,6,23,0.06)] hover:shadow-[0_14px_36px_rgba(2,6,23,0.09)] transition">
          <div className="text-3xl">{c.icon}</div>
          <div className="mt-3 text-xl font-semibold text-slate-900">
            {lang==='en' ? c.en : c.es}
          </div>
          <div className="mt-1 text-slate-600">
            {lang==='en' ? c.descEN : c.descES}
          </div>
          <div className="mt-4 text-[#1F4FFF] font-medium group-hover:underline">
            {lang==='en' ? 'Explore' : 'Explorar'} →
          </div>
        </button>
      ))}
    </div>
  );
}
