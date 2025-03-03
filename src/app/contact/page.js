"use client"

import Footer from "@/components/footer/footer";
import ContactPage from "@/components/sections/contact";
import ContactLayout from "@/components/sections/contactlayout";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { motion } from "motion/react"

export default function Contact() {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    return (
        <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex overflow-x-hidden min-h-screen w-full relative justify-center items-center flex-col">
            <ContactPage />
            <ContactLayout />
            <Footer />
        </motion.main>
    )
}