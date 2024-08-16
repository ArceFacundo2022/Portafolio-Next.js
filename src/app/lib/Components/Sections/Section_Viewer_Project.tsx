'use client'

import {Button} from "@nextui-org/react";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { SiReact } from "react-icons/si";
import { Stage_Description_DeCamino } from "../Stage/Stage_Description.DeCamino";
import { useState } from "react";
import { Stage_Process_DeCamino } from "../Stage/Stage_Process.DeCamino";
import { Stage_Experience_DeCamino } from "../Stage/Stage_Experience.DeCamino";
import { Stage_Technologies_DeCamino } from "../Stage/Stage_Technologies.DeCamino";

export const Section_Viewer_Project = () => {

  const initialState = {
    description : false,
    process: false,
    tech: false,
    experience: false
  }

  const [selectedStage, setSelectedStage] = useState({...initialState, description:true})
  return (
    <section className="border-2 border-DC_woodLogo bg-DC_softWood/20 rounded-lg h-[488px] w-full mb-12 shadow-xl shadow-DC_woodLogo/50 flex">
          <article className="w-auto h-full flex flex-col gap-4 p-2 bg-DC_softWood/40 rounded-l-lg border-r-2 border-DC_woodLogo">
            <div className="">
              <Button 
              size="md" isIconOnly aria-label="Video/Descripcion" 
              radius="full" className="bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] border-2 border-white shadow-blue-950/30 text-white font-bold text-xl shadow-lg"
              onClick={()=>{setSelectedStage({...initialState, description:true})}}
              >
                <CiPlay1/>
              </Button>
            </div>
            <div className="">
              <Button 
              size="md" isIconOnly aria-label="Imagenes/Proceso" 
              radius="full" className="bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] border-2 border-white shadow-blue-950/30 text-white font-bold text-xl shadow-lg"
              onClick={()=>{setSelectedStage({...initialState, process:true})}}
              >
                <MdOutlinePhotoSizeSelectActual/>
              </Button>
            </div>
            <div className="">
              <Button 
              size="md" isIconOnly aria-label="Técnologias/Insignias" 
              radius="full" className="bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] border-2 border-white shadow-blue-950/30 text-white font-bold text-xl shadow-lg"
              onClick={()=>{setSelectedStage({...initialState, tech:true})}}
              >
                <SiReact/>
              </Button>
            </div>
            <div className="">
              <Button 
              size="md" isIconOnly aria-label="Experiencias/Equipo" 
              radius="full" className="bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] border-2 border-white shadow-blue-950/30 text-white font-bold text-xl shadow-lg"
              onClick={()=>{setSelectedStage({...initialState, experience:true})}}
              >
                <RiTeamFill/>
              </Button>
            </div>
          </article>
          {selectedStage.description && (<Stage_Description_DeCamino/>)}
          {selectedStage.process && (<Stage_Process_DeCamino/>)}
          {selectedStage.tech && (<Stage_Technologies_DeCamino/>)}
          {selectedStage.experience && (<Stage_Experience_DeCamino/>)}
        </section>
  )
}
