import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const userid = url.searchParams.get("user_email");

  try {
    if (!userid) {
      return NextResponse.json(
        { error: "user_id is missing in the query" },
        { status: 400 }
      );
    } else {
      const findUser = await prisma.createUsers.findUnique({
        where: {
          email: userid,
        },
      });
      if(!findUser){
        return NextResponse.json({ message: "data not found" }, { status: 404 });
      }
      return NextResponse.json({ message: findUser }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ status: false, message: error });
  }
}
