import { SiPhp, SiKotlin, SiFlutter, SiPython, SiMysql, SiGit, SiLinux } from "react-icons/si";

const skills = [
  { icon: SiPhp,     label: "PHP" },
  { icon: SiKotlin,  label: "Kotlin" },
  { icon: SiFlutter, label: "Flutter" },
  { icon: SiPython,  label: "Python" },
  { icon: SiMysql,   label: "MySQL" },
  { icon: SiGit,     label: "Git" },
  { icon: SiLinux,   label: "Linux" },
];

export default function SkillsCard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
      {skills.map(({ icon: Icon, label }, index) => (
        <div
          key={index}
          className="flex flex-col p-4 sm:p-6 items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl border border-black dark:border-slate-700 transition-all group hover:scale-90 duration-100"
        >
          <Icon className="text-3xl sm:text-4xl mb-2 sm:mb-3 dark:text-slate-300 text-black transition-colors" />
          <span className="font-bold dark:text-slate-300 text-black text-xs sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}