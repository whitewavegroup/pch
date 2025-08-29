import { useRouter } from 'next/router'; import { useState } from 'react';
export default function SearchBar({placeholder, initialQ='', initialCountry=''}:{placeholder:string, initialQ?:string, initialCountry?:string}){
  const [q,setQ] = useState(initialQ); const [country,setCountry] = useState(initialCountry); const router = useRouter();
  return (<div className="searchbar">
    <input value={q} onChange={e=>setQ(e.target.value)} placeholder={placeholder} aria-label="query" />
    <input value={country} onChange={e=>setCountry(e.target.value)} placeholder="País / Country" aria-label="country"/>
    <button className="button" onClick={()=>{ const params = new URLSearchParams(); if(q) params.set('q', q); if(country) params.set('country', country); if(router.query.lang) params.set('lang', String(router.query.lang)); router.push('/search?'+params.toString()); }}>Buscar</button>
  </div>)
}
