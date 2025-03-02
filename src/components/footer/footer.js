import { menuLinks } from "@/utils/constans";
import Link from "next/link";
import Socials from "../ui/socials";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const textRefs = useRef([]);
    const container = useRef(null);

    useLayoutEffect(() => {
        if (container.current) {
            gsap.to(textRefs.current, {
                opacity: 1,
                y: 0,
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
        <footer ref={container} className="h-fit w-full absolute px-16 py-10 bottom-0 left-0 flex justify-start items-center">
            <div className="flex justify-start items-center flex-row flex-1 gap-4">
                <h2 className="text-gray-400 tracking-wide uppercase text-xl">Links</h2>
                {menuLinks.map((e, index) => (
                    <Link
                        key={e.name}
                        ref={(el) => (textRefs.current[index] = el)}
                        href={e.path}
                        className="text-gray-200 relative italic cursor-pointer tracking-wide uppercase text-xl opacity-0 translate-y-4"
                    >
                        {e.name}
                    </Link>
                ))}
            </div>
            <div className="flex justify-center items-end flex-col flex-1">
                <Socials />
            </div>
        </footer>
    );
}
