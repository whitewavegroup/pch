
import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';
import { prisma } from '../../lib/db';

export default function Provider({lang,p}:{lang:'en'|'es',p:any}){
  if(!p) return <Layout lang={lang}><div className='card'>Not found</div></Layout>;
  return (<Layout lang={lang}>
    <div className='card'>
      <h1>{p.name}</h1>
      <div>{p.country}</div>
      <div>{(p.services||[]).map((ps:any)=>ps.service?.key).join(' • ')}</div>
    </div>
  </Layout>)
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const lang = (ctx.query.lang==='es' ? 'es' : (ctx.req.headers['accept-language']?.startsWith('es') ? 'es' : 'en')) as 'en'|'es';
  const slug = String(ctx.params?.slug||'');
  const p = await prisma.provider.findUnique({ where:{ slug }, include:{ services:{ include:{ service:true } } } });
  return { props: { lang, p: JSON.parse(JSON.stringify(p)) } };
}
