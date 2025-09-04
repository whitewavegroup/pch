'use client'
import { useI18n } from '../lib/i18n';
const cats=[
  { name: 'Audio Engineers', es: 'Ingenieros de Audio' },
  { name: 'Lighting Designers', es: 'Diseñadores de Iluminación' },
  { name: 'Video & LED Techs', es: 'Técnicos de Video y LED' },
  { name: 'Backline & Stage', es: 'Backline y Escenario' },
  { name: 'Musicians for Hire', es: 'Músicos por Contrato' },
  { name: 'Producers & PMs', es: 'Productores y PMs' },
  { name: 'Installers (Cert.)', es: 'Instaladores (Cert.)' },
  { name: 'Rentals & Sales', es: 'Renta y Ventas' }
];
export default function Categories(){
  const { lang, t } = useI18n();
  return (
    <section id="categories" className="container-limit py-16 md:py-24">
      <h2 className="text-3xl font-semibold mb-8">{t.sections.categories_title}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cats.map((c,i)=>(
          <div key={i} className="card p-5 hover:bg-white/10 transition">
            <div className="text-lg font-medium">{lang==='en'?c.name:c.es}</div>
            <div className="small mt-1 opacity-70">+ browse profiles</div>
          </div>
        ))}
      </div>
    </section>
  );
}
