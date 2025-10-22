import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-background to-muted/20 px-4">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* 404 Number */}
                <div className="relative">
                    <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center">
                            <Search className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto text-pretty">
                        Oops! The page you're looking for seems to have wandered
                        off. Let's get you back on track.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Button
                        asChild
                        size="lg"
                        className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground min-w-[160px]"
                    >
                        <Link href="/">
                            <Home className="w-4 h-4 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                    {/* <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="min-w-[160px] bg-transparent"
                    >
                        <Link href="/blog">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Visit Blog
                        </Link>
                    </Button> */}
                </div>

                {/* Helpful Links */}
                <div className="pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">
                        Or try one of these popular pages:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            href="/about"
                            className="text-sm text-primary hover:underline underline-offset-4"
                        >
                            About Us
                        </Link>
                        <span className="text-muted-foreground">|</span>
                        <Link
                            href="/contact"
                            className="text-sm text-primary hover:underline underline-offset-4"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
