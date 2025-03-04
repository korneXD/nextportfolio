import Contactpages from "@/components/pages/contact";
import { description } from "@/utils/constans";

export const metadata = {
    title: "Contact",
    description: description,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Page",
    name: "Contact",
    image: "/opengraph-image.png",
    description: description,
};

export default function Contact() {
    return (
        <main>
            <Contactpages />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}