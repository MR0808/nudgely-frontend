import type { Metadata } from 'next';

import { getAllPosts, getAllCategories } from '@/lib/mdx';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogListClient } from './blog-list-client';

export const metadata: Metadata = {
    title: 'Blog - Insights on Team Alignment & Productivity | Nudgely',
    description:
        'Expert advice, best practices, and insights to help your team stay aligned and productive in the modern workplace. Read the latest from Nudgely.',
    keywords: [
        'team productivity',
        'remote work',
        'team alignment',
        'workplace collaboration',
        'productivity tips',
        'team communication',
        'async work',
        'team management'
    ],
    alternates: {
        canonical: 'https://nudgelyapp.com/blog'
    },
    openGraph: {
        title: 'Blog - Team Productivity Insights | Nudgely',
        description:
            'Expert advice and best practices for team alignment and productivity. Stay updated with the latest insights from Nudgely.',
        type: 'website',
        url: 'https://nudgelyapp.com/blog',
        siteName: 'Nudgely'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog - Team Productivity Insights | Nudgely',
        description:
            'Expert advice and best practices for team alignment and productivity. Stay updated with the latest insights from Nudgely.',
        creator: '@nudgelyapp'
    }
};

export default async function BlogPage() {
    const posts = await getAllPosts();
    const categories = getAllCategories(posts);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Nudgely Blog',
        description:
            'Expert advice, best practices, and insights to help your team stay aligned and productive.',
        url: 'https://nudgelyapp.com/blog',
        publisher: {
            '@type': 'Organization',
            name: 'Nudgely',
            logo: {
                '@type': 'ImageObject',
                url: 'https://nudgelyapp.com/logo.png'
            }
        },
        blogPost: posts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            image: post.image,
            datePublished: post.date,
            author: {
                '@type': 'Person',
                name: post.author
            },
            url: `https://nudgelyapp.com/blog/${post.slug}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="min-h-screen pt-16">
                <BlogListClient posts={posts} categories={categories} />
            </main>
            <Footer />
        </>
    );
}
