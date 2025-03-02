"use client"

import Description from "@/components/description";
import Footer from "@/components/footer/footer";
import Projects from "@/components/projects";
import WorksLayout from "@/components/works";
import { useEffect } from "react";

export default function Works() {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])
    return (
        <main className="flex min-h-screen w-full bg-black flex-col relative">
            <WorksLayout />
            <Description />
            <Projects />
            <Footer />
        </main>
    )
}