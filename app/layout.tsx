import type React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import { Inter } from 'next/font/google';
import './globals.css';

import siteMetadata from '@/utils/siteMetaData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        template: `${siteMetadata.title} | %s`,
        default: `${siteMetadata.title} | Keep Your Team Aligned` // a default is required when creating a template
    },
    applicationName: siteMetadata.title,
    description: siteMetadata.description,
    appleWebApp: {
        title: siteMetadata.title,
        statusBarStyle: 'default',
        capable: true
    },
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.title,
        images: [siteMetadata.siteLogo],
        locale: 'en_AU',
        type: 'website'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.title,
        images: [siteMetadata.siteLogo]
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
