"use client"

import Footer from "@/components/footer/footer";
import ContactPage from "@/components/sections/contact";
import ContactLayout from "@/components/sections/contactlayout";
import { useEffect } from "react";


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
        <main className="flex min-h-screen w-full relative justify-center items-center flex-col">
            <ContactPage />
            <ContactLayout />
            <Footer />
        </main>
    )
}