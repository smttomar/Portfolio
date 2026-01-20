"use client";
import Reveal from "@/components/Reveal";
import { useActiveSection } from "@/components/ActiveSectionProvider";
import { useEffect, useRef } from "react";

const skillsData = {
    Frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "DaisyUI",
    ],
    Backend: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Nodemailer",
    ],
    Database: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Prisma"],
    Tools: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Cloiudinary",
        "Vercel",
        "Netlify",
        "Render",
    ],
    Concept: [
        "Middleware",
        "Authentication & Authorization",
        "Cross-Origin Resource Sharing (CORS)",
        "MVC Architecture",
        "CI/CD(Continuous Integration and Continuous Deployment)",
    ],
    Deployment: [
        "Vercel",
        "Netlify",
        "Render",
        "Cloudflare",
        "Cloud Platforms",
    ],
};

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const { setActive } = useActiveSection();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setActive("skills"),
            { threshold: 0.6 },
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [setActive]);
    return (
        <Reveal>
            <section
                ref={ref}
                id="skills"
                className="min-h-screen snap-start py-20"
            >
                <h2 className="text-3xl font-bold mb-10">Skills</h2>

                <div className="grid gap-5 md:grid-cols-2 max-w-4xl">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className="text-xl font-semibold mb-4">
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm border dark:text-neutral-300 text-neutral-800 border-neutral-700 rounded"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}
