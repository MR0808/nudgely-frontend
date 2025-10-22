'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const pricingTiers = [
    {
        name: 'Free',
        description:
            'Perfect for solo founders or testing Nudgely with a small team',
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: [
            '1 admin + 2 members (3 total users)',
            '1 team',
            'Up to 10 active nudges',
            'Email reminders (1 recipient per nudge)s',
            '5 ready-to-use templates',
            '60-day task history',
            'Basic dashboard (counts only)',
            'Community support'
        ]
    },
    {
        name: 'Starter',
        description: 'For small teams that want simplicity without limits',
        monthlyPrice: 9,
        yearlyPrice: 84,
        features: [
            'Up to 10 users',
            '2 teams',
            'Unlimited nudges',
            'Unlimited nudge recipients',
            'Full template library + create custom templates',
            '1-year task history',
            'Full stats & charts dashboard',
            'Email support'
        ]
    },
    {
        name: 'Growth',
        description:
            'For growing companies that need advanced tracking and collaboration',
        monthlyPrice: 29,
        yearlyPrice: 276,
        features: [
            'Up to 25 users',
            '10 teams',
            'Unlimited nudges',
            'Unlimited nudge recipients',
            'Full template library + custom templates',
            'Unlimited nudge history',
            'Advanced stats & analytics dashboard',
            'Data exports (CSV & JSON)',
            'Priority email support'
        ]
    },
    {
        name: 'Scale',
        description:
            'For larger teams that need unlimited scale and enterprise features',
        monthlyPrice: 49,
        yearlyPrice: 468,
        features: [
            'Up to 100 users (contact us for custom enterprise plans)',
            'Unlimited teams',
            'Unlimited nudges',
            'Unlimited nudge recipients',
            'Full template library + custom templates',
            'Unlimited nudge history',
            'Full analytics suite (team comparisons, overdue trends, more)',
            'Data exports (CSV, JSON, Excel)',
            'Priority support + dedicated success manager'
        ]
    }
];

export function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-24 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 text-balance">
                        Our pricing is ready for you to choose
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-3 p-1 bg-background border rounded-full">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                !isYearly
                                    ? 'bg-foreground text-background'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                isYearly
                                    ? 'bg-foreground text-background'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className="relative bg-background border rounded-2xl p-8 flex flex-col
                                    hover:border-foreground/20 transition-all"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold">
                                        $
                                        {isYearly
                                            ? tier.yearlyPrice
                                            : tier.monthlyPrice}
                                    </span>
                                    <span className="text-muted-foreground">
                                        /{isYearly ? 'year' : 'month'}
                                    </span>
                                </div>
                                {isYearly && tier.monthlyPrice > 0 && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        ${(tier.yearlyPrice / 12).toFixed(0)}{' '}
                                        per month, billed annually
                                    </p>
                                )}
                                {isYearly && tier.monthlyPrice === 0 && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        &nbsp;
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-3 grow">
                                {tier.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-sm">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <p className="text-center text-sm text-muted-foreground mt-12">
                    All plans are subject to change before our beta launch.
                </p>
            </div>
        </section>
    );
}
