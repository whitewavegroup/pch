import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';
import { prisma } from '../../lib/db';

export default function ProviderPage({lang, p}:{lang:'en'|'es', p:any}){
  if(!p) return <Layout lang={lang}><div className="card">Not found</div></Layout>;
  const services: string[] = p?.services?.map((ps:any)=> ps.service?.key).filter(Boolean) ?? [];
  return (<Layout lang={lang}>
    <div className="card">
      <h1 className="title" style={{marginTop:0}}>{p.name}</h1>
      <div className="meta">{p.city ? p.city+', ' : ''}{p.country} • ⭐ {Number(p.ratingAvg||0).toFixed(1)} • {String(p.verifiedLevel)}</div>
      {p.summary && <p style={{marginTop:'1rem'}}>{p.summary}</p>}
      <h3>Especialidades</h3><div className="chips">{services.map((s,i)=>(<span className="chip" key={i}>{s}</span>))}</div>
      <h3 style={{marginTop:'1rem'}}>Contacto</h3>
      <div className="chips">{p.phone && <a className="chip" href={`tel:${p.phone}`}>Teléfono</a>}{p.website && <a className="chip" href={p.website} target="_blank" rel="noreferrer">Website</a>}</div>
    </div>
  </Layout>)
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const lang = (ctx.query.lang==='es' ? 'es' : (ctx.req.headers['accept-language']?.startsWith('es') ? 'es' : 'en')) as 'en'|'es';
  const slug = String(ctx.params?.slug||'');
  const p = await prisma.provider.findUnique({ where:{ slug }, include:{ services:{ include:{ service:true } }, regions:true, certifications:true, brands:true } });
  return { props: { lang, p: JSON.parse(JSON.stringify(p)) } };
}
