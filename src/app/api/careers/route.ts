import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const resend = new Resend(process.env.RESEND_API_KEY);
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
    
    // Use third sheet for career applications
    const sheet = doc.sheetsByIndex[2];
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      position: data.position,
      message: data.message,
      linkedin: data.linkedin || '',
      source: 'Careers Page',
      status: 'New Application',
    });
  } catch (error) {
    console.error('Error appending to sheet:', error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, position, message, linkedin } = body;

    if (!name || !email || !position) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification to team
    await resend.emails.send({
      from: 'Wynaxa Careers <noreply@wynaxa.com>',
      to: ['roshanipatel94@gmail.com', 'christian@employtec.com'],
      subject: `New Job Application: ${position}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>` : ''}
        <p><strong>Message/Cover Letter:</strong></p>
        <p>${message || 'No message provided'}</p>
        <hr>
        <p><small>Submitted from: https://wynaxa-website.vercel.app/careers</small></p>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    // Send confirmation to applicant
    await resend.emails.send({
      from: 'Wynaxa Careers <noreply@wynaxa.com>',
      to: email,
      subject: `Application Received: ${position}`,
      html: `
        <h2>Thank you for your application!</h2>
        <p>Hi ${name},</p>
        <p>We've received your application for the <strong>${position}</strong> position at Wynaxa.</p>
        <p>Our team will review your application and get back to you within 1-2 weeks if your profile matches our requirements.</p>
        <br>
        <p>Best regards,<br>The Wynaxa Team</p>
        <hr>
        <p><small>This is an automated confirmation. Please do not reply to this email.</small></p>
      `,
    });

    // Save to Google Sheets
    await appendToSheet({ name, email, position, message, linkedin });

    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully!'
    });

  } catch (error) {
    console.error('Career application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}