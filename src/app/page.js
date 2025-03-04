import HomePage from "@/components/pages/home";
import { description } from "@/utils/constans";

export const metadata = {
  title: "Web design | Koresz.hu",
  description: description,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Page",
  name: "Homepage",
  image: "/opengraph-image.png",
  description: description,
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
