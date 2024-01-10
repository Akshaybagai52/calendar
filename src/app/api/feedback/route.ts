import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { feedbackApiProps } from "@/types/types";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { user_id, user_name, user_email, feedback }: feedbackApiProps =
    await req.json();
    console.log( user_id, user_name, user_email, feedback)
  try {
   if(!(user_id && user_name && user_email && feedback)){
return  NextResponse .json({message:'feedback data not found',status:404, statusText:false})
   }else{
//     const newUser = await prisma.feedback_user.create({
//       data: {
//         user_name:"hjh",
//         user_id:"jkjklj",
//         user_email:"test@gmail.com",
//         feedback:"jjkj",
//         rating:{
//           create:[
// {
//   rating_message:"tttttttt"
// }
//           ]
//         }
//       }
//     });
    const newUser = await prisma.feedback_calendar.create({
        data: {
          user_id: user_id,
          user_name: user_name,
          user_email: user_email,
          feedback: feedback,
        },

      });
      return NextResponse.json(
        { message: "User successfully registered.", data: newUser },
        { status: 200 }
      );
   }

  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
