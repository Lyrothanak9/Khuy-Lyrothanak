import { FaGithub } from "react-icons/fa";
import FindBookImg from "../assets/Find-Book.png";
import CalculatorImg from "../assets/Calculator-App.png";
import HolaWeatherImg from "../assets/Hola-Weather.png";

const projects = [
  {
    title: "Find Book",
    desc: "Find books by title, author, or genre using Google Books API.",
    tags: ["React", "JavaScript", "Google API"],
    repo: "https://github.com/Lyrothanak9/Find-Book-project.git",
    img: FindBookImg,
    link: "https://find-book-project.vercel.app/",
  },
  {
    title: "Calculator App",
    desc: "A simple and responsive calculator built with Flutter.",
    tags: ["Flutter", "Dart"],
    repo: "https://github.com/Lyrothanak9/Calculator-App.git",
    img: CalculatorImg,
  },
  {
    title: "Hola Weather",
    desc: "Real-time weather app using API to fetch data for any city.",
    tags: ["Next.js", "TypeScript", "API"],
    repo: "https://github.com/Lyrothanak9/Holo-Weather.git",
    img: HolaWeatherImg,
    link: "https://holo-weather.vercel.app/",
  },
];

export default function ProjectsCard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <article
          key={project.title}
          className="flex flex-col rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-primary/10 overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
        >
          {/* Image */}
          <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                />
              </a>
            ) : (
              <img
                src={project.img}
                alt={`${project.title} preview`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={`${project.title}-${tag}`}
                  className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-80 hover:scale-105 transition-all duration-300"
            >
              <FaGithub className="w-4 h-4" />
              View Repo
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
