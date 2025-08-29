
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import ProviderCard from '../components/ProviderCard';
import SearchBar from '../components/SearchBar';
import { t } from '../lib/i18n';
import { prisma } from '../lib/db';

export default function Home({lang, featured}:{lang:'en'|'es', featured:any[]}){
  const i = t(lang);
  return (<Layout lang={lang}>
    <h1>ProConnectHub</h1>
    <p>{i.tagline}</p>
    <SearchBar placeholder={i.searchPlaceholder} />
    <h3>{i.featured}</h3>
    {featured.map(p=> <ProviderCard key={p.id} p={p} />)}
  </Layout>)
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const lang = (ctx.query.lang==='es' ? 'es' : (ctx.req.headers['accept-language']?.startsWith('es') ? 'es' : 'en')) as 'en'|'es';
  const featured = await prisma.provider.findMany({ include:{ services:{ include:{ service:true } } }, orderBy:[{updatedAt:'desc'}], take:3 });
  return { props: { lang, featured: JSON.parse(JSON.stringify(featured)) } };
}
