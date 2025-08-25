import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  // In production, replace with email sending or database save.
  return NextResponse.json({ ok: true, received: body, note: "Wire this to email/DB later." });
}
