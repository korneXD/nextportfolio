"use client"

import Footer from "@/components/footer/footer";
import ContactPage from "@/components/sections/contact";
import ContactLayout from "@/components/sections/contactlayout";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { motion } from "motion/react"
import { useRouter } from "next/navigation";
import { ScrollToPlugin } from "gsap/all";

export default function Contact() {
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
        if (url && url !== "/contact") {
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
        <motion.main ref={containerRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex overflow-x-hidden min-h-screen w-full relative justify-center items-center flex-col">
            <ContactPage />
            <ContactLayout />
            <Footer navigateToNextPage={navigateToNextPage} />
        </motion.main>
    )
}