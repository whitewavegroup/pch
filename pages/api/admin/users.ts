import type { NextApiRequest, NextApiResponse } from 'next';
import { listUsers } from '../../../lib/adminClient';
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try { const data = await listUsers(); res.status(200).json({ ok: true, data }); }
  catch (e:any) { res.status(500).json({ ok: false, error: String(e?.message||e) }); }
}
