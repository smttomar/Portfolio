import Reveal from "./Reveal";

export default function GithubContributions() {
    return (
        <section className="mt-16">
            <Reveal>
                <h3 className="text-xl font-semibold mb-8">
                    GitHub Contributions
                </h3>
            </Reveal>

            <div className="overflow-x-auto mt-3">
                <Reveal>
                    <img
                        src="https://ghchart.rshah.org/409ba5/smttomar"
                        alt="GitHub contribution graph"
                        className="rounded border dark:border-neutral-800 border-neutral-400"
                        loading="lazy"
                    />
                </Reveal>
            </div>
        </section>
    );
}
