import SkillsCard from "./SkillsCard";

export default function Skills() {
    return (
        <section className="mb-24 scroll-mt-24 px-4 sm:px-0" id="skills">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#00174B] dark:text-white whitespace-nowrap">
                    Technical Skills
                </h2>
                <div className="h-1 flex-1 grow bg-[#00174B] dark:bg-white"></div>
            </div>
            <SkillsCard/>
        </section>
    );
}