import { menuLinks } from "@/utils/constans";
import Link from "next/link";
import Socials from "../ui/socials";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ navigateToNextPage }) {
    const textRefs = useRef([]);
    const container = useRef(null);

    useLayoutEffect(() => {
        if (container.current) {
            gsap.to(textRefs.current, {
                opacity: 1,
                y: 0,
                duration: 10,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: container.current,
                    scrub: 1,
                    start: "10% bottom",
                    toggleActions: "play none none reset",
                },
            });
        }
    }, []);

    const path = usePathname()

    return (
        <footer ref={container} className="h-fit w-full px-16 py-10 bottom-0 left-0 flex justify-center md:justify-start items-center">
            <div className="flex justify-start items-center flex-col md:flex-row w-full">
                {path != "/" &&
                    <div className="flex justify-start items-center md:flex-row flex-1 gap-4 flex-col">
                        <h2 className="text-gray-400 tracking-wide uppercase text-3xl">Links</h2>
                        {menuLinks.map((e, index) => (
                            <button
                                key={e.name}
                                ref={(el) => (textRefs.current[index] = el)}
                                onClick={() => navigateToNextPage(e.path)}
                                className="text-gray-200 relative italic cursor-pointer tracking-wide uppercase text-3xl opacity-0 translate-y-4 transition-all hover:text-white"
                            >
                                {e.name}
                            </button>
                        ))}
                    </div>
                }
                <div className={path == "/" ? "flex justify-center items-center flex-col flex-1 w-full" : "flex justify-center items-center md:items-end flex-col flex-1 w-full"
                }>
                    <Socials />
                </div>
            </div>
        </footer>
    );
}
