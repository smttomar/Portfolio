import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

/* 1️⃣ Static generation */
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-20">
            <div className="max-w-3xl mx-auto px-4">
                {/* Project Image */}
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={630}
                        priority
                        className="rounded-lg mb-8 border border-neutral-800"
                    />
                )}

                <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

                <p className="text-neutral-800 dark:text-neutral-400 mb-8">
                    {project.description}
                </p>

                <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>

                <div className="flex flex-wrap gap-3 mb-8">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm border border-neutral-700 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-6">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        className="underline"
                    >
                        GitHub
                    </a>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            className="underline"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}
