import { Target, TrendingUp, Clock } from 'lucide-react';

const benefits = [
    {
        icon: Target,
        title: 'Never Miss a Deadline',
        description:
            'Reminders ensure critical tasks and deadlines are always top of mind for your team.'
    },
    {
        icon: Clock,
        title: 'Save time',
        description:
            'Automate repetitive reminders so nothing slips. Know every recurring task is covered.'
    },
    {
        icon: TrendingUp,
        title: 'Boost Productivity',
        description:
            'Reduce context switching and meeting overhead with timely, relevant nudges delivered at the right moment.'
    }
];

export function Benefits() {
    return (
        <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Why Teams Love Nudgely
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                        Transform how your team stays aligned and productive
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <benefit.icon className="h-7 w-7" />
                                </div>

                                <h3 className="text-2xl font-semibold">
                                    {benefit.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
