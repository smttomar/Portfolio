export type Project = {
    slug: string;
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
    image?: string;
};

export const projects: Project[] = [
    {
        slug: "ai-powered-code-editor",
        title: "AI-Powered Code Editor",
        description:
            "A modern AI-powered code editor built with Next.js that allows users to write, run, and enhance code directly in the browser with real-time AI assistance, multi-file support, live preview, and integrated terminal execution environment.",
        techStack: [
            " Next.js",
            "Monaco Editor",
            "Prisma",
            "WebContainer API",
            "Mongodb",
            "TypeScript",
            "Tailwind CSS",
            "Vercel",
        ],
        githubUrl: "https://github.com/smttomar/AI-Powered-Code-Editor",
        liveUrl: "https://ai-powered-code-editor.vercel.app/",
        image: "/projects/image.png",
    },
    {
        slug: "portfolio",
        title: "Portfolio",
        description:
            "A modern, high-performance, fully responsive developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS, showcasing my projects, skills, and experience with a strong focus on performance, accessibility, and SEO.",
        techStack: [" Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        githubUrl: "https://github.com/smttomar/Portfolio",
        liveUrl: "https://portfolio-sand-beta-23.vercel.app/",
        image: "/projects/portfolio.png",
    },
    {
        slug: "gigflow",
        title: "GigFlow – Full Stack Freelance Marketplace",
        description:
            "GigFlow is a mini freelance marketplace platform where client can post jobs (gigs), freelancer bid on jobs, and client hire freelancers.",
        techStack: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "MongoDB",
            "Node.js",
            "Express.js",
            "JWT(JSON Web Tokens)",
            "REST APIs",
            "Vercel",
        ],
        githubUrl: "https://github.com/smttomar/gigflow",
        liveUrl: "https://gig-flow-two-sandy.vercel.app",
        image: "/projects/gigflow.png",
    },
    {
        slug: "cloudinary-saas",
        title: "Video Compression & Management Platform",
        description:
            "A full-stack SaaS-style video compression and management platform built with Next.js 16, Clerk Auth, Prisma, PostgreSQL, Cloudinary, and Vercel.",
        techStack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "DaisyUI",
            "Node.js",
            "API routes",
            "Cloudinary",
            "PostgreSQL",
            "Prisma",
            "Clerk",
            "Vercel",
        ],
        githubUrl: "https://github.com/smttomar/SAAS-App",
        liveUrl: "https://saas-app-gamma-ten.vercel.app/home",
        image: "/projects/cloudinary.png",
    },
    {
        slug: "full-stack-drive",
        title: "Full Stack Drive (File Management System)",
        description:
            "A full-stack Google Drive-like file management system built with React, Node.js, MongoDB, Cloudinary, and Vercel, featuring authentication, file uploads, CRUD operations, dark mode, and MCP-based AI integration.",
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Cloudinary",
            "JWT",
            "Vercel",
            "Render",
        ],
        githubUrl: "https://github.com/smttomar/Dobby-Ads-Assignment",
        liveUrl: "https://dobby-ads-assignment-psi.vercel.app",
        image: "/projects/drive.png",
    },
    {
        slug: "authentication-app",
        title: "Authentication App – Full-Stack Application",
        description:
            "A full-stack authentication system built with Next.js (TypeScript) that allows users to sign up, log in, verify their email, and reset their password securely.",
        techStack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "JWT",
            "Node.js",
            "bcrypt",
            "MongoDB",
            "Nodemailer",
            "Vercel",
        ],
        githubUrl: "https://github.com/smttomar/nextjs-auth-app",
        liveUrl: "https://nextjs-auth-app-umber.vercel.app/login",
        image: "/projects/auth.png",
    },
    {
        slug: "Task-Management-Web-Application",
        title: "Task Management Web Application",
        description:
            "A full-stack Task Management web application built using the MERN stack. Users can create, view, update, delete, and filter tasks with a modern and responsive UI.",
        techStack: [
            "React (Vite)",
            "JavaScript",
            "Axios",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        githubUrl:
            "https://github.com/smttomar/Task-Management-Web-Application",
        liveUrl: "https://task-management-web-application-topaz.vercel.app/",
        image: "/projects/task.png",
    },
    {
        slug: "Therapy-Website",
        title: "Therapy Website (Frontend)",
        description:
            "About Frontend UI clone and redesign of a therapy website using Next.js and Tailwind CSS, focused on calm design, responsive layouts, client-friendly copy, and thoughtful UX based on an imaginary therapist profile.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        githubUrl: "https://github.com/smttomar/Grow-My-Therapy-Assignment",
        liveUrl: "https://grow-my-therapy-assignment-eta.vercel.app",
        image: "/projects/therapy.png",
    },
    {
        slug: "vidtube-backend",
        title: "VidTube Backend – YouTube-like System",
        description:
            "VidTube is a backend for a YouTube-style application built using Node.js, Express, and MongoDB. It includes user authentication, video uploads (Cloudinary + Multer), comments, likes, playlists, and subscriptions.",
        techStack: [
            "Node.js",
            "Express.js",
            "JWT(JSON Web Tokens)",
            "REST APIs",
            "bcrypt",
            "MongoDB",
            "Cloudinary",
            "Multer",
        ],
        githubUrl: "https://github.com/smttomar/VidTube-Backend",
    },
    {
        slug: "Project-Management-backend",
        title: "Project Management backend",
        description:
            "Project Camp Backend is a RESTful API service designed to support collaborative project management. The system enables teams to organize projects, manage tasks with subtasks, maintain project notes, and handle user authentication with role-based access control.",
        techStack: [
            "Node.js",
            "Express.js",
            "JWT(JSON Web Tokens)",
            "REST APIs",
            "bcrypt",
            "MongoDB",
        ],
        githubUrl: "https://github.com/smttomar/Project-Management-backend",
    },
    {
        slug: "Password-Generator-App",
        title: "Password Generator App",
        description:
            "A simple and responsive Password Generator built with React, Vite, and TailwindCSS. This app allows users to generate strong and customizable passwords with options to adjust length, include numbers, symbols, and more.",
        techStack: ["React 19", "Vite", "TailwindCSS 4"],
        githubUrl: "https://github.com/smttomar/Password-generator",
        liveUrl: "https://smttomar.github.io/Password-generator/",
    },
];
