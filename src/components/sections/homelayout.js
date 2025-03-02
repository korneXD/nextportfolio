import { menuLinks } from "@/utils/constans"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link"
import { useLayoutEffect, useRef } from "react";

export default function HomeLayout() {
    return (
        <section className="flex w-full min-h-screen flex-col justify-center items-center px-28 bg-black pb-30">
            <h2 data-scroll data-scroll-speed="0.15" className="text-white relative text-[3vw] uppercase">Links</h2>
            <div className="flex flex-col relative justify-center items-center w-full">
                {
                    menuLinks.map((e) => (
                        <AnimatedText key={e.name} >
                            <Link href={e.path} className=' mt-[40px] mb-[20px] whitespace-nowrap cursor-pointer border-b border-gray-200 w-full text-left'>{e.name}
                            </Link>
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
                    scrub: true,
                    start: "0px bottom",
                    end: "bottom+=250px bottom",
                },
                opacity: 0,
                left: "-200px",
                ease: "power3.Out"
            })
        })
        return () => ctx.revert()
    }, [])

    return <p ref={text} className="w-full relative text-gray-200 uppercase  flex justify-center items-center text-[3vw]">{children}</p>
}