'use client';

import { MoonIcon, SunIcon } from 'lucide-react';

import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="cursor-pointer rounded-4xl"
        >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};

export default ThemeToggle;
