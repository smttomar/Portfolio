"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
    const hasImage = Boolean(project.image);

    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="group flex h-fit flex-col overflow-hidden rounded-xl border dark:border-neutral-400 border-neutral-800 dark:bg-black bg-white"
        >
            {/* IMAGE (ONLY IF AVAILABLE) */}
            {hasImage && (
                <div className="relative">
                    <Image
                        src={project.image!}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="h-48 w-full object-cover"
                    />
                    {/* IMAGE CTA */}
                    <Link
                        href={`/projects/${project.slug}`}
                        className="absolute inset-0 flex items-center justify-center dark:bg-black/60 bg-white/60 text-sm dark:text-white text-black opacity-0 transition group-hover:opacity-100"
                    >
                        View Project →
                    </Link>
                </div>
            )}

            {/* CONTENT */}
            <div className="relative flex flex-1 flex-col p-6">
                {/* BACKGROUND GLOW (TEXT-ONLY) */}
                {!hasImage && (
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                        <div className="absolute inset-0 bg-linear-to-br dark:from-white/5 from-white/40 via-transparent to-transparent" />
                    </div>
                )}

                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>

                <p className="mb-4 text-sm dark:text-neutral-400 text-neutral-800">
                    {project.description}
                </p>

                {/* TEXT-ONLY CTA */}
                {!hasImage && (
                    <Link
                        href={`/projects/${project.slug}`}
                        className="mt-auto inline-flex items-center gap-1 text-sm underline underline-offset-4 transition group-hover:translate-x-1"
                    >
                        View Details →
                    </Link>
                )}
            </div>
        </motion.article>
    );
}
