import { SiHtml5, SiCss3, SiGraphql, SiJavascript, SiReact, SiExcalidraw, SiVercel, SiNextui, SiVite, SiTailwindcss } from "react-icons/si";
import { Tooltip } from "@nextui-org/react";

export const Stage_Technologies_RaM = () => {
  return (
                            <article className="py-3">
                                <header className="pb-6 text-6xl text-center text-green-600/70 font-Vollkorn font-extrabold">
                                    <p className="border-b-2 border-green-600/70">⚜ Tecnologías ⚜</p>
                                </header>
                                <main className="grid grid-cols-3 w-full gap-3">
                                    <section className="p-4 col-span-2 rounded-lg bg-green-900/80 grid grid-cols-5 gap-2 justify-center items-center">
                                        <Tooltip
                                            placement="top"
                                            content="HTML5"
                                            color="success"
                                            >
                                            
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiHtml5/>
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            placement="top"
                                            content="CSS3"
                                            color="success"
                                        >
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiCss3/>
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            placement="top"
                                            content="JavaScript"
                                            color="success"
                                        >
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiJavascript/>
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            placement="top"
                                            content="React.JS"
                                            color="success"
                                        >
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiReact/>
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            placement="top"
                                            content="Vite"
                                            color="success"
                                        >
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiVite/>
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            placement="bottom"
                                            content="GraphQL"
                                            color="success"
                                        >
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiGraphql/>
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            placement="bottom"
                                            content="ExcaliDraw"
                                            color="success"
                                        >
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiExcalidraw/>
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            placement="bottom"
                                            content="NextUI"
                                            color="success"
                                        >
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiNextui/>
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            placement="bottom"
                                            content="Tailwind"
                                            color="success"
                                        >
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiTailwindcss/>
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            placement="bottom"
                                            content="Vercel"
                                            color="success"
                                        >
                                            <div className="rounded-full border-2 border-green-600 flex justify-center items-center text-white text-3xl bg-[#122114] w-14 h-14">
                                                <SiVercel/>
                                            </div>
                                        </Tooltip>
                                        

                                    </section>
                                    <section className="p-4 col-span-1 rounded-lg bg-green-900/80">
                                        <h1 className=" text-center text-xl font-Vollkorn text-white pb-2">OTROS</h1>
                                        <div className="grid grid-cols-5 gap-5 text-center">
                                            <strong className="col-span-3 col-start-2 rounded-full bg-[#122114] border-2 border-green-600 px-2 text-white text-sm">ESLINT</strong>
                                        </div>
                                    </section>
                                </main>
                            </article>
  )
}
