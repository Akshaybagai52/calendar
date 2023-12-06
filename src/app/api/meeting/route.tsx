
// import { NextResponse } from "next/server";
// const nodemailer = require("nodemailer");
// export async function POST(request: {
//   json: () => { email: String; country: String; state: String; city: String; checkIn: TimeRanges; checkOut: TimeRanges };

// }) {
//   try {
//     const { email, country, state, city, checkIn, checkOut } = await request.json();
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'pradeepchauhan8051@gmail.com',
//         pass: 'rzdd wngd awgs xoax'
//       }
//     });

//     const mailOption = {
//       from: '"Pradeep Chauhan 👻" pradeepchauhan8051@gmail.com>',
//       to: email,
//       subject: "Your Meeting Schedule Confirmation",
//       // text: checkIn && checkOut,
//       html: `
//         <h3>Your Meeting Schedule Confirmation</h3>
//         <p>Dear ${email},
//         We hope this message finds you well.
//         This is to confirm the scheduled meetings you have arranged with us. Here are the details:
//         </p>
//       //  
//         Meeting Date: ${checkIn}
//         Meeting Time: ${checkOut}
//         <li> city: ${city}</li>
//         <li> state: ${state}</li>
//         <li> country: ${country}</li>

//         <p>Please make sure to mark your calendar and set a reminder for this meeting. If for 
//         any reason you need to reschedule or have any queries, feel free to reach out to us.
//         </p>

//         <p>Best Regards,

//         Book Your Meeting
//         Nodemailer for Mail
//         pradeepchauhan8051@gmail.com

//         `,
//     };

//     await transporter.sendMail(mailOption);

//     return NextResponse.json(
//       { message: "Email Sent Successfully", mailOption },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to Send Email" },
//       { status: 500 }
//     );
//   }
// }



import dayjs from "dayjs";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
export async function POST(request: {
  json: () => { email: String; checkOut: Date; checkIn: Date };

}) {
  try {

    const { email, checkOut, checkIn } = await request.json();
    const CheckIndDate = checkIn ? dayjs(checkIn).format('YYYY-MM-DD') : null;
    const CheckOutDate = checkOut ? dayjs(checkOut).format('YYYY-MM-DD') : null;


    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'pradeepchauhan8051@gmail.com',
        pass: 'rzdd wngd awgs xoax'
      }
    });

    const mailOption = {
      from: '"Pradeep Chauhan 👻" pradeepchauhan8051@gmail.com>',
      to: email,
      subject: `Your Meeting Schedule Confirmation At ${CheckIndDate} TO ${CheckOutDate}`,
      text: `Dear ${email},
              We hope this message finds you well.
              This is to confirm the scheduled meetings you have arranged with us. Here are the details:
              Meeting Date: ${checkIn}
              Meeting Time: ${checkOut}
             
              Please make sure to mark your calendar and set a reminder for this meeting. If for 
        any reason you need to reschedule or have any queries, feel free to reach out to us.
           
        Best Regards,
        Book Your Meeting
        Nodemailer for Mail
      
        pradeepchauhan8051@gmail.com
        `,

    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully", mailOption },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
