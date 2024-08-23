
import { Image } from "@nextui-org/react";

export const Section_AboutMe = () => {
    return (
        <main className="bg-gradient-to-b from-slate-950 to-black w-full min-h-screen px-2 z-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 xs:px-6 2xs:px-3" id="section_about_me">

            <section className="w-full min-h-screen h-full relative">
                <div className="flex items-end w-full h-full absolute left-[-160px] bottom-[0]">
                    <Image
                        removeWrapper
                        alt="Chica astronauta"
                        className="max-x-[2345px] max-h-[3000px] w-full sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 h-full -z-0"
                        src="/img/astro.png"
                    />
                </div>
                <main className="grid grid-cols-1 sm:grid-cols-5 min-h-screen h-full pb-8 sm:pb-0">
                    <article className="col-span-1 sm:col-start-2 sm:col-span-4 md:col-start-3 md:col-span-3 flex flex-col justify-center w-full h-full">
                        <header className="pt-20 pb-10 flex align-middle justify-center">
                            <h1 className=" font-Vollkorn text-3xl text-white border-b-2 border-blue-600 z-10">{" SOBRE MI "}</h1>
                        </header>
                        <div className="about-me-text text-white font-Poppins text-sm gap-3 p-5 flex flex-col relative rounded-lg bg-black border-2 border-cyan-700/75 " >
                            <p className=" rounded-lg bg-black">
                                Buenas tardes, días o noches ☕. Es un placer, me llamo Facundo un <span className="text-cyan-300">soñador</span> y <span className="text-cyan-300">artista</span> desde que tengo memoria ⭐.
                            </p>
                            <p className=" rounded-lg bg-black">
                                Comencé programando gracias a los videojuegos hace <span className="text-cyan-300">más de 8 años.</span> Y Hoy lidero equipos de JRs en proyectos desarrollados desde 0.
                            </p>
                            <p className=" rounded-lg bg-black">
                                Durante mi trayectoria termine proyectos que <span className="text-cyan-300">resolvían algunas de las problemáticas de mi provincia</span> y supliendo las necesidades de nuestros clientes. 
                                Tuve la increíble experiencia de <span className="text-cyan-300">liderar un equipo entero de desarrolladores FrontEnd Jrs</span> y trabajar como cabecera junto a los demás 
                                departamentos en un <span className="text-cyan-300">proyecto remoto en España.</span>
                            </p>
                            <p className=" rounded-lg bg-black">
                                Día a día busco <span className="text-cyan-300">descubrir un poco más de este mundo</span>, maravillándome con todo y mejorándome continuamente sin limitarme solo a la programación. 
                            </p>
                            <p className=" rounded-lg bg-black">
                                <span className="text-cyan-300">Déjame con una buena taza de café y música, para verme escribiendo y aprendiendo soñando hasta caer rendido.</span>
                            </p>
                        </div>
                    </article>
                </main>
            </section>
        </main>
    )
}