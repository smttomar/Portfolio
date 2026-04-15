"use client";

import { useActiveSection } from "@/components/ActiveSectionProvider";
import {
    motion,
    AnimatePresence,
    useReducedMotion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import {
    SiNextdotjs,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiJavascript,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiVercel,
    SiPrisma,
    SiShadcnui,
} from "react-icons/si";

import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GrCertificate } from "react-icons/gr";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Icon } from "lucide-react";

export default function RightPanel() {
    const { active } = useActiveSection();
    const prefersReducedMotion = useReducedMotion();
    const { theme } = useTheme();

    /* ---------- Mouse parallax ---------- */
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-40, 40], [6, -6]);
    const rotateY = useTransform(x, [-40, 40], [-6, 6]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = (
            e.currentTarget as HTMLDivElement
        ).getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) / 8);
        y.set((e.clientY - rect.top - rect.height / 2) / 8);
    };

    const resetMouse = () => {
        x.set(0);
        y.set(0);
    };

    /* ---------- Scroll progress ---------- */
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handler = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            setProgress((scrollTop / height) * 100);
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const accent = theme === "dark" ? "#ffffff" : "#000000";

    return (
        <>
            {/* DESKTOP PANEL */}
            <aside
                className="hidden lg:flex sticky top-24 h-[calc(100vh-6rem)] items-center justify-center"
                aria-label="Contextual information panel"
            >
                <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={resetMouse}
                    style={prefersReducedMotion ? {} : { rotateX, rotateY }}
                    className="relative w-full max-w-sm rounded-xl border-neutral-800 text-black dark:text-white dark:bg-zinc-900 bg-zinc-200 p-6 shadow-lg dark:shadow-zinc-950 shadow-zinc-400"
                    tabIndex={0}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            role="region"
                            aria-live="polite"
                            initial={
                                prefersReducedMotion
                                    ? undefined
                                    : { opacity: 0, y: 12 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            exit={
                                prefersReducedMotion
                                    ? undefined
                                    : { opacity: 0, y: -12 }
                            }
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center gap-4 pt-4 text-center"
                        >
                            {active === "home" && <HomeVisual color={accent} />}
                            {active === "about" && (
                                <AboutVisual color={accent} />
                            )}
                            {active === "skills" && (
                                <SkillsVisual color={accent} />
                            )}
                            {active === "education" && (
                                <EducationVisual color={accent} />
                            )}
                            {active === "contact" && (
                                <ContactVisual color={accent} />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </aside>

            {/* MOBILE BOTTOM SHEET */}
            <MobileBottomSheet />
        </>
    );
}

//////////////////// VISUALS ////////////////////

function HomeVisual({ color }: { color: string }) {
    return (
        <>
            <img
                src="/profile.png"
                alt="Sumit Tomar"
                className="h-32 w-32 rounded-full border border-neutral-700 object-cover"
            />
            <h3 className="text-lg font-semibold">Chandra Pratap Singh</h3>
            <p className="text-sm dark:text-neutral-400 text-neutral-700 text-center">
                Full-Stack Developer · Next.js · React · MERN
            </p>
        </>
    );
}

function AboutVisual({ color }: { color: string }) {
    const socials = [
        {
            name: "GitHub",
            href: "https://github.com/smttomar",
            icon: FaGithub,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/cptomar/",
            icon: FaLinkedin,
        },
        {
            name: "Resume",
            href: "/resume.pdf",
            icon: FaFilePdf,
        },
    ];
    return (
        <motion.div
            layoutId="profile-image"
            className="w-full rounded-xl border border-neutral-800 p-4"
        >
            <h4 className="font-semibold mb-2">About Me</h4>
            <p className="text-sm dark:text-neutral-400 text-neutral-700 leading-relaxed">
                Full-Stack Developer specializing in MERN and Next.js,
                passionate about building scalable, secure, and production-ready
                web applications.
            </p>
            <div className="flex justify-center mt-5 items-center gap-4">
                {socials.map(({ name, href, icon: Icon }) => (
                    <a
                        key={name}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                            href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                        aria-label={name}
                        className="dark:text-neutral-400 text-neutral-800 transition-transform hover:scale-110 dark:hover:text-white hover:text-black"
                    >
                        <Tooltip>
                            <TooltipTrigger className="hover:cursor-pointer">
                                <Icon size={25} />
                            </TooltipTrigger>
                            <TooltipContent>{name}</TooltipContent>
                        </Tooltip>
                    </a>
                ))}
            </div>
        </motion.div>
    );
}

function SkillsVisual({ color }: { color: string }) {
    const skills = [
        {
            icon: <SiJavascript />,
            label: "JavaScript",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            icon: <SiNextdotjs />,
            label: "Next.js",
            url: "https://nextjs.org/docs/",
        },
        {
            icon: <SiNodedotjs />,
            label: "Node.js",
            url: "https://nodejs.org/docs/latest/api/",
        },
        { icon: <SiReact />, label: "React", url: "https://react.dev/learn" },
        {
            icon: <SiExpress />,
            label: "Express",
            url: "https://expressjs.com/en/starter/installing.html",
        },
        {
            icon: <SiPostgresql />,
            label: "PostgreSQL",
            url: "https://www.postgresql.org/docs/",
        },
        {
            icon: <SiShadcnui />,
            label: "Shadcn UI",
            url: "https://ui.shadcn.com/docs",
        },
        {
            icon: <SiTypescript />,
            label: "TypeScript",
            url: "https://www.typescriptlang.org/docs",
        },
        {
            icon: <SiTailwindcss />,
            label: "Tailwind",
            url: "https://tailwindcss.com/docs",
        },
        {
            icon: <SiMongodb />,
            label: "MongoDB",
            url: "https://www.mongodb.com/docs/",
        },
        { icon: <SiVercel />, label: "Vercel", url: "https://vercel.com/docs" },
        {
            icon: <SiPrisma />,
            label: "Prisma",
            url: "https://www.prisma.io/docs",
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-4">
            {skills.map((s) => (
                <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} official website`}
                    className="flex flex-col items-center gap-2 rounded-lg border p-3 
                 text-neutral-700 dark:text-neutral-400 border-neutral-700
                 hover:bg-black hover:text-white
                 dark:hover:bg-white dark:hover:text-black
                 transition focus:outline-none hover:scale-110"
                >
                    <span className="text-xl">{s.icon}</span>
                    <span className="text-xs">{s.label}</span>
                </a>
            ))}
        </div>
    );
}

function EducationVisual({ color }: { color: string }) {
    return (
        <div className="w-full rounded-lg border border-neutral-800 p-4">
            <h4 className="font-semibold mb-2">Education</h4>
            <p className="text-sm dark:text-neutral-400 text-neutral-700">
                Bachelor of Computer Applications
            </p>
            <p className="text-xs dark:text-neutral-500 text-neutral-800 mt-1">
                Focused on software development & problem solving
            </p>
            <div className="flex justify-center mt-5 items-center gap-4">
                <a
                    href={"/certificate.pdf"}
                    target={"_blank"}
                    className="dark:text-neutral-400 text-neutral-800 transition-transform hover:scale-110 dark:hover:text-white hover:text-black"
                >
                    <Tooltip>
                        <TooltipTrigger className="hover:cursor-pointer">
                            <GrCertificate size={25} />
                        </TooltipTrigger>
                        <TooltipContent>Certificates</TooltipContent>
                    </Tooltip>
                </a>
            </div>
        </div>
    );
}

function ContactVisual({ color }: { color: string }) {
    return (
        <div className="w-full text-center rounded-lg border border-neutral-800 p-4">
            <h4 className="font-semibold mb-2">Let’s Work Together</h4>
            <p className="text-sm dark:text-neutral-400 text-neutral-700 mb-4">
                Open to internships, freelance, and collaboration.
            </p>
            <a
                href="mailto:sumitsngtmr@gmail.com"
                target="blank"
                className="inline-block rounded-md border dark:border-white border-black px-4 py-2 text-sm dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white transition  hover:scale-110"
            >
                Contact Me
            </a>
        </div>
    );
}

//////////////////// MOBILE ////////////////////

function MobileBottomSheet() {
    const { active } = useActiveSection();
    return (
        <AnimatePresence>
            <motion.div
                key={active}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed top-18 left-1/2 z-40 w-[50%] -translate-x-1/2 rounded-xl border dark:border-neutral-800 border-neutral-400 p-2 backdrop-blur bg-transparent lg:hidden"
                role="status"
            >
                <p className="text-center text-sm dark:text-neutral-300 text-neutral-600 capitalize">
                    {active}
                </p>
            </motion.div>
        </AnimatePresence>
    );
}
