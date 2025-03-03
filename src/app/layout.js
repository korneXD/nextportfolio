import Header from "@/components/menu/header";
import "./globals.css";

export const metadata = {
  title: "Kornél",
  description: "Web designer, web developer...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
