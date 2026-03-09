import { useEffect, useState } from "react";
import { HiCommandLine } from "react-icons/hi2";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <header className="sticky top-0 border-b border-slate-300 dark:border-slate-600 transition-none">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-2">
          <HiCommandLine className="text-2xl text-slate-700 dark:text-slate-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200" />
          <span class="text-xl font-bold tracking-tight dark:text-slate-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200">
            Khuy Lyrothanak
          </span>
        </div>
        <nav className="flex gap-6 font-bold text-gray-800 dark:text-slate-300">
          <a href="#home" className="hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200">About</a>
          <a href="#skills" className="hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200">Skills</a>
          <a href="#projects" className="hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200">Contact</a>
        </nav>

        <button
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
          onClick={toggleTheme}
        >
          <span className="flex items-center gap-1 dark:hidden">
            <span className="material-symbols-outlined text-lg text-slate-700 font-bold">
              dark_mode
            </span>
            <span className="text-sm font-bold text-slate-700">Dark</span>
          </span>

          <span className="hidden items-center gap-1 dark:flex">
            <span className="material-symbols-outlined text-lg text-yellow-400 font-bold">
              light_mode
            </span>
            <span className="text-sm font-bold text-slate-300">Light</span>
          </span>
        </button>
      </div>
    </header>
  );
}
