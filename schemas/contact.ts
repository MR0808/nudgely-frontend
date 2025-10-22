import * as z from 'zod';

export const ContactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.email('Please enter a valid email address'),
    company: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    website: z.string().optional()
});
