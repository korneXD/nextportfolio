import { menuLinks } from "@/utils/constans"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link"
import { useLayoutEffect, useRef } from "react";

export default function ContactLayout() {
    const contact = [{ name: "Phone", con: "+36 70 564 3467", to: "tel:+36705643467" }, { name: "Email", con: "kornexd541@gmail.com", to: "mailto:kornexd541@gmail.com" }, { name: "Github", con: "kornexd", to: "https://github.com/korneXD" }]
    return (
        <section className="flex w-full h-full md:pt-0 pt-6 md:min-h-screen flex-col justify-center items-center p-10 md:px-28 bg-black md:pb-30">
            <h2 data-scroll data-scroll-speed="0.15" className="text-white relative text-3xl md:text-[3vw] uppercase">Contact</h2>
            <div className="flex flex-col relative justify-center items-center w-full">
                {
                    contact.map((e) => (
                        <AnimatedText key={e.name} >
                            <span className=' mt-[40px] flex-col flex mb-[20px] whitespace-nowrap cursor-pointer md:border-b md:border-gray-200 w-full text-left'>{e.name} - <Link href={e.to} target="_blank" className="border-b border-gray-200 w-fit md:border-none">{e.con}</Link>
                            </span>
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

    return <p ref={text} className="w-full relative text-gray-200 uppercase flex justify-center items-center text-2xl md:text-[3vw]">{children}</p>
}