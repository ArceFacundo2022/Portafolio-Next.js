'use client'

import { FaComments, FaUsers, FaExchangeAlt, FaClock, FaLeaf, FaCheckCircle, FaLightbulb, FaBook, FaChessKing, FaHandHoldingHeart } from 'react-icons/fa';
import { Diamond_Skills } from "../Diamond_Skills"
import { useState } from 'react';
import { SoftSkills_Context } from '../../utils/context/SoftSkills.context';

export const Section_SoftSkills_D2 = () => {

  interface skills_Type {
    name:string,
    img:string,
    frase:string
  }

  const [skillState, setSkillState] = useState<skills_Type>({
    name:"RESOLUCIÓN DE PROBLEMAS",
    img:"",
    frase:"El ser humano está hecho para solucionar problemas."
  })

  return (
    <main className="relative bg-cover w-full min-h-screen overflow-hidden px-2 z-10 xl:px-16 lg:px-12 md:px-10 sm:px-8 xs:px-6 2xs:px-3 flex flex-col gap-5" 
    id="section_softSkills"
    style={{backgroundImage: `url("/img/space_wallpaper.webp")`}}
    >
      <section className="h-screen w-full">
        <header className="pt-20 pb-5 flex align-middle justify-center">
          <h1 className="font-Vollkorn text-3xl text-white border-b-2 border-blue-600">{" HABILIDADES BLANDAS "}</h1>
        </header>
        <main className="flex align-middle justify-around gap-32 h-full w-full">
          <article className="relative w-[300px] h-[350px] border-3 border-blue-500 bg-blue-100/90 flex flex-col justify-center items-center rounded-2xl p-2">

            <h1 className='font-bold font-Vollkorn text-2xl text-center text-blue-700 pb-8'>{skillState.name}</h1>
            <div className='card-icon-skill'>
              {(
                <>
                  <FaLightbulb className={skillState.name == "RESOLUCIÓN DE PROBLEMAS"? "":"hidden"}/>
                  <FaExchangeAlt className={skillState.name == "ADAPTACIÓN"? "":"hidden"}/>
                  <FaClock className={skillState.name == "GESTION DEL TIEMPO"? "":"hidden"}/>
                  <FaChessKing className={skillState.name == "LIDERAZGO"? "":"hidden"}/>
                  <FaCheckCircle className={skillState.name == "RESPONSABILIDAD"? "":"hidden"}/>
                  <FaComments className={skillState.name == "COMUNICACIÓN"? "":"hidden"}/>
                  <FaUsers className={skillState.name == "TRABAJO EN EQUIPO"? "":"hidden"}/>
                  <FaHandHoldingHeart className={skillState.name == "EMPATÍA"? "":"hidden"}/>
                  <FaLeaf className={skillState.name == "PACIENCIA"? "":"hidden"}/>
                  <FaBook className={skillState.name == "APRENDIZAJE CONTINUO"? "":"hidden"}/>
                </>
              )}
            </div>
            <h4 className='font-bold font-Vollkorn text-lg text-center text-blue-700 pt-8'>{skillState.frase}</h4>
          </article>
          <article className="relative w-[300px] h-[350px] border-3 border-blue-500 bg-blue-100/90 flex flex-col justify-center items-center rounded-2xl p-2">

          </article>
        </main>
      </section>

      <div className="absolute top-0 flex flex-col items-end justify-center left-[0px] border-b-4 border-blue-600 bg-gradient-to-b to-[#ACBBE5] from-slate-950 w-full h-16">
      </div>

      <div className="absolute bottom-0 flex flex-col items-end justify-center left-[0px] border-t-4 border-blue-600 bg-gradient-to-b from-[#ACBBE5] to-slate-950 w-full h-16">
      </div>

      <div className="absolute bottom-0 flex justify-center w-full left-[0px]">
        <SoftSkills_Context.Provider value={{selected: skillState.name , setSkillState}}>
          <Diamond_Skills/>
        </SoftSkills_Context.Provider>
      </div>

    </main>
  )
}
