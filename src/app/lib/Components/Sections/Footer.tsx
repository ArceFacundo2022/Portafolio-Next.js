'use client'

import { Button } from "@nextui-org/react";
import { SiFigma, SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";
import { DropDown_Tech_Footer } from "../DropDown_Tech_Footer";

export const Footer = () => {
    
    const copyEmail = async () => {
        try {
            navigator.clipboard.writeText("arcefacundosebastian@hotmail.com")
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <footer className="bg-slate-200 w-full min-h-[20vh] px-2 z-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 xs:px-6 2xs:px-3" id="Footer">
        <section className="py-5 flex justify-between items-center md:gap-3 gap-4 md:flex-row flex-col">
            <div className="flex flex-col gap-2 md:order-1 order-3">
                <p className="text-xl 2xs:text-2xl md:text-lg lg:text-xl xl:text-2xl font-Chakra text-black">Desarrollado con ❤ por <strong className=" text-blue-900">Arce Facundo</strong> 2024</p>
                <div className="flex flex-wrap gap-2 md:justify-start justify-center">
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
                        size="md" isIconOnly aria-label="Curriculum Vitae" 
                        radius="full" className="bg-gradient-to-tr  from-indigo-900 to-blue-900 border-small border-white/50 shadow-blue-950/30 text-white text-xl shadow-lg"
                        >
                        CV
                        </Button>
                    </a>

                    <a  className="md:hidden">
                        <Button 
                        size="md" isIconOnly aria-label="Email" onClick={()=> { copyEmail()}}
                        radius="full" className="bg-gradient-to-tr  from-indigo-900 to-blue-900 border-small border-white/50 shadow-blue-950/30 text-white text-xl shadow-lg"
                        >
                        <SiMaildotru/>
                        </Button>
                    </a>
                </div>
            </div>
            <hr className="order-2 w-full border-b-2 border-black md:hidden"></hr>
            <div className="md:order-2 order-1 flex justify-center items-center px-[3px] border-x-2 border-black rounded-xl">
                <DropDown_Tech_Footer/>
            </div>
            <div className="md:flex md:flex-col md:justify-end md:gap-2 hidden order-3">
                <p className="pt-3 text-black font-Chakra lg:text-xl md:text-lg text-medium">
                    Email de contacto:
                </p>
                <strong className="text-white font-Poppins lg:text-lg md:text-medium text-sm rounded-full px-2 bg-black">arcefacundosebastian@hotmail.com</strong>
            </div>
        </section>
      </footer>
    )
}
