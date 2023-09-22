import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { LandingContent } from "@/components/landing-content";
import { LandingNavbar } from "@/components/landing-navbar";
import React from "react";

const AuthLayout = ({children} : {children: React.ReactNode}) => {
    return ( 
        
        <div className="bg-[url('/image.jpg')] bg-cover h-full overflow-auto">
            <div id="home-page"><LandingNavbar/></div>
            <div className="lg:flex justify-between items-center lg:mb-48">
                <div className="font-black text-6xl lg:pl-10 text-center">
                        <div className="py-10 px-5 text-black font-sans">
                            <div className="lg:mb-8"><span className="text-purple-600 font">MAKE</span> <span className="text-white">EVERY<br/></span></div> 
                            <span className="text-white">WORD</span> <span className="text-purple-600">COUNT!</span><br/>
                            <div className="text-sm text-slate-900/60 font-mono mt-6 hidden lg:block">Commune bridges the gap between people and cultures,</div> 
                            <div className="text-sm text-slate-900/60 font-mono hidden lg:block">one chat at a time, fostering understanding and connection</div>
                        </div>
                </div>
                <div className="h-1200 flex items-center justify-center lg:justify-end lg:pr-10 lg:mt-20">{children}</div>
            </div>
            <LandingContent/>
            <Footer/>
        </div>
     );
}
 
export default AuthLayout;