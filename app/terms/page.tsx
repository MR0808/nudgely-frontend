import type { Metadata } from 'next';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
    title: 'Terms of Service - Nudgely',
    description:
        "Read Nudgely's terms of service to understand the rules and regulations for using our team alignment platform.",
    robots: {
        index: true,
        follow: true
    },
    alternates: {
        canonical: 'https://nudgelyapp.com/terms'
    }
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-muted-foreground mb-12">
                        Last updated: January 22, 2025
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing or using Nudgely ("Service"), you
                                agree to be bound by these Terms of Service
                                ("Terms"). If you do not agree to these Terms,
                                please do not use our Service. We reserve the
                                right to modify these Terms at any time, and
                                your continued use of the Service constitutes
                                acceptance of any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                2. Description of Service
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Nudgely provides a team alignment platform that
                                delivers smart nudges and reminders to help
                                teams stay productive and aligned. The Service
                                includes web-based applications, mobile
                                applications, and related services that we may
                                offer from time to time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                3. User Accounts
                            </h2>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                3.1 Account Creation
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                To use certain features of the Service, you must
                                create an account. You agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    Provide accurate, current, and complete
                                    information
                                </li>
                                <li>
                                    Maintain and update your information to keep
                                    it accurate
                                </li>
                                <li>
                                    Maintain the security of your account
                                    credentials
                                </li>
                                <li>
                                    Accept responsibility for all activities
                                    under your account
                                </li>
                                <li>
                                    Notify us immediately of any unauthorized
                                    use
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                3.2 Account Eligibility
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                You must be at least 18 years old to create an
                                account. By creating an account, you represent
                                that you meet this age requirement and have the
                                authority to enter into these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                4. Acceptable Use
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    Violate any applicable laws or regulations
                                </li>
                                <li>
                                    Infringe on intellectual property rights of
                                    others
                                </li>
                                <li>
                                    Transmit harmful code, viruses, or malware
                                </li>
                                <li>
                                    Attempt to gain unauthorized access to our
                                    systems
                                </li>
                                <li>Interfere with or disrupt the Service</li>
                                <li>
                                    Use the Service for any illegal or
                                    unauthorized purpose
                                </li>
                                <li>Harass, abuse, or harm other users</li>
                                <li>
                                    Scrape, crawl, or use automated means to
                                    access the Service
                                </li>
                                <li>
                                    Reverse engineer or attempt to extract
                                    source code
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                5. Subscription and Payment
                            </h2>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                5.1 Pricing
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We offer various subscription plans with
                                different features and pricing. Prices are
                                subject to change with notice. Any price changes
                                will not affect your current subscription
                                period.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                5.2 Billing
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Subscriptions are billed in advance on a monthly
                                or annual basis. You authorize us to charge your
                                payment method for all fees. If payment fails,
                                we may suspend or terminate your access to the
                                Service.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                5.3 Refunds
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Refunds are provided at our discretion.
                                Generally, we offer a 30-day money-back
                                guarantee for new subscriptions. Contact us at
                                mark@nudgelyapp.com to request a refund.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                5.4 Cancellation
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                You may cancel your subscription at any time.
                                Cancellations take effect at the end of your
                                current billing period. You will retain access
                                to paid features until that time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                6. Intellectual Property
                            </h2>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                6.1 Our Rights
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                The Service and all content, features, and
                                functionality are owned by Nudgely and are
                                protected by copyright, trademark, and other
                                intellectual property laws. You may not copy,
                                modify, distribute, or create derivative works
                                without our express permission.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                6.2 Your Content
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                You retain ownership of any content you submit
                                to the Service. By submitting content, you grant
                                us a worldwide, non-exclusive, royalty-free
                                license to use, store, and process your content
                                to provide and improve the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                7. Privacy and Data Protection
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your use of the Service is also governed by our
                                Privacy Policy. We collect, use, and protect
                                your information as described in our Privacy
                                Policy. By using the Service, you consent to our
                                data practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                8. Disclaimers and Limitations of Liability
                            </h2>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                8.1 Service Availability
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                The Service is provided "as is" and "as
                                available" without warranties of any kind. We do
                                not guarantee that the Service will be
                                uninterrupted, secure, or error-free.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                8.2 Limitation of Liability
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To the maximum extent permitted by law, Nudgely
                                shall not be liable for any indirect,
                                incidental, special, consequential, or punitive
                                damages, or any loss of profits or revenues,
                                whether incurred directly or indirectly, or any
                                loss of data, use, goodwill, or other intangible
                                losses.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                9. Indemnification
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You agree to indemnify and hold harmless Nudgely
                                and its officers, directors, employees, and
                                agents from any claims, damages, losses,
                                liabilities, and expenses (including legal fees)
                                arising from your use of the Service or
                                violation of these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                10. Termination
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may suspend or terminate your account and
                                access to the Service at any time, with or
                                without cause or notice, including for violation
                                of these Terms. Upon termination, your right to
                                use the Service will immediately cease, and we
                                may delete your account and data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                11. Dispute Resolution
                            </h2>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                11.1 Governing Law
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms shall be governed by and construed
                                in accordance with the laws of the jurisdiction
                                in which Nudgely operates, without regard to
                                conflict of law principles.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                11.2 Arbitration
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Any disputes arising from these Terms or the
                                Service shall be resolved through binding
                                arbitration, except that either party may seek
                                injunctive relief in court for intellectual
                                property infringement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                12. General Provisions
                            </h2>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                12.1 Entire Agreement
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms constitute the entire agreement
                                between you and Nudgely regarding the Service
                                and supersede all prior agreements.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                12.2 Severability
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                If any provision of these Terms is found to be
                                unenforceable, the remaining provisions will
                                remain in full force and effect.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                12.3 Waiver
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our failure to enforce any right or provision of
                                these Terms will not be considered a waiver of
                                those rights.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                                12.4 Assignment
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                You may not assign or transfer these Terms
                                without our prior written consent. We may assign
                                these Terms without restriction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                13. Contact Information
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms,
                                please contact us at:
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
