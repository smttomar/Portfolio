import SocialLinks from "./SocialLinks";
export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-800 dark:text-neutral-400">
                <p>
                    © {new Date().getFullYear()} C. P. Singh. All rights
                    reserved.
                </p>
                <SocialLinks />
            </div>
        </footer>
    );
}
