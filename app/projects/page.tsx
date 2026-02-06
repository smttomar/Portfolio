import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-10">
            <div className="max-w-6xl mx-auto px-4">
                <Reveal>
                    <h1 className="text-4xl text-center font-bold">Projects</h1>
                </Reveal>

                <Reveal>
                    <div className="grid grid-cols-1 mt-10 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>
                </Reveal>
            </div>
        </main>
    );
}
