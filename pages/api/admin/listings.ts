import type { NextApiRequest, NextApiResponse } from 'next';
import { listListings } from '../../../lib/adminClient';
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try { const data = await listListings(); res.status(200).json({ ok: true, data }); }
  catch (e:any) { res.status(500).json({ ok: false, error: String(e?.message||e) }); }
}
