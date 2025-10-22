import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ContactCTA() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">
                    Have questions? Let's talk
                </h2>

                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                    Our team is ready to answer your questions and help you get
                    started with Nudgely.
                </p>

                <Link href="/contact">
                    <Button
                        size="lg"
                        className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base"
                    >
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
