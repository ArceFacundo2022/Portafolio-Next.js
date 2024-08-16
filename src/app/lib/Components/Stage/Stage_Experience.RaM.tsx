import { Image } from "@nextui-org/react";

export const Stage_Experience_RaM = () => {
  return (
                            <article className="py-3">
                                <header className="pb-6 text-xl 2xs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center text-green-600/70 font-Vollkorn font-extrabold">
                                    <p className="border-b-2 border-green-600/70">⚜ Experiencia ⚜</p>
                                </header>
                                <main className="p-4 rounded-lg bg-green-900/50 w-full flex flex-col sm:grid sm:grid-cols-5 sm:grid-rows-1 gap-3">
                                    <div className="text-tiny xs:text-sm order-1 sm:order-[0] sm:col-span-3">
                                        <p>
                                            Este Proyecto <strong className=" text-green-400/80">llego de forma inesperada</strong> ya encontrando un dia tarde el email con la prueba tecnica y ya con el tiempo corriendo. Recuerdo en ese momento leerlo y automaticamente
                                            sentarme a revisar todos los requerimientos, componentes, tecnologias, recursos necesarios y el tiempo que tenia para ver si era capas de llegar. Para luego en <strong className=" text-green-400/80">plena noche</strong> terminar 
                                            el diseño con los componentes principales sabiendo que llegaba a pesar de perder 1 dia.
                                        </p>
                                    </div>
                                    <div className="order-[0] sm:col-span-2 flex justify-center items-center">
                                        <Image
                                            removeWrapper
                                            alt="Icono Rick and Morty"
                                            className="max-w-[240px] max-h-[240px] sm:w-full sm:h-auto 2xs:w-2/5 w-3/5"
                                            src="/img/icon_RaM.webp"
                                        />
                                    </div>
                                    <div className="text-tiny xs:text-sm col-span-5">
                                        <p className="pb-3">
                                            Me habian solicitado utilizar GraphQl tecnologia que <strong className=" text-green-400/80">nunca utilice</strong>, me encanto al estudiarlo y usarlo{" (Es una tecnologia que sin dudas practicare a futuro)."}
                                        </p>
                                        <p className="pb-3">
                                            Fue una prueba de <strong className=" text-green-400/80">tecnologias que domino y algunas nuevas</strong> que sin dudas agregare a mi repertorio, ademas de practicar con tecnologias que estudiaba y otros recursos que deseaba probar
                                            pero no tenia la <strong className=" text-green-400/80">oportunidad de implementarlo</strong>{" (Como es el caso del ScrollInfinito). "}
                                        </p>
                                        <p>
                                            <strong className=" text-green-400/80">¡Sin dudas un trabajo que me encanto hacer 🙌!</strong>
                                        </p>
                                    </div>
                                </main>
                            </article>
  )
}
