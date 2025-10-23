'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetDescription,
    SheetTitle
} from '@/components/ui/sheet';
import { ChildProps } from '@/types/header';

const Navbar = ({ isOpen, setIsOpen, navItems, pageLinks }: ChildProps) => {
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();
    const router = useRouter();
    const isHomePage = pathname === '/';

    useEffect(() => {
        if (!isHomePage) return;

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
    }, [isHomePage]);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            // If on contact page, navigate to homepage with hash
            if (!isHomePage) {
                router.push(`/${href}`);
            } else {
                // If on homepage, scroll to section
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
                {pageLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-sm transition-colors relative group ${
                            pathname === link.href
                                ? 'text-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        {link.name}
                        <span
                            className={`absolute -bottom-1 left-1/2 h-0.5 bg-primary transition-all duration-300 ease-out ${
                                pathname === link.href
                                    ? 'w-full -translate-x-1/2'
                                    : 'w-0 group-hover:w-full -translate-x-1/2'
                            }`}
                        />
                    </Link>
                ))}
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
                        {pageLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg py-2 px-4 rounded-md transition-colors ${
                                    pathname === link.href
                                        ? 'bg-accent text-accent-foreground'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    );
};
export default Navbar;
