"use client";
import Reveal from "@/components/Reveal";
import { useActiveSection } from "@/components/ActiveSectionProvider";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
    const ref = useRef<HTMLDivElement>(null);
    const { setActive } = useActiveSection();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setActive("contact"),
            { threshold: 0.6 },
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [setActive]);

    return (
        <Reveal>
            <section
                ref={ref}
                id="contact"
                className="min-h-screen snap-start py-20"
            >
                <h2 className="text-3xl font-bold mb-6">Contact</h2>

                <p className="text-neutral-700 dark:text-neutral-400 mb-5 max-w-xl">
                    I’m currently open to internship and job opportunities. Feel
                    free to reach out if you’d like to connect or collaborate.
                </p>
                <p className="text-sm text-neutral-500 mb-5">
                    🟢 Available for new opportunities
                </p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setLoading(true);

                        // Mailto fallback (no backend)
                        const form = e.currentTarget;
                        const name = (
                            form.elements.namedItem("name") as HTMLInputElement
                        ).value;
                        const email = (
                            form.elements.namedItem("email") as HTMLInputElement
                        ).value;
                        const message = (
                            form.elements.namedItem(
                                "message",
                            ) as HTMLTextAreaElement
                        ).value;

                        window.location.href = `mailto:sumitsnghtmr@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
                            `Name: ${name}\nEmail: ${email}\n\n${message}`,
                        )}`;

                        setLoading(false);
                        form.reset();
                    }}
                    className="max-w-xl space-y-6"
                >
                    {/* Name */}
                    <div>
                        <label className="block text-sm mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full rounded-md border dark:border-neutral-800 border-neutral-400 dark:bg-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-black"
                            placeholder="Your name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full rounded-md border dark:border-neutral-800 border-neutral-400 dark:bg-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-black"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm mb-2">Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            className="w-full rounded-md border dark:border-neutral-800 border-neutral-400 dark:bg-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-black"
                            placeholder="Tell me about your idea, project, or role..."
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 rounded-md border dark:border-white border-black px-6 py-3 text-sm dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white transition disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message →"}
                    </button>
                </form>
            </section>
        </Reveal>
    );
}
