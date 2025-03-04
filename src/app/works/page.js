import { description } from "@/utils/constans";
import WorksPage from "@/components/pages/works";

export const metadata = {
    title: "Works",
    description: description,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Page",
    name: "Works",
    image: "/opengraph-image.png",
    description: description,
};

export default function Works() {
    return (
        <main>
            <WorksPage />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}