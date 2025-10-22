'use client';

import * as z from 'zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { Loader2, CheckCircle2 } from 'lucide-react';
import { subscribeToNewsletter } from '@/actions/subscribe';
import { WaitlistSchema } from '@/schemas/waitlist';

export function WaitlistForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof WaitlistSchema>>({
        resolver: zodResolver(WaitlistSchema),
        defaultValues: {
            name: '',
            email: ''
        }
    });

    const onSubmit = async (values: z.infer<typeof WaitlistSchema>) => {
        setError(null);
        startTransition(async () => {
            const result = await subscribeToNewsletter(values);
            if (!result) {
                setError('Something went wrong. Please try again.');
            }
            if (result) {
                setIsSubmitted(true);
                form.reset();
            }
        });
    };

    if (isSubmitted) {
        return (
            <section
                id="waitlist"
                className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
            >
                <div className="container mx-auto max-w-2xl">
                    <div className="bg-card border border-border rounded-2xl p-12 text-center space-y-6 shadow-xl">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                            <CheckCircle2 className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold">
                            You're on the list!
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Thanks for joining our waitlist. We'll notify you as
                            soon as Nudgely launches.
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => setIsSubmitted(false)}
                            className="mt-4 cursor-pointer"
                        >
                            Join another email
                        </Button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="waitlist"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
        >
            <div className="container mx-auto max-w-2xl">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Join the Waitlist
                    </h2>
                    <p className="text-xl text-muted-foreground text-balance">
                        Be the first to know when Nudgely launches. Get early
                        access and exclusive updates.
                    </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-xl">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    {...field}
                                                    className="h-12"
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
                                            <FormLabel>Name *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="you@company.com"
                                                    {...field}
                                                    className="h-12"
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
                                    name="phone"
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

                            {error && (
                                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                                    <p className="text-sm text-destructive">
                                        {error}
                                    </p>
                                </div>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
                                disabled={isPending}
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Joining...
                                    </>
                                ) : (
                                    'Join Waitlist'
                                )}
                            </Button>

                            <p className="text-sm text-muted-foreground text-center">
                                We respect your privacy. Unsubscribe at any
                                time.
                            </p>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
