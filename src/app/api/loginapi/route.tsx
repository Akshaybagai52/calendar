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

    const user = await prisma.createUsers.findUnique({
      where: {
        email: email,
        password: password
      },
    });
    
    console.log(prisma.createUsers,"dfds");

    if (!user) {
      return NextResponse.json({ error: "User not found." },{status:401});
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
console.log(passwordMatch,"passwordMatch");

    if (passwordMatch) {
      return NextResponse.json({ message: "User logged in successfully." },{status:200});
    }
     else {
    return NextResponse.json({error: "Invalid credentials."},{status:401})
    }
  } catch (error) {
    return NextResponse.json({message: "Login failed", error },{status:500})

  }
};
