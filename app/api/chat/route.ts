import { NextRequest, NextResponse } from "next/server";
import knowledge from "@/data/knowledge.json";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const lower = message.toLowerCase();
    let reply = "🤔 I’m not sure about that. Try asking about skills, projects, or experience.";

    // Simple keyword-based matching
    if (
      lower.includes("skill") ||
      lower.includes("know") ||
      lower.includes("tech") ||
      lower.includes("stack")
    ) {
      reply = knowledge.skills;
    } else if (
      lower.includes("project") ||
      lower.includes("work") ||
      lower.includes("built") ||
      lower.includes("website") ||
      lower.includes("app")
    ) {
      reply = knowledge.projects;
    } else if (
      lower.includes("experience") ||
      lower.includes("background") ||
      lower.includes("career") ||
      lower.includes("job")
    ) {
      reply = knowledge.experience;
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Server error", detail: error.message || String(error) },
      { status: 500 }
    );
  }
}