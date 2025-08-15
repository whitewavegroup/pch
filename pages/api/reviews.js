import { adminSupabase } from '../../../lib/adminClient';

/**
 * GET  /api/reviews?listing=<id>
 * POST /api/reviews  { listing, rating, text_en, text_es, city }
 * Note: For production, validate that the requester is a verified lead before allowing POST.
 */
export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { listing } = req.query;
      const q = adminSupabase.from('reviews').select('*').order('created_at', { ascending: false });
      const { data, error } = listing ? await q.eq('listing', listing) : await q;
      if (error) throw error;
      return res.status(200).json({ data });
    }

    if (req.method === 'POST') {
      const payload = JSON.parse(req.body || '{}');
      if (!payload.listing || !payload.rating) return res.status(400).json({ error: 'Missing listing or rating' });
      const { data, error } = await adminSupabase.from('reviews').insert([payload]).select().single();
      if (error) throw error;
      return res.status(200).json({ data });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
