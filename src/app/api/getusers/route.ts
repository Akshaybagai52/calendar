import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
  const User = await prisma.createUsers.findMany()
  
  console.log(User);
  return NextResponse.json({ message: User }, { status: 200 });
}
