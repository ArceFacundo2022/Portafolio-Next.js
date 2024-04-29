
import { 
    SiHtml5, SiCss3, SiTypescript, SiGraphql, SiJavascript, SiReact, SiExcalidraw, SiVercel,
    SiNextui,SiNextdotjs, SiVite, SiTailwindcss, SiBootstrap, SiNodedotjs, SiMongodb, SiMariadb,
    SiRedux, SiPostgresql, SiNestjs, SiPostman, SiDocker, SiJirasoftware, SiTrello, SiFigma, 
    SiGithub, SiGit, SiExpress,

} from "react-icons/si";

import { Tooltip } from "@nextui-org/react";

export const Section_Technologies = () => {
  return (
    <main className="bg-slate-950 w-full min-h-screen px-2 z-10 xl:px-16 lg:px-12 md:px-10 sm:px-8 xs:px-6 2xs:px-3 flex flex-col gap-5" id="section_technologies">
        <section>
            <header className="pt-20 pb-10 flex align-middle justify-center">
                <h1 className="font-Vollkorn text-3xl text-white border-b-2 border-blue-600">{" TECNOLOGÍAS "}</h1>
            </header>
            <main className="bg-blue-950/55 p-5 rounded-lg flex flex-wrap xs:grid xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-5">
                <Tooltip
                    placement="top"
                    content="HTML5"
                    color="primary"
                    className=" basis-auto"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-orange-600">
                        <h2><SiHtml5/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="CSS3"
                    color="primary"
                    className=" basis-auto"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-blue-500">
                        <h2><SiCss3/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="JavaScript"
                    color="primary"
                    className=" basis-auto"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-yellow-500">
                        <h2><SiJavascript/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="TypeScript"
                    color="primary"
                    className="basis-auto"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-blue-500">
                        <h2><SiTypescript/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="React.js"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-cyan-500">
                        <h2><SiReact/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="Redux ToolKit"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-indigo-600">
                        <h2><SiRedux/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="Vite"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-yellow-500">
                        <h2><SiVite/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="Next.js"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-black">
                        <h2><SiNextdotjs/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="Node.js"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-green-600">
                        <h2><SiNodedotjs/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="Express.js"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-black">
                        <h2><SiExpress/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="MongoDB"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-green-700">
                        <h2><SiMongodb/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    content="PostGreSQL"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-cyan-600">
                        <h2><SiPostgresql/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="MariaDB"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-cyan-700">
                        <h2><SiMariadb/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="Docker"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-blue-500">
                        <h2><SiDocker/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="NextUI"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-black">
                        <h2><SiNextui/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="Tailwind"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-cyan-500">
                        <h2><SiTailwindcss/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="Bootstrap"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-violet-500">
                        <h2><SiBootstrap/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="Git"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-orange-600">
                        <h2><SiGit/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="GitHub"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-black">
                        <h2><SiGithub/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="PostMan"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-orange-500">
                        <h2><SiPostman/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="Jira Software"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-blue-500">
                        <h2><SiJirasoftware/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="Trello"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-blue-500">
                        <h2><SiTrello/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="Excalidraw"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-indigo-600">
                        <h2><SiExcalidraw/></h2>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="bottom"
                    content="Vercel"
                    color="primary"
                >
                    <div className="tech-box w-[75px] h-[75px] text-[rgba(255,255,255,0.5)] hover:text-white">
                        <h2><SiVercel/></h2>
                    </div>
                </Tooltip>

            </main>
        </section>

        <section>
            <header className="pt-10 pb-10 flex align-middle justify-center">
                <h1 className=" font-Vollkorn text-3xl text-white border-b-2 border-blue-600">{" APRENDIENDO "}</h1>
            </header>
            <main className="flex justify-center w-auto">
                <div className=" bg-gradient-to-r from-slate-300/20 via-blue-950/55 to-slate-300/20 py-5 px-5 2xs:px-5 xs:px-20 rounded-lg flex flex-wrap justify-center gap-6">
                    <Tooltip
                        placement="bottom"
                        content="Nest.js"
                        color="default"
                    >
                        <div className="learn-tech">
                            <span>
                                <SiNestjs className="icon-shadow"/>
                            </span>
                        </div>
                    </Tooltip>

                    <Tooltip
                        placement="bottom"
                        content="Graphql"
                        color="default"
                    >
                        <div className="learn-tech">
                            <span>
                                <SiGraphql className="icon-shadow"/>
                            </span>
                        </div>
                    </Tooltip>

                    <Tooltip
                        placement="bottom"
                        content="Figma"
                        color="default"
                    >
                        <div className="learn-tech">
                            <span>
                                <SiFigma className="icon-shadow"/>
                            </span>
                        </div>
                    </Tooltip>
                </div>
            </main>
        </section>
    </main>
  )
}
