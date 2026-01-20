"use client";

import { useEffect, useRef } from "react";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import { useActiveSection } from "@/components/ActiveSectionProvider";
import RightPanel from "@/components/RightPanel";

export default function Home() {
    const homeRef = useRef<HTMLElement>(null);
    const { setActive } = useActiveSection();

    // Detect HOME section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive("home");
                }
            },
            { threshold: 0.6 },
        );

        if (homeRef.current) observer.observe(homeRef.current);
        return () => observer.disconnect();
    }, [setActive]);

    return (
        <main className="h-screen overflow-y-scroll lg:snap-y lg:snap-mandatory bg-linear-to-br from-neutral-100 via-neutral-300 text-black to-white dark:from-neutral-900 dark:text-white dark:via-neutral-950 dark:to-black dark:bg-linear-to-br">
            {/* TWO COLUMN LAYOUT */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 lg:grid-cols-[2fr_1fr]">
                {/* LEFT: SCROLLING CONTENT */}
                <div>
                    {/* HOME / HERO */}
                    <section
                        ref={homeRef}
                        id="home"
                        className="min-h-screen lg:snap-start flex flex-col justify-center gap-6"
                    >
                        <h1 className="text-4xl font-bold">
                            Hi, I’m Chandra Pratap Singh 👋
                        </h1>

                        <p className="max-w-xl text-neutral-600 dark:text-neutral-400">
                            Full-Stack Developer specializing in MERN and
                            Next.js, passionate about building scalable, secure,
                            and production-ready web applications.
                        </p>
                    </section>

                    {/* OTHER SECTIONS */}
                    <About />
                    <Skills />
                    <Contact />
                    <Education />
                </div>

                {/* RIGHT: STICKY VISUAL PANEL */}
                <RightPanel />
            </div>
        </main>
    );
}
