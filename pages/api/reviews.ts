
import type { NextApiRequest, NextApiResponse } from 'next';
import { listReviews, createReview } from '../../lib/adminClient';
export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try{
    if(req.method==='GET'){
      const providerId = typeof req.query.providerId==='string'? req.query.providerId: undefined;
      const data = await listReviews(providerId);
      return res.status(200).json({ ok:true, data });
    }
    if(req.method==='POST'){
      const { providerId, authorEmail, rating, comment, eventDate } = req.body||{};
      if(!providerId || !authorEmail || !rating) return res.status(400).json({ ok:false, error:'Missing fields' });
      const saved = await createReview({ providerId, authorEmail, rating:Number(rating), comment, eventDate });
      return res.status(201).json({ ok:true, data: saved });
    }
    return res.status(405).json({ ok:false, error:'Method Not Allowed' });
  }catch(e:any){ res.status(500).json({ ok:false, error:String(e?.message||e) }); }
}
