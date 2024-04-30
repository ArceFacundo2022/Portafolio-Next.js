import { Image } from "@nextui-org/react"
import NextImage from "next/image";

export const Stage_Process_Empleos = () => {
  return (
                    <article className="py-3">
                        <header className="pb-6 text-xl 2xs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center text-purple-600/70 font-Vollkorn font-extrabold">
                            <p className="border-b-2 border-purple-600/70">⚜ Proceso ⚜</p>
                        </header>
                        <main className="p-4 rounded-lg bg-purple-950/50 w-full flex flex-col gap-3 text-sm">
                            <div>
                                <p className="pb-3">
                                    Al comenzar con el proyecto recibimos una <strong className=" text-purple-400/80">reunion con los miembros de la subsecretaria de empleo</strong>, los cuales nos explicaron la <strong className=" text-purple-400/80">problematica real de la provincia</strong> y
                                    como buscaban implementar un producto de software capaz de solucionarlo, por lo que nos impulsaron a completar un proyecto similar, por el cual trabajariamos todo el año
                                    con los <strong className=" text-purple-400/80">objetivos, alcances, limites y requisitos</strong> que nos encomendaron.
                                </p>
                                <p className="pb-3">
                                    Al momento de abordar los requisitos del proyecto acordabamos <strong className=" text-purple-400/80">reuniones por zoom</strong> con un miembro del equipo de la subsecretaria para brindar <strong className=" text-purple-400/80">evaluacion y feedback</strong> del Proceso
                                    bajo la <strong className=" text-purple-400/80"></strong>metodologia SCRUM, por lo que semanalmente presentabamos nuestros avances y <strong className=" text-purple-400/80">acordabamos entregas</strong> en el trascurso del año.
                                </p>
                                <p>
                                    <strong className=" text-purple-400/80">El proyecto evolucionaba y cambiando constantemente</strong> por las nuevas tecnologias que nos impulsaban a usar incluso con el proyecto ya avanzado, por lo que gran parte del mismo mi posicion
                                    del mismo fue rotando de backend a front, hasta que los ultimos meses cambiamos el backend completo para <strong className=" text-purple-400/80">implementar Nest.js</strong> al mismo por lo que 2 de mis compañeros se empeñaron
                                    en ello y <strong className=" text-purple-400/80">me quede con el FrontEnd</strong> hasta el final del proyecto. 
                                </p>

                            </div>
                            <div>
                                <Image
                                    as={NextImage}
                                    width={1370}
                                    height={770}
                                    removeWrapper
                                    alt="Modal con informacion del postulante"
                                    className="w-full h-full max-w-[1370px] max-h-[770px]"
                                    src="/img/Problematica_empleos.png"
                                />
                            </div>
                            
                        </main>
                    </article>
  )
}
