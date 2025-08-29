import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import ProviderCard from '../components/ProviderCard';
import SearchBar from '../components/SearchBar';
import { t } from '../lib/i18n';
import { prisma } from '../lib/db';

export default function Home({lang, featured}:{lang:'en'|'es', featured:any[]}){
  const i = t(lang);
  const chips = ['sonido México','iluminación Bogotá','tarimas Miami','acústica Madrid','backline CDMX'];
  return (<Layout lang={lang}>
    <section className="search-hero">
      <h1 className="title">ProConnectHub / MiContacto</h1>
      <p className="subtitle">{i.tagline}</p>
      <SearchBar placeholder={i.searchPlaceholder} />
      <div className="chips" aria-label="Popular">{chips.map((c,i)=>(<span key={i} className="chip">{c}</span>))}</div>
    </section>
    <h3 style={{margin:'1rem 0 .6rem'}}>{i.featured}</h3>
    <div className="grid">{featured.map(p=> <ProviderCard key={p.id} p={p} />)}</div>
  </Layout>)
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const lang = (ctx.query.lang==='es' ? 'es' : (ctx.req.headers['accept-language']?.startsWith('es') ? 'es' : 'en')) as 'en'|'es';
  const featured = await prisma.provider.findMany({ include:{ services:{ include:{ service:true } }, regions:true }, orderBy:[{updatedAt:'desc'}], take:3 });
  return { props: { lang, featured: JSON.parse(JSON.stringify(featured)) } };
}
