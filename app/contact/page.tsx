import { Header } from '@/components/header';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';
import { Mail, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
                            <MessageSquare className="w-4 h-4" />
                            <span>Get in touch</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 text-balance">
                            Contact Us
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Have a question or want to learn more about Nudgely?
                            We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-navy mb-6">
                                    Let's start a conversation
                                </h2>
                                <p className="text-muted-foreground text-pretty leading-relaxed">
                                    Whether you're interested in learning more
                                    about Nudgely, need help getting started, or
                                    have feedback to share, our team is here to
                                    help.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-navy mb-1">
                                            Email us
                                        </h3>
                                        <p className="text-muted-foreground">
                                            mark@nudgelyapp.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-navy mb-1">
                                            Response time
                                        </h3>
                                        <p className="text-muted-foreground">
                                            We typically respond within 24 hours
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
