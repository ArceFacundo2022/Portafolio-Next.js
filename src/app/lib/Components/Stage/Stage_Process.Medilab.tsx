import { Image } from '@nextui-org/react'
import NextImage from "next/image";

export const Stage_Process_Medilab = () => {
  return (
        <article className="py-3">
            <header className="pb-6 text-xl 2xs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center text-blue-600/70 font-Vollkorn font-extrabold">
                <p className="border-b-2 border-blue-600/70">⚜ Proceso ⚜</p>
            </header>
            <main className="p-4 rounded-lg bg-blue-950/50 w-full grid grid-cols-6 gap-3">
                <div className="text-tiny sm:text-sm col-span-6 xs:col-span-3 sm:col-span-4">
                    <p className="pb-3">
                        Al comenzar con el proyecto realizamos prácticas de <strong className=" text-blue-400/80">ingeniería de sistemas</strong> entendiendo los <strong className=" text-blue-400/80"></strong>objetivos generales
                        como específicos, <strong className=" text-blue-400/80">limites</strong>, <strong className=" text-blue-400/80">alcance</strong> y <strong className=" text-blue-400/80">requisitos funcionales</strong> del sistema que brindaríamos.
                    </p>
                    <p className="pb-3">
                        Al terminar de analizar el proyecto y determinar todos los requerimientos funcionales, comenzamos a organizarnos bajo la metodología <strong className=" text-blue-400/80">SCRUM</strong> para 
                        la producción del software, para garantizar la entrega del proyecto mínimo y viable.
                    </p>
                    <p>
                        Durante la producción del proyecto rotamos las posiciones según las historias de usuario que debíamos cumplir, por lo que tome
                        todas las posiciones del proyecto junto a mis 2 compañeros. <strong className=" text-blue-400/80">Tomamos los papeles necesarios</strong> para llegar a tiempo a la presentación final
                    </p>
                </div>
                <div className="hidden xs:block xs:col-span-3 sm:col-span-2">
                    <Image
                        removeWrapper
                        as={NextImage}
                        width={1090}
                        height={1930}
                        alt="Arquitectura del proyecto"
                        className="max-w-[545px] max-h-[965px] w-full h-full"
                        src="/img/Arquitectura.png"
                    />
                </div>
            </main>
        </article>
  )
}
