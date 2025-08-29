
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import ProviderCard from '../components/ProviderCard';
import SearchBar from '../components/SearchBar';
import { t } from '../lib/i18n';
import { prisma } from '../lib/db';
import { normalizeQueryToken } from '../lib/synonyms';

export default function Search({lang,q,country,results}:{lang:'en'|'es',q:string,country:string,results:any[]}){
  const i = t(lang);
  return (<Layout lang={lang}>
    <h1>{i.results}</h1>
    <SearchBar placeholder={i.searchPlaceholder} initialQ={q} initialCountry={country} />
    {results.length===0 ? <p>{i.noResults}</p> : results.map(p=> <ProviderCard key={p.id} p={p} />)}
  </Layout>)
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const lang = (ctx.query.lang==='es' ? 'es' : (ctx.req.headers['accept-language']?.startsWith('es') ? 'es' : 'en')) as 'en'|'es';
  const q = String(ctx.query.q||'').trim(); const country = String(ctx.query.country||'').trim();
  let where:any = {};
  if(country){ where = {...where, OR:[ { country:{ contains:country, mode:'insensitive' } }, { regions:{ some:{ country:{ contains:country, mode:'insensitive' } } } } ]}; }
  if(q){ const tokens = q.split(/[\s,]+/).filter(Boolean); const expanded = tokens.flatMap(normalizeQueryToken);
    where = {...where, services:{ some:{ service:{ key:{ in: expanded } } } } }; }
  const results = await prisma.provider.findMany({ where, include:{ services:{ include:{ service:true } } }, take:50, orderBy:[{updatedAt:'desc'}] });
  return { props: { lang, q, country, results: JSON.parse(JSON.stringify(results)) } };
}
