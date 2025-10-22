import type { Metadata } from 'next';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { Benefits } from '@/components/benefits';
import { HeroCTA } from '@/components/hero-cta';
import { WaitlistForm } from '@/components/waitlist-form';
import { Footer } from '@/components/footer';
import { FAQ } from '@/components/faq';
import { Pricing } from '@/components/pricing';
import { ContactCTA } from '@/components/contact-cta';

export const metadata: Metadata = {
    title: 'Nudgely - Keep Your Team Aligned',
    description:
        'Transform team productivity with intelligent nudges and reminders. Keep everyone aligned on deadlines, follow-ups, and meetings. Join 120+ teams using Nudgely.',
    keywords: [
        'team collaboration',
        'productivity tool',
        'smart reminders',
        'team alignment',
        'project management',
        'deadline tracking',
        'meeting reminders',
        'workflow automation'
    ],
    openGraph: {
        title: 'Nudgely - Keep Your Team Aligned with Smart Nudges & Reminders',
        description:
            'Transform team productivity with intelligent nudges and reminders. Keep everyone aligned on deadlines, follow-ups, and meetings.',
        url: 'https://nudgelyapp.com',
        type: 'website',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Nudgely - Team Alignment Platform'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nudgely - Keep Your Team Aligned with Smart Nudges & Reminders',
        description:
            'Transform team productivity with intelligent nudges and reminders. Keep everyone aligned on deadlines, follow-ups, and meetings.',
        images: ['/logo.png']
    },
    alternates: {
        canonical: 'https://nudgelyapp.com'
    }
};

const HomePage = () => {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <HowItWorks />
            <Benefits />
            <Pricing />
            <HeroCTA />
            <FAQ />
            <ContactCTA />
            <WaitlistForm />
            <Footer />
        </main>
    );
};

export default HomePage;
