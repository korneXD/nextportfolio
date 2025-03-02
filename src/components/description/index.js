import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrases = ["My latest works", "web design", "web development", "creative ideas", "hungary-based"]

export default function Description() {

    return (
        <section className="relative text-gray-200 uppercase mt-10 ml-20 text-4xl" >
            {
                phrases.map((phrase, index) => {
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
                    scrub: true,
                    start: "0px bottom",
                    end: "bottom+=400px bottom",
                },
                opacity: 0,
                left: "-200px",
                ease: "power3.Out"
            })
        })
        return () => ctx.revert()
    }, [])

    return <p ref={text} className='m-0 relative'>{children}</p>
}