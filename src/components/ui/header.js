export default function Header() {
    return (
        <header className="flex justify-center items-center w-full h-fit absolute top-0 left-0 z-20">
            <nav className="h-fit w-full flex justify-center items-center py-6 px-10">
                <div className="flex flex-1 h-fit justify-start items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                </div>
                <div className="flex flex-1 h-fit justify-center items-center">
                    <span className="text-gray-200 italic tracking-widest">WWW</span>
                </div>
                <div className="flex flex-1 h-fit justify-end items-center">
                    <button className=" text-gray-200 border tracking-wider border-gray-200 px-2 py-1 rounded-3xl uppercase">
                        Contact
                    </button>
                </div>
            </nav>
        </header>
    )
}