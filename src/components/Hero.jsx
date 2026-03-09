import Iamge from "../assets/image.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaGitlab } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center px-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
                {/* text detail */}
                <div className="space-y-8">
                    <h1 className="text-6xl font-extrabold dark:text-slate-300 tracking-tight">
                        Khuy Lyrothanak
                    </h1>
                    <div>
                        <q className="max-w-2 leading-relaxed dark:text-slate-300 tracking-tight">
                            Hello! I'm Khuy Lyrothanak, a 21-year-old Mobile App Developer and
                            third-year Information Technology Engineering student at the Royal
                            University of Phnom Penh. I am passionate about building modern
                            mobile applications and continuously improving my skills in
                            software development and new technologies.
                        </q>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <a
                            href="https://github.com/Lyrothanak9"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 
                                    dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 
                                    transition-colors duration-300"
                        >
                            {/* github */} <FaGithub className="text-4xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ly-rothanak-501271325/"
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                        bg-slate-200 text-slate-700 hover:bg-slate-300 
                                        dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-700
                                        transition-colors duration-300"
                        >
                            {/* linkedin */} <FaLinkedinIn className="text-3xl" />
                        </a>
                        <a
                            href="https://gitlab.com/Lyrothanak9"
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                        bg-slate-200 text-slate-700 hover:bg-slate-300 
                                        dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-700
                                         transition-colors duration-300"
                        >
                            {/* Gitlab */} <SiGitlab className="text-3xl" />
                        </a>
                    </div>
                </div>
                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={Iamge}
                        alt="profile"
                        className="w-80 h-80 rounded-3xl object-cover shadow-lg border-4 border-slate-700 transition-transform duration-200 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
}
