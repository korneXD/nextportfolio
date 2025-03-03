"use client"

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function WorksLayout() {
    const backgroundImage = useRef(null);
    const leftText = useRef(null);
    const rightText = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: document.documentElement,
                    scrub: 1,
                    start: "top",
                    end: "+=500px",
                },
            });

            timeline.from(backgroundImage.current, { clipPath: 'inset(15%)', duration: 30 })

            timeline.to(leftText.current, {
                opacity: 0,
                x: -100,
                duration: 3,
                ease: "power1.inOut",
            });

            timeline.to(rightText.current, {
                opacity: 0,
                x: 100,
                duration: 3,
                ease: "power1.inOut",
            }, "<");
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="flex justify-center items-center min-h-screen w-full bg-black relative p-4 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div ref={backgroundImage}
                    className="absolute inset-0 bg-no-repeat opacity-40 mix-blend-screen"
                    role="img"
                    aria-label="Image of the author"
                >
                    <Image src="https://5a9is5m72t.ufs.sh/f/wxlLVoZraNf9mkki6ap04fWJ0mLYh8q7cuCFGZMQtO2EIoB9" fill priority unoptimized alt="Hero Image" className='object-cover contrast-[1.1] brightness-120' />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1),transparent_70%)]" />
            </div>
            <div data-scroll data-scroll-speed="0.05" className="flex z-10 justify-center px-10 py-10 items-center md:items-start w-full md:w-fit h-fit absolute bottom-10 left-0 flex-col">
                <span className="text-gray-200 uppercase text-md md:text-lg tracking-wider text-left w-full px-8 italic">My latest Projects</span>
                <h1 className="text-white tracking-tighter text-5xl  md:text-7xl" style={{ fontFamily: "Arial Black" }}>
                    <span className="inline-block transform skew-x-6">WOR</span>
                    <span className="inline-block transform -skew-x-8">KS</span>
                </h1>
            </div>
            <span ref={leftText} className="text-gray-200 z-10 text-sm md:text-md bottom-4 left-4 absolute inline-block">{"( "}0 <span className="text-white">2</span>{" )"}</span>
            <span ref={rightText} className="text-gray-200 z-10 absolute text-sm md:text-md bottom-4 right-4 inline-block uppercase tracking-wide">{new Date().getFullYear()} © Halmosi Kornél.</span>
        </section>
    )
}