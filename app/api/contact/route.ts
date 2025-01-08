import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'sedigojs@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  },
  secure: false, // TLS
  tls: {
    rejectUnauthorized: false // Optional: avoid certificate validation errors
  }
});

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    // Store submission in database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        message
      }
    });

    // Send email
    await transporter.sendMail({
      from: email,
      to: 'sedigojs@gmail.com',
      subject: `New contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error('Error processing contact submission:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

