export default function sitemap() {
    const baseUrl = "https://portfolio-sand-beta-23.vercel.app/";

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
