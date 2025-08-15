export default async function handler(req, res){
  // TODO: Update profiles.role via Supabase service key
  return res.status(200).json({ ok: true, message: 'Replace with Supabase role update.' });
}
