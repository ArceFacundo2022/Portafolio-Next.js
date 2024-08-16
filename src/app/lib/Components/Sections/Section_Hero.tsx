'use client'

import { Tooltip, Image, Button } from "@nextui-org/react";
import { SiFigma, SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

export const Section_Hero = () => {
  const style_span = {
    dev: {
      "--i": 0,
    } as React.CSSProperties,

    design: {
      "--i": 1,
    } as React.CSSProperties,

    full: {
      "--i": 2,
    } as React.CSSProperties,
  };

  const copyEmail = async () => {
    try {
      navigator.clipboard.writeText("arcefacundosebastian@hotmail.com")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main
      className="
            w-full h-screen grid grid-cols-8 px-2 z-10 
            2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 xs:px-6 2xs:px-3"
      id="section_hero"
    >
      <section
        className="
            flex w-full col-span-8 flex-col justify-center z-10
            xl:col-span-5 md:col-span-4 sm:col-span-8"
      >
        <h1 className="text-3xl 2xl:text-9xl xl:text-6xl sm:text-5xl text-white font-Vollkorn">
          ARCE FACUNDO
        </h1>
        <h2 className="whoIm pb-4 font-Vollkorn text-xl text-slate-400/75 2xl:text-5xl xl:text-3xl sm:text-2xl">
          {"Soy "}
          <span
            className="text-blue-500/75"
            style={style_span.dev}
            data-text="Programador."
          >
            Programador.
          </span>
          <span
            className="text-blue-500/75 --i:1"
            style={style_span.design}
            data-text="Diseñador."
          >
            Diseñador.
          </span>
          <span
            className="text-blue-500/75 --i:2"
            style={style_span.full}
            data-text="FullStack."
          >
            FullStack.
          </span>
        </h2>
        <div className="py-2 w-3/4">
          <p className="font-Poppins text-sm text-slate-400/80 py-1 2xl:text-2xl xl:text-lg sm:text-sm">
            <strong className="text-blue-500/60">
              Desarrollador FullStack
            </strong>
            {" residente de "}
            <strong className="text-blue-500/60">Formosa - Argentina</strong>
          </p>
          <p className="font-Poppins text-sm text-slate-400/80 py-1 2xl:text-2xl xl:text-lg sm:text-sm">
            {"Especializado en el stack "}
            <Tooltip
              placement="bottom"
              content="MongoDB | Express | React.js | Node.js"
              color="primary"
            >
              <strong className="text-blue-500/60 border-b-2 border-blue-500/60">
                {"MERN"}
              </strong>
            </Tooltip>
            . Determinado a aprender y mejorar día a día.
          </p>

          <div className="hidden 2xs:block">
            <p className="pt-3 text-white font-Chakra 2xl:text-xl xl:text-lg sm:text-sm text-sm">
              Email de contacto:
            </p>
            <strong className="text-blue-700 font-Poppins 2xl:text-lg xl:text-lg sm:text-sm text-sm rounded-full px-2 bg-slate-800" id="email">arcefacundosebastian@hotmail.com</strong>
          </div>

        </div>
        <div className="flex flex-wrap gap-2">
          <a href="https://github.com/ArceFacundo2022">
            <Button  
            size="md" isIconOnly aria-label="Github" 
            radius="full" className="bg-gradient-to-tr  from-indigo-900 to-blue-900 border-small border-white/50 shadow-blue-950/30 text-white text-xl shadow-lg py-0"
            >
              <SiGithub/>
            </Button>
          </a>

          <a href="https://www.figma.com/@arcefacundo">
            <Button  
              size="md" isIconOnly aria-label="Figma" 
              radius="full" className="bg-gradient-to-tr  from-indigo-900 to-blue-900 border-small border-white/50 shadow-blue-950/30 text-white text-xl shadow-lg py-0"
            >
              <SiFigma/>
            </Button>
          </a>

          <a href="https://www.linkedin.com/in/facundo-sebastian-arce-9699992b8/">
            <Button 
            size="md" isIconOnly aria-label="LinkedIn" 
            radius="full" className="bg-gradient-to-tr  from-indigo-900 to-blue-900 border-small border-white/50 shadow-blue-950/30 text-white text-xl shadow-lg"
            >
              <SiLinkedin/>
            </Button>
          </a>

          <a href="/file/CV-Arce-Facundo.pdf">
            <Button 
            size="md" isIconOnly aria-label="LinkedIn" 
            radius="full" className="bg-gradient-to-tr  from-indigo-900 to-blue-900 border-small border-white/50 shadow-blue-950/30 text-white text-xl shadow-lg"
            >
              CV
            </Button>
          </a>

          <a  className="2xs:hidden">
            <Button 
            size="md" isIconOnly aria-label="LinkedIn" onClick={()=> { copyEmail()}}
            radius="full" className="bg-gradient-to-tr  from-indigo-900 to-blue-900 border-small border-white/50 shadow-blue-950/30 text-white text-xl shadow-lg"
            >
              <SiMaildotru/>
            </Button>
          </a>
        </div>

      </section>

      <section
        className="
          flex justify-end items-end absolute -z-0 bottom-[0vh]
          xl:col-span-3 md:col-span-4 sm:col-span-8 sm:bottom-[0vh] sm:absolute md:relative"
      >
        <div className="-z-0">
          <Image
            classNames={{
              wrapper: "-z-0 ",
              img: "-z-0 w-full h-auto",
              zoomedWrapper: "-z-0",
              blurredImg: "-z-0",
            }}
            src={"/img/foto_porta_2.webp"}
            alt="Foto de portafolio principal"
            isBlurred
          />
        </div>
      </section>
    </main>
  );
};
