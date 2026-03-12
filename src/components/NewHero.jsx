import Iamge from "../assets/image.png";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen bg-white dark:bg-[#0f172a] flex items-center px-4 sm:px-6 lg:px-14 py-8 sm:py-12">
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-6 sm:space-y-7 order-2 md:order-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">
                        Hello, I'm <br/>
                        <span className="text-black dark:text-white">Khuy Lyrothak</span>
                    </h1>
                    <h2 className="text-lg sm:text-xl text-black dark:text-white">
                        Mobile App Developer
                    </h2>
                    <q className="block text-sm sm:text-base text-slate-800 dark:text-slate-300 max-w-lg leading-relaxed">
                        I'm a third-year IT Engineering student at the 
                        Royal University of Phnom Penh.
                    </q>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                        {/* Color : Button[#03346E] hover-Button[#022a5a] */}
                        <button className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-black hover:bg-gray-500 dark:bg-[#03346E] text-white rounded-full dark:hover:bg-[#022a5a] transition duration-300 whitespace-nowrap">
                            View Projects
                        </button>
                        {/* Button download CV */}
                        <button className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-black hover:bg-gray-500 dark:bg-[#03346E] text-white rounded-full dark:hover:bg-[#022a5a] transition duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
                            Download CV
                            <MdOutlineFileDownload className="inline-block text-lg" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center order-1 md:order-2">
                    <img src={Iamge} alt="Profile" className="w-48 sm:w-60 md:w-80 h-48 sm:h-60 md:h-80 rounded-3xl object-cover object-center shadow-lg border-4 dark:border-slate-700 duration-300 transition-transform"/>
                </div>
            </div>
        </section>
    );
}
