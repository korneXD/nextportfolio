"use client"

import React, { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const projects = [
    {
        title: "Rozin Rebeka",
        url: "www.rozinrebeka.hu",
    },
    {
        title: "Movie Ratings",
        url: "kornelflix.netlify.app",
    },
    {
        title: "Blog",
        url: "kornexd.netlify.app",
    },
    {
        title: "You need a website",
        url: "www.ynaw.hu",
    },
    {
        title: "Digital Crypto dua.",
        url: "work in progress...",
    },
]

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.create({
                trigger: imageContainer.current,
                pin: true,
                start: "top-=100px",
                end: "bottom-=340px",
            })
        })
        return () => ctx.revert()


    }, [])

    return (
        <section ref={container} className="relative text-gray-200 mt-[25vh] p-[10%]">
            <div className="flex h-[500px] md:h-[600px] w-full justify-center md:justify-between gap-[5%] flex-col md:flex-row">
                <div ref={imageContainer} className="relative h-full w-full md:w-[40%] md:z-10 flex justify-center items-center">
                    <Image
                        src={`https://5a9is5m72t.ufs.sh/f/wxlLVoZraNf9HUn7vcTtRISZvjJ1QurTmxheFiU07wdOPgDG`}
                        fill={true}
                        alt="project image"
                        priority
                        unoptimized
                        className='object-cover grayscale'
                    />
                    <Link href={projects[selectedProject].url != "work in progress..." ? `https://${projects[selectedProject].url}` : "/contact"} target='_blank' className='text-white whitespace-nowrap text-3xl px-2 py-1 w-full italic bg-black z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-center'>{projects[selectedProject].url}</Link>
                </div>
                <div className="hidden md:z-0 z-10 md:flex h-full w-full md:w-[40%] text-xl md:text-[1.6vw] flex-col">
                    <p>Check my latest works below.</p>
                </div>
            </div>

            <div className="flex flex-col relative">
                {
                    projects.map((project, index) => {
                        return <div key={index} onClick={() => { setSelectedProject(index) }} className="w-full text-gray-200 uppercase  flex justify-end text-2xl md:text-[3vw]">
                            <h2 className='md:px-0 px-2 mt-[40px] mb-[20px] whitespace-nowrap cursor-pointer border-b border-gray-200 md:w-[60%] text-right w-full'>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
