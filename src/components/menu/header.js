"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/utils/constans";

export default function Header() {
    const [open, setOpen] = useState(false);
    const container = useRef();
    const linkHolder = useRef([]);
    const menuOverlay = useRef();

    const tl = useRef();

    const toggleMenu = () => {
        setOpen(!open);
    };

    useGSAP(() => {
        gsap.set(menuOverlay.current, { opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
        gsap.set(linkHolder.current, { y: 50, opacity: 0 });

        tl.current = gsap.timeline({ paused: true })
            .to(menuOverlay.current, {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(linkHolder.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
    }, { scope: container });

    useEffect(() => {
        if (open) {
            tl.current.play();
            document.body.style.overflow = "hidden";
        } else {
            tl.current.reverse();
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const path = usePathname()

    const num = path == "/" && "1" || path == "/contact" && "4" || path == "/works" && "2" || path == "/services" && "3"

    return (
        <header ref={container} className="flex justify-center items-center w-full h-fit fixed top-0 left-0 z-20 ">
            <nav className="h-fit w-full flex justify-center items-center py-6 px-3 md:px-10">
                <div className="flex flex-1 h-fit justify-start items-center">
                    <button onClick={toggleMenu} className="cursor-pointer backdrop-blur-sm rounded-full p-2 bg-black/50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-200 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-1 h-fit justify-center items-center">
                    <span className="text-gray-200 italic tracking-widest"></span>
                </div>
                <div className="flex flex-1 h-fit justify-end items-center">
                    <span className=" text-gray-200 border bg-black/50 backdrop-blur-sm tracking-wider border-gray-200 px-2 py-1 rounded-3xl uppercase">
                        {path == "/" && "Home" || path == "/contact" && "Contact" || path == "/works" || path == "/services" ? (path == "/" && "Home" || path == "/contact" && "Contact" || path == "/works" && "Works" || path == "/services" && "Services") : "404"}
                    </span>
                </div>
            </nav>
            <nav ref={menuOverlay} className="flex justify-center items-center bg-black min-h-screen w-full absolute top-0 left-0 opacity-0">
                <button onClick={toggleMenu} className="absolute top-6 left-10 cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-200 hover:text-white transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex justify-center items-start flex-col md:gap-0 gap-2">
                    {menuLinks.map((menu, index) => (
                        <div key={menu.name} className="clip-menu">
                            <div
                                ref={el => (linkHolder.current[index] = el)}
                                className="relative"
                                onClick={toggleMenu}
                            >
                                <Link href={menu.path} className="text-gray-200 hover:text-white transition-all cursor-pointer tracking-wide uppercase text-3xl md:text-[3vw]">
                                    {menu.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <span className="text-gray-200 z-10 text-sm md:text-md bottom-4 left-4 absolute inline-block">{"( "}0 <span className="text-gray-200">{num}</span>{" )"}</span>
                <span className="text-gray-200 z-10 absolute text-sm md:text-md bottom-4 right-4 inline-block uppercase tracking-wide">
                    {new Date().getFullYear()} © Halmosi Kornél.
                </span>
            </nav>
        </header>
    );
}