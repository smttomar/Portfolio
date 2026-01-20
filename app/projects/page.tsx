import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-10">Projects</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
