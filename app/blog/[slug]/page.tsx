import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { format } from 'date-fns';

import { getAllPosts, getCompiledPost } from '@/lib/mdx';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TableOfContents } from '@/components/table-of-contents';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug
    }));
}

export async function generateMetadata({
    params
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getCompiledPost(slug);

    if (!post) {
        return {
            title: 'Post Not Found - Nudgely'
        };
    }

    return {
        title: `${post.title} - Nudgely Blog`,
        description: post.metaDescription,
        keywords: post.keywords,
        authors: [{ name: post.author }],
        alternates: {
            canonical: `https://nudgelyapp.com/blog/${post.slug}`
        },
        openGraph: {
            title: post.ogTitle,
            description: post.ogDescription,
            url: `https://nudgelyapp.com/blog/${post.slug}`,
            siteName: 'Nudgely',
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title
                }
            ],
            locale: 'en_US',
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.keywords
        },
        twitter: {
            card: 'summary_large_image',
            title: post.ogTitle,
            description: post.ogDescription,
            images: [post.image],
            creator: '@nudgelyco'
        }
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getCompiledPost(slug);

    if (!post) {
        notFound();
    }

    const allPosts = await getAllPosts();
    const relatedPosts = allPosts
        .filter((p) => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Person',
            name: post.author
        },
        publisher: {
            '@type': 'Organization',
            name: 'Nudgely',
            logo: {
                '@type': 'ImageObject',
                url: 'https://nudgelyapp.com/logo.png'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://nudgelyapp.com/blog/${post.slug}`
        },
        keywords: post.keywords.join(', '),
        articleSection: post.category,
        wordCount: post.body.toString().split(/\s+/).length
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="min-h-screen pt-16">
                <article className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Blog
                            </Link>

                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
                                {/* Main Content */}
                                <div>
                                    <div className="mb-8">
                                        <Badge
                                            variant="secondary"
                                            className="mb-4"
                                        >
                                            {post.category}
                                        </Badge>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                                            {post.title}
                                        </h1>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                            <span className="inline-flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                {format(
                                                    new Date(post.date),
                                                    'MMMM d, yyyy'
                                                )}
                                            </span>
                                            <span className="inline-flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                {post.readingTime}
                                            </span>
                                            <span className="inline-flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                {post.author}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
                                        <Image
                                            src={
                                                post.image || '/placeholder.svg'
                                            }
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:scroll-mt-20 prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-primary prose-code:text-sm prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-img:rounded-lg">
                                        {post.body}
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-border">
                                        <div className="bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-lg p-8 text-center border border-emerald-200 dark:border-emerald-800">
                                            <h3 className="text-2xl font-bold mb-4">
                                                Ready to transform your team's
                                                alignment?
                                            </h3>
                                            <p className="text-muted-foreground mb-6">
                                                Join our waitlist to be among
                                                the first to experience Nudgely.
                                            </p>
                                            <Button
                                                asChild
                                                size="lg"
                                                className="bg-emerald-600 hover:bg-emerald-700"
                                            >
                                                <Link href="/#waitlist">
                                                    Join the Waitlist
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar with Table of Contents */}
                                <aside className="hidden lg:block">
                                    <div className="sticky top-24">
                                        <TableOfContents
                                            headings={post.headings}
                                        />
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="py-16 bg-muted/20 border-t border-border">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-bold mb-8">
                                    Related Articles
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={`/blog/${relatedPost.slug}`}
                                            className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                                        >
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={
                                                        relatedPost.image ||
                                                        '/placeholder.svg'
                                                    }
                                                    alt={relatedPost.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <Badge
                                                    variant="secondary"
                                                    className="mb-3"
                                                >
                                                    {relatedPost.category}
                                                </Badge>
                                                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors text-balance line-clamp-2">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                    {relatedPost.description}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
