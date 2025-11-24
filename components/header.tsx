'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

import Logo from '@/components/header/logo';
import Navbar from '@/components/header/navbar';
import ThemeToggle from '@/components/header/theme-toggle';
import { Button } from '@/components/ui/button';

const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQs', href: '#faq' }
];

const pageLinks = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <Navbar
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        navItems={navItems}
                        pageLinks={pageLinks}
                    />
                    <div className="flex flex-row space-x-2">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
