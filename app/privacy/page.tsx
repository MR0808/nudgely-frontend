import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Nudgely',
    description:
        "Read Nudgely's privacy policy to understand how we collect, use, and protect your personal information and data.",
    robots: {
        index: true,
        follow: true
    },
    alternates: {
        canonical: 'https://nudgelyapp.com/privacy'
    }
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground mb-12">
                        Last updated: January 22, 2025
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                1. Introduction
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Welcome to Nudgely ("we," "our," or "us"). We
                                are committed to protecting your privacy and
                                ensuring the security of your personal
                                information. This Privacy Policy explains how we
                                collect, use, disclose, and safeguard your
                                information when you use our service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                2. Information We Collect
                            </h2>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                2.1 Information You Provide
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We collect information that you voluntarily
                                provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Register for an account</li>
                                <li>Join our waitlist</li>
                                <li>Contact us through our contact form</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Use our services</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                This information may include: name, email
                                address, company name, job title, and any other
                                information you choose to provide.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                2.2 Automatically Collected Information
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                When you access our service, we automatically
                                collect certain information, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    Device information (browser type, operating
                                    system)
                                </li>
                                <li>IP address and location data</li>
                                <li>
                                    Usage data (pages visited, time spent,
                                    features used)
                                </li>
                                <li>
                                    Cookies and similar tracking technologies
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                3. How We Use Your Information
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    Provide, maintain, and improve our services
                                </li>
                                <li>Process your requests and transactions</li>
                                <li>
                                    Send you updates, newsletters, and marketing
                                    communications (with your consent)
                                </li>
                                <li>
                                    Respond to your inquiries and provide
                                    customer support
                                </li>
                                <li>
                                    Analyze usage patterns and optimize user
                                    experience
                                </li>
                                <li>
                                    Detect, prevent, and address technical
                                    issues and security threats
                                </li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                4. Information Sharing and Disclosure
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We do not sell your personal information. We may
                                share your information in the following
                                circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong>Service Providers:</strong> With
                                    third-party vendors who perform services on
                                    our behalf (e.g., hosting, analytics, email
                                    delivery)
                                </li>
                                <li>
                                    <strong>Legal Requirements:</strong> When
                                    required by law or to protect our rights and
                                    safety
                                </li>
                                <li>
                                    <strong>Business Transfers:</strong> In
                                    connection with a merger, acquisition, or
                                    sale of assets
                                </li>
                                <li>
                                    <strong>With Your Consent:</strong> When you
                                    explicitly agree to share your information
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                5. Data Security
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate technical and
                                organizational measures to protect your personal
                                information against unauthorized access,
                                alteration, disclosure, or destruction. However,
                                no method of transmission over the internet or
                                electronic storage is 100% secure, and we cannot
                                guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                6. Data Retention
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We retain your personal information for as long
                                as necessary to fulfill the purposes outlined in
                                this Privacy Policy, unless a longer retention
                                period is required or permitted by law. When we
                                no longer need your information, we will
                                securely delete or anonymize it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                7. Your Rights and Choices
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Depending on your location, you may have the
                                following rights:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    Access, correct, or delete your personal
                                    information
                                </li>
                                <li>
                                    Object to or restrict processing of your
                                    data
                                </li>
                                <li>Data portability</li>
                                <li>Withdraw consent at any time</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                To exercise these rights, please contact us at
                                mark@nudgelyapp.com.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                8. Cookies and Tracking Technologies
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use cookies and similar tracking technologies
                                to collect information about your browsing
                                activities. You can control cookies through your
                                browser settings, but disabling cookies may
                                affect your ability to use certain features of
                                our service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                9. Third-Party Links
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our service may contain links to third-party
                                websites. We are not responsible for the privacy
                                practices of these external sites. We encourage
                                you to review their privacy policies before
                                providing any personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                10. Children's Privacy
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our service is not intended for children under
                                13 years of age. We do not knowingly collect
                                personal information from children. If you
                                believe we have collected information from a
                                child, please contact us immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                11. International Data Transfers
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your information may be transferred to and
                                processed in countries other than your own. We
                                ensure appropriate safeguards are in place to
                                protect your information in accordance with this
                                Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                12. Changes to This Privacy Policy
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to
                                time. We will notify you of any material changes
                                by posting the new policy on this page and
                                updating the "Last updated" date. Your continued
                                use of our service after changes constitutes
                                acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                13. Contact Us
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy
                                Policy or our privacy practices, please contact
                                us at:
                            </p>
                            <div className="mt-4 p-6 bg-muted rounded-lg">
                                <p className="text-foreground font-medium">
                                    Nudgely
                                </p>
                                <p className="text-muted-foreground">
                                    Email: mark@nudgelyapp.com
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
