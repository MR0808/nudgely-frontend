import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/singlelogo.png"
                            alt="Nudgely"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <span className="text-sm text-muted-foreground">
                            © 2025 Nudgely. All rights reserved. Made with focus
                            in Melbourne!
                        </span>
                    </div>

                    <nav className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
