"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import Footer from "@/components/footer/footer";
import HeroLayout from "@/components/sections/hero";
import HomeLayout from "@/components/sections/homelayout";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function Home() {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: true,
        smartphone: { smooth: true },
        tablet: { smooth: true }
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
      data-scroll-container
      className="flex min-h-screen justify-center items-center flex-col relative overflow-x-hidden"
    >
      <HeroLayout />
      <HomeLayout navigateToNextPage={navigateToNextPage} />
      <Footer />
    </main>
  );
}
