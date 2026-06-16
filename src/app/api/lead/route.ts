import { NextRequest, NextResponse } from "next/server";
import { computeEstimate } from "@/lib/estimate";
import { getGhlConfig, upsertContact } from "@/lib/ghlClient";
import { buildGhlPayload } from "@/lib/ghlPayload";
import { getSurvey } from "@/lib/surveys";
import type { Answers, ProjectType } from "@/lib/types";

export const runtime = "edge";

interface LeadBody {
  projectType?: ProjectType;
  answers?: Answers;
}

export async function POST(req: NextRequest) {
  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { projectType, answers } = body;
  if (!projectType || !answers) {
    return NextResponse.json(
      { ok: false, error: "Missing projectType or answers" },
      { status: 400 }
    );
  }

  const survey = getSurvey(projectType);
  if (!survey) {
    return NextResponse.json(
      { ok: false, error: "Unknown projectType" },
      { status: 400 }
    );
  }

  // Always recompute server-side so the stored estimate can't be tampered with.
  const result = computeEstimate(survey, answers);
  const payload = buildGhlPayload(survey, answers, result);

  const cfg = getGhlConfig();
  if (!cfg) {
    // Allows local development before GHL credentials are configured.
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: "GHL credentials not configured",
      result,
    });
  }

  try {
    const ghl = await upsertContact(cfg, payload);
    if (!ghl.ok) {
      console.error("[/api/lead] GHL rejected the request:", JSON.stringify(ghl.data));
    }
    return NextResponse.json(
      { ok: ghl.ok, result, ghl: ghl.data },
      { status: ghl.ok ? 200 : 502 }
    );
  } catch (err) {
    console.error("[/api/lead] fetch to GHL threw:", err);
    return NextResponse.json(
      { ok: false, error: "GHL request failed", detail: String(err), result },
      { status: 502 }
    );
  }
}
