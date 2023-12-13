import dayjs from "dayjs";
import { NextResponse ,NextRequest} from "next/server";
// import nodemailer from "nodemailer";
const nodemailer =require("nodemailer")

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { email, CheckInOutTime, checkIn } = await req.json();
    const CheckIndDate = checkIn ? dayjs(checkIn).format('MMM D, YYYY h:mm A') : null;
    // const CheckTime = CheckInOutTime ? dayjs(CheckInOutTime).format('en-US') : null;
    const CheckTime = CheckInOutTime ? dayjs(CheckInOutTime).format('h:mm A') : null;

    // const CheckInTime = checkIn ? dayjs(checkIn).format('h:mm A') : null;
    // const CheckInOutTime = checkOut ? dayjs(checkOut).format('h:mm A') : null;

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
      from: '"Pradeep Chauhan 👻" <pradeepchauhan8051@gmail.com>',
      to: email,
      subject: `Your Meeting Schedule Confirmation At ${CheckIndDate} and ${CheckTime}`,
      html: `
        <p>Dear ${email},</p>
        <p>We hope this message finds you well.</p>
        <p>This is to confirm the scheduled meetings you have arranged with us. Here are the details:</p>
        <ul>
          <li>Meeting Date: ${CheckIndDate}</li>
          <li>Meeting Time: ${CheckTime}</li>
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
}
