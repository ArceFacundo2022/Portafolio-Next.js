import NextImage from "next/image";
import { Image } from "@nextui-org/react";

export const Section_Studies = () => {
  return (
    <main className="bg-slate-950 w-full min-h-screen px-2 z-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 xs:px-6 2xs:px-3 grid grid-cols-1 lg:grid-cols-2 gap-5" id="section_studies">
        <section className="col-span-1">
            <header className="pt-20 pb-10 flex align-middle justify-center">
                <h1 className=" font-Vollkorn text-3xl text-white border-b-2 border-blue-600">{" ESTUDIOS "}</h1>
            </header>
            <main className="bg-blue-950/55 p-3 rounded-lg flex flex-col gap-3">
                <article className="border-2 border-blue-600 rounded-lg grid grid-rows-3 grid-cols-1 2xs:grid-rows-2 sm:grid-cols-5 sm:grid-rows-1 gap-3">
                    <div className="col-span-1 row-span-1 rounded-tl-lg rounded-tr-lg rounded-bl-none sm:rounded-tr-none sm:rounded-bl-lg bg-white flex justify-center items-center content-center p-3">
                        <Image
                            as={NextImage}
                            width={800}
                            height={680}
                            removeWrapper
                            alt="Logo Instituto Politecnico Formosa"
                            className="max-x-[800px] max-h-[680px] sm:w-auto sm:h-auto xs:w-1/3 w-1/2"
                            src="/img/IPF_Logo.png"
                        />
                    </div>
                    <div className="col-span-1 row-span-2 2xs:row-span-1 sm:row-span-1 sm:col-span-4 text-sm xl:text-tiny 2xl:text-sm text-slate-400/75 py-3 pr-3 pl-3 sm:pr-3 sm:pl-0">
                        <h2 className="text-lg xl:text-medium 2xl:text-lg font-semibold font-Vollkorn text-cyan-500 pb-2">Instituto Politecnico Formosa “Dr Alberto Zorrilla”</h2>
                        <p>Graduado como “Técnico superior en desarrollo de software multiplataforma” en un cursado de estudios estrictos</p>
                        <div className="flex justify-between gap-3 font-thin pt-2 text-cyan-500/40">
                            <p>Del 2022 hasta el 2023</p>
                            <p>Formosa Capital / Formosa</p>
                        </div>
                    </div>
                    
                </article>

                <article className="border-2 border-blue-600 rounded-lg grid grid-rows-3 grid-cols-1 2xs:grid-rows-2 sm:grid-cols-5 sm:grid-rows-1 gap-3">
                    <div className="col-span-1 row-span-1 rounded-tl-lg rounded-tr-lg rounded-bl-none sm:rounded-tr-none sm:rounded-bl-lg bg-white flex justify-center items-center content-center p-3">
                        <Image
                            as={NextImage}
                            width={525}
                            height={450}
                            removeWrapper
                            alt="Logo Instituto universitario IES siglo 21"
                            className=" max-x-[525px] max-h-[450px] sm:w-auto sm:h-auto xs:w-1/3 w-1/2"
                            src="/img/IES_Logo.png"
                        />
                    </div>
                    <div className="col-span-1 row-span-2 2xs:row-span-1 sm:row-span-1 sm:col-span-4 text-sm xl:text-tiny 2xl:text-sm text-slate-400/75 py-3 pr-3 pl-3 sm:pr-3 sm:pl-0">
                        <h2 className="text-lg xl:text-medium 2xl:text-lg font-semibold font-Vollkorn text-cyan-500 pb-2">Colegio Universitario IES Ciclo 21</h2>
                        <p>Cursado la carrera “Técnico Superior en diseño de videojuegos y simuladores virtuales” hasta el ultimo semestre (pausado por falta de fondos)</p>
                        <div className="flex justify-between gap-3 font-thin pt-2 text-cyan-500/40">
                            <p>Del 2019 hasta el 2021</p>
                            <p>Córdoba Capital / Córdoba</p>
                        </div>
                    </div>
                </article>

                <article className="border-2 border-blue-600 rounded-lg grid grid-rows-3 grid-cols-1 2xs:grid-rows-2 sm:grid-cols-5 sm:grid-rows-1 gap-3">
                    <div className="col-span-1 row-span-1 rounded-tl-lg rounded-tr-lg rounded-bl-none sm:rounded-tr-none sm:rounded-bl-lg bg-white flex justify-center items-center content-center p-3">
                        <Image
                            as={NextImage}
                            width={168}
                            height={168}
                            removeWrapper
                            alt="Logo IAC (Instituto Argentino de Computacion)"
                            className=" max-x-[168] max-h-[168px] sm:w-auto sm:h-auto xs:w-1/3 w-1/2"
                            src="/img/IAC_logo.png"
                        />
                    </div>
                    <div className="col-span-1 row-span-2 2xs:row-span-1 sm:row-span-1 sm:col-span-4 text-sm xl:text-tiny 2xl:text-sm text-slate-400/75 py-3 pr-3 pl-3 sm:pr-3 sm:pl-0">
                        <h2 className="text-lg xl:text-medium 2xl:text-lg font-semibold font-Vollkorn text-cyan-500 pb-2">IAC - Instituto Argentino de Computación</h2>
                        <p>Curso de Diseño grafico de 6 meses.</p>
                        <div className="flex justify-between gap-3 font-thin pt-2 text-cyan-500/40">
                            <p>Cursado el año 2017</p>
                            <p>Formosa Capital / Formosa</p>
                        </div>
                    </div>
                </article>
            </main>

        </section>

        <section className="col-span-1">
            <header className="pt-20 pb-10 flex align-middle justify-center">
                <h1 className=" font-Vollkorn text-3xl text-white border-b-2 border-blue-600">{" EXPERIENCIA "}</h1>
            </header>
            <main className="p-5 rounded-lg relative">
                <div className="absolute w-full flex justify-end">
                    <div>
                        <Image
                            as={NextImage}
                            width={1295}
                            height={3000}
                            removeWrapper
                            alt="Chico jugando distraido"
                            className=" max-x-[1295px] max-h-[3000px] w-full h-[75vh] -z-0"
                            src="/img/gamestation.png"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center h-[68vh] font-Vollkorn text-cyan-300 text-center text-2xl w-full md:w-3/4 lg:w-full xl:w-3/4">
                    <div className="p-2 experience-text relative bg-opacity-50 backdrop-blur-sm">
                        <div className="marco top-[-10px]"></div>
                        <h2 className="z-[1000]">
                            Tengo Experiencia...
                        </h2>

                        <h2>
                            Solo no tuve la oportunidad de
                        </h2>

                        <h2>
                            demostrarlo en un trabajo...
                        </h2>
                    </div>

                </div>

            </main>
        </section>
    </main>
  )
}

