"use client"

import {ScrollTo} from "@/app/lib/utilities/scroll"

export const NavBar = () => {

  
  
  return (
    <nav className="fixed w-full bg-blue-900/10 border-2 border-blue-800/25 z-20 bg-opacity-50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
            <div className="relative flex h-12 itemsq-center justify-between">
                <div className="flex items-center">
                    <span className=" font-Chakra text-xl font-bold text-white cursor-pointer hover:text-2xl hover:bg-blue-300/10 hover:border-2 hover:border-blue-500/20 px-1 hover:rounded-xl"> PORT<span className=" text-blue-600">FOLIO</span></span>
                </div>
                <div className="flex justify-end items-center gap-3">
                  <a onClick={()=>{ScrollTo("section_projects",0)}}>
                    <span className="font-Chakra text-xl font-bold text-white hover:text-blue-600/75 cursor-pointer">PROYECTOS</span>
                  </a>
                  <span className="font-Chakra text-xl font-bold text-white hover:text-blue-600/75 cursor-pointer">FORMACIÓN</span>
                  <span className="font-Chakra text-xl font-bold text-white hover:text-blue-600/75 cursor-pointer">TECNOLOGÍAS</span>
                </div>
            </div>
        </div>
    </nav>
  )
}
