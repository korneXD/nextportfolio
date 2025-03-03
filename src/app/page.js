"use client";

import Footer from "@/components/footer/footer";
import HeroLayout from "@/components/sections/hero";
import HomeLayout from "@/components/sections/homelayout";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });
    })();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  gsap.registerPlugin(ScrollToPlugin);

  const navigateToNextPage = (url) => {
    if (url && url !== "/") {
      gsap.to(window, {
        scrollTo: { y: 0, autoKill: false },
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
              router.push(url);
            },
          });
        },
      });
    }
  };

  return (
    <main
      ref={containerRef}
      className="flex min-h-screen justify-center items-center flex-col relative overflow-x-hidden"
    >
      <HeroLayout />
      <HomeLayout navigateToNextPage={navigateToNextPage} />
      <Footer />
    </main>
  );
}
