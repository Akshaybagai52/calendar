import { NextResponse } from "next/server";
import db from "../../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const users = await db.createUsers.findMany();
  console.log(users);
  return NextResponse.json({ message: users }, { status: 200 });
}
