import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: "Contact endpoint is not configured. Connect this route to your email/CRM provider.",
    },
    { status: 501 }
  );
}
