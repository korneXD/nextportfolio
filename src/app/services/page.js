import { description } from "@/utils/constans";
import ServicePage from "@/components/pages/services";

export const metadata = {
    title: "Services",
    description: description,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Page",
    name: "Services",
    image: "/opengraph-image.png",
    description: description,
};

export default function Service() {
    return (
        <main>
            <ServicePage />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}