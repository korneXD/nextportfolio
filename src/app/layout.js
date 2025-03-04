import Header from "@/components/menu/header";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { description, title } from "@/utils/constans";

export const metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "weboldal készítés",
    "weboldal készítés Kecskemét",
    "profi weboldal készítés",
    "egyedi weboldal készítés",
    "WordPress weboldal készítés",
    "reszponzív weboldal tervezés",
    "SEO optimalizált weboldal",
    "gyors és modern weboldalak",
    "weboldalkészítő Kecskemét",
    "Kecskeméti webdesigner",
    "Koresz.hu weboldal készítés",
    "weboldal fejlesztés",
    "üzleti weboldal készítés",
    "mobilbarát weboldal",
    "hatékony weboldal készítés",
    "weboldal karbantartás",
    "UX/UI tervezés",
    "weblap készítés Kecskemét"
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    title,
    description,
    siteName: title,
    images: [
      {
        url: "@/public/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["@/public/opengraph-image.png"],
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon.ico",
    },
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body
        className={`antialiased bg-black overflow-x-hidden scroll-smooth`}
      >
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html >
  );
}
