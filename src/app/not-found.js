"use client"

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex bg-black min-h-screen w-full justify-center relative items-center flex-col">
            <span className="text-neutral-800 text-[20vw] font-bold">404</span>
            <h2 className="text-gray-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold z-10 text-center text-4xl">The page you looking for does not exist...</h2>
            <Link href={"/"} className=" text-gray-200 border tracking-wider border-gray-200 px-2 py-1 rounded-3xl uppercase hover:scale-105 transition-all hover:text-neutral-500">Back to homepage</Link>
        </div>
    )
}