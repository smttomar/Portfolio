"use client";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";
export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-800 dark:text-neutral-400">
                <Reveal>
                    <p>
                        © {new Date().getFullYear()} Chandra Pratap Singh. All
                        rights reserved.
                    </p>
                </Reveal>
                <SocialLinks />
            </div>
        </footer>
    );
}
