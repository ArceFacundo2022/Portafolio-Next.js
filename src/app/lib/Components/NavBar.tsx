"use client"

import {ScrollTo} from "@/app/lib/utilities/scroll"
import { useState } from "react";
import { SlMenu } from "react-icons/sl";

export const NavBar = () => {

  const [menu, setMenu] = useState("hidden")
  
  return (
    <nav className="fixed w-full z-[2000]">
        <section className="mx-auto max-w-7xl px-2 2xs:px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 bg-blue-900/10 border-2 border-blue-800/25 bg-opacity-50 backdrop-blur-md">
            <div className="relative flex h-12 itemsq-center justify-between">
                <div className="flex items-center">
                  <a onClick={()=>{ScrollTo("section_hero",0)}}>
                    <span className=" font-Chakra text-lg md:text-xl text-white cursor-pointer hover:bg-blue-300/10 hover:border-2 hover:border-blue-500/20 px-1 hover:rounded-xl"> PORT<span className=" text-blue-600">FOLIO</span></span>
                  </a>
                </div>
                <div className="hidden md:flex md:justify-end md:items-center md:gap-3 font-Chakra text-medium lg:text-lg xl:text-xl font-bold text-white">
                  <a onClick={()=>{ScrollTo("section_projects",0)}}>
                    <span className="hover:text-blue-600/75 cursor-pointer">PROYECTOS</span>
                  </a>
                  <a onClick={()=>{ScrollTo("section_studies",0)}}>
                    <span className="hover:text-blue-600/75 cursor-pointer">FORMACIÓN</span>
                  </a>
                  <a onClick={()=>{ScrollTo("section_technologies",0)}}>
                    <span className="hover:text-blue-600/75 cursor-pointer">TECNOLOGÍAS</span>
                  </a>
                  <a onClick={()=>{ScrollTo("section_softSkills",0)}}>
                    <span className="hover:text-blue-600/75 cursor-pointer">HABILIDADES</span>
                  </a>
                  <a onClick={()=>{ScrollTo("section_about_me",0)}}>
                    <span className="hover:text-blue-600/75 cursor-pointer">SOBRE MI</span>
                  </a>
                </div>


                <div className="md:hidden flex justify-end items-center gap-3">
                  <a onClick={()=>{
                    menu ? setMenu("") : setMenu("hidden");
                  }} className="text-xl font-bold text-white hover:text-blue-600/75 cursor-pointer">
                    <SlMenu/>
                  </a>
                </div>
            </div>
        </section>
        <section className="relative md:hidden">
          <div className="flex justify-end items-end flex-col">
            <div
              className={`bg-blue-900/10 border-x-2 border-b-2 border-blue-800/25 bg-opacity-50 backdrop-blur-md
                max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-2 py-2 ${menu}
              `}
            >
                    <a onClick={()=>{ScrollTo("section_projects",0)}}>
                      <span className="font-Chakra text-lg font-bold text-white hover:text-blue-600/75 cursor-pointer">PROYECTOS</span>
                    </a>
                    <a onClick={()=>{ScrollTo("section_studies",0)}}>
                      <span className="font-Chakra text-lg font-bold text-white hover:text-blue-600/75 cursor-pointer">FORMACIÓN</span>
                    </a>
                    <a onClick={()=>{ScrollTo("section_technologies",0)}}>
                      <span className="font-Chakra text-lg lg:text-xl font-bold text-white hover:text-blue-600/75 cursor-pointer">TECNOLOGÍAS</span>
                    </a>
                    <a onClick={()=>{ScrollTo("section_about_me",0)}}>
                      <span className="font-Chakra text-lg font-bold text-white hover:text-blue-600/75 cursor-pointer">SOBRE MI</span>
                    </a>
            </div>
          </div>
        </section>
    </nav>
  )
}
