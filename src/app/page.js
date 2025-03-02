"use client"

import Footer from "@/components/footer/footer";
import HeroLayout from "@/components/sections/hero";
import HomeLayout from "@/components/sections/homelayout";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <main className="flex min-h-screen justify-center items-center flex-col relative">
      <HeroLayout />
      <HomeLayout />
      <Footer />
    </main>
  );
}
