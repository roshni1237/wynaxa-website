import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Initialize Resend for email
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Google Sheets
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function appendToSheet(data: any) {
  try {
    const jwt = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: SCOPES,
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, jwt);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0]; // Contact Form submissions sheet
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      source: 'Contact Form',
    });
  } catch (error) {
    console.error('Error appending to sheet:', error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email notifications to both addresses
    const emailPromises = [
      resend.emails.send({
        from: 'Wynaxa Website <noreply@wynaxa.com>',
        to: ['roshanipatel94@gmail.com', 'christian@employtec.com'],
        subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><small>Submitted from: https://wynaxa-website.vercel.app/contact</small></p>
        `,
      }),
      // Send confirmation email to user
      resend.emails.send({
        from: 'Wynaxa <noreply@wynaxa.com>',
        to: email,
        subject: 'Thank you for contacting Wynaxa',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you within 24-48 hours.</p>
          <p><strong>Your message:</strong></p>
          <p>${message}</p>
          <br>
          <p>Best regards,<br>The Wynaxa Team</p>
          <hr>
          <p><small>This is an automated confirmation. Please do not reply to this email.</small></p>
        `,
      }),
    ];

    // Save to Google Sheets
    await appendToSheet({ name, email, subject, message });

    // Send both emails
    await Promise.all(emailPromises);

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}