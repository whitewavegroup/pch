import type { NextApiRequest, NextApiResponse } from 'next';
import { listSponsors } from '../../../lib/adminClient';
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try { const data = await listSponsors(); res.status(200).json({ ok: true, data }); }
  catch (e:any) { res.status(500).json({ ok: false, error: String(e?.message||e) }); }
}
