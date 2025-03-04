import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

const phrases = ["My latest works", "web design", "web development", "creative ideas", "hungary-based"]

const services = ["Website building", "Website redesign", "Mobile first design", "Lightning fast", "Clean and creative design", "100% SEO"]

export default function Description() {

    const path = usePathname()

    return (
        <section className="relative text-gray-200 uppercase mt-10 flex justify-center items-start ml-4 flex-col md:ml-20 text-4xl" >
            {path == "/works" ?
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                }) : services.map((phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }
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
                    end: "bottom+=400px bottom",
                },
                opacity: 0,
                left: "-200px",
                duration: 3,
                ease: "power1.inOut"
            })
        })
        return () => ctx.revert()
    }, [])

    return <p ref={text} className='m-0 relative'>{children}</p>
}