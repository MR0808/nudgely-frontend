'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Search
} from 'lucide-react';
import { format } from 'date-fns';
import Fuse from 'fuse.js';

import type { BlogPost } from '@/lib/mdx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const POSTS_PER_PAGE = 6;

interface BlogListClientProps {
    posts: BlogPost[];
    categories: string[];
}

export function BlogListClient({ posts, categories }: BlogListClientProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('date-desc');
    const [searchQuery, setSearchQuery] = useState('');

    // Setup Fuse.js for search
    const fuse = useMemo(() => {
        return new Fuse(posts, {
            keys: ['title', 'description', 'keywords', 'author'],
            threshold: 0.3
        });
    }, [posts]);

    // Filter and sort posts
    const filteredAndSortedPosts = useMemo(() => {
        let filtered = [...posts];

        // Search filter
        if (searchQuery.trim()) {
            const searchResults = fuse.search(searchQuery);
            filtered = searchResults.map((result) => result.item);
        }

        // Category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(
                (post) => post.category === selectedCategory
            );
        }

        // Sort posts
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'date-desc':
                    return (
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    );
                case 'date-asc':
                    return (
                        new Date(a.date).getTime() - new Date(b.date).getTime()
                    );
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                case 'title-desc':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [posts, selectedCategory, sortBy, searchQuery, fuse]);

    // Pagination
    const totalPages = Math.ceil(
        filteredAndSortedPosts.length / POSTS_PER_PAGE
    );
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = filteredAndSortedPosts.slice(startIndex, endIndex);

    // Reset to page 1 when filters change
    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        setCurrentPage(1);
    };

    const handleSortChange = (value: string) => {
        setSortBy(value);
        setCurrentPage(1);
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        setCurrentPage(1);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-linear-to-b from-background to-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
                            Insights on Team Alignment & Productivity
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground text-balance">
                            Expert advice, best practices, and insights to help
                            your team stay aligned and productive in the modern
                            workplace.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-8 border-b border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) =>
                                    handleSearchChange(e.target.value)
                                }
                                className="pl-10"
                            />
                        </div>
                    </div>

                    {/* Category Badges */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                variant={
                                    selectedCategory === 'all'
                                        ? 'default'
                                        : 'outline'
                                }
                                className="cursor-pointer"
                                onClick={() => handleCategoryChange('all')}
                            >
                                All
                            </Badge>
                            {categories.map((category) => (
                                <Badge
                                    key={category}
                                    variant={
                                        selectedCategory === category
                                            ? 'default'
                                            : 'outline'
                                    }
                                    className="cursor-pointer"
                                    onClick={() =>
                                        handleCategoryChange(category)
                                    }
                                >
                                    {category}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Sort and Results Count */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            Showing{' '}
                            {filteredAndSortedPosts.length === 0
                                ? 0
                                : startIndex + 1}
                            -{Math.min(endIndex, filteredAndSortedPosts.length)}{' '}
                            of {filteredAndSortedPosts.length} posts
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                                Sort by:
                            </span>
                            <Select
                                value={sortBy}
                                onValueChange={handleSortChange}
                            >
                                <SelectTrigger className="w-[200px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="date-desc">
                                        Date (Newest First)
                                    </SelectItem>
                                    <SelectItem value="date-asc">
                                        Date (Oldest First)
                                    </SelectItem>
                                    <SelectItem value="title-asc">
                                        Title (A-Z)
                                    </SelectItem>
                                    <SelectItem value="title-desc">
                                        Title (Z-A)
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {currentPosts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-lg text-muted-foreground">
                                No posts found matching your filters.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {currentPosts.map((post) => (
                                    <article
                                        key={post.slug}
                                        className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                                    >
                                        <Link href={`/blog/${post.slug}`}>
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={
                                                        post.image ||
                                                        '/placeholder.svg'
                                                    }
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                                    <span className="inline-flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        {format(
                                                            new Date(post.date),
                                                            'MMM d, yyyy'
                                                        )}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        {post.readingTime}
                                                    </span>
                                                </div>
                                                <Badge
                                                    variant="secondary"
                                                    className="mb-3"
                                                >
                                                    {post.category}
                                                </Badge>
                                                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-balance">
                                                    {post.title}
                                                </h2>
                                                <p className="text-muted-foreground mb-4 text-pretty">
                                                    {post.description}
                                                </p>
                                                <div className="flex items-center text-primary font-medium">
                                                    Read more
                                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-12 flex items-center justify-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() =>
                                            setCurrentPage((prev) =>
                                                Math.max(1, prev - 1)
                                            )
                                        }
                                        disabled={currentPage === 1}
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>

                                    <div className="flex items-center gap-1">
                                        {Array.from(
                                            { length: totalPages },
                                            (_, i) => i + 1
                                        ).map((page) => (
                                            <Button
                                                key={page}
                                                variant={
                                                    currentPage === page
                                                        ? 'default'
                                                        : 'outline'
                                                }
                                                size="icon"
                                                onClick={() =>
                                                    setCurrentPage(page)
                                                }
                                            >
                                                {page}
                                            </Button>
                                        ))}
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() =>
                                            setCurrentPage((prev) =>
                                                Math.min(totalPages, prev + 1)
                                            )
                                        }
                                        disabled={currentPage === totalPages}
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Stay Updated
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Join our waitlist to get the latest insights and be
                            the first to try Nudgely.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-700"
                        >
                            <Link href="/#waitlist">Join the Waitlist</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
