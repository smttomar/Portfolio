export default function sitemap() {
    const baseUrl = "https://your-portfolio.vercel.app";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
        },
    ];
}
