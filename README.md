# ProConnectHub — Full Landing Page (Next.js 14)

- Bilingual EN/ES toggle
- Sections: Hero, Categories, Features, Sponsors
- Unified Customer/Provider Lead Form
- `/api/lead` saves + (optional) emails via Resend

## Run
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Optional env for email
```
RESEND_API_KEY=
TO_EMAIL=
FROM_EMAIL=
```

## Optional sponsor images
```
NEXT_PUBLIC_SPONSOR_BANNERS=https://img1.png,https://img2.png
```