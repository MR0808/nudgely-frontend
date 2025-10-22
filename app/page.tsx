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
