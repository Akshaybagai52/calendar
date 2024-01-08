import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");
import prisma from "../../../../lib/db";
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { fname, lname, email, select, textArea } = await req.json();
    const contactForm = await prisma.contactForm.create({
      data: {
        fname: fname,
        lname: lname,
        email: email,
        select:select,
        textArea:textArea,
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
      subject: `Your Meeting ${fname} ${lname} Schedule Confirmation`,
      html: `
        <p>Dear ${email},</p>
        <p>We hope this message finds you well.</p>
        <p>This is to confirm the scheduled meetings you have arranged with us. Here are the details:</p>
        <p>Please make sure to mark your calendar and set a reminder for this meeting. If for any reason you need to reschedule or have any queries, feel free to reach out to us.</p>
        <p>Best Regards,</p>
        <p>Book Your Meeting</p>
        <p>Nodemailer for Mail</p>
        <p>pradeepchauhan8051@gmail.com</p>
      `,
    };
    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully", mailOption,contactForm },
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
