import { SiHtml5, SiCss3, SiExpress, SiTypescript, SiVite, SiRedux, SiNestjs, SiJavascript, 
    SiMongodb, SiReact, SiNodedotjs, SiBootstrap, SiPostman, SiJirasoftware, SiTrello, SiGithub, SiGit
} from "react-icons/si";

import { Tooltip } from "@nextui-org/react";

export const Stage_Technologies_Empleos = () => {
  return (
                    <article className="py-3">
                        <header className="pb-6 text-xl 2xs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center text-purple-600/70 font-Vollkorn font-extrabold">
                            <p className="border-b-2 border-purple-600/70">⚜ Tecnologías ⚜</p>
                        </header>
                        <main className="flex flex-col justify-center sm:grid sm:grid-cols-3 w-full gap-3">
                            <section className="p-1 2xs:p-4 col-span-2 rounded-lg bg-purple-950/80 grid grid-cols-3 2xs:grid-cols-4 xs:grid-cols-5 gap-2 justify-center items-center">

                                <Tooltip
                                    placement="top"
                                    content="HTML5"
                                    color="secondary"
                                    >
                                    
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiHtml5/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="top"
                                    content="CSS3"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiCss3/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="top"
                                    content="JavaScript"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiJavascript/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="top"
                                    content="TypeScript"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiTypescript/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="top"
                                    content="Bootstrap"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiBootstrap/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="top"
                                    content="React.JS"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiReact/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="top"
                                    content="Redux"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiRedux/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="top"
                                    content="Node.JS"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiNodedotjs/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="bottom"
                                    content="Express"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiExpress/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="bottom"
                                    content="Nest.js"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiNestjs/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="bottom"
                                    content="Postman"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiPostman/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="bottom"
                                    content="MongoDB"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiMongodb/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="bottom"
                                    content="Trello"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiTrello/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="bottom"
                                    content="Jira Software"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiJirasoftware/>
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    placement="bottom"
                                    content="Git"
                                    color="secondary"
                                >
                                    <div className="rounded-full border-2 border-purple-600 flex justify-center items-center text-white text-3xl bg-[#160F23] w-14 h-14">
                                        <SiGit/>
                                    </div>
                                </Tooltip>

                            </section>
                            <section className="p-4 col-span-1 rounded-lg bg-purple-950/80">
                                <h1 className=" text-center text-xl font-Vollkorn text-white pb-2">OTROS</h1>
                                <div className="grid grid-cols-2 gap-5 text-center text-white text-sm">
                                    <strong className=" rounded-full bg-[#160F23] border-2 border-purple-600">JWT</strong>
                                    <strong className="rounded-full bg-[#160F23] border-2 border-purple-600">SCRUM</strong>
                                    <strong className="rounded-full bg-[#160F23] border-2 border-purple-600">AXIOS</strong>
                                    <strong className="rounded-full bg-[#160F23] border-2 border-purple-600">REST</strong>
                                    <strong className="rounded-full bg-[#160F23] border-2 border-purple-600">ESLINT</strong>
                                    <strong className="rounded-full bg-[#160F23] border-2 border-purple-600">VITE</strong>
                                    <strong className="col-span-2 rounded-full bg-[#160F23] border-2 border-purple-600">NODEMAILER</strong>
                                    <strong className="rounded-full col-span-2 bg-[#160F23] border-2 border-purple-600">CLOUDINARY</strong>
                                </div>
                            </section>
                        </main>
                    </article>
  )
}
