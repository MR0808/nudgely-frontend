'use server';

interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    message: string;
}

export async function submitContactForm(data: ContactFormData) {
    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, this would send an email to mark@nudgelyapp.com
    // For now, we'll just log the submission
    console.log('Contact form submission:', {
        to: 'mark@nudgelyapp.com',
        from: data.email,
        subject: `New contact form submission from ${data.name}`,
        body: `
      Name: ${data.name}
      Email: ${data.email}
      Company: ${data.company || 'Not provided'}
      Message: ${data.message}
    `
    });

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@nudgelyapp.com',
    //   to: 'mark@nudgelyapp.com',
    //   subject: `New contact form submission from ${data.name}`,
    //   html: `<p><strong>Name:</strong> ${data.name}</p>...`
    // })

    return { success: true };
}
