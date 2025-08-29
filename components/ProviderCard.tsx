import Link from 'next/link';
export default function ProviderCard({p}:{p:any}){
  const rating = typeof p.ratingAvg === 'number' ? p.ratingAvg : (p.rating ?? 0);
  const verified = typeof p.verifiedLevel === 'string' ? p.verifiedLevel : String(p.verifiedLevel);
  const specialties: string[] = p?.services?.map((ps:any)=> ps.service?.key).filter(Boolean) ?? p.specialties ?? [];
  return (<div className="card">
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'1rem'}}>
      <div><div style={{fontWeight:700,fontSize:'1.1rem'}}>{p.name}</div>
        <div className="meta">{p.city ? p.city+', ' : ''}{p.country} • ⭐ {Number(rating||0).toFixed(1)}</div>
      </div>
      <div className="badges">
        {verified && verified!=='BASIC' && <span className="badge">{verified}</span>}
        {p.churchExpert && <span className="badge">Iglesias</span>}
      </div>
    </div>
    {p.summary && <p style={{marginTop:'.6rem'}}>{p.summary}</p>}
    <div className="meta" style={{marginTop:'.3rem'}}>{specialties.slice(0,6).join(' • ')}</div>
    <div style={{marginTop:'.8rem',display:'flex',gap:'.5rem'}}>
      <Link className="button" href={`/providers/${p.slug}`}>Ver perfil</Link>
      {p.website && <a className="chip" href={p.website} target="_blank" rel="noreferrer">Website</a>}
    </div>
  </div>)
}
