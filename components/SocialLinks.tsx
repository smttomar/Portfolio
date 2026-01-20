"use client";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaXTwitter,
    FaEnvelope,
    FaFilePdf,
} from "react-icons/fa6";

const socials = [
    {
        name: "GitHub",
        href: "https://github.com/smttomar",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/chandra-pratap-singh-13a99a282/",
        icon: FaLinkedin,
    },
    {
        name: "X (Twitter)",
        href: "https://x.com/smttomarr",
        icon: FaXTwitter,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/smttomar",
        icon: FaInstagram,
    },
    {
        name: "Email",
        href: "mailto:sumitsnghtmr@gmail.com",
        icon: FaEnvelope,
    },
    {
        name: "Resume",
        href: "/resume.pdf",
        icon: FaFilePdf,
    },
];

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-4">
            {socials.map(({ name, href, icon: Icon }) => (
                <a
                    key={name}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                        href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                    }
                    aria-label={name}
                    className="dark:text-neutral-400 text-neutral-800 transition-transform hover:scale-110 dark:hover:text-white hover:text-black"
                >
                    <Icon size={20} />
                </a>
            ))}
        </div>
    );
}
