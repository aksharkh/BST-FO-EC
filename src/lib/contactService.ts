import emailjs from '@emailjs/browser';

// Initialize EmailJS (you need to get these from emailjs.com)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Google Sheets API endpoint (backend function)
const GOOGLE_SHEETS_WEBHOOK = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK;

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export const sendContactForm = async (formData: ContactFormData) => {
  try {
    // Initialize EmailJS if not already done
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    const templateParams = {
      to_email: import.meta.env.VITE_RECIPIENT_EMAIL,
      first_name: formData.firstName,
      last_name: formData.lastName,
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      email: formData.email,
      company: formData.company,
      company_name: formData.company,
      message: formData.message,
      user_message: formData.message,
      reply_to: formData.email,
    };

    // Send email notification
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      console.log('Email sent successfully');
    }

    // Send to Google Sheets
    if (GOOGLE_SHEETS_WEBHOOK) {
      try {
        const response = await fetch(GOOGLE_SHEETS_WEBHOOK, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            company: formData.company,
            message: formData.message,
          }),
          mode: 'no-cors',
        });
        console.log('Data sent to Google Sheets');
      } catch (sheetsError) {
        console.warn('Google Sheets error (non-critical):', sheetsError);
        // Don't throw - email was sent successfully
      }
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};
