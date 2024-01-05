import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url)

  const userid = url.searchParams.get("user_email")

  if (!userid) {
    return NextResponse.json({ error: "user_id is missing in the query" }, { status: 400 });
  }

  try {
    const createUsers = await prisma.createUsers.findUnique({
      where: {
        email: userid,
      },
    });

    return NextResponse.json({ message: createUsers }, { status: 200 });
  }catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

