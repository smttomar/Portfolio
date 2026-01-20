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
        slug: "gigflow",
        title: "GigFlow – Full Stack Freelance Marketplace",
        description:
            "GigFlow is a full-stack freelance marketplace platform where users can post gigs, submit bids, and hire freelancers. The application supports role-based access for clients and freelancers, secure authentication, and transaction-safe hiring workflows. It is designed with a modular backend architecture and a scalable frontend interface, focusing on real-world business logic and data consistency.The project emphasizes authentication, authorization, API design, and handling concurrent operations safely using database transactions.",
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
        title: "Cloudinary SaaS App – Video Compression & Management Platform",
        description:
            "This SaaS-style application allows users to upload, compress, manage, and play videos through a secure dashboard. The platform uses Cloudinary for media processing and supports features such as auto-compression, video playback, downloads, and deletion. Authentication is implemented to protect user routes and ensure secure access. The project focuses on file handling, third-party service integration, relational database design, and scalable SaaS architecture.",
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
        slug: "authentication-app",
        title: "Authentication App – Full-Stack Application",
        description:
            "This project is a secure authentication system built to handle complete user authentication workflows. It includes user registration, login, email verification, password reset, and logout functionality. The application focuses on security best practices such as password hashing, token-based authentication, and protected routes. The project helped strengthen understanding of authentication flows, API integration, and secure user management.",
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
        slug: "vidtube-backend",
        title: "VidTube Backend – YouTube-like System",
        description:
            "VidTube is a backend-focused project that provides core functionality for a video-sharing platform. It supports user authentication, video uploads, playlists, likes, and comments. The backend is designed using RESTful principles with middleware-based authentication and structured error handling. This project strengthened backend fundamentals such as API design, file uploads, cloud storage, and secure data access.",
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
];
