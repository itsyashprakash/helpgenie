'use server'

import { appendToSheet } from "@/lib/google-sheets" // Adjust this path to match your actual file

export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  message: string;
}

export async function scheduleConsultation(_: any, formData: FormData) {
  try {
    const formDataObj: Partial<ConsultationFormData> = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      phone: formData.get('phone') as string,
      preferredDate: formData.get('preferredDate') as string,
      preferredTime: formData.get('preferredTime') as string,
      timezone: formData.get('timezone') as string,
      message: formData.get('message') as string,
    };

    // Your Google Apps Script web app URL
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbwgXquMka5Ose3oGtYh3L_HUw3__9Ynf32L2tw8Aq2vm5lWhso7mHCzdTVNwcuD22D_/exec';
    
    const response = await fetch(webAppUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formDataObj,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return { success: true, message: 'Thank you! Your consultation request has been submitted successfully.' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { 
      success: false, 
      message: 'There was an error submitting your form. Please try again later.' 
    };
  }
}
