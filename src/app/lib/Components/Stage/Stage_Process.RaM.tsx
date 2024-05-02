import NextImage from "next/image";
import { Image } from "@nextui-org/react";

export const Stage_Process_RaM = () => {
  return (
                            <article className="py-3">
                                <header className="pb-6 text-xl 2xs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center text-green-600/70 font-Vollkorn font-extrabold">
                                    <p className="border-b-2 border-green-600/70">⚜ Proceso ⚜</p>
                                </header>
                                <main className="p-4 rounded-lg bg-green-900/50 w-full grid grid-row-2 gap-3 text-tiny xs:text-sm">
                                    <div className="col-row-1">
                                        <p className="pb-3">
                                            Al momento de recibir la <strong className=" text-green-400/80">prueba tecnica</strong> y tener <strong className=" text-green-400/80">5 dias para realizarla</strong>, comence a extraer todo lo que necesitaba de los requisitos y objetivos de la prueba, proponiendome
                                            crear una base de todo lo que tendria la pagina web y el tiempo que tendria que emplear para terminar cada parte para llegar a terminarlo a tiempo.
                                        </p>
                                        <p className="pb-3">
                                            Tome el <strong className=" text-green-400/80">ExcaliDraw</strong> y me tome el primer dia para diseñar y analizar a profundidad, para luego enviar el <strong className=" text-green-400/80">prototipo</strong> y comenzar creando el repositorio en <strong className=" text-green-400/80">github</strong>. 
                                        </p>
                                        <p className="pb-3">
                                            Crees las bases de los <strong className=" text-green-400/80">componentes principales</strong>, dia a dia me ocupaba de un componente principal, estudiaba e investigaba las tecnologias requeridas, detallaba agregando dependencias, logica y nuevos 
                                            componentes para cumplir con la parte del proyecto.
                                        </p>
                                        <p>
                                            Hasta llegar el ultimo dia, levantar la pagina con el <strong className=" text-green-400/80">Host de Vercel</strong>, darle los detalles y dar aviso para ser evaluado .
                                        </p>

                                    </div>
                                    <div className="grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <Image
                                                as={NextImage}
                                                width={1344}
                                                height={554}
                                                removeWrapper
                                                alt="Card MediLab project"
                                                className="w-full h-full"
                                                src="/img/Esquema_RaM.png"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                removeWrapper
                                                as={NextImage}
                                                width={974}
                                                height={463}
                                                alt="Card MediLab project"
                                                className="w-full h-full"
                                                src="/img/Esquema_RaM_2.png"
                                            />
                                        </div>

                                    </div>
                                    
                                </main>
                            </article>
  )
}
