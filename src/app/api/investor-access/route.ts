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
    
    // Use second sheet for investor requests
    const sheet = doc.sheetsByIndex[1]; 
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      company: data.company,
      linkedin: data.linkedin || '',
      source: 'Investor Access Portal',
      status: 'New Lead',
    });
  } catch (error) {
    console.error('Error appending to sheet:', error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, linkedin } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification emails
    await resend.emails.send({
      from: 'Wynaxa Investor Portal <noreply@wynaxa.com>',
      to: ['roshanipatel94@gmail.com', 'christian@employtec.com'],
      subject: `🎯 New Investor Access Request: ${company}`,
      html: `
        <h2>🔥 New Investor Viewing Your Deck!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company/Fund:</strong> ${company}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>` : ''}
        <hr>
        <p><strong>They are now viewing the full investor deck at:</strong></p>
        <p>https://wynaxa-website.vercel.app/investor-access</p>
        <br>
        <p><small>⏰ Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    // Save to Google Sheets
    await appendToSheet({ name, email, company, linkedin });

    return NextResponse.json({ 
      success: true,
      message: 'Access granted!'
    });

  } catch (error) {
    console.error('Investor access error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}