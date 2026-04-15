"use client";

import { useEffect, useRef } from "react";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import { useActiveSection } from "@/components/ActiveSectionProvider";
import RightPanel from "@/components/RightPanel";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

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
        <main className="h-full dark:bg-zinc-900 bg-zinc-200 text-zinc-950 dark:text-zinc-100">
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
                        <Reveal>
                            <h1 className="text-3xl font-bold">
                                Hi, I'm Chandra Pratap Singh{" "}
                                <span className="inline-block origin-[70%_70%] wave">
                                    👋
                                </span>
                                <style jsx>{`
                                    .wave {
                                        animation: wave 2s infinite;
                                    }

                                    @keyframes wave {
                                        0% {
                                            transform: rotate(0deg);
                                        }
                                        15% {
                                            transform: rotate(14deg);
                                        }
                                        30% {
                                            transform: rotate(-8deg);
                                        }
                                        40% {
                                            transform: rotate(14deg);
                                        }
                                        50% {
                                            transform: rotate(-4deg);
                                        }
                                        60% {
                                            transform: rotate(10deg);
                                        }
                                        70% {
                                            transform: rotate(0deg);
                                        }
                                        100% {
                                            transform: rotate(0deg);
                                        }
                                    }
                                `}</style>
                            </h1>
                        </Reveal>

                        <Reveal>
                            <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
                                Full-Stack Developer specializing in MERN and
                                Next.js, passionate about building scalable,
                                secure, and production-ready web applications.
                            </p>
                        </Reveal>
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
            <Footer />
        </main>
    );
}
