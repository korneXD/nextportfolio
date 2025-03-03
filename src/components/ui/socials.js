"use client";

import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Socials() {
    const iconRefs = useRef([]);
    const container = useRef(null);
    const path = usePathname()

    const social = [{ icon: <FaGithub className={path == "/" ? "size-8" : "size-8 md:size-6"} />, to: "https://github.com/korneXD" }, { icon: <FaXTwitter className={path == "/" ? "size-8" : "size-8 md:size-6"} />, to: "https://x.com/itskorcee" }, { icon: <AiFillInstagram className={path == "/" ? "size-8" : "size-8 md:size-6"} />, to: "https://www.instagram.com/halmosi_kornel_/" }]

    useLayoutEffect(() => {
        if (container.current) {
            gsap.to(iconRefs.current, {
                x: 0,
                opacity: 1,
                duration: 2,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: container.current,
                    start: "10% bottom",
                    toggleActions: "play none none reset",
                },
            });
        }
    }, []);

    return (
        <div ref={container} className="flex justify-around items-center w-full py-8 max-w-xs">
            {social.map((e, index) => (
                <Link
                    key={index}
                    href={e.to}
                    target="_blank"
                    ref={(el) => (iconRefs.current[index] = el)}
                    className="text-gray-200 opacity-0 translate-x-10 hover:text-white transition-colors cursor-pointer"
                >{e.icon}</Link>
            ))}
        </div>
    );
}
