import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { fname, lname, email, select, textArea } = await req.json();

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
      subject: `Hey, ${fname} ${lname}
      ! Thanks for texting us! Unfortunately, we are currently too busy. We will get back to you as soon as possible! `,
      html: `
        <p>Dear ${fname},</p>
        <p> Your appointment ${select} at Calendar is really close. We will await you on weekday! Text us back to cancel or reschedule.</p>
       <p>${textArea}</p>
        <p>Best Regards,</p>
        <p>Nodemailer for Mail</p>
        <p>pradeepchauhan8051@gmail.com</p>
      `,
    };
    await transporter.sendMail(mailOption);
    return NextResponse.json(
      { message: "Email Sent Successfully", mailOption },
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
