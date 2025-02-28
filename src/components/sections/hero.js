"use client"

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Header from "../menu/header";

export default function Hero() {
    return (
        <main className="flex justify-center items-center h-screen w-full bg-black relative p-4">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-40 mix-blend-screen"
                    style={{
                        backgroundImage: `url('https://5a9is5m72t.ufs.sh/f/wxlLVoZraNf9sh40Qn27mygdvnGa4Q0HzePIcWKXf8jC7oVL')`,
                        filter: "brightness(1.2) contrast(1.1)",
                    }}
                    role="img"
                    aria-label="Image of the author"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1),transparent_70%)]" />
            </div>
            <div className="flex z-10 justify-center px-10 py-10 items-center md:items-start w-full md:w-fit h-fit absolute bottom-10 left-0 flex-col">
                <span className="text-gray-200 uppercase text-md md:text-lg tracking-wider text-left w-full px-8">Web designer</span>
                <h1 className="text-white tracking-tighter text-5xl  md:text-7xl" style={{ fontFamily: "Arial Black" }}>
                    <span className="inline-block transform skew-x-6">HALMOS</span>
                    <span className="inline-block transform -skew-x-8">I</span>
                    <span className="block">
                        <span className="inline-block transform -skew-x-12">KORN</span>
                        <span className="inline-block transform skew-x-12">ÉL</span>
                    </span>
                </h1>
                <div className="flex justify-around items-center w-full py-8">
                    <FaGithub className="text-gray-200 size-6" />
                    <FaXTwitter className="text-gray-200 size-6" />
                    <AiFillInstagram className="text-gray-200 size-6" />
                </div>
            </div>
            <span className="text-gray-200 z-10 text-sm md:text-md bottom-4 left-4 absolute inline-block">{"( "}0 <span className="text-white">1</span>{" )"}</span>
            <span className="text-white z-10 absolute text-sm md:text-md bottom-4 right-4 inline-block uppercase tracking-wide">{new Date().getFullYear()} © Halmosi Kornél.</span>
        </main>
    )
}