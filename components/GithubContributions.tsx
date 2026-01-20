export default function GithubContributions() {
    return (
        <section className="mt-16">
            <h3 className="text-xl font-semibold mb-4">GitHub Contributions</h3>

            <div className="overflow-x-auto">
                <img
                    src="https://ghchart.rshah.org/409ba5/smttomar"
                    alt="GitHub contribution graph"
                    className="rounded border dark:border-neutral-800 border-neutral-400"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
