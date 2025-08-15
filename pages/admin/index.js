export default function AdminHome() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p className="mt-2 text-slate-600">Quick links:</p>
      <ul className="mt-3 list-disc list-inside">
        <li><a className="text-blue-600 hover:underline" href="/admin/listings">Listings</a></li>
        <li><a className="text-blue-600 hover:underline" href="/admin/sponsors">Sponsors</a></li>
        <li><a className="text-blue-600 hover:underline" href="/admin/users">Users</a></li>
        <li><a className="text-blue-600 hover:underline" href="/admin/reviews">Reviews</a></li>
      </ul>
      <div className="mt-6 rounded-2xl border bg-white p-4">⚠️ Auth placeholder: lock this route to role = 'admin' using Supabase session.</div>
    </main>
  );
}
