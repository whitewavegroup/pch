
import { useRouter } from 'next/router'; import { useState } from 'react';
export default function SearchBar({placeholder, initialQ='', initialCountry=''}:{placeholder:string, initialQ?:string, initialCountry?:string}){
  const [q,setQ] = useState(initialQ); const [country,setCountry] = useState(initialCountry); const r = useRouter();
  return (<div>
    <input value={q} onChange={e=>setQ(e.target.value)} placeholder={placeholder}/>
    <input value={country} onChange={e=>setCountry(e.target.value)} placeholder="País / Country"/>
    <button onClick={()=>{ const p = new URLSearchParams(); if(q) p.set('q',q); if(country) p.set('country',country); if(r.query.lang) p.set('lang', String(r.query.lang)); r.push('/search?'+p.toString()); }}>Buscar</button>
  </div>)
}
