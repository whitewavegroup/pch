import { createClient } from '@supabase/supabase-js';

/**
 * Server-only Supabase client using SERVICE ROLE key.
 * Bypasses RLS, so guard access carefully.
 */
export const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE || ''
);

/**
 * Validates the incoming request has a Supabase access token belonging to an admin user.
 * Expects header: Authorization: Bearer <access_token>
 */
export async function requireAdmin(req) {
  const auth = req.headers['authorization'] || req.headers['Authorization'];
  if (!auth || !auth.toLowerCase().startsWith('bearer ')) {
    return { ok: false, error: 'Missing bearer token' };
  }
  const token = auth.split(' ')[1];
  const { data: userData, error: userErr } = await adminSupabase.auth.getUser(token);
  if (userErr || !userData?.user) {
    return { ok: false, error: 'Invalid token' };
  }
  const userId = userData.user.id;
  const { data: profile, error: profErr } = await adminSupabase
    .from('profiles')
    .select('id, role')
    .eq('id', userId)
    .single();
  if (profErr || !profile) {
    return { ok: false, error: 'Profile not found' };
  }
  if (profile.role !== 'admin') {
    return { ok: false, error: 'Not an admin' };
  }
  return { ok: true, user: userData.user, profile };
}
