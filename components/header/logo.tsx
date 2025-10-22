'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTheme } from '@/context/ThemeContext';

export default function Logo() {
    const { isDarkMode } = useTheme();

    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/logo.png"
                alt="Nudgely"
                width={120}
                height={32}
                className={`h-8 w-auto transition-all duration-5000 ease-in-out ${
                    isDarkMode ? 'hidden' : 'visible'
                }`}
            />
            <Image
                src="/logowhite.png"
                alt="Nudgely"
                width={120}
                height={32}
                className={`h-8 w-auto transition-all duration-5000 ease-in-out ${
                    isDarkMode ? 'visible' : 'hidden'
                }`}
            />
        </Link>
    );
}
