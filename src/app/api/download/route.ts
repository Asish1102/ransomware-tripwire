import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { email, company } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required to download ThreatPulse." },
        { status: 400 }
      );
    }

    // Save user info to the SQLite Database
    await prisma.user.create({
      data: {
        email,
        company,
        source: "website_download",
      },
    });

    return NextResponse.json(
      { success: true, message: "Authorized. Download beginning." },
      { status: 200 }
    );
  } catch (error: any) {
    // If user already exists (unique constraint violation), that's fine, just let them download again
    if (error.code === 'P2002') {
      return NextResponse.json(
        { success: true, message: "Welcome back. Download beginning." },
        { status: 200 }
      );
    }
    console.error("Download tracking error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
