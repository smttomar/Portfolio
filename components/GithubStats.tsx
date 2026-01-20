"use client";

import { useEffect, useState } from "react";

type GithubData = {
    public_repos: number;
    followers: number;
    following: number;
};

export default function GithubStats() {
    const [data, setData] = useState<GithubData | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/users/smttomar")
            .then((res) => res.json())
            .then(setData);
    }, []);

    if (!data) return null;

    return (
        <div className="flex gap-6 mt-8">
            <Stat label="Repos" value={data.public_repos} />
            <Stat label="Followers" value={data.followers} />
            <Stat label="Following" value={data.following} />
        </div>
    );
}

function Stat({ label, value }: { label: string; value: number }) {
    return (
        <div className="text-center">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-neutral-500">{label}</p>
        </div>
    );
}
