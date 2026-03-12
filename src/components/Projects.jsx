import ProjectsCard from "./ProjectsCard"

export default function Projects() {
    return(
        <section className="mb-24 scroll-mt-24 px-4 sm:px-0" id="projects">
                <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white whitespace-nowrap">
                    Featured Projects
                </h2>
                <div className="h-px grow bg-black dark:bg-white"></div>
                </div>
                <ProjectsCard />
        </section>
    )
}