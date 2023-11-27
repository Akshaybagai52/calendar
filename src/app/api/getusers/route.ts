import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
  const users = await db.createUsers.findMany();
  console.log(users);
  return NextResponse.json({ message: users }, { status: 200 });
}
