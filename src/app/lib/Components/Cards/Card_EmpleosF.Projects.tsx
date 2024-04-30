'use client'

import { Card, CardHeader, CardFooter, Image} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
import { useState } from "react";

import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';
import { Stage_Technologies_Empleos } from "../Stage/Stage_Technologies.Empleos";
import { Stage_Description_Empleos } from "../Stage/Stage_Description.Empleos";
import { Stage_Process_Empleos } from "../Stage/Stage_Process.Empleos";
import { Stage_Experience_Empleos } from "../Stage/Stage_Experience.Empleos";

export const Card_EmpleosF = () => {

    const [open, setOpen] = useState(false)

    const images = [
        {
            original: "/img/MediLab_img01.png",
            thumbnail: "/img/MediLab_img01.png",
        },
        {
            original: "/img/MediLab_img02.png",
            thumbnail: "/img/MediLab_img02.png",
        },
    ];

    return (
    <>
        <Card isFooterBlurred className="w-full h-[300px] lg:col-span-2 md:col-span-3 col-span-1 border-4 border-purple-950 ring-2 ring-purple-600 shadow-xl shadow-purple-950">
            <CardHeader className="absolute z-10 top-0 flex-col items-start bg-opacity-50 backdrop-blur-sm">
                <p className="text-tiny text-white/60 uppercase font-bold xs:text-medium sm:text-lg md:text-medium lg:text-sm">2023</p>
                <h4 className="text-purple-600 font-Vollkorn font-bold text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-2xl ">EMPLEOS FORMOSA</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card MediLab project"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="/img/MediLab_img01.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div className="text-black text-tiny xs:text-sm sm:text-medium md:text-sm lg:text-tiny">
                    <p>Proyecto Final de la Carrera</p>
                    <p>Pagina de búsqueda y contratación laboral</p>
                </div>
                <Button className="border-2 border-purple-600 bg-purple-950 text-white" onPress={() => { setOpen(true)}} radius="full" size="sm">
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
            wrapper: "",
            body: "py-6",
            backdrop: "bg-purple-950/75 backdrop-opacity-40",
            base: "pt-12 sm:pt-0 border-[#322844] bg-[#160F23] text-[#a8b0d3]",
            header: "border-b-[2px] border-[#322844]",
            footer: "border-t-[2px] border-[#322844]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
            >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex gap-1 flex-col text-center">
                    <h1 className=" text-purple-600 font-Vollkorn text-lg 2xs:text-xl xs:text-2xl sm:text-3xl">Empleos Formosa</h1>
                    <h2 className="text-sm 2xs:text-medium xs:text-lg sm:text-xl text-slate-200">Pagina de búsquedas y contratación laboral</h2>
                </ModalHeader>
                <ModalBody>
                    <article>
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                            showThumbnails={false}
                        />
                    </article>
                    <Stage_Description_Empleos/>
                    <Stage_Process_Empleos/>
                    <Stage_Technologies_Empleos/>
                    <Stage_Experience_Empleos/>
                </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
    </>
  )
}
