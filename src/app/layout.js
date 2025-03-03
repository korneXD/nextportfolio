import Header from "@/components/menu/header";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Kornél",
  description: "Web designer, web developer...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black overflow-x-hidden scroll-smooth`}
      >
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
