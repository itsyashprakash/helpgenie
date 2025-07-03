"use server"

interface ConsultationData {
  firstName: string
  lastName: string
  email: string
  company?: string
  phone?: string
  preferredDate: string
  preferredTime: string
  timezone: string
  message?: string
}

export async function scheduleConsultation(prevState: any, formData: FormData) {
  try {
    // Extract form data
    const data: ConsultationData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      phone: (formData.get("phone") as string) || "",
      preferredDate: formData.get("preferredDate") as string,
      preferredTime: formData.get("preferredTime") as string,
      timezone: formData.get("timezone") as string,
      message: (formData.get("message") as string) || "",
    }

    // Validate required fields
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.preferredDate ||
      !data.preferredTime ||
      !data.timezone
    ) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Create datetime for the consultation
    const consultationDateTime = new Date(`${data.preferredDate}T${data.preferredTime}:00`)
    const endDateTime = new Date(consultationDateTime.getTime() + 30 * 60 * 1000) // 30 minutes later

    // In a real implementation, you would:
    // 1. Set up Google Calendar API credentials
    // 2. Create the calendar event
    // 3. Generate Google Meet link
    // 4. Send calendar invites

    // Simulated Google Calendar integration
    const calendarEvent = await createGoogleCalendarEvent({
      summary: `IT Consultation - ${data.firstName} ${data.lastName}`,
      description: `
IT Support Consultation

Client: ${data.firstName} ${data.lastName}
Company: ${data.company || "N/A"}
Email: ${data.email}
Phone: ${data.phone || "N/A"}

Message: ${data.message || "No additional message"}

This is a 30-minute consultation to discuss IT support needs and recommend appropriate service plans.
      `.trim(),
      startDateTime: consultationDateTime,
      endDateTime: endDateTime,
      timezone: data.timezone,
      attendeeEmail: data.email,
      clientName: `${data.firstName} ${data.lastName}`,
    })

    // Send confirmation email
    await sendConsultationConfirmation({
      ...data,
      meetingLink: calendarEvent.meetLink,
      calendarLink: calendarEvent.calendarLink,
      consultationDateTime,
      endDateTime,
    })

    return {
      success: true,
      message: `Consultation scheduled successfully! Check your email for the Google Meet link and calendar invite.`,
      meetingDetails: {
        date: consultationDateTime.toLocaleDateString(),
        time: consultationDateTime.toLocaleTimeString(),
        meetLink: calendarEvent.meetLink,
      },
    }
  } catch (error) {
    console.error("Error scheduling consultation:", error)
    return {
      success: false,
      error: "Failed to schedule consultation. Please try again or contact us directly.",
    }
  }
}

async function createGoogleCalendarEvent(eventData: {
  summary: string
  description: string
  startDateTime: Date
  endDateTime: Date
  timezone: string
  attendeeEmail: string
  clientName: string
}) {
  // In a real implementation, you would use Google Calendar API
  // This is a simplified simulation

  try {
    // Simulate Google Calendar API setup
    // const auth = new google.auth.GoogleAuth({
    //   keyFile: 'path/to/service-account-key.json',
    //   scopes: ['https://www.googleapis.com/auth/calendar']
    // })

    // const calendar = google.calendar({ version: 'v3', auth })

    // Generate a Google Meet link (in real implementation, this would be done via API)
    const meetingId = Math.random().toString(36).substring(2, 15)
    const meetLink = `https://meet.google.com/${meetingId}`

    // Simulate calendar event creation
    const event = {
      id: `consultation_${Date.now()}`,
      summary: eventData.summary,
      description: eventData.description,
      start: {
        dateTime: eventData.startDateTime.toISOString(),
        timeZone: eventData.timezone,
      },
      end: {
        dateTime: eventData.endDateTime.toISOString(),
        timeZone: eventData.timezone,
      },
      attendees: [
        { email: "support@techsupportpro.com" }, // Company calendar
        { email: eventData.attendeeEmail }, // Client email
      ],
      conferenceData: {
        createRequest: {
          requestId: meetingId,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 }, // 1 day before
          { method: "popup", minutes: 30 }, // 30 minutes before
        ],
      },
    }

    // In real implementation:
    // const response = await calendar.events.insert({
    //   calendarId: 'primary',
    //   resource: event,
    //   conferenceDataVersion: 1,
    //   sendUpdates: 'all'
    // })

    console.log("Calendar event created (simulated):", event)

    return {
      eventId: event.id,
      meetLink: meetLink,
      calendarLink: `https://calendar.google.com/calendar/event?eid=${btoa(event.id)}`,
    }
  } catch (error) {
    console.error("Error creating calendar event:", error)
    throw new Error("Failed to create calendar event")
  }
}

async function sendConsultationConfirmation(
  data: ConsultationData & {
    meetingLink: string
    calendarLink: string
    consultationDateTime: Date
    endDateTime: Date
  },
) {
  // In a real implementation, you would use an email service like:
  // - Resend
  // - SendGrid
  // - Nodemailer with SMTP

  const emailContent = `
    <h2>IT Consultation Confirmed</h2>
    <p>Dear ${data.firstName} ${data.lastName},</p>
    
    <p>Your IT consultation has been successfully scheduled!</p>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Meeting Details:</h3>
      <p><strong>Date:</strong> ${data.consultationDateTime.toLocaleDateString()}</p>
      <p><strong>Time:</strong> ${data.consultationDateTime.toLocaleTimeString()} - ${data.endDateTime.toLocaleTimeString()}</p>
      <p><strong>Duration:</strong> 30 minutes</p>
      <p><strong>Timezone:</strong> ${data.timezone}</p>
    </div>
    
    <div style="margin: 20px 0;">
      <a href="${data.meetingLink}" style="background: #4285f4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">
        Join Google Meet
      </a>
    </div>
    
    <p>A calendar invite has been sent to your email. Please add this meeting to your calendar.</p>
    
    <h3>What to Expect:</h3>
    <ul>
      <li>Discussion of your current IT challenges</li>
      <li>Assessment of your support needs</li>
      <li>Recommendation of appropriate service plans</li>
      <li>Q&A session</li>
    </ul>
    
    <p>If you need to reschedule or have any questions, please contact us at support@techsupportpro.com or call +1 (555) 123-4567.</p>
    
    <p>We look forward to speaking with you!</p>
    
    <p>Best regards,<br>
    TechSupport Pro Team</p>
  `

  // Simulate email sending
  console.log("Sending confirmation email to:", data.email)
  console.log("Email content:", emailContent)

  // In real implementation:
  // await emailService.send({
  //   to: data.email,
  //   cc: 'support@techsupportpro.com',
  //   subject: 'IT Consultation Confirmed - TechSupport Pro',
  //   html: emailContent
  // })

  return true
}
