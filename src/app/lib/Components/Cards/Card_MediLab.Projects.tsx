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
        <Card isFooterBlurred className="w-full h-[300px] col-span-2 border-4 border-blue-950 ring-2 ring-blue-600 shadow-xl shadow-blue-900">
            <CardHeader className="absolute z-10 top-0 flex-col items-start bg-opacity-50 backdrop-blur-sm">
                <p className="text-tiny text-white/60 uppercase font-bold">2022</p>
                <h4 className="text-blue-600 font-Vollkorn text-2xl font-bold">MEDILAB</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card MediLab project"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="/img/MediLab_img01.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny">Proyecto de Carrera</p>
                    <p className="text-black text-tiny">Consultoria de Historias Clincas</p>
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
            base: "border-2 border-[#292f46] bg-[#101626] text-[#a8b0d3]",
            header: "border-b-[2px] border-[#292f46]",
            footer: "border-t-[2px] border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
            >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex gap-1 flex-col text-center">
                    <h1 className=" text-blue-600 font-Vollkorn text-3xl">MEDILAB</h1>
                    <h2 className=" text-xl text-slate-200">Pagina de consultas de historias clinicas</h2>
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
