'use client';

import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
    const scrollToWaitlist = () => {
        document
            .getElementById('waitlist')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center space-y-8">
                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                        Never forget{' '}
                        <span className="text-teal-500">recurring</span> tasks
                        again
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                        Nudgely automates your team's recurring reminders — so
                        you can stop chasing and start focusing.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base"
                            onClick={scrollToWaitlist}
                        >
                            Join the Waitlist
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    {/* Hero Visual */}
                    <div className="pt-12">
                        <div className="relative mx-auto max-w-5xl">
                            <div className="absolute inset-0 bg-linear-to-r from-teal/20 to-accent/20 blur-3xl -z-10" />
                            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
                                <div className="space-y-4">
                                    {/* Notification Card 1 - Meeting Reminder */}
                                    <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-teal-500/50 transition-colors">
                                        <div className="h-10 w-10 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                                            <Calendar className="h-5 w-5 text-teal" />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h3 className="font-semibold text-foreground text-sm">
                                                Submit weekly finance report
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Don't forget to submit the
                                                finance report to AP, remember
                                                to include all invoices
                                            </p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-xs text-teal font-medium">
                                                    Today at 10:00 AM
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Notification Card 3 - Task Completion */}
                                    <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h3 className="font-semibold text-foreground text-sm">
                                                Monthly Code review completed by
                                                Alex
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Each month, don't forget to
                                                review the latest updates.
                                            </p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-xs text-primary font-medium">
                                                    2 minutes ago
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
