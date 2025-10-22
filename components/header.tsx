import Logo from '@/components/header/logo';
import ThemeToggle from '@/components/header/theme-toggle';
import Link from 'next/link';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />

                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="#how-it-works"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            How It Works
                            <div className="absolute left-[50%] group-hover:left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 bg-base-content/90"></div>
                        </Link>
                        <Link
                            href="#benefits"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Benefits
                        </Link>
                        <Link
                            href="#waitlist"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Join Waitlist
                        </Link>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
