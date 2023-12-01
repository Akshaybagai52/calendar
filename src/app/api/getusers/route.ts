import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
  const User = await prisma.createUsers.findMany()
  console.log("user get",User);
  
  console.log(User);
  return NextResponse.json({ data: User, msg:"user find from the db createUsers" }, { status: 200 });
}
