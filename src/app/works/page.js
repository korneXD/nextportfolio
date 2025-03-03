"use client"

import Description from "@/components/description";
import Footer from "@/components/footer/footer";
import Projects from "@/components/projects";
import WorksLayout from "@/components/works";
import { useEffect, useRef } from "react";
import { motion } from "motion/react"

export default function Works() {

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex min-h-screen w-full bg-black flex-col relative">
            <WorksLayout />
            <Description />
            <Projects />
            <Footer />
        </motion.main>
    )
}