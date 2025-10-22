'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetDescription,
    SheetTitle
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ChildProps } from '@/types/header';

const Navbar = ({ isOpen, setIsOpen, navItems }: ChildProps) => {
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();
    const isContactPage = pathname === '/contact';

    useEffect(() => {
        if (isContactPage) return;

        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.replace('#', ''));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(`#${section}`);
                        return;
                    }
                }
            }
            setActiveSection('');
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isContactPage]);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.getElementById(href.replace('#', ''));
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            setIsOpen(false);
        }
    };

    return (
        <>
            <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`text-sm text-muted-foreground hover:text-foreground transition-colors relative group ${
                            activeSection === item.href ? 'text-foreground' : ''
                        }`}
                    >
                        {item.name}
                        <span
                            className={`absolute -bottom-1 left-1/2 h-0.5 bg-primary transition-all duration-300 ease-out ${
                                activeSection === item.href
                                    ? 'w-full -translate-x-1/2'
                                    : 'w-0 group-hover:w-full -translate-x-1/2'
                            }`}
                        />
                    </a>
                ))}
                <Link
                    href="/contact"
                    className={`text-sm transition-colors relative group ${
                        isContactPage
                            ? 'text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    Contact
                    <span
                        className={`absolute -bottom-1 left-1/2 h-0.5 bg-primary transition-all duration-300 ease-out ${
                            isContactPage
                                ? 'w-full -translate-x-1/2'
                                : 'w-0 group-hover:w-full -translate-x-1/2'
                        }`}
                    />
                </Link>
            </nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader className="sr-only">
                        <SheetTitle>Mobile Menu</SheetTitle>
                        <SheetDescription>Mobile Menu</SheetDescription>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4 mt-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`text-lg py-2 px-4 rounded-md transition-colors ${
                                    activeSection === item.href
                                        ? 'bg-accent text-accent-foreground'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className={`text-lg py-2 px-4 rounded-md transition-colors ${
                                isContactPage
                                    ? 'bg-accent text-accent-foreground'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                            }`}
                        >
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    );
};
export default Navbar;
