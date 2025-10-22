import * as z from 'zod';

export const WaitlistSchema = z.object({
    email: z.email('Please enter a valid email address'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    phone: z.string().optional()
});
