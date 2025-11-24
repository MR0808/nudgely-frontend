'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroCTA() {
    const scrollToWaitlist = () => {
        const waitlistSection = document.getElementById('waitlist');
        if (waitlistSection) {
            waitlistSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">
                        Ready to keep your team aligned?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 text-pretty">
                        Join the beta and be among the first to experience
                        smarter team coordination with Nudgely.
                    </p>
                    <Link href="https://app.nudgelyapp.com/auth/register">
                        <Button
                            size="lg"
                            className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base"
                        >
                            Join the Beta
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
