'use server';

import ContactEmail from '@/emails/contact-notification';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const fromPerson = `${process.env.NEXT_PUBLIC_APP_NAME as string} <${
    process.env.NEXT_PUBLIC_APP_EMAIL as string
}>`;
const fromNudgely = `Nudgely Support <${
    process.env.NEXT_PUBLIC_APP_EMAIL_SUPPORT as string
}>`;

export const sendContactEmail = async ({
    email,
    name,
    company,
    message
}: {
    email: string;
    name: string;
    company?: string;
    message: string;
}) => {
    const sent = await resend.emails.send({
        from: fromNudgely,
        to: fromPerson,
        subject: 'Nudgely - Contact email from website',
        react: ContactEmail({ email, name, company, message })
    });

    return sent;
};
