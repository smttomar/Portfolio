import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ActiveSectionProvider } from "@/components/ActiveSectionProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Chandra Pratap Singh | Full Stack Developer",
        template: "%s | Chandra Pratap Singh",
    },
    description:
        "Portfolio of Chandra Pratap Singh, a Computer Applications student and full stack developer specializing in Next.js, TypeScript, and modern web technologies.",
    verification: {
        google: "Hv2FDirXAnKWYQuYnX7sO9kelR-WgyjucKSRi1x6J_Q",
    },
    keywords: [
        "Chandra Pratap Singh",
        "Full Stack Developer",
        "Next.js Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
        "JavaScript",
        "MERN Stack",
        "TypeScript",
        "React",
        "Portfolio",
    ],
    authors: [{ name: "Chandra Pratap Singh" }],
    creator: "Chandra Pratap Singh",
    openGraph: {
        title: "Chandra Pratap Singh | Full Stack Developer",
        description:
            "Explore projects, skills, and experience of Chandra Pratap Singh, a full stack developer focused on modern web development.",
        url: "https://portfolio-sand-beta-23.vercel.app/",
        siteName: "Chandra Pratap Singh Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Chandra Pratap Singh Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Chandra Pratap Singh | Full Stack Developer",
        description:
            "Portfolio of Chandra Pratap Singh showcasing projects, skills, and experience.",
        images: ["/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={true}
                >
                    <ActiveSectionProvider>
                        <Navbar />
                        {children}
                    </ActiveSectionProvider>
                    <Footer />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
