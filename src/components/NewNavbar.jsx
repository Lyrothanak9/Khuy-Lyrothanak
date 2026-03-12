import { useEffect, useState } from "react";
import { HiCommandLine } from "react-icons/hi2";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 dark:border-slate-600 transition-none bg-background-light dark:bg-[#0f172a]">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <HiCommandLine className="text-2xl text-black dark:text-white" />
          <span className="text-lg sm:text-2xl font-bold tracking-tight text-black dark:text-white">
            Khuy Lyrothanak
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-bold dark:text-slate-200">
          <a
            href="#home"
            className="px-4 py-2 rounded-full text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 py-2 rounded-full text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="px-4 py-2 rounded-full text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-4 py-2 rounded-full text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
            onClick={toggleTheme}
          >
            <span className="flex items-center gap-1 dark:hidden">
              <span className="material-symbols-outlined text-lg text-black font-bold">
                dark_mode
              </span>
              <span className="hidden sm:inline text-sm font-bold text-black">Dark</span>
            </span>

            <span className="hidden items-center gap-1 dark:flex">
              <span className="material-symbols-outlined text-lg text-yellow-400 font-bold">
                light_mode
              </span>
              <span className="hidden sm:inline text-sm font-bold text-slate-300">Light</span>
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 dark:border-slate-600 text-black dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition duration-300"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900">
          <nav className="flex flex-col px-4 py-4 gap-2">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
