import NextImage from "next/image";
import { Image } from "@nextui-org/react";

export const Section_AboutMe = () => {
    return (
        <main className="bg-gradient-to-b from-slate-950 to-black w-full h-screen px-16 z-20 xl:px-16 lg:px-12 md:px-10 sm:px-8" id="section_about_me">

            <section className="w-full h-full relative">
                <div className="flex items-end w-full h-full absolute left-[-160px]">
                    <Image
                        as={NextImage}
                        width={2345}
                        height={3000}
                        removeWrapper
                        alt="Chica astronauta"
                        className="max-x-[2345px] max-h-[3000px] w-1/2 h-full z-10"
                        src="/img/astro.png"
                    />
                </div>
                <main className="grid grid-cols-5 h-full">
                    <article className="col-start-3 col-span-3 flex flex-col justify-center w-full h-full">
                        <header className="pb-10 flex align-middle justify-center">
                            <h1 className=" font-Vollkorn text-3xl text-white border-b-2 border-blue-600">{" SOBRE MI "}</h1>
                        </header>
                        <div className="text-white font-Poppins text-sm gap-3 px-5 flex flex-col experience-text relative">
                            <div className="marco top-[-27px] left-[-3px]"></div>
                            <p>
                                Buenas tardes, días o noches ☕. Es un placer, me llamo Facundo un <span className="text-cyan-300">soñador</span> desde que tengo memoria ⭐.
                            </p>
                            <p>
                                Comencé programando gracias a los videojuegos <span className="text-cyan-300">hace más de 8 años.</span> Hoy continúo desarrollado y terminando proyectos complejos desde cero.
                            </p>
                            <p>
                                Durante mi cursado estricto logre terminar 2 proyectos finales cuyas problemáticas respondían a las <span className="text-cyan-300">necesidades de la provincia.</span> Destacando 
                                el proyecto <span className="text-cyan-300">Empleos Formosa</span> el cual lo desarrollamos con <span className="text-cyan-300">supervisión y feedback</span> de la propia subsecretaria de empleo del gobierno de Formosa
                            </p>
                            <p>
                                Día a día busco <span className="text-cyan-300">descubrir un poco más de este mundo</span>, maravillándome con todo y mejorándome continuamente sin limitarme solo a la programación. 
                            </p>
                            <p>
                                <span className="text-cyan-300">Dejame con una buena taza de cafe y musica, para verme escribiendo y aprendiendo soñando hasta caer rendido.</span>
                            </p>
                        </div>
                    </article>
                </main>
            </section>
        </main>
    )
}