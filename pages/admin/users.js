import { useState } from 'react';

export default function AdminUsers() {
  const [email, setEmail] = useState('hlblanco@gmail.com');
  const [role, setRole] = useState('admin');

  function onSave(e){
    e.preventDefault();
    // TODO: update Supabase profiles table: set role
    alert(`Set ${email} as ${role} (demo). Replace with Supabase update.`);
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold">Users & Roles</h1>
      <div className="mt-6 rounded-2xl border bg-white p-4">
        <form className="flex flex-col gap-3 md:flex-row md:items-center" onSubmit={onSave}>
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="User email" value={email} onChange={e=>setEmail(e.target.value)} />
          <select className="rounded-xl border px-3 py-2 text-sm" value={role} onChange={e=>setRole(e.target.value)}>
            <option value="admin">admin</option>
            <option value="provider">provider</option>
            <option value="customer">customer</option>
          </select>
          <button className="rounded-xl bg-blue-600 px-4 py-2 text-white">Save</button>
        </form>
      </div>
    </main>
  );
}
