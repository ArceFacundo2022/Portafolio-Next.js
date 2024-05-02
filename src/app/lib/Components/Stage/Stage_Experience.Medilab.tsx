import { Image } from "@nextui-org/react"

export const Stage_Experience_Medilab = () => {
  return (
                    <article className="py-3">
                        <header className="pb-6 text-xl 2xs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center text-blue-600/70 font-Vollkorn font-extrabold">
                            <p className="border-b-2 border-blue-600/70">⚜ Experiencia ⚜</p>
                        </header>
                        <main className="p-4 rounded-lg bg-blue-950/50 w-full">
                            <div className="text-tiny xs:text-sm pb-3">
                                <p className="pb-3">
                                    Este proyecto fue la primera visión de un proyecto completo en el desarrollo web, un proyecto que comenzó con una simple idea para <strong className=" text-blue-400/80">resolver una problemática</strong> hasta
                                    la demostración y presentación del mismo a final de año, un año en que comenzamos aprendiendo con lenguaje en pseudo código y terminamos realizando un <strong className=" text-blue-400/80">proyecto FullStack</strong>
                                </p>
                                <p className="pb-3">
                                    La experiencia fue difícil y frustrante cuanto menos, no había día que no pasáramos aportando algo al proyecto o aprender del medio, ya que se esperaba mucho a final de año. 
                                    
                                </p>
                                <p className="pb-3">
                                    Acompañado por los profesores y compañeros, tanto de equipo como del propio cursado fuimos aprendiendo poco a poco prácticas y conocimientos dentro y fuera del programa educativo
                                    del instituto, consiguiendo así poder <strong className=" text-blue-400/80">trabajar entre nosotros</strong> y particularmente de <strong className=" text-blue-400/80">forma autodidacta</strong> en ocasiones.
                                </p>
                            </div>
                            <Image
                                removeWrapper
                                alt="Card MediLab project"
                                className="w-full h-full object-cover"
                                src="/img/Presentacion.jpg"
                            />
                        </main>
                    </article>
  )
}
