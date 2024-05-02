'use client'

import { Card, CardHeader, CardFooter, Image, ModalFooter, Tooltip} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
import { useState } from "react";

import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';

import { SiVercel, SiGithub } from "react-icons/si";

import { Stage_Technologies_RaM } from "../Stage/Stage_Technologies.RaM";
import { Stage_Process_RaM } from "../Stage/Stage_Process.RaM";
import { Stage_Description_RaM } from "../Stage/Stage_Description.RaM";
import { Stage_Experience_RaM } from "../Stage/Stage_Experience.RaM";

export const Card_API_RaM = () => {

    const [open, setOpen] = useState(false)

    const images = [
        {
            original: "/img/Api_RaM_img01.png",
            thumbnail: "/img/Api_RaM_img01.png",
        },
        {
            original: "/img/Api_RaM_img02.png",
            thumbnail: "/img/Api_RaM_img02.png",
        },
        {
            original: "/img/Api_RaM_img04.png",
            thumbnail: "/img/Api_RaM_img04.png",
        },
    ];

return (
        <>

            <Card isFooterBlurred className="w-full h-[300px] lg:col-span-2 md:col-span-3 col-span-1 border-4 border-green-900 ring-2 ring-green-600 shadow-xl shadow-green-800">
                <CardHeader className="absolute z-10 top-0 flex-col items-start bg-opacity-50 backdrop-blur-sm">
                    <p className="text-tiny text-green-600 uppercase font-bold xs:text-medium sm:text-lg md:text-medium lg:text-sm">2024</p>
                    <h4 className="title_RaM text-white font-Vollkorn text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-2xl ">RICK AND MORTY API</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card Rick and Morty Api project"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="/img/Api_RaM_img03.png"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div className="text-white text-tiny xs:text-sm sm:text-medium md:text-sm lg:text-tiny">
                        <p>Prueba Técnica</p>
                        <p>Consumo de Api GraphQl</p>
                    </div>
                    <Button className="border-2 border-green-600 bg-green-950 text-white" onPress={() => { setOpen(true)}} radius="full" size="sm">
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
                        base: "pt-12 sm:pt-0 border-2 border-[#2B4227] bg-[#122114] text-[#a8b0d3]",
                        header: "border-b-[2px] border-[#2B4227]",
                        footer: "border-t-[2px] border-[#2B4227]",
                        closeButton: "hover:bg-white/5 active:bg-white/10",
                    }}
                    >
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex gap-1 flex-col text-center">
                            <h1 className=" text-green-600 font-Vollkorn text-xl 2xs:text-2xl xs:text-3xl">Rick And Morty API</h1>
                            <h2 className="text-sm 2xs:text-medium xs:text-lg sm:text-xl text-slate-200">Prueba técnica de consumo de API GraphQL</h2>
                        </ModalHeader>
                        <ModalBody>
                            <article>
                                <ImageGallery
                                    items={images}
                                    showPlayButton={false}
                                    showThumbnails={false}
                                />
                            </article>
                            <Stage_Description_RaM/>
                            <Stage_Process_RaM/>
                            <Stage_Technologies_RaM/>
                            <Stage_Experience_RaM/>
                            
                        </ModalBody>
                        <ModalFooter className="flex justify-center gap-5">
                            <Tooltip
                                placement="left"
                                content="Repositorio GitHub"
                                color="success"
                            >
                                <a href="https://github.com/ArceFacundo2022/API_Rick_And_Morty_Challenge_Dev_KIMCHE">
                                    <Button  
                                    size="md" isIconOnly aria-label="Repositorio Github" 
                                    radius="full" className="bg-gradient-to-tr  from-emerald-900 to-green-900 border-small border-white/50 shadow-green-950/30 text-white text-xl shadow-lg"
                                    >
                                        <SiGithub/>
                                    </Button>
                                </a>
                            </Tooltip>

                            <Tooltip
                                placement="right"
                                content="Despliegue web Versel"
                                color="success"
                            >
                                <a href="https://api-rick-and-morty-challenge-dev-kimche.vercel.app">
                                    <Button 
                                    size="md" isIconOnly aria-label="Deploy Versel" 
                                    radius="full" className="bg-gradient-to-tr  from-emerald-900 to-green-900 border-small border-white/50 shadow-green-950/30 text-white text-xl shadow-lg"
                                    >
                                        <SiVercel/>
                                    </Button>
                                </a>
                            </Tooltip>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
        </>

            
  )
}
