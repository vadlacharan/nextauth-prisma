import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
export async function GET() {

    const session = await auth()
}