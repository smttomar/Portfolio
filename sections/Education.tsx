"use client";
import Reveal from "@/components/Reveal";
import { useActiveSection } from "@/components/ActiveSectionProvider";
import { useEffect, useRef } from "react";

export default function Education() {
    const ref = useRef<HTMLDivElement>(null);
    const { setActive } = useActiveSection();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setActive("education"),
            { threshold: 0.6 },
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [setActive]);

    return (
        <Reveal>
            <section
                ref={ref}
                id="education"
                className="min-h-screen snap-start py-20"
            >
                <h2 className="text-3xl font-bold mb-10">Education</h2>

                <div className="relative border-l border-neutral-700 pl-6 max-w-2xl">
                    <div className="mb-10">
                        <span className="absolute -left-1.75 top-1 w-3 h-3 bg-neutral-700 rounded-full" />

                        <h3 className="text-xl font-semibold">
                            Bachelor of Computer Applications (BCA)
                        </h3>

                        <p className="text-neutral-700 dark:text-neutral-400">
                            Babu Banarasi Das University, Lucknow
                        </p>

                        <p className="text-sm text-neutral-500">2023 – 2026</p>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
