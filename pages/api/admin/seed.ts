
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/db';
import providers from '../../../data/providers.json';

const serviceKeys: Record<string, { en:string; es:string }> = {
  'audio': { en:'Audio', es:'Audio / Sonido' },
  'sound': { en:'Sound', es:'Sonido' },
  'lighting': { en:'Lighting', es:'Iluminación' },
  'lighting-design': { en:'Lighting Design', es:'Diseño de Luces' },
  'video': { en:'Video', es:'Video / AV' },
  'av': { en:'AV', es:'Audiovisual' },
  'instrument-rental': { en:'Instrument Rental', es:'Renta de Instrumentos' },
  'instruments': { en:'Instruments', es:'Instrumentos' },
  'rare-instruments': { en:'Rare Instruments', es:'Instrumentos Especiales' },
  'staging': { en:'Staging', es:'Tarimas / Escenario' },
  'risers': { en:'Risers', es:'Risers' },
  'rigging': { en:'Rigging', es:'Rigging' },
  'tents': { en:'Tents', es:'Carpas' },
  'generators': { en:'Generators', es:'Plantas Eléctricas' },
  'power': { en:'Power', es:'Energía' },
  'chairs': { en:'Chairs', es:'Sillas' },
  'auditorium-seating': { en:'Auditorium Seating', es:'Butacas / Bancas' },
  'acoustics': { en:'Acoustics', es:'Acústica' },
  'acoustic-consulting': { en:'Acoustic Consulting', es:'Consultoría Acústica' },
  'auditorium-architects': { en:'Auditorium Architects', es:'Arquitectos de Auditorios' },
  'church-auditoriums': { en:'Church Auditoriums', es:'Auditorios para Iglesias' },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try{
    if(process.env.SEED_TOKEN && req.query.token !== process.env.SEED_TOKEN){
      return res.status(401).json({ ok:false, error:'Unauthorized' });
    }

    for(const [key, labels] of Object.entries(serviceKeys)){
      await prisma.service.upsert({ where:{ key }, update:{ labelEn: labels.en, labelEs: labels.es }, create:{ key, labelEn: labels.en, labelEs: labels.es } });
    }

    for(const p of (providers as any[])){
      const created = await prisma.provider.upsert({
        where:{ slug: p.slug },
        update:{},
        create:{
          slug:p.slug, name:p.name, country:p.country, city:p.city||null, summary:p.summary||null,
          verifiedLevel: (p.verifiedLevel||'BASIC').toUpperCase() as any,
          responseHours:p.responseHours||null, phone:p.phone||null, whatsapp:p.whatsapp||null,
          email:p.email||null, website:p.website||null, churchExpert:Boolean(p.churchExpert)
        }
      });

      for(const r of p.regions||[]){
        await prisma.region.create({ data:{ providerId: created.id, country: r } });
      }
      for(const s of p.specialties||[]){
        const svc = await prisma.service.findUnique({ where:{ key:s } });
        if(svc){
          await prisma.providerService.upsert({
            where:{ providerId_serviceId:{ providerId: created.id, serviceId: svc.id } },
            update:{}, create:{ providerId: created.id, serviceId: svc.id }
          });
        }
      }
    }

    res.status(200).json({ ok:true, seeded:true });
  }catch(e:any){
    res.status(500).json({ ok:false, error:String(e?.message||e) });
  }
}
