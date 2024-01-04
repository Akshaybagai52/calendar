import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcrypt";
const bcrypt = require('bcrypt')
import prisma from "../../../../lib/db";

interface User {
  name: string;
  email: string;
  password: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, email, password }: User = await req.json();

  try {
    // Check if user already exists in the database
    const existingUser = await prisma.createUsers.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists. Please use a different email." },
        { status: 409 }
      );
    }

    // User does not exist, proceed with registration
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const newUser = await prisma.createUsers.create({
      data: {
        name: name,
        email: email,
        password: hashed,
      },
    });

    return NextResponse.json(
      { message: "User successfully registered.", data: newUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Unable to register user.", error }, { status: 500 });
  }
};

export const GET = async (req: Request, res: Response) => {
  try {
  //   const createUsers = await prisma.createUsers.findMany(where: {
  //     id: Number(signes_array),
  // });
//   const { id } = req.query
//   const ret = await  await prisma.createUsers.findUnique({
//     where: {
//       id: "780b9979-1262-4ff2-8562-373c72017553",
//     },
// })
    return NextResponse.json({ msg: "OK", ret }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Unable to retrieve users.", error }, { status: 500 });
  }
};
