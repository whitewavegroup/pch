// Host-based locale redirect: micontacto.com -> Spanish
// Place this at project root. Works in Next.js (pages router).
export function middleware(req) {
  try {
    const url = req.nextUrl.clone();
    const host = req.headers.get('host') || '';
    // If coming to micontacto.com and no explicit locale is set, append ?lang=es or set cookie
    if (host.includes('micontacto.com')) {
      if (!url.searchParams.has('lang')) {
        url.searchParams.set('lang', 'es');
        return Response.redirect(url);
      }
    }
  } catch (e) {}
  return;
}
