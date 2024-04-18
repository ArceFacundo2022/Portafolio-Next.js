import React from "react";

import PORFOLIO_FOTO from "@/../../public/foto_porta_2.png";
import { Tooltip, Image } from "@nextui-org/react";
import NextImage from "next/image";

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
  return (
    <main
      className="
            w-full h-screen grid grid-cols-8 px-6 z-10 
            2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8"
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
            </strong>{" "}
            residente de{" "}
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
              img: "-z-0",
              zoomedWrapper: "-z-0",
              blurredImg: "-z-0",
            }}
            as={NextImage}
            src={PORFOLIO_FOTO.src}
            alt="Foto de portafolio principal"
            width={680}
            height={760}
            isBlurred
          />
        </div>
      </section>
    </main>
  );
};
