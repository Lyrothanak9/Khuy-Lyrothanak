import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Find Book",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque inventore exercitationem asperiores doloribus sint doloremque quae et omnis repellendus recusandae enim quos, minus possimus deleniti expedita, ipsum soluta hic dolor",
    tags: ["Reach js", "javascript", "Google API"],
    repo: "http://github.com/Lyrothanak9/Find-Book-project",
    img: "https://www.google.com/imgres?q=Book&imgurl=https%3A%2F%2Fwww.neh.gov%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium%2Fpublic%2F2018-06%2Fopenbooks.jpg%3Fitok%3DkUdGYpx_&imgrefurl=https%3A%2F%2Fwww.neh.gov%2Fnews%2Fpress-release%2F2015-01-15%2Fhumanities-open-book&docid=vcwn_CxlPheJQM&tbnid=VhiVoYC8gUzDSM&vet=12ahUKEwjZvqbqr5mTAxUlbvUHHToyMQoQnPAOegQIGRAB..i&w=600&h=400&hcb=2&ved=2ahUKEwjZvqbqr5mTAxUlbvUHHToyMQoQnPAOegQIGRAB",
  },
  {
    title: "NULL",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque inventore exercitationem",
    tags: ["Node.js", "MongoDB", "TypeScript"],
    repo: "#",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvTUW54e7ujWNMaKXLzHYwBVHGaH--8pRGoNn9Gbn6sM7QdfFKhw8LuTDOOEH4o2VUNciIwf5ZSzg6hNfhaLk-i4EIg-OJMYKcXrYBc5W0dO6kArmlGEoO5js-rJaC-ZdpZKB0rHp4Sb2th-f9gUOePivrNhupM4AACHyBuQSvyN8ARxz1smN75_BM2IztdL0Fn2bhFYPaniJdJX8WJVmymcgw_WFTHGuqd6S47_NNHIT7rCLJaOYM3OO2EdkrKLROnBE6oIblfvo",
  },
  {
    title: "NULL",
    desc: "High-throughput ETL pipeline built for large scale sensor data processing and analysis.",
    tags: ["Go", "Kafka", "Postgres"],
    repo: "#",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARc39DT4HlZLWcyIG5B3CE19DbS1ckziayANJWV3FTOvjAfN2ZZSv6jVi6ITiglqFgeFsT4W-6FJbsXLnrCieV1I6xf-IpcTs2AX-6NTpMw6w82RYsBW36TxMbFGvAhxl-BnT8RvoXqIziuXp6p99xAHz_E9yLN1ZHoE3-VSYOsjd50H4Ej_2j5nJ9XyQyHrVza18Hrkd3WpfNbILtCtFTI-o-l4R0Dv6DWAEiO19axN3yLSv-1e12sNen7ucNyNw2w6TiA3NlKBw",
  },
];

export default function ProjectsCard() {


    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({title, desc, tags, repo, img}, index) =>(
                <div key={index} className="flex flex-col rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-primary/10 overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all">
                    <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                        <img src={img} alt={title} className="w-full h-full object-cover  transition-transform"/>
                    </div>
                    <div className="p-6 flex flex-col grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold">{title}</h3>
                            <a href={repo} className="text-slate-400 hover:scale-10">
                                <span className="material-symbols-outlined">
                                    open_in_new
                                </span>
                            </a>
                        </div>
                        <p className="text-slate-600  dark:text-slate-400 text-sm mb-4">{desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                            {tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold">{tag}</span>
                            ))}
                        </div>
                        <a href={repo} className="w-full py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-opacity">
              <FaGithub className="w-4 h-4" />
              View Repo
            </a>

                    </div>
                </div>
            ))}
        </div>
    )
}