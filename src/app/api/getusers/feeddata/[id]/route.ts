import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
    console.log("ooooooo")
  const url = new URL(req.url);
  const userid:string | null = url.searchParams.get("user_email");

  try {
    if (!userid) {
      return NextResponse.json(
        { error: "user_id is missing jj in the query" },
        { status: 400 }
      );
    } else {
        const findFeedBackUser = await prisma.feedback_calendar.findFirst({
            where: {
              user_email: userid,
            },
          });
      if(!findFeedBackUser){
        return NextResponse.json({ message: "data not found" }, { status: 404 });
      }
      return NextResponse.json({ message: findFeedBackUser }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ status: false, message: error });
  }
}
