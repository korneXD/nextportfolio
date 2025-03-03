"use client"
import { menuLinks } from "@/utils/constans"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function HomeLayout({ navigateToNextPage }) {

    return (
        <section className="flex w-full h-full md:min-h-screen flex-col justify-center items-center px-12 md:px-28 bg-black">
            <h2 data-scroll data-scroll-speed="0.05" className="text-white relative text-4xl md:text-[3vw] uppercase">Links</h2>
            <div className="flex flex-col relative justify-center items-center w-full">
                {
                    menuLinks.map((e) => (
                        <AnimatedText key={e.name} >
                            <button onClick={() => navigateToNextPage(e.path)} className=' mt-[40px] mb-[20px] whitespace-nowrap cursor-pointer border-b border-gray-200 w-full text-left uppercase'>{e.name}
                            </button>
                        </AnimatedText>)
                    )}
            </div>
        </section>
    )
}

function AnimatedText({ children }) {
    const text = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from(text.current, {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: 1,
                    start: "0px bottom",
                    end: "bottom+=200px bottom",
                    markers: true
                },
                opacity: 0,
                left: "-100px",
                duration: 3,
                ease: "power1.inOut"
            })
        })
        return () => ctx.revert()
    }, [])

    return <p ref={text} className="w-full relative text-gray-200 uppercase  flex justify-center items-center text-4xl md:text-[3vw]">{children}</p>
}