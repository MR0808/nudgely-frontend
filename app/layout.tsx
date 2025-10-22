import type React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://nudgelyapp.com'),
    title: {
        default: 'Nudgely - Keep Your Team Aligned with Smart Nudges',
        template: '%s | Nudgely'
    },
    description:
        'Smart nudges and reminders to keep your team aligned and productive. Never miss a deadline, follow-up, or important meeting again.',
    keywords: [
        'team collaboration',
        'productivity',
        'reminders',
        'nudges',
        'team alignment',
        'project management',
        'SaaS',
        'workflow automation'
    ],
    authors: [{ name: 'Nudgely' }],
    creator: 'Nudgely',
    publisher: 'Nudgely',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://nudgelyapp.com',
        title: 'Nudgely - Keep Your Team Aligned with Smart Nudges',
        description:
            'Smart nudges and reminders to keep your team aligned and productive. Never miss a deadline, follow-up, or important meeting again.',
        siteName: 'Nudgely',
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
        title: 'Nudgely - Keep Your Team Aligned with Smart Nudges',
        description:
            'Smart nudges and reminders to keep your team aligned and productive. Never miss a deadline, follow-up, or important meeting again.',
        images: ['/og-image.png'],
        creator: '@nudgelyapp'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code'
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="apple-mobile-web-app-title" content="Nudgely" />
            </head>
            <body className={inter.className} suppressHydrationWarning>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
