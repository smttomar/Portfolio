"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { useActiveSection } from "@/components/ActiveSectionProvider";
import Image from "next/image";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
    { id: "education", label: "Education" },
];

export default function Navbar() {
    const pathname = usePathname();
    const { active } = useActiveSection();
    const [open, setOpen] = useState(false);

    const scrollToSection = (id: string) => {
        setOpen(false);
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    const linkClass = (id: string) =>
        `relative text-sm transition-colors ${
            active === id
                ? "text-black dark:text-white"
                : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-semibold text-lg">
                    <Image
                        src="/cplogo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        priority
                    />
                </Link>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {pathname === "/" &&
                        sections.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => scrollToSection(s.id)}
                                className={linkClass(s.id)}
                            >
                                {s.label}
                                {/* Animated underline */}
                                {active === s.id && (
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black dark:bg-white rounded" />
                                )}
                            </button>
                        ))}

                    <Link
                        href="/projects"
                        className={`text-sm ${
                            pathname === "/projects"
                                ? "text-black dark:text-white font-semibold"
                                : "text-neutral-500 dark:text-neutral-400"
                        }`}
                    >
                        Projects
                    </Link>

                    <ThemeToggle />
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-xl"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-neutral-800 bg-white dark:bg-black px-4 py-4 flex flex-col gap-4">
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id)}
                            className={`text-left ${
                                active === s.id
                                    ? "text-black dark:text-white font-semibold"
                                    : "text-neutral-500 dark:text-neutral-400"
                            }`}
                        >
                            {s.label}
                        </button>
                    ))}

                    <Link href="/projects" onClick={() => setOpen(false)}>
                        Projects
                    </Link>

                    <ThemeToggle />
                </div>
            )}
        </header>
    );
}
