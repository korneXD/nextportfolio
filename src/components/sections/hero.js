export default function Hero() {
    return (
        <div className="flex justify-center items-center h-screen w-full bg-black relative p-4">
            <div className="flex justify-center px-10 py-10 items-start w-full h-fit absolute bottom-10 left-0 flex-col">
                <span className="text-gray-200 uppercase text-lg tracking-wider">Web designer</span>
                <h1 className="text-white tracking-tighter text-7xl" style={{ fontFamily: "Arial Black" }}>
                    <span className="inline-block transform skew-x-6">HALMOS</span>
                    <span className="inline-block transform -skew-x-8">I</span>
                    <span className="block">
                        <span className="inline-block transform -skew-x-12">KORN</span>
                        <span className="inline-block transform skew-x-12">ÉL</span>
                    </span>
                </h1>
            </div>
        </div>
    )
}