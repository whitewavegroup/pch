import { useState } from 'react';

export default function AdminSponsors() {
  const [form, setForm] = useState({ name:'DAS Audio', link:'https://dasaudio.com', image_url:'/sponsors/dasaudio.svg', placement:'homepage', active:true });

  function onSave(e){
    e.preventDefault();
    // TODO: supabase.from('sponsors').insert([form])
    alert('Saved (demo). Replace with Supabase insert.');
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold">Sponsors</h1>
      <div className="mt-6 rounded-2xl border bg-white p-4">
        <form className="grid gap-3 md:grid-cols-2" onSubmit={onSave}>
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Link" value={form.link} onChange={e=>setForm({...form, link:e.target.value})} />
          <input className="rounded-xl border px-3 py-2 text-sm md:col-span-2" placeholder="Image URL" value={form.image_url} onChange={e=>setForm({...form, image_url:e.target.value})} />
          <select className="rounded-xl border px-3 py-2 text-sm" value={form.placement} onChange={e=>setForm({...form, placement:e.target.value})}>
            <option value="homepage">homepage</option>
            <option value="category">category</option>
          </select>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.active} onChange={e=>setForm({...form, active:e.target.checked})} />
            Active
          </label>
          <div className="md:col-span-2">
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </div>
    </main>
  );
}
