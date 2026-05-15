import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const { name, email, whatsapp, server, message, credits } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const text = [
      `🔔 <b>New Contact — IPTV Reseller Provider</b>`,
      ``,
      `👤 <b>Name:</b> ${name}`,
      `📧 <b>Email:</b> ${email}`,
      `📱 <b>WhatsApp:</b> ${whatsapp || "Not provided"}`,
      `🖥 <b>Server Interest:</b> ${server || "Not specified"}`,
      credits ? `💳 <b>Credits Requested:</b> ${credits}` : null,
      ``,
      `💬 <b>Message:</b>`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    await sendTelegramMessage(text);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
