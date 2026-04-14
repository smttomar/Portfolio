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
                        src="https://github-readme-activity-graph.vercel.app/graph?username=smttomar&theme=github-compact&area=true&hide_border=true"
                        alt="GitHub contribution graph"
                        className="rounded border dark:border-neutral-800 border-neutral-400"
                        loading="lazy"
                    />
                </Reveal>
            </div>
            <Reveal>
                <h3 className="text-xl font-semibold mb-8 mt-8">
                    Streak Stats
                </h3>
            </Reveal>

            <div className="overflow-x-auto mt-3">
                <Reveal>
                    <img
                        src="https://streak-stats.demolab.com?user=smttomar&theme=tokyonight&hide_border=true"
                        alt="GitHub contribution graph"
                        className="rounded border hidden dark:block dark:border-neutral-800 border-neutral-400"
                        loading="lazy"
                    />
                    <img
                        src="https://streak-stats.demolab.com?user=smttomar&theme=tokyodayt&hide_border=true"
                        alt="GitHub contribution graph"
                        className="rounded border dark:hidden dark:border-neutral-800 border-neutral-400"
                        loading="lazy"
                    />
                </Reveal>
            </div>
        </section>
    );
}
