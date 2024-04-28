import { Button } from "@nextui-org/react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const Footer = () => {
    return (
      <footer className="bg-slate-200 w-full h-[20vh] px-16 z-20 xl:px-16 lg:px-12 md:px-10 sm:px-8" id="Footer">
        <section className="py-5 flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <p className="text-2xl font-Chakra text-black">Desarrollado con ❤ por <strong className=" text-blue-900">Arce Facundo</strong></p>
                <div className="flex gap-2">
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
                </div>
            </div>
            <div className="flex flex-col justify-end gap-2">
                <p className="pt-3 text-black font-Chakra xl:text-2xl lg:text-xl sm:text-lg text-sm">
                    Email de contacto:
                </p>
                <strong className="text-white font-Poppins 2xl:text-lg xl:text-lg sm:text-sm text-sm rounded-full px-2 bg-black">arcefacundosebastian@hotmail.com</strong>
            </div>
        </section>
      </footer>
    )
}
