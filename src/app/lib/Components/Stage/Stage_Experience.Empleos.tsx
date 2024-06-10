import NextImage from "next/image";
import { Image } from "@nextui-org/react"

export const Stage_Experience_Empleos = () => {
  return (
                    <article className="py-3">
                        <header className="pb-6 text-xl 2xs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center text-purple-600/70 font-Vollkorn font-extrabold">
                            <p className="border-b-2 border-purple-600/70">⚜ Experiencia ⚜</p>
                        </header>
                        <main className="p-4 rounded-lg bg-purple-950/50 w-full">
                            <div className="text-tiny sm:text-sm pb-3">
                                <p className="pb-3">
                                    Este proyecto fue para nosotros un paso más para entender y conocer como es el <strong className=" text-purple-400/80">desarrollo profesional</strong> de una página web, trabajando en un proyecto guiado por profesionales del area
                                </p>
                                <p className="pb-3">
                                    A pesar de contar con la <strong className=" text-purple-400/80">experiencia</strong> del proyecto anterior, el proceso siguió siendo difícil y frustrante por cómo nos manejamos todo el año para <strong className=" text-purple-400/80">satisfacer los requerimientos</strong> que 
                                    solicitaban nuestros profesores y el equipo de la subsecretaria, que hicieron que el proyecto vaya <strong className=" text-purple-400/80">evolucionando</strong> con los meses partiendo de las tecnologías que conocíamos a usar algunas que eran terreno desconocido en el momento, pero que nos
                                    ayudo a ver el <strong className=" text-purple-400/80">potencial que tenemos</strong> de poder <strong className=" text-purple-400/80">implementar tecnologías nuevas según los requerimientos que se solicitaban</strong>.
                                </p>
                                <p className="pb-3">
                                    Aprendimos a trabajar de <strong className=" text-purple-400/80">manera conjunta</strong> y de <strong className=" text-purple-400/80">manera autónoma</strong> confiando en los demás compañeros para presentar al final del año el proyecto terminado y gracias al apoyo nuevamente de los profesores y 
                                    compañeros, pudimos pararnos nuevamente en el escenario frente a las <strong className=" text-purple-400/80">autoridades del instituto y otros sectores</strong> mostrando todo <strong className=" text-purple-400/80">nuestro esfuerzo y dedicación</strong> una vez más ⭐.
                                </p>
                            </div>
                            <Image
                                as={NextImage}
                                width={4030}
                                height={2180}
                                removeWrapper
                                alt="Presentacion final de Empleos Formosa"
                                className="w-full h-full object-cover"
                                src="/img/Presentacion_Empleos.webp"
                            />
                        </main>
                    </article>
  )
}
