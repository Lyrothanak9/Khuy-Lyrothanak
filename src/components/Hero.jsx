import Iamge from "../assets/image.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Hero() {
    return (
        <section id = "home" className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-24 px-4 sm:px-0">
            {/* left side of Hero section */}
            <div className="order-2 lg:order-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight dark:text-white text-black">
                    Khuy Lyrothanak
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-800 dark:text-slate-300 mb-6 sm:mb-8 font-medium">
                    Software Engineer
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <button className="bg-black hover:bg-gray-800 dark:bg-[#03346E] dark:hover:bg-[#022a5a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 whitespace-nowrap">
                        View Projects 
                        <IoMdArrowRoundForward />
                    </button>
                    {/* button install  */}
                    <button className="bg-black hover:bg-gray-800 dark:bg-[#03346E] dark:hover:bg-[#022a5a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 whitespace-nowrap">
                        Download CV
                        <MdOutlineFileDownload />
                    </button>
                </div>
            </div>
                {/* right side of Hero section */}
            <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[400px] aspect-square rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white
                dark:border-slate-700 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr"></div>
                    <img src={Iamge} alt="Profile" />
                </div>
            </div>
        </section>
    );
}
