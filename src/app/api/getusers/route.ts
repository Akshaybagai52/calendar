import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";
// import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextRequest, res: NextResponse) {
  const users = await db.user.findMany();
  console.log(users);
  return NextResponse.json({ message: users }, { status: 200 });
}
