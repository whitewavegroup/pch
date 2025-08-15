import { useState } from 'react';

export default function AdminReviews() {
  const [form, setForm] = useState({ listing:'', rating:5, text_en:'Great job!', text_es:'¡Excelente trabajo!', city:'Miami, FL' });

  function onSave(e){
    e.preventDefault();
    // TODO: supabase.from('reviews').insert([form])
    alert('Review saved (demo). Replace with Supabase insert.');
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold">Reviews</h1>
      <div className="mt-6 rounded-2xl border bg-white p-4">
        <form className="grid gap-3 md:grid-cols-2" onSubmit={onSave}>
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Listing ID" value={form.listing} onChange={e=>setForm({...form, listing:e.target.value})} />
          <input type="number" className="rounded-xl border px-3 py-2 text-sm" placeholder="Rating 1-5" value={form.rating} onChange={e=>setForm({...form, rating:e.target.valueAsNumber})} />
          <input className="rounded-xl border px-3 py-2 text-sm md:col-span-2" placeholder="City" value={form.city} onChange={e=>setForm({...form, city:e.target.value})} />
          <textarea className="rounded-xl border px-3 py-2 text-sm md:col-span-2" rows="3" placeholder="Text EN" value={form.text_en} onChange={e=>setForm({...form, text_en:e.target.value})} />
          <textarea className="rounded-xl border px-3 py-2 text-sm md:col-span-2" rows="3" placeholder="Texto ES" value={form.text_es} onChange={e=>setForm({...form, text_es:e.target.value})} />
          <div className="md:col-span-2"><button className="rounded-xl bg-blue-600 px-4 py-2 text-white">Save</button></div>
        </form>
      </div>
      <p className="mt-4 text-sm text-slate-500">Tip: In production, only allow reviews from verified leads.</p>
    </main>
  );
}
