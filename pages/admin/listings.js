import { useEffect, useState } from 'react';

export default function AdminListings() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title_en:'', title_es:'', location_code:'', tier:'free' });

  useEffect(()=>{
    // TODO: fetch from Supabase: select * from listings order by created_at desc
    // For now, static:
    setItems([
      { id:'demo-1', title_en:'Lighting Designer – Miami LX', title_es:'Diseñador de Iluminación – Miami LX', location_code:'fl', tier:'featured' }
    ]);
  },[]);

  function onSave(e){
    e.preventDefault();
    // TODO: supabase.from('listings').insert([form])
    alert('Saved (demo). Replace with Supabase insert.');
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold">Listings</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-4">
          <h2 className="font-semibold">Create Listing</h2>
          <form className="mt-3 space-y-3" onSubmit={onSave}>
            <input className="w-full rounded-xl border px-3 py-2 text-sm" placeholder="Title EN" value={form.title_en} onChange={e=>setForm({...form, title_en:e.target.value})} />
            <input className="w-full rounded-xl border px-3 py-2 text-sm" placeholder="Título ES" value={form.title_es} onChange={e=>setForm({...form, title_es:e.target.value})} />
            <input className="w-full rounded-xl border px-3 py-2 text-sm" placeholder="location_code (pr|fl|bogota)" value={form.location_code} onChange={e=>setForm({...form, location_code:e.target.value})} />
            <select className="w-full rounded-xl border px-3 py-2 text-sm" value={form.tier} onChange={e=>setForm({...form, tier:e.target.value})}>
              <option value="free">free</option>
              <option value="enhanced">enhanced</option>
              <option value="featured">featured</option>
              <option value="premium">premium</option>
            </select>
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-white">Save</button>
          </form>
        </div>
        <div className="rounded-2xl border bg-white p-4">
          <h2 className="font-semibold">Existing</h2>
          <ul className="mt-2 divide-y">
            {items.map(it => (
              <li key={it.id} className="py-2 flex items-center justify-between">
                <div>
                  <div className="font-medium">{it.title_en}</div>
                  <div className="text-xs text-slate-500">{it.location_code} · {it.tier}</div>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-lg border px-3 py-1 text-sm">Edit</button>
                  <button className="rounded-lg border px-3 py-1 text-sm">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
