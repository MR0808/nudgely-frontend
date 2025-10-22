'use server';

import * as z from 'zod';
import { ContactSchema } from '@/schemas/contact';
import { getErrorMessage } from '@/lib/handleError';
import { sendContactEmail } from '@/lib/mail';

export const submitContactForm = async (
    values: z.infer<typeof ContactSchema>
) => {
    try {
        if (values.website) {
            return { error: null };
        }
        const validatedFields = ContactSchema.safeParse(values);

        if (!validatedFields.success) {
            return {
                error: getErrorMessage('Invalid fields!')
            };
        }

        const { name, email, company, message } = validatedFields.data;

        await sendContactEmail({
            name,
            email,
            company,
            message
        });

        return { error: null };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'An error occurred'
        };
    }
};
