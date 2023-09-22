import { Menu } from "lucide-react"
import Image from "next/image"

export const LandingNavbar = () => {
    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <div className="flex items-center">
                <div className="relative h-14 w-14 mr-4">
                    <Image
                        fill
                        alt="Logo"
                        src="/logodark.png"
                    />
                </div>
                <h1 className="text-4xl font-bold text-black font-mono">
                    COMMUNE
                </h1>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-md font-bold font-mono hidden lg:block">
                <a href="#landing-content">Highlights</a>
            </button>
            <Menu className="lg:hidden"/>
        </nav>
    )
}