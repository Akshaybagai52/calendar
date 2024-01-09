// import { NextRequest, NextResponse } from "next/server";
// import prisma from "../../../../lib/db";
// import { feedbackApiProps } from "@/types/types";

// export const POST = async (req: NextRequest, res: NextResponse) => {
//   const { user_id, user_name, user_email, feedback }: feedbackApiProps =
//     await req.json();
//   try {

//     const newUser = await prisma.feedback_user.create({

//       data:{
//         user_name,
//         user_id,
//         user_email,
//         feedback,
//         rating:{
//             create:[
//              {
//                 rating_message:"hiiiiii"
//              }
//             ]
//         }
//       }
//       });
//       return NextResponse.json(
//         { message: "User successfully registered.", data: newUser },
//         { status: 200 }
//       );

//   } catch (error) {
//     return NextResponse.json({ message: error }, { status: 500 });
//   }
// };

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { ratingProps} from "@/types/types";


export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
   
    const {rating_message,feedback_user_id,user_rating}:ratingProps= await req.json()
    const existingFeedbackUser = await prisma.feedback_calendar.findUnique({
      where: { id: feedback_user_id }
    });
    console.log(existingFeedbackUser,"o")

    if (!existingFeedbackUser) {
      return NextResponse.json(
        { message: "Feedback user not found." },
        { status: 404 }
      );
    }

    const newUser = await prisma.rating.create({
      data: {
        rating_message: rating_message==""?"no message":rating_message,
        user_rating :user_rating,
        feedback_user:{
          connect: {
            id:feedback_user_id
          }
        }
      },
    });

    return NextResponse.json(
      { message: "User successfully registered.", data: newUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  }
};
