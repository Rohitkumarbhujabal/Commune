import { Contact, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 md:px-24 lg:px-8 bg-gradient-to-r from-violet-900 to-black font-mono">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img src="/logolight.png" alt="logo" className="h-8 w-8"/>
              
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              Commune
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
            Hey there ! Ready for a catch-up chat or a<br/> video call? Whether it's a quick text or a<br/> face to face conversation, 
            we have got you covered . Don't hesitate to reach out to<br/> your friends, family, or colleagues. 
            Your connections are just a message or a call away!
            </p>
            <p className="mt-4 text-sm text-white">
              @Chatroom @VoiceCall @VideoCall
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-center">
          <div className="text-white ml-24">
            <img src="/creator.jpg" alt="img" className="h-36 w-32 rounded-full"/>
          </div>
          <p className="text-white">Creator: ROHIT KUMAR BHUJABAL</p>
          <div className="flex justify-around items-center">
            <a href="mailto:rohitofficial0308@gmail.com">
              <div className="text-black bg-white rounded-md h-8 w-24 pt-2 pl-3 font-bold">
                <button className="flex">
                  <img src="/social/gmail.png" alt="email" className="h-4"/>
                  <span className="px-2">Email</span>
                </button>
              </div>
            </a>
            <a href="whatsapp://send?phone=919861333424">
              <div className="text-black bg-white rounded-md h-8 w-24 pt-2 pl-2 font-bold">
                <button className="flex">
                  <img src="/social/whatsapp.png" alt="whatsapp" className="h-4"/>
                  <span className="px-2">Contact</span>
                </button>
              </div>
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white">
            Social
          </span>
          <div className="flex items-center mt-5 space-x-10">
            <a
              target="_blank"
              href="https://twitter.com/03rohit081"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src="/social/twitter.png" alt="twitter" className="h-6"/>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/03_rohit_08?igshid=YTQwZjQ0NmI0OA=="
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src="/social/instagram.png" alt="instagram" className="h-6"/>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/rohitkumar.bhujabal"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src="/social/facebook.png" alt="facebook" className="h-6"/>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rohit-kumar-bhujabal-2a3966258"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src="/social/linkedin.png" alt="linkedin" className="h-8"/>
            </a>
          </div>
          <p className="mt-6 text-sm text-white">
          We're here to help you with any issues you might have. Our support is just a message away. 
          Please feel free to reach out, and we'll do our best to assist you promptly. Thank you for choosing our app!
          </p>
          <div className="text-white flex justify-between mt-5">
            <a href="#home-page" className="border-2 p-2 rounded-md">Home</a>
            <a href="#landing-content" className="border-2 p-2 rounded-md">Highlights</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-white/50 lg:flex-row">
        <p className="text-sm text-white">
          © Copyright 2023 Commune Pvt Ltd. <span className="ml-10">All rights reserved.</span>
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};