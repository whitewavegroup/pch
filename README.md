# ProConnectHub — Git Ready (Fixed, Full)

✅ This package contains the **entire project** with the admin client fixed (no legacy `lib/adminClient.js`).  
Uses: **Next.js 14 + Prisma + Supabase (Postgres)**

## 1) Local
```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
npm run dev
# http://localhost:3000
```

## 2) Env
- `.env.local` already includes your Supabase connection:
```
DATABASE_URL="postgresql://postgres:nijdik-4pecjU-corton@db.pviemmxfzwryvpobtxnq.supabase.co:5432/postgres?pgbouncer=true&connection_limit=1&connect_timeout=15"
```

## 3) Deploy (Vercel)
- Push this folder to GitHub.
- Import in Vercel → add `DATABASE_URL` in Environment Variables.
- Optional: `npx prisma migrate deploy` after deploy.

## 4) DB-backed pages
- Home (featured) → DB
- Search (country/regions + services) → DB
- Provider profile → DB

---
Generated: 2025-08-29T20:22:44.608255Z
