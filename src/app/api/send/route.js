import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import dbConnect from "@/utils/db";
import Contact from "@/dbSchema/schema";

export async function POST(request) {
  await dbConnect();
  try {
    const { subject, email, message } = await request.json();
    console.log("sub email message", subject, email, message);

    const userContact = new Contact({ subject, email, message });
    const savedData = await userContact.save();
    console.log("Data saved to database:", savedData);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: "New Contact Us Submission",
      html: `
        <p>You have received a new contact us submission:</p>
        <ul>
          <li>Subject: ${subject}</li>
          <li>Email: ${email}</li>
          <li>Message: ${message}</li>
        </ul>
      `,
    };
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!!");

    return NextResponse.json(savedData, { status: 201 });
  } catch (error) {
    console.log("errror", error);
    return NextResponse.json({
      message: "failed to submit form",
      status: false,
    });
  }
}
