'use client'

import { Tooltip, Card, CardHeader, CardFooter, Image} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
import { useState } from "react";

import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';

import { SiHtml5, SiCss3, SiExpress, SiJavascript, SiMongodb, SiReact, SiNodedotjs, SiBootstrap, SiPostman, SiTrello } from "react-icons/si";

export const Card_API_RaM = () => {

    const [open, setOpen] = useState(false)

    const images = [
        {
            original: "/Api_RaM_img01.png",
            thumbnail: "/Api_RaM_img01.png",
        },
        {
            original: "/Api_RaM_img02.png",
            thumbnail: "/Api_RaM_img02.png",
        },
    ];

return (
        <>

            <Card isFooterBlurred className="w-full h-[300px] col-span-2 border-4 border-blue-950 ring-2 ring-blue-600">
                <CardHeader className="absolute z-10 top-0 flex-col items-start bg-opacity-50 backdrop-blur-sm">
                    <p className="text-tiny text-white/60 uppercase font-bold">2024</p>
                    <h4 className="text-white font-Vollkorn text-2xl">RICK AND MORTY API</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card Rick and Morty Api project"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="/Api_RaM_img01.png"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                        <p className="text-white text-tiny">Prueba Tecnica</p>
                        <p className="text-white text-tiny">Consumo de Api GraphQl</p>
                    </div>
                    <Button className="border-2 border-blue-600 bg-blue-950 text-white" onPress={() => { setOpen(true)}} radius="full" size="sm">
                        Ver Mas
                    </Button>
                </CardFooter>
            </Card>
                <Modal 
                    backdrop="opaque" 
                    isOpen={open} 
                    onClose={()=>{setOpen(false)}}
                    radius="lg"
                    placement="top"
                    size="2xl"
                    classNames={{
                        body: "py-6",
                        backdrop: "bg-green-950/75 backdrop-opacity-40",
                        base: "border-2 border-[#2B4227] bg-[#122114] text-[#a8b0d3]",
                        header: "border-b-[2px] border-[#2B4227]",
                        footer: "border-t-[2px] border-[#2B4227]",
                        closeButton: "hover:bg-white/5 active:bg-white/10",
                    }}
                    >
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex gap-1 flex-col text-center">
                            <h1 className=" text-green-600 font-Vollkorn text-3xl">Rick And Morty API</h1>
                            <h2 className=" text-xl text-slate-200">Prueba tecnica de consumo de API GraphQL</h2>
                        </ModalHeader>
                        <ModalBody>
                            <article>
                                <ImageGallery
                                    items={images}
                                    showPlayButton={false}
                                    showThumbnails={false}
                                />
                            </article>
                            <article className="py-3 w-full relative">
                                <header className="pb-6 text-6xl text-center text-blue-600/70 font-Vollkorn font-extrabold">
                                    <p className="border-b-2 border-blue-600/70">⚜ Descripción ⚜</p>
                                </header>
                                <main className="p-4 rounded-lg bg-blue-950/50 w-full text-sm">
                                        <p className="pb-3">
                                            <strong className="text-medium text-blue-600 font-Chakra">MEDILAB</strong> fue el primer <strong className=" text-blue-400/80">proyecto fullstack</strong> que realizamos en la carrera con un equipo de 3 personas, 
                                            en las que nos embarcamos a resolver la problemática de la falta de acceso a la información de historias clínicas y la
                                            no centralización de las mismas.
                                        </p>
                                        <p className="pb-3">
                                            Este proyecto fue realizado desde el análisis mismo de la problemática a resolver, hasta la presentación con el <strong className=" text-blue-400/80">prototipo mínimo y viable</strong>
                                            . Trabajando durante todo el primer año de la carrera, para implementar todos los conocimientos del mismo en un único proyecto
                                        </p>
                                        <p className="pb-3">
                                            El proyecto consistía en una pagina web de consultas de historias clínicas, en la que los profesionales médicos podían hacer consultas sobre los archivos médicos
                                            de sus pacientes y poder agregar mas archivos al mismo. Los pacientes podían recibir notificaciones sobre nuevas historias clínicas subidas en su cuenta y poder
                                            revisarlos y descargarlos.
                                        </p>
                                        <p>
                                            La página web contaba con las siguientes <strong className=" text-blue-400/80">funcionalidades</strong>:
                                            <ul>
                                                <li>🔷 Registro e Inicio de Sesión</li>
                                                <li>🔷 Perfil de usuarios</li>
                                                <li>🔷 Navegación entre perfiles</li>
                                                <li>🔷 Manejo de archivos</li>
                                                <li>🔷 Notificaciones</li>
                                            </ul>
                                        </p>

                                </main>
                            </article>
                            <article className="py-3">
                                <header className="pb-6 text-6xl text-center text-blue-600/70 font-Vollkorn font-extrabold">
                                    <p className="border-b-2 border-blue-600/70">⚜ Proceso ⚜</p>
                                </header>
                                <main className="p-4 rounded-lg bg-blue-950/50 w-full grid grid-cols-6 gap-3 text-sm">
                                    <div className="col-span-4">
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
                                    <div className="col-span-2">
                                        <Image
                                            removeWrapper
                                            alt="Card MediLab project"
                                            className="w-full h-full object-cover"
                                            src="/Arquitectura.png"
                                        />
                                    </div>
                                    
                                </main>
                            </article>
                            <article className="py-3">
                                <header className="pb-6 text-6xl text-center text-blue-600/70 font-Vollkorn font-extrabold">
                                    <p className="border-b-2 border-blue-600/70">⚜ Tecnologías ⚜</p>
                                </header>
                                <main className="grid grid-cols-3 w-full gap-3">
                                    <section className="p-4 col-span-2 rounded-lg bg-blue-950/80 grid grid-cols-5 gap-2 justify-center items-center">
                                        <Tooltip
                                            placement="top"
                                            content="HTML5"
                                            color="primary"
                                            >
                                            
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiHtml5/>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="top"
                                            content="CSS3"
                                            color="primary"
                                        >
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiCss3/>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="top"
                                            content="JavaScript"
                                            color="primary"
                                        >
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiJavascript/>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="top"
                                            content="Bootstrap"
                                            color="primary"
                                        >
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiBootstrap/>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="top"
                                            content="React.JS"
                                            color="primary"
                                        >
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiReact/>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="bottom"
                                            content="Node.JS"
                                            color="primary"
                                        >
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiNodedotjs/>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="bottom"
                                            content="Express"
                                            color="primary"
                                        >
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiExpress/>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="bottom"
                                            content="Postman"
                                            color="primary"
                                        >
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiPostman/>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="bottom"
                                            content="MongoDB"
                                            color="primary"
                                        >
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiMongodb/>
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="bottom"
                                            content="Trello"
                                            color="primary"
                                        >
                                            <div className="rounded-full border-2 border-blue-600 flex justify-center items-center text-white text-3xl bg-[#101626] w-14 h-14">
                                                <SiTrello/>
                                            </div>
                                        </Tooltip>
                                        

                                    </section>
                                    <section className="p-4 col-span-1 rounded-lg bg-blue-950/80">
                                        <h1 className=" text-center text-xl font-Vollkorn text-white pb-2">OTROS</h1>
                                        <div className="grid grid-cols-2 gap-5 text-center">
                                            <strong className=" rounded-full bg-[#101626] border-2 border-blue-600 px-2 text-white text-sm">JWT</strong>
                                            <strong className="rounded-full bg-[#101626] border-2 border-blue-600 px-2 text-white text-sm">SCRUM</strong>
                                            <strong className="rounded-full bg-[#101626] border-2 border-blue-600 px-2 text-white text-sm">REST</strong>
                                        </div>
                                    </section>
                                </main>
                            </article>
                            <article className="py-3">
                                <header className="pb-6 text-6xl text-center text-blue-600/70 font-Vollkorn font-extrabold">
                                    <p className="border-b-2 border-blue-600/70">⚜ Experiencia ⚜</p>
                                </header>
                                <main className="p-4 rounded-lg bg-blue-950/50 w-full">
                                    <div className="text-sm pb-3">
                                        <p className="pb-3">
                                            Este proyecto fue la primera visión de un proyecto completo en el desarrollo web, un proyecto que comenzó con una simple idea para <strong className=" text-blue-400/80">resolver una problemática</strong> hasta
                                            la demostración y presentación del mismo a final de año, un año en que comenzamos aprendiendo con lenguaje en pseudo código y terminamos realizando un <strong className=" text-blue-400/80">proyecto FullStack</strong>
                                        </p>
                                        <p className="pb-3">
                                            La experiencia fue difícil y frustrante cuanto menos, no había día que no pasáramos aportando algo al proyecto o aprender del medio, ya que se esperaba mucho a final de año. 
                                            
                                        </p>
                                        <p className="pb-3">
                                            Acompañado por los profesores y compañeros, tanto de equipo como del propio cursado fuimos aprendiendo poco a poco prácticas y conocimientos dentro y fuera del programa educativo
                                            del instituto, consiguiendo así poder <strong className=" text-blue-400/80">trabajar entre nosotros</strong> y particularmente de <strong className=" text-blue-400/80">forma autodidacta</strong> en ocasiones.
                                        </p>
                                    </div>
                                    <Image
                                        removeWrapper
                                        alt="Card MediLab project"
                                        className="w-full h-full object-cover"
                                        src="/Presentacion.jpg"
                                    />
                                </main>
                            </article>
                        </ModalBody>
                        </>
                    )}
                    </ModalContent>
                </Modal>
        </>

            
  )
}
