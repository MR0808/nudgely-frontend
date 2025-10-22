import { Bell, Zap, Users } from 'lucide-react';

const steps = [
    {
        icon: Bell,
        title: 'Set Your Nudges',
        description:
            'Configure reminders for tasks, deadlines, and follow-ups that matter to your team.'
    },
    {
        icon: Users,
        title: 'Assign Your Team',
        description:
            'Everyone stays on track, deadlines are met, and nothing falls through the cracks.'
    },
    {
        icon: Zap,
        title: 'We handle reminders',
        description:
            "We send the reminders, on schedule, to your team's email inbox, tracked by your on our dashboard."
    }
];

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                        Three simple steps to keep your entire team aligned and
                        productive
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                            )}

                            <div className="relative space-y-4 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border-2 border-border shadow-lg">
                                    <step.icon className="h-8 w-8 text-teal" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
