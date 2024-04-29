'use client'

import { Button } from "@nextui-org/react";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

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
        <section className="py-5 flex justify-between items-center gap-3">
            <div className="flex flex-col gap-2">
                <p className="text-xl xs:text-2xl sm:text-lg md:text-xl lg:text-2xl font-Chakra text-black">Desarrollado con ❤ por <strong className=" text-blue-900">Arce Facundo</strong></p>
                <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/ArceFacundo2022">
                        <Button  
                        size="md" isIconOnly aria-label="Github" 
                        radius="full" className="bg-gradient-to-tr  from-indigo-900 to-blue-900 border-small border-white/50 shadow-blue-950/30 text-white text-xl shadow-lg py-0"
                        >
                        <SiGithub/>
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

                    <a  className="sm:hidden">
                        <Button 
                        size="md" isIconOnly aria-label="LinkedIn" onClick={()=> { copyEmail()}}
                        radius="full" className="bg-gradient-to-tr  from-indigo-900 to-blue-900 border-small border-white/50 shadow-blue-950/30 text-white text-xl shadow-lg"
                        >
                        <SiMaildotru/>
                        </Button>
                    </a>
                </div>
            </div>
            <div className="sm:flex sm:flex-col sm:justify-end sm:gap-2 hidden">
                <p className="pt-3 text-black font-Chakra lg:text-xl md:text-lg text-medium">
                    Email de contacto:
                </p>
                <strong className="text-white font-Poppins lg:text-lg md:text-medium text-sm rounded-full px-2 bg-black">arcefacundosebastian@hotmail.com</strong>
            </div>
        </section>
      </footer>
    )
}
