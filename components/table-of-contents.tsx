'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface Heading {
    level: number;
    text: string;
    slug: string;
}

interface TableOfContentsProps {
    headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -66%' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.slug);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            headings.forEach((heading) => {
                const element = document.getElementById(heading.slug);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [headings]);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        slug: string
    ) => {
        e.preventDefault();
        const element = document.getElementById(slug);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (headings.length === 0) {
        return null;
    }

    return (
        <nav className="space-y-1">
            <p className="font-semibold text-sm mb-4">On This Page</p>
            <ul className="space-y-2 text-sm">
                {headings.map((heading) => (
                    <li
                        key={heading.slug}
                        className={cn(
                            'border-l-2 transition-colors',
                            heading.level === 3 && 'ml-4',
                            activeId === heading.slug
                                ? 'border-primary text-primary font-medium'
                                : 'border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                        )}
                    >
                        <a
                            href={`#${heading.slug}`}
                            onClick={(e) => handleClick(e, heading.slug)}
                            className="block py-1 px-3 leading-tight"
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
