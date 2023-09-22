"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

const testimonials = [
  {
    name: "Invite",
    avatar: "J",
    title: "Invite your friends",
    description: "Send invitation link and make your friends join your channels",
  },
  {
    name: "Chatrooms",
    avatar: "A",
    title: "Create Chatrooms",
    description: "Create chatrooms and channels within, Text-Video-Audio",
  },
  {
    name: "Audio",
    avatar: "M",
    title: "Connect with voice",
    description: "Experience seamless audio communication",
  },
  {
    name: "Video",
    avatar: "M",
    title: "Connect with video",
    description: "Eliminate distances by uninterrupted video channels",
  },
];

export const LandingContent = () => {
  return (
    <div id="landing-content" className="px-10 pb-5 bg-indigo-500 bg-[url('/smcontent.jpg')] bg-cover md:bg-[url('/image1.jpg')] md:bg-cover lg:bg-[url('/image1.jpg')] bg-fill">
      <h2 className="text-center text-4xl text-white font-extrabold my-10 pt-10 font-mono">HIGHLIGHTS</h2>
      <div className="text-center justify-end mt-28 lg:text-8xl text-5xl font-black pt-20 text-white/50">CHAT<br/> AND CALL<br/> ANYTIME</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-64 mt-24">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-black border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}