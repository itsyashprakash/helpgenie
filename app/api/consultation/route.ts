import { appendToSheet } from '@/lib/google-sheets';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Format the values to match your Google Sheet columns
    const values = [
      new Date().toISOString(), // Timestamp
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.company || '',
      formData.phone || '',
      formData.preferredDate,
      formData.preferredTime,
      formData.timezone,
      formData.message || ''
    ];

    await appendToSheet(
      process.env.GOOGLE_SHEET_ID!,
      'Sheet1!A:J', // Update the range based on your sheet
      [values]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving to Google Sheet:', error);
    return NextResponse.json(
      { error: 'Failed to save consultation request' },
      { status: 500 }
    );
  }
}
