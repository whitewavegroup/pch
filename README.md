# ProConnectHub — Vercel One-Click

**No necesitas correr comandos en tu computadora.**

## Pasos para deploy
1) Sube este folder a un repo en GitHub.
2) En Vercel: **Import Project** → selecciona el repo.
3) En **Project Settings → Environment Variables** agrega:
   - `DATABASE_URL` = tu conexión de Supabase (como en `.env.example`)
   - `SEED_TOKEN` = un secreto (puedes usar este mientras: seed_9d7da76433235389 y cambiarlo luego)
4) Da **Deploy**. Durante el build se ejecuta automáticamente:
   - `prisma generate`
   - `prisma migrate deploy`
5) Poblar datos (una sola vez):
   - Abre en el navegador: `https://TU-DOMINIO/api/admin/seed?token=TU_SEED_TOKEN`
   - Debe responder `{{ "ok": true, "seeded": true }}`
6) Visita tu sitio: `https://TU-DOMINIO`

## (Opcional) Local
Si algún día quieres correr local:
```bash
npm install
npm run dev
# http://localhost:3000
```
