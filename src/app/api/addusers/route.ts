import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  //   const { name, email } = req.body;

  const newUser = await db.user.create({
    data: {
      name: "Akshaay",
      email: "anay@gmail.com",
    },
  });

//   res.status(200).json(newUser);
  return NextResponse.json({ message: newUser }, { status: 200 });
  // res.status(405).json({ message: 'Method not allowed' });
}
