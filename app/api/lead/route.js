import { NextResponse } from 'next/server';

export async function POST(req) {
  const form = await req.formData();
  const data = {};
  for (const [k,v] of form.entries()) { data[k]=v; }
  console.log("Lead submission:", data);
  return NextResponse.json({ ok:true });
}
