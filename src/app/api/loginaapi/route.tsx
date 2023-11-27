const bcrypt = require("bcrypt");
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

interface User {
  email: string;
  password: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { email, password }: User = await req.json();
    // console.log(email, "email");

    const user = await prisma.createUsers.findUnique({
      where: {
        email: email,
      },
    });
    console.log(user, "user");

    // console.log(prisma.createUsers, "prisma.createUsers");


    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user?.password);
    console.log(passwordMatch, "passwordMatch");

    if (passwordMatch) {
      return NextResponse.json({ message: "User logged in successfully." }, { status: 200 });
    }
    else {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ message: "Login failed", error }, { status: 500 })

  }
};
