'use client'

import { Card, CardHeader, CardFooter, Image} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
import { useState } from "react";

import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';

import { Stage_Description_Medilab } from "../Stage/Stage_Description.MediLab";
import { Stage_Process_Medilab } from "../Stage/Stage_Process.Medilab";
import { Stage_Technologies_Medilab } from "../Stage/Stage_Technologies.Medilab";
import { Stage_Experience_Medilab } from "../Stage/Stage_Experience.Medilab";

export const Card_MediLab = () => {

    const [open, setOpen] = useState(false)

    const images = [
        {
            original: "/img/MediLab_01.webp",
            thumbnail: "/img/MediLab_01.webp",
        },
        {
            original: "/img/MediLab_02.webp",
            thumbnail: "/img/MediLab_02.webp",
        },
    ];

    return (
    <>
        <Card isFooterBlurred className="w-full h-[300px] col-span-2 border-4 border-blue-950 ring-2 ring-blue-600 shadow-xl shadow-blue-900">
            <CardHeader className="absolute z-10 top-0 flex-col items-start bg-opacity-100 backdrop-blur-md">
                <p className="text-tiny text-blue-600 uppercase font-bold xs:text-medium sm:text-lg md:text-medium lg:text-sm">2022</p>
                <h4 className="title_Medi text-white font-bold font-Vollkorn text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-2xl ">MEDILAB</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card MediLab project"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="/img/MediLab_01.webp"
            />
            <CardFooter className="absolute bg-white/10 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between bg-opacity-100 backdrop-blur-xl">
                <div className="text-white text-tiny xs:text-sm sm:text-medium md:text-sm lg:text-tiny">
                    <p>Proyecto de Carrera</p>
                    <p>Consultoría de Historias Clínicas</p>
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
            backdrop: "bg-blue-950/75 backdrop-opacity-40",
            base: "pt-12 sm:pt-0 border-2 border-[#292f46] bg-[#101626] text-[#a8b0d3]",
            header: "border-b-[2px] border-[#292f46]",
            footer: "border-t-[2px] border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
            >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex gap-1 flex-col text-center">
                    <h1 className=" text-blue-600 font-Vollkorn text-xl 2xs:text-2xl xs:text-3xl">MEDILAB</h1>
                    <h2 className="text-sm 2xs:text-medium xs:text-lg sm:text-xl text-slate-200">Pagina de consultas de historias clínicas</h2>
                </ModalHeader>
                <ModalBody>
                    <article>
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                            showThumbnails={false}
                        />
                    </article>
                    <Stage_Description_Medilab/>
                    <Stage_Process_Medilab/>
                    <Stage_Technologies_Medilab/>
                    <Stage_Experience_Medilab/>
                </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
    </>
  )
}
