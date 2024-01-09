import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const allData = await prisma.feedback_calendar.findMany({
      include: {
        rating: true,
      },
    });
    if (!allData) {
      return NextResponse.json({
        status: true,
        message: "empty feedback_calendar ",
      });
    }

    return NextResponse.json({ message: allData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
