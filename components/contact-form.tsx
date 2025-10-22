'use client';

import * as z from 'zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2 } from 'lucide-react';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm } from '@/actions/contact';
import { ContactSchema } from '@/schemas/contact';
import { toast } from 'sonner';

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: '',
            message: '',
            email: '',
            company: ''
        }
    });

    const onSubmit = (values: z.infer<typeof ContactSchema>) => {
        startTransition(async () => {
            const data = await submitContactForm(values);
            if (!data.error) {
                form.reset();
                setIsSubmitted(true);
                toast.success('Message sent');
            }
        });
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                    Message sent!
                </h3>
                <p className="text-muted-foreground">
                    We'll get back to you as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name *</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="John Doe"
                                        {...field}
                                        className={
                                            form.formState.errors.name
                                                ? 'border-red-500'
                                                : ''
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="john@company.com"
                                        {...field}
                                        className={
                                            form.formState.errors.email
                                                ? 'border-red-500'
                                                : ''
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Acme Inc."
                                        {...field}
                                        className={
                                            form.formState.errors.company
                                                ? 'border-red-500'
                                                : ''
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message *</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us how we can help..."
                                        rows={5}
                                        {...field}
                                        className={
                                            form.formState.errors.message
                                                ? 'border-red-500'
                                                : ''
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div
                    className="absolute opacity-0 pointer-events-none"
                    aria-hidden="true"
                    tabIndex={-1}
                >
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        autoComplete="off"
                                        tabIndex={-1}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isPending}
                    className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        'Send Message'
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default ContactForm;
