import { Users, Target, Lightbulb, Heart } from 'lucide-react';
import type { Metadata } from 'next';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
    title: 'About Nudgely - Building the Future of Team Alignment',
    description:
        "Learn about Nudgely's mission to help teams stay aligned without overhead. Discover our story, values, and commitment to simplicity-first design for team productivity.",
    keywords: [
        'about nudgely',
        'team alignment platform',
        'productivity mission',
        'company values',
        'team collaboration'
    ],
    openGraph: {
        title: 'About Nudgely - Building the Future of Team Alignment',
        description:
            "Learn about Nudgely's mission to help teams stay aligned without overhead. Discover our story, values, and commitment to simplicity-first design.",
        url: 'https://nudgelyapp.com/about',
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: 'About Nudgely - Building the Future of Team Alignment',
        description:
            "Learn about Nudgely's mission to help teams stay aligned without overhead. Discover our story, values, and commitment to simplicity-first design."
    },
    alternates: {
        canonical: 'https://nudgelyapp.com/about'
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                            Building the future of team alignment
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            Nudgely was born from a simple observation: great
                            teams don't fail because of bad ideas—they fail
                            because of missed follow-ups, forgotten commitments,
                            and misaligned priorities.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                                    Our Mission
                                </h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                We're on a mission to help teams stay aligned
                                without the overhead. Nudgely reminds you of
                                what matters, when it matters, so nothing falls
                                through the cracks.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe the best productivity tools are
                                invisible—they work in the background,
                                anticipating your needs and keeping your team in
                                sync without adding more noise to your day.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
                            Our Values
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Lightbulb className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    Simplicity First
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We believe powerful tools should be simple
                                    to use. No complex setups, no steep learning
                                    curves.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    Team-Centric
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Built for teams who value collaboration and
                                    accountability without micromanagement.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    Human-Focused
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Technology should enhance human connection,
                                    not replace it. We design for people, not
                                    robots.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-linear-to-br from-primary/5 to-accent/5 border border-border rounded-2xl p-8 sm:p-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Nudgely started in 2025 when our founder,
                                    frustrated by yet another missed deadline,
                                    realized that the problem wasn't lack of
                                    tools—it was too many of them. Teams were
                                    drowning in notifications, switching between
                                    apps, and still missing what mattered.
                                </p>
                                <p>
                                    We set out to build something different: a
                                    smart layer that sits on top of your
                                    existing workflow, learning what's important
                                    to your team and surfacing it at exactly the
                                    right moment.
                                </p>
                                <p>
                                    Today, we're planning on helping teams
                                    across the globe stay aligned, focused, and
                                    productive—without adding to the chaos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                            Join us on this journey
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We're just getting started, and we'd love to have
                            you along for the ride.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/#waitlist"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors cursor-pointer"
                            >
                                Join the Waitlist
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-accent transition-colors cursor-pointer"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
