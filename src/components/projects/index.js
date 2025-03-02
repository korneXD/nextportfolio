import React, { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const projects = [
    {
        title: "Rozin Rebeka",
        url: "www.rozinrebeka.hu",
        src: "wxlLVoZraNf9HUn7vcTtRISZvjJ1QurTmxheFiU07wdOPgDG"
    },
    {
        title: "Budget Manager",
        url: "work in progress...",
        src: "wxlLVoZraNf9HUn7vcTtRISZvjJ1QurTmxheFiU07wdOPgDG"
    },
    {
        title: "Portfolio",
        url: "work in progress...",
        src: "wxlLVoZraNf9HUn7vcTtRISZvjJ1QurTmxheFiU07wdOPgDG"
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
                end: document.body.offsetHeight - window.innerHeight - 50,
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <section ref={container} className="relative text-gray-200 mt-[25vh] p-[10%] mb-40">
            <div className="flex h-[500px] justify-between gap-[5%]">
                <div ref={imageContainer} className="relative h-full w-[40%] z-10">
                    <Image
                        src={`https://5a9is5m72t.ufs.sh/f/wxlLVoZraNf9HUn7vcTtRISZvjJ1QurTmxheFiU07wdOPgDG`}
                        fill={true}
                        alt="project image"
                        priority={true}
                        unoptimized
                        className='object-cover grayscale'
                    />
                    <Link href={`https://${projects[selectedProject].url}`} target='_blank' className='text-white whitespace-nowrap text-3xl px-2 py-1 w-fit italic bg-black z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-center'>{projects[selectedProject].url}</Link>
                </div>
                <div className="flex h-full w-[40%] text-[1.6vw]">
                    <p>Check my latest works below.</p>
                </div>
            </div>

            <div className="flex flex-col relative">
                {
                    projects.map((project, index) => {
                        return <div key={index} onMouseOver={() => { setSelectedProject(index) }} className="w-full text-gray-200 uppercase  flex justify-end text-[3vw]">
                            <h2 className=' mt-[40px] mb-[20px] whitespace-nowrap cursor-pointer border-b border-gray-200 w-[60%] text-right'>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
