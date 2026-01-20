"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="relative inline-flex h-8 w-14 items-center rounded-full bg-neutral-300 dark:bg-neutral-700 transition-colors"
        >
            {/* Sliding circle */}
            <span
                className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow transition-transform duration-300 ${
                    isDark ? "translate-x-6" : "translate-x-0"
                }`}
            >
                {/* Icon */}
                {isDark ? <MoonIcon /> : <SunIcon />}
            </span>
        </button>
    );
}

/* Icons */

function SunIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-yellow-500"
            fill="currentColor"
        >
            <circle cx="12" cy="12" r="5" />
            <g stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="23" />
                <line x1="1" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="23" y2="12" />
                <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
                <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
                <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
                <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
            </g>
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-neutral-700"
            fill="currentColor"
        >
            <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z" />
        </svg>
    );
}
