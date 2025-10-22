import { cn } from '@/lib/utils';
import {
    Archive,
    Award,
    CheckCircle2,
    CreditCard,
    Gift,
    LucideIcon,
    Mail,
    Repeat,
    Shield,
    Users,
    Users2
} from 'lucide-react';

type FrequentlyAskedQuestion = {
    question: string;
    answer: string;
    icon: LucideIcon;
};

const faqs: FrequentlyAskedQuestion[] = [
    {
        question: 'What is Nudgely?',
        answer: 'Nudgely automates recurring task reminders for teams so nothing important is forgotten.',
        icon: Repeat
    },
    {
        question: 'Who is Nudgely for?',
        answer: 'Built for solopreneurs, startup teams, and small businesses that want simple, reliable reminders.',
        icon: Users
    },
    {
        question: 'How does Nudgely send reminders?',
        answer: 'Nudgely sends time-aware email reminders (with a one-click “Mark Complete”).',
        icon: Mail
    },
    {
        question: 'What happens when I complete a task?',
        answer: 'A completion is logged, everyone on the nudge is notified, and the next occurrence is scheduled automatically.',
        icon: CheckCircle2
    },
    {
        question: 'Can I use Nudgely for free?',
        answer: "Yes - there's a Free Forever plan for solo users and tiny teams.",
        icon: Gift
    },
    {
        question: 'What do I get with a paid plan?',
        answer: 'Paid plans unlock more users, teams, history retention, templates, and exports.',
        icon: Award
    },
    {
        question: 'How are team members billed?',
        answer: 'The company admin handles billing and seats are counted for users with logins.',
        icon: CreditCard
    },
    {
        question: 'Do recipients count towards my users?',
        answer: 'Not at all, only users who have a login count. You can have as many recipients as your plan allows for.',
        icon: Users2
    },
    {
        question: 'What happens if I downgrade?',
        answer: 'Downgrades start as of your next billing period; if limits remain exceeded we softly lock extra items until resolved.',
        icon: Archive
    },
    {
        question: 'Is my data secure?',
        answer: 'Yes - Nudgely uses secure hosting, encrypted storage, and industry-standard authentication.',
        icon: Shield
    }
];

export function FAQ() {
    return (
        <section
            id="faq"
            className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                        Find answers to common questions about our products and
                        services.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                'relative p-6 border bg-card -ms-px -mt-px text-start overflow-hidden',
                                'first:rounded-t-lg md:first:rounded-tr-none md:nth-[2]:rounded-tr-lg md:nth-last-[2]:rounded-bl-lg last:rounded-b-lg md:last:rounded-bl-none'
                            )}
                        >
                            <div
                                className="absolute inset-0 -ms-px -mt-0.5 z-0"
                                style={{
                                    backgroundImage: `
        linear-gradient(to right, oklch(from var(--card-foreground) l c h / 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, oklch(from var(--card-foreground) l c h / 0.07) 1px, transparent 1px)
      `,
                                    backgroundSize: '20px 20px',
                                    backgroundPosition: '0 0, 0 0',
                                    maskImage: `
          repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
                                    WebkitMaskImage: `
    repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
                                    maskComposite: 'intersect',
                                    WebkitMaskComposite: 'source-in'
                                }}
                            />

                            <div className="isolate">
                                <div className="flex items-center gap-2 text-lg font-medium">
                                    <faq.icon className="text-primary mr-2.5 size-5 shrink-0" />
                                    {faq.question}
                                </div>
                                <div className="mt-2 pl-10 text-base text-start text-foreground/80">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
