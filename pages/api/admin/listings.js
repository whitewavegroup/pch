import { adminSupabase, requireAdmin } from '../../../../lib/adminClient';

/**
 * Methods:
 * GET    /api/admin/listings          -> list all (with optional query params)
 * POST   /api/admin/listings          -> create listing
 * PUT    /api/admin/listings          -> update listing (id required)
 * DELETE /api/admin/listings?id=...   -> delete listing
 */
export default async function handler(req, res) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  try {
    if (req.method === 'GET') {
      const { search, limit = 50 } = req.query;
      let query = adminSupabase.from('listings').select('*').order('created_at', { ascending: false }).limit(+limit);
      if (search) {
        query = query.ilike('title_en', `%${search}%`);
      }
      const { data, error } = await query;
      if (error) throw error;
      return res.status(200).json({ data });
    }

    if (req.method === 'POST') {
      const payload = JSON.parse(req.body || '{}');
      const { data, error } = await adminSupabase.from('listings').insert([payload]).select().single();
      if (error) throw error;
      return res.status(200).json({ data });
    }

    if (req.method === 'PUT') {
      const payload = JSON.parse(req.body || '{}');
      if (!payload.id) return res.status(400).json({ error: 'Missing id' });
      const { id, ...updates } = payload;
      const { data, error } = await adminSupabase.from('listings').update(updates).eq('id', id).select().single();
      if (error) throw error;
      return res.status(200).json({ data });
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: 'Missing id' });
      const { error } = await adminSupabase.from('listings').delete().eq('id', id);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
