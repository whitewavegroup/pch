export default function ListingCard({ item, lang='en', onContact }) {
  const tierBadge = (tier) => {
    if (tier==='premium') return <span className="absolute left-4 top-4 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">{lang==='es'?'Profesional':'Premium'}</span>;
    if (tier==='featured') return <span className="absolute left-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{lang==='es'?'Destacado':'Featured'}</span>;
    if (tier==='enhanced') return <span className="absolute left-4 top-4 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">{lang==='es'?'Mejorado':'Enhanced'}</span>;
    return null;
  };
  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_18px_44px_rgba(2,6,23,0.1)] transition overflow-hidden">
      <div className="relative h-40 bg-slate-100">
        <img src={item.photo || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600'} alt="" className="h-full w-full object-cover" />
        {tierBadge(item.tier)}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{item.name[lang]}</h3>
          <span className="text-sm text-slate-500">{item.locationLabel[lang]}</span>
        </div>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">
          {item.bio[lang]}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(item.tags||[]).slice(0,4).map(tag => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{tag}</span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3">
          <a href={`/provider/${item.id}`} className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:border-slate-400 transition">
            {lang==='es' ? 'Ver Perfil' : 'View Profile'}
          </a>
          <button onClick={onContact} className="inline-flex items-center rounded-xl bg-[#1F4FFF] px-4 py-2 text-sm font-medium text-white hover:bg-[#173FCC] transition">
            {lang==='es' ? 'Contactar' : 'Contact'}
          </button>
        </div>
      </div>
    </div>
  );
}
