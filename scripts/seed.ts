/* Seed database with the sample providers from data/providers.json */
import { prisma } from '../lib/db';
import fs from 'fs';
import path from 'path';

async function main() {
  const dataPath = path.join(process.cwd(), 'data', 'providers.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const providers = JSON.parse(raw);

  const serviceKeys: Record<string, { en: string; es: string }> = {
    'audio': { en: 'Audio', es: 'Audio / Sonido' },
    'sound': { en: 'Sound', es: 'Sonido' },
    'lighting': { en: 'Lighting', es: 'Iluminación' },
    'lighting-design': { en: 'Lighting Design', es: 'Diseño de Luces' },
    'video': { en: 'Video', es: 'Video / AV' },
    'av': { en: 'AV', es: 'Audiovisual' },
    'audiovisual': { en: 'Audiovisual', es: 'Audiovisual' },
    'instrument-rental': { en: 'Instrument Rental', es: 'Renta de Instrumentos' },
    'instruments': { en: 'Instruments', es: 'Instrumentos' },
    'rare-instruments': { en: 'Rare Instruments', es: 'Instrumentos Especiales' },
    'staging': { en: 'Staging', es: 'Tarimas / Escenario' },
    'risers': { en: 'Risers', es: 'Risers' },
    'scenic': { en: 'Scenic', es: 'Escenografía' },
    'scenography': { en: 'Scenography', es: 'Escenografía' },
    'set-design': { en: 'Set Design', es: 'Diseño de Escenario' },
    'rigging': { en: 'Rigging', es: 'Rigging' },
    'tents': { en: 'Tents', es: 'Carpas' },
    'outdoor-structures': { en: 'Outdoor Structures', es: 'Estructuras Outdoor' },
    'generators': { en: 'Generators', es: 'Plantas Eléctricas' },
    'power': { en: 'Power', es: 'Energía' },
    'chairs': { en: 'Chairs', es: 'Sillas' },
    'auditorium-seating': { en: 'Auditorium Seating', es: 'Butacas / Bancas' },
    'podiums': { en: 'Podiums', es: 'Podios' },
    'lecterns': { en: 'Lecterns', es: 'Atriles' },
    'acoustics': { en: 'Acoustics', es: 'Acústica' },
    'acoustic-consulting': { en: 'Acoustic Consulting', es: 'Consultoría Acústica' },
    'auditorium-architects': { en: 'Auditorium Architects', es: 'Arquitectos de Auditorios' },
    'church-auditoriums': { en: 'Church Auditoriums', es: 'Auditorios para Iglesias' },
  };

  for (const [key, labels] of Object.entries(serviceKeys)) {
    await prisma.service.upsert({
      where: { key },
      update: { labelEn: labels.en, labelEs: labels.es },
      create: { key, labelEn: labels.en, labelEs: labels.es },
    });
  }

  for (const p of providers) {
    const created = await prisma.provider.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        slug: p.slug, name: p.name, country: p.country, city: p.city || null,
        summary: p.summary || null, verifiedLevel: (p.verifiedLevel || 'BASIC').toUpperCase() as any,
        responseHours: p.responseHours || null, phone: p.phone || null, whatsapp: p.whatsapp || null,
        email: p.email || null, website: p.website || null, churchExpert: Boolean(p.churchExpert),
      },
    });

    for (const r of p.regions || []) await prisma.region.create({ data: { providerId: created.id, country: r } });
    for (const c of p.certifications || []) await prisma.certification.create({ data: { providerId: created.id, name: c } });
    for (const b of p.brands || []) await prisma.providerBrand.create({ data: { providerId: created.id, name: b } });

    for (const s of p.specialties || []) {
      const service = await prisma.service.findUnique({ where: { key: s } });
      if (service) {
        await prisma.providerService.upsert({
          where: { providerId_serviceId: { providerId: created.id, serviceId: service.id } },
          update: {}, create: { providerId: created.id, serviceId: service.id },
        });
      }
    }
  }
  console.log('Seed completed.');
}

main().then(async ()=>await prisma.$disconnect()).catch(async e=>{console.error(e);await prisma.$disconnect();process.exit(1)});
