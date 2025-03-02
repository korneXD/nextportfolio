"use client";

import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Socials() {
    const iconRefs = useRef([]);
    const container = useRef(null);

    useLayoutEffect(() => {
        if (container.current) {
            gsap.to(iconRefs.current, {
                x: 0, // Jobbról csúszik be
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
            {[FaGithub, FaXTwitter, AiFillInstagram].map((Icon, index) => (
                <Icon
                    key={index}
                    ref={(el) => (iconRefs.current[index] = el)}
                    className="text-gray-200 size-6 opacity-0 translate-x-10"
                />
            ))}
        </div>
    );
}
