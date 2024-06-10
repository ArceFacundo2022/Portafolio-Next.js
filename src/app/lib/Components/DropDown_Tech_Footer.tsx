import { 
  SiHtml5, SiCss3, SiTypescript, SiReact, SiVercel,
  SiNextui,SiNextdotjs, SiTailwindcss, SiGithub, SiGit
} from "react-icons/si";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection, Tooltip} from "@nextui-org/react";

export const DropDown_Tech_Footer = () => {
  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-cyan-700", // change arrow background
        content: "py-1 px-1 border-2 border-cyan-700/75 bg-black text-white",
      }}
    >
      <DropdownTrigger>
        <Button 
          className="font-Chakra bg-black text-white"
        >
          PORTFOLIO
        </Button>
      </DropdownTrigger>

      <DropdownMenu>
        <DropdownSection
          
        >
          <DropdownItem
            isDisabled
            isReadOnly
            key="Header"
            className="h-14 gap-2 hover:bg-black hover:border-0 hover:border-transparent"
          >
            <p className="text-cyan-500/75 font-semibold font-Chakra text-xl text-center">PORTFOLIO</p>
            <p className=" text-white font-Chakra text-center">Tecnologias utilizadas</p>
          </DropdownItem>
          <DropdownItem
            isDisabled
            isReadOnly
            key="Tecnologias"
          >
            <section className="p-4 col-span-2 rounded-lg bg-cyan-950/80 grid grid-cols-3 2xs:grid-cols-5 xs:grid-cols-6 sm:grid-cols-5 gap-2 justify-center items-center">
              <Tooltip
                placement="top"
                content="HTML5"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiHtml5/>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                content="CSS"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiCss3/>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                content="TypeScript"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiTypescript/>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                content="React"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiReact/>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                content="Next.js"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiNextdotjs/>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                content="Tailwind"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiTailwindcss/>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                content="NextUI"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiNextui/>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                content="GIT"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiGit/>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                content="GitHub"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiGithub/>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                content="Vercel"
                color="primary"
              >
                                    
                <div className="rounded-full border-2 border-cyan-600 flex justify-center items-center text-white text-2xl xs:text-3xl bg-[#101e26] w-12 h-12 xs:w-14 xs:h-14">
                  <SiVercel/>
                </div>
              </Tooltip>
            </section>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>

    </Dropdown>
  )
}

