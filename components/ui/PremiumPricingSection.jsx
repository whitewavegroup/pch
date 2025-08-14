// PremiumPricingSection.jsx
export default function PremiumPricingSection({ lang='en', demoMode=true, onSelectPlan }) {
  const t = lang==='es'
    ? { title:'Planes y precios', sub:'Elige el plan que impulse tu visibilidad', badge:'Más popular' }
    : { title:'Plans & Pricing', sub:'Pick the plan that boosts your visibility', badge:'Most popular' };
  const plans = (lang) => ({
    free: {
      name: lang==='es' ? 'Gratis' : 'Free',
      price: '$0', cadence: lang==='es' ? '/mes' : '/mo',
      highlight: lang==='es' ? 'Empieza sin costo' : 'Start free',
      features: lang==='es'
        ? ['Listado básico','5 mensajes gratis/mes','1 categoría','Soporte por email']
        : ['Basic listing','5 free messages/mo','1 category','Email support'],
      cta: lang==='es' ? 'Crear listado' : 'Create listing',
      accent: 'border-slate-200'
    },
    enhanced: {
      name: lang==='es' ? 'Mejorado' : 'Enhanced',
      price: '$7', cadence: lang==='es' ? '/mes' : '/mo',
      highlight: lang==='es' ? 'Mejor posición' : 'Higher ranking',
      features: lang==='es'
        ? ['Logo y fotos','Biografía y enlaces','Mejor posición en búsquedas','2 categorías']
        : ['Logo & photos','Bio & links','Higher search ranking','2 categories'],
      cta: lang==='es' ? 'Mejorar a Mejorado' : 'Upgrade to Enhanced',
      accent: 'border-blue-200'
    },
    featured: {
      name: lang==='es' ? 'Destacado' : 'Featured',
      price: '$15', cadence: lang==='es' ? '/mes' : '/mo',
      highlight: lang==='es' ? 'Top de categoría' : 'Top of category',
      features: lang==='es'
        ? ['Insignia verificada','Fondo resaltado','Prioridad en búsquedas','3 categorías']
        : ['Verified badge','Highlighted card','Priority in search','3 categories'],
      cta: lang==='es' ? 'Mejorar a Destacado' : 'Upgrade to Featured',
      accent: 'border-amber-200'
    },
    premium: {
      name: lang==='es' ? 'Profesional' : 'Premium',
      price: '$25', cadence: lang==='es' ? '/mes' : '/mo',
      highlight: lang==='es' ? 'Analítica + Portada' : 'Analytics + Homepage',
      features: lang==='es'
        ? ['Analítica de vistas/mensajes','Rotación en portada','Múltiples listados','Soporte prioritario']
        : ['Views/messages analytics','Homepage rotation','Multiple listings','Priority support'],
      cta: lang==='es' ? 'Mejorar a Profesional' : 'Upgrade to Premium',
      accent: 'border-purple-200'
    }
  });
  const data = plans(lang);
  const order = ['free','enhanced','featured','premium'];

  return (
    <section id="pricing" className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">{t.title}</h2>
          <p className="mt-3 text-slate-600">{t.sub}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {order.map((k) => {
            const p = data[k]; const isPopular = k==='featured';
            return (
              <div key={k}
                className={`relative rounded-2xl border ${p.accent} bg-white shadow-[0_12px_40px_rgba(2,6,23,0.06)] hover:shadow-[0_18px_56px_rgba(2,6,23,0.1)] transition overflow-hidden`}>
                {isPopular && (
                  <div className="absolute right-3 top-3 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    {t.badge}
                  </div>
                )}
                <div className="p-6">
                  <div className="text-sm text-slate-500">{p.highlight}</div>
                  <div className="mt-1 flex items-end gap-1">
                    <div className="text-4xl font-semibold text-slate-900">{p.price}</div>
                    <div className="pb-2 text-slate-500">{p.cadence}</div>
                  </div>
                  <div className="mt-4 h-px w-full bg-slate-100" />
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {p.features.map((f,i)=>(
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onSelectPlan?.(k)}
                    className={`mt-6 w-full rounded-xl ${k==='premium' ? 'bg-[#1F4FFF] text-white hover:bg-[#173FCC]' : 'border border-slate-300 bg-white text-slate-900 hover:border-slate-400'} px-4 py-2.5 font-medium transition`}>
                    {p.cta}
                  </button>
                  <div className="mt-3 text-center text-xs text-slate-500">
                    {demoMode
                      ? (lang==='es' ? 'Modo demo: la mejora se aplica al instante.' : 'Demo mode: upgrade applies instantly.')
                      : (lang==='es' ? 'Abrirá Stripe en modo de prueba.' : 'Stripe test checkout will open.')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
