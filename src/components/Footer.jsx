import { HiCommandLine } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <HiCommandLine className="text-2xl text-slate-700 dark:text-slate-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200" />
            <span className="text-xl font-bold tracking-tight text-slate-700 dark:text-slate-300 ">
              Khuy Lyrothanak
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Khuy Lyrothanak. All rights reserved. Designed with passion for
            code.
          </p>
        </div>
      </div>
    </footer>
  );
}
