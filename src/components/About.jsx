import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";

export default function About() {
  return (
    <section className="mb-24 scroll-mt-24 px-4 sm:px-0" id="about">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white whitespace-nowrap">
          About Me
        </h2>
        <div className="h-px grow bg-black dark:bg-white"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        <div className="md:col-span-2">
          <p className="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-300 mb-6">
            Hello! I'm Khuy Lyrothanak, a passionate IT Engineering student at
            the Royal University of Phnom Penh. I enjoy building applications
            and learning new technologies, especially in mobile app development.
            I like creating clean, simple, and user-friendly designs while
            continuously improving my development skills. My goal is to grow as
            a developer and create useful applications that make everyday tasks
            easier.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 ">
              <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                school
              </span>
              <div className="">
                <h4 className="font-bold text-black dark:text-white">Education</h4>
                <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                  Information Technology Engineering, Royal University of Phnom
                  Penh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50">
              <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                target
              </span>
              <div className="">
                <h4 className="font-bold text-black dark:text-white">Objectives</h4>
                <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                  Seeking to leverage technical skills in a professional
                  environment and contribute to innovative software solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 sm:p-8 rounded-2xl h-fit">
          <h3 className="font-bold mb-4 flex items-center gap-2 text-black dark:text-white">
            <span className="material-symbols-outlined text-primary flex-shrink-0">
              contact_page
            </span>
            Quick Contact
          </h3>
          <ul className="space-y-4 text-sm">
            {/* location */}
            <li className="flex flex-col sm:flex-row justify-between gap-2">
              <span className="text-slate-800 dark:text-slate-300 font-medium">
                Location:
              </span>
              <span
                className="font-medium text-black dark:text-white break-all"
                data-location="Phnom Penh, Cambodia"
              >
                Phnom Penh, Cambodia
              </span>
            </li>

            {/* Phone Number */}
            <li className="flex flex-col sm:flex-row justify-between gap-2">
              <span className="text-slate-800 dark:text-slate-300 font-medium">
                Phone:
              </span>
              <span
                className="font-medium text-black dark:text-white"
                data-phone="123-456-7890"
              >
                010 484 816
              </span>
            </li>
            {/* email */}
            <li className="flex flex-col sm:flex-row justify-between gap-2">
              <span className="text-slate-800 dark:text-slate-300 font-medium">Email:</span>
              <span
                className="font-medium text-black dark:text-white break-all"
                data-email="lyrothanak2005@gmail.com"
              >
                lyrothanak2005@gmail.com
              </span>
            </li>
            {/* Experience */}
            <li className="flex flex-col sm:flex-row justify-between gap-2">
              <span className="text-slate-800 dark:text-slate-300 font-medium">
                Experience:
              </span>
              <span
                className="font-medium text-black dark:text-white"
                data-experience="NULL"
              >
                NULL
              </span>
            </li>
          </ul>
          <div className="flex items-center gap-4 sm:gap-6 mt-6 text-xl text-slate-800 dark:text-slate-300">
            <a href="https://github.com/Lyrothanak9" className="hover:text-primary transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ly-rothanak-501271325/" className="hover:text-primary transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="https://gitlab.com/Lyrothanak9" className="hover:text-primary transition-colors">
              <SiGitlab />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
