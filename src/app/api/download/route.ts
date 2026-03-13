import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Simple in-memory rate limiting (Limits to 3 requests per IP per minute)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 3; 
const WINDOW_MS = 60 * 1000; 

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  if (rateLimitMap.size > 1000) rateLimitMap.clear();

  const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (record.lastReset < windowStart) {
    record.count = 0;
    record.lastReset = now;
  }

  record.count++;
  rateLimitMap.set(ip, record);

  return record.count > RATE_LIMIT;
}

export async function POST(req: NextRequest) {
  try {
    // Extract IP address from request headers (works on Vercel)
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown-ip";
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 } // 429 Too Many Requests
      );
    }

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
