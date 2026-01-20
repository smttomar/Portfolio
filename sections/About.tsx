"use client";
import Reveal from "@/components/Reveal";
import { useActiveSection } from "@/components/ActiveSectionProvider";
import { useEffect, useRef } from "react";
import GithubStats from "@/components/GithubStats";
import GithubContributions from "@/components/GithubContributions";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const { setActive } = useActiveSection();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setActive("about"),
            { threshold: 0.6 },
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [setActive]);

    return (
        <Reveal>
            <section
                ref={ref}
                id="about"
                className="min-h-screen snap-start py-20"
            >
                <h2 className="text-3xl font-bold mb-6">About Me</h2>

                <p className="max-w-2xl text-neutral-700 dark:text-neutral-400 leading-relaxed">
                    I am a Full-Stack Developer experienced in building
                    real-world web applications using the MERN stack and
                    Next.js. I work across both frontend and backend, creating
                    responsive user interfaces, developing secure REST APIs, and
                    managing databases. I have built projects including a
                    freelance marketplace, authentication systems, SaaS-style
                    platforms, and backend-focused applications. My work
                    involves authentication and authorization, server-side
                    rendering, database design, and cloud deployment. I focus on
                    writing clean, maintainable code and continuously improving
                    my skills through hands-on development.
                </p>
                <GithubStats />
                <GithubContributions />
            </section>
        </Reveal>
    );
}
