'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const fromPerson = `${process.env.NEXT_PUBLIC_APP_NAME as string} <${
    process.env.NEXT_PUBLIC_APP_EMAIL as string
}>`;
const fromNudgely = `Nudgely Support <${
    process.env.NEXT_PUBLIC_APP_EMAIL_SUPPORT as string
}>`;

// export const sendVerificationEmail = async ({
//     email,
//     otp,
//     name
// }: {
//     email: string;
//     otp: string;
//     name: string;
// }) => {
//     const sent = await resend.emails.send({
//         from: fromNudgely,
//         to: email,
//         subject: 'Nudgely - Confirm your email',
//         react: EmailOTPEmailTemplate({ name, otp })
//     });

//     return sent;
// };
