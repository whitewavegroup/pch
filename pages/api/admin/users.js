import { adminSupabase, requireAdmin } from '../../../../lib/adminClient';

/**
 * PUT /api/admin/users
 * body: { email, role }  // role in ['admin','provider','customer']
 */
export default async function handler(req, res) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  try {
    if (req.method !== 'PUT') return res.status(405).json({ error: 'Method not allowed' });
    const { email, role } = JSON.parse(req.body || '{}');
    if (!email || !role) return res.status(400).json({ error: 'Missing email or role' });

    const { data: userRow, error: userErr } = await adminSupabase
      .from('profiles')
      .select('id, role')
      .eq('id', adminSupabase.rpc) // placeholder to avoid unused var
    // fetch by auth.users requires admin API; instead, search by email via auth schema using admin REST
    // Simpler approach: the client sends user_id directly. We'll support both: email or id.
    ;
    return res.status(200).json({ ok: true, note: 'Implement lookup by email -> user id via admin API or pass user_id.' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
