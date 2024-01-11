import dayjs from "dayjs";
import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../lib/db";
const nodemailer = require("nodemailer");

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { fname,lName, email, city, event, checkOut, checkIn } =
      await req.json();
    const CheckIndDate = checkIn
      ? dayjs(checkIn).format("MMM D, YYYY h:mm A")
      : null;
    const CheckTime = checkOut
      ? dayjs(checkOut).format("h:mm A")
      : null;

      const createdMeeting = await prisma.calendarBooking.create({
        data: {
          fname:fname,
          lName:lName,
          email: email,
          city:city,
          event:event,
          checkIn: checkIn,
          checkOut: checkOut,
          // Add other fields as required by your Meeting model
        },
      });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "pradeepchauhan8051@gmail.com",
        pass: "rzdd wngd awgs xoax",
      },
    });

    const mailOption = {
      from: '"Pradeep Chauhan 👻" <pradeepchauhan8051@gmail.com>',
      to: email,
      subject: `Your Meeting ${event} Schedule Confirmation At ${checkIn} and ${checkOut}`,
      html: `
        <p>Dear ${fname} ${lName},</p>
        <p>We hope this message finds you well.</p>
        <p>This is to confirm the scheduled meetings you have arranged with us. Here are the details:</p>
        <ul>
          <li>Meeting Date: ${CheckIndDate}</li>
          <li>Meeting Time: ${CheckTime}</li>
          <li>City:${city}
        </ul>
        <p>Please make sure to mark your calendar and set a reminder for this meeting. If for any reason you need to reschedule or have any queries, feel free to reach out to us.</p>
        <p>Best Regards,</p>
        <p>Book Your Meeting</p>
        <p>Nodemailer for Mail</p>
        <p>pradeepchauhan8051@gmail.com</p>
      `,
    };
    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully", mailOption,createdMeeting },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
};

export const GET = async (req: Request, res: Response) => {
  try {
    const users = await prisma.calendarBooking.findMany();
    return NextResponse.json({ msg: "OK" ,user:users}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Unable to retrieve users.", error }, { status: 500 });
  }
};