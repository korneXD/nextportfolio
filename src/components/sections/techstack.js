import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
    const textRefs = useRef([]);
    const container = useRef(null);

    useLayoutEffect(() => {
        if (container.current) {
            gsap.to(textRefs.current, {
                opacity: 1,
                y: 0,
                duration: 25,
                stagger: 2,
                scrollTrigger: {
                    trigger: container.current,
                    scrub: 1,
                    start: "5% bottom",
                    toggleActions: "play none none reset",
                },
            });
        }
    }, []);

    const stack = [{ icon: "https://5a9is5m72t.ufs.sh/f/wxlLVoZraNf9n95dcRrXNjHl3SZOnDas1Ey2JM7wA9cgGQbK", name: "Next" }, { icon: "https://5a9is5m72t.ufs.sh/f/wxlLVoZraNf9EbV11Nx7qFhg0oLHf4rv3lGQ5dANyzZOi6YR", name: "Tailwind" }, { icon: "https://5a9is5m72t.ufs.sh/f/wxlLVoZraNf9NkbEdTUg3OBFivhyXRe9sx4rkj7JEnPcIHot", name: "GSAP" }]

    return (
        <section ref={container} className="h-fit w-full flex justify-center items-center">
            <div className="flex justify-center items-center flex-col gap-10 w-full">
                <h2 className="text-gray-400 tracking-wide uppercase text-4xl md:text-[3vw]">My tech stack</h2>
                <div className="flex justify-start items-center flex-1 gap-4 flex-row border">
                    {stack.map((e, index) => (
                        <div key={index} ref={(el) => (textRefs.current[index] = el)} className="size-20 relative flex opacity-0">
                            <Image
                                src={e.icon}
                                className={e.name == "Next" ? "z-10 bg-white border border-gray-300 rounded-full object-cover" : "z-10 bg-black object-cover object-top border border-gray-300 rounded-full"}
                                width={200}
                                height={200}
                                alt="Tech Stack element"
                                priority
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
