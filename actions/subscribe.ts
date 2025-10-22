'use server';

import * as z from 'zod';

import { WaitlistSchema } from '@/schemas/waitlist';
import { KitSubscriptionResponse } from '@/types/subscribe';

export async function subscribeToNewsletter(
    values: z.infer<typeof WaitlistSchema>
) {
    if (values.phone) {
        return { data: true };
    }

    const validatedFields = WaitlistSchema.safeParse(values);

    if (!validatedFields.success) {
        throw new Error('Invalid fields.');
    }

    const { name, email } = validatedFields.data;

    const API_KEY = process.env.KIT_API_KEY;
    const FORM_ID = process.env.KIT_FORM_ID; // Replace with your ConvertKit form ID

    if (!API_KEY || !FORM_ID) {
        throw new Error('ConvertKit API key or Form ID is missing.');
    }

    const response = await fetch(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                api_key: API_KEY,
                email,
                name
            })
        }
    );

    const data: KitSubscriptionResponse = await response.json();

    if (!response.ok) {
        return { data: false };
    }

    return data;
}
