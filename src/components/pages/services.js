"use client"

import Description from "@/components/description";
import Footer from "@/components/footer/footer";
import { useEffect, useRef } from "react";
import { motion } from "motion/react"
import { ScrollToPlugin } from "gsap/all";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Services from "@/components/sections/services";
import ServicesLayout from "@/components/sections/serviceslayout";

export default function ServicePage() {

    const containerRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            const locomotiveScroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smartphone: { smooth: true },
                tablet: { smooth: true }
            });
        })();
    }, []);

    gsap.registerPlugin(ScrollToPlugin);

    const navigateToNextPage = (url) => {
        if (url && url !== "/services") {
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
        <motion.main ref={containerRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex min-h-screen w-full bg-black flex-col relative">
            <Services />
            <Description />
            <ServicesLayout />
            <Footer navigateToNextPage={navigateToNextPage} />
        </motion.main>
    )
}