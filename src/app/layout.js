import Header from "@/components/menu/header";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { useRef } from "react";

export const metadata = {
  title: "Kornél",
  description: "Web designer, web developer...",
};

export default function RootLayout({ children }) {
  const [locomotive, setLocomotive] = useState(null);
  const container = useRef(null)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({
        el: container,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
      setLocomotive(scroll);
    })();

    return () => {
      if (locomotive) locomotive.destroy();
    };
  }, [locomotive]);
  return (
    <html lang="en">
      <body
        ref={container}
        data-scroll-container
        className={`antialiased bg-black overflow-x-hidden`}
      >
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
