import type React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Link from 'next/link';
import 'server-only';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    published: boolean;
    author: string;
    category: string;
    image: string;
    keywords: string[];
    metaDescription: string;
    ogTitle: string;
    ogDescription: string;
    content: string;
    readingTime: string;
    readingTimeMinutes: number;
    headings: Array<{ level: number; text: string; slug: string }>;
}

export interface CompiledBlogPost extends BlogPost {
    body: React.ReactElement;
}

// Custom components for MDX
const components = {
    h1: (props: any) => (
        <h1 className="text-4xl font-bold mt-8 mb-4 scroll-mt-20" {...props} />
    ),
    h2: (props: any) => (
        <h2 className="text-3xl font-bold mt-8 mb-4 scroll-mt-20" {...props} />
    ),
    h3: (props: any) => (
        <h3 className="text-2xl font-bold mt-6 mb-3 scroll-mt-20" {...props} />
    ),
    h4: (props: any) => (
        <h4 className="text-xl font-bold mt-6 mb-3 scroll-mt-20" {...props} />
    ),
    h5: (props: any) => (
        <h5 className="text-lg font-bold mt-4 mb-2 scroll-mt-20" {...props} />
    ),
    h6: (props: any) => (
        <h6 className="text-base font-bold mt-4 mb-2 scroll-mt-20" {...props} />
    ),
    p: (props: any) => (
        <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
    ),
    a: (props: any) => (
        <Link
            href={props.href || '#'}
            className="text-primary no-underline hover:underline font-medium"
            {...props}
        />
    ),
    ul: (props: any) => (
        <ul
            className="list-disc list-inside mb-4 space-y-2 text-muted-foreground"
            {...props}
        />
    ),
    ol: (props: any) => (
        <ol
            className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground"
            {...props}
        />
    ),
    li: (props: any) => <li className="ml-4" {...props} />,
    blockquote: (props: any) => (
        <blockquote
            className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground"
            {...props}
        />
    ),
    code: (props: any) => {
        // Inline code
        if (!props.className) {
            return (
                <code
                    className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono text-foreground"
                    {...props}
                />
            );
        }
        // Code block (handled by rehype-pretty-code)
        return <code {...props} />;
    },
    pre: (props: any) => (
        <pre
            className="bg-muted border border-border rounded-lg p-4 overflow-x-auto my-6"
            {...props}
        />
    ),
    img: (props: any) => (
        <Image
            {...props}
            width={800}
            height={600}
            className="rounded-lg my-8 w-full h-auto"
            alt={props.alt || ''}
        />
    ),
    Image: (props: any) => <Image {...props} className="rounded-lg my-8" />,
    strong: (props: any) => (
        <strong className="font-semibold text-foreground" {...props} />
    ),
    em: (props: any) => <em className="italic" {...props} />,
    hr: (props: any) => <hr className="my-8 border-border" {...props} />,
    table: (props: any) => (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-border" {...props} />
        </div>
    ),
    thead: (props: any) => <thead className="bg-muted" {...props} />,
    tbody: (props: any) => (
        <tbody className="divide-y divide-border" {...props} />
    ),
    tr: (props: any) => <tr {...props} />,
    th: (props: any) => (
        <th className="px-4 py-2 text-left text-sm font-semibold" {...props} />
    ),
    td: (props: any) => (
        <td className="px-4 py-2 text-sm text-muted-foreground" {...props} />
    )
};

export async function getAllPosts(): Promise<BlogPost[]> {
    const files = fs.readdirSync(contentDirectory);

    const posts = await Promise.all(
        files
            .filter((file) => file.endsWith('.mdx'))
            .map(async (file) => {
                const slug = file.replace('.mdx', '');
                const post = await getPostBySlug(slug);
                return post;
            })
    );

    return posts
        .filter((post): post is BlogPost => post !== null && post.published)
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const filePath = path.join(contentDirectory, `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        // Calculate reading time
        const stats = readingTime(content);

        // Extract headings for table of contents
        const headings = extractHeadings(content);

        return {
            slug,
            title: data.title,
            description: data.description,
            date: data.date,
            published: data.published ?? true,
            author: data.author,
            category: data.category,
            image: data.image,
            keywords: data.keywords || [],
            metaDescription: data.metaDescription || data.description,
            ogTitle: data.ogTitle || data.title,
            ogDescription: data.ogDescription || data.description,
            content,
            readingTime: stats.text,
            readingTimeMinutes: Math.ceil(stats.minutes),
            headings
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

export async function getCompiledPost(
    slug: string
): Promise<CompiledBlogPost | null> {
    const post = await getPostBySlug(slug);
    if (!post) return null;

    const { content } = await compileMDX({
        source: post.content,
        components,
        options: {
            parseFrontmatter: false,
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                    rehypeSlug,
                    [
                        rehypePrettyCode,
                        {
                            theme: 'github-dark',
                            keepBackground: false
                        }
                    ],
                    [
                        rehypeAutolinkHeadings,
                        {
                            behavior: 'wrap',
                            properties: {
                                className: ['anchor']
                            }
                        }
                    ]
                ]
            }
        }
    });

    return {
        ...post,
        body: content
    };
}

function extractHeadings(
    content: string
): Array<{ level: number; text: string; slug: string }> {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const headings: Array<{ level: number; text: string; slug: string }> = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

        headings.push({ level, text, slug });
    }

    return headings;
}

export function getAllCategories(posts: BlogPost[]): string[] {
    const categories = new Set(posts.map((post) => post.category));
    return Array.from(categories).sort();
}
