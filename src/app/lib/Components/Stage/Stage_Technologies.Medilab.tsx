import { SiHtml5, SiCss3, SiExpress, SiJavascript, SiMongodb, SiReact, SiNodedotjs, SiBootstrap, SiPostman, SiTrello } from "react-icons/si";
import { Tooltip } from "@nextui-org/react";

export const Stage_Technologies_Medilab = () => {
  return (
                    <article className="py-3">
                        <header className="pb-6 text-6xl text-center text-blue-600/70 font-Vollkorn font-extrabold">
                            <p className="border-b-2 border-blue-600/70">⚜ Tecnologías ⚜</p>
                        </header>
                        <main className="grid grid-cols-3 w-full gap-3">
                            <section className="p-4 col-span-2 rounded-lg bg-blue-950/80 grid grid-cols-5 gap-2 justify-center items-center">
                                <Tooltip
                                    placement="top"
                                    content="HTML5"
                                    color="primary"
                                    >
                                    
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiHtml5/>
                                    </div>
                                </Tooltip>
                                <Tooltip
                                    placement="top"
                                    content="CSS3"
                                    color="primary"
                                >
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiCss3/>
                                    </div>
                                </Tooltip>
                                <Tooltip
                                    placement="top"
                                    content="JavaScript"
                                    color="primary"
                                >
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiJavascript/>
                                    </div>
                                </Tooltip>
                                <Tooltip
                                    placement="top"
                                    content="Bootstrap"
                                    color="primary"
                                >
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiBootstrap/>
                                    </div>
                                </Tooltip>
                                <Tooltip
                                    placement="top"
                                    content="React.JS"
                                    color="primary"
                                >
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiReact/>
                                    </div>
                                </Tooltip>
                                <Tooltip
                                    placement="bottom"
                                    content="Node.JS"
                                    color="primary"
                                >
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiNodedotjs/>
                                    </div>
                                </Tooltip>
                                <Tooltip
                                    placement="bottom"
                                    content="Express"
                                    color="primary"
                                >
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiExpress/>
                                    </div>
                                </Tooltip>
                                <Tooltip
                                    placement="bottom"
                                    content="Postman"
                                    color="primary"
                                >
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiPostman/>
                                    </div>
                                </Tooltip>
                                <Tooltip
                                    placement="bottom"
                                    content="MongoDB"
                                    color="primary"
                                >
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiMongodb/>
                                    </div>
                                </Tooltip>
                                <Tooltip
                                    placement="bottom"
                                    content="Trello"
                                    color="primary"
                                >
                                    <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                        <SiTrello/>
                                    </div>
                                </Tooltip>
                                

                            </section>
                            <section className="p-4 col-span-1 rounded-lg bg-blue-950/80">
                                <h1 className=" text-center text-xl font-Vollkorn text-white pb-2">OTROS</h1>
                                <div className="grid grid-cols-2 gap-5 text-center">
                                    <strong className=" rounded-full bg-[#101626] border-2 border-blue-600 px-2 text-white text-sm">JWT</strong>
                                    <strong className="rounded-full bg-[#101626] border-2 border-blue-600 px-2 text-white text-sm">SCRUM</strong>
                                    <strong className="rounded-full bg-[#101626] border-2 border-blue-600 px-2 text-white text-sm">REST</strong>
                                </div>
                            </section>
                        </main>
                    </article>
  )
}
