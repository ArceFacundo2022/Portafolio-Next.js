import Igrowker_Logo from "@/assets/icons/Igrowkers.webp"

import { Image, Tooltip } from "@nextui-org/react"
import { SiReact, SiNextui, SiLeaflet, SiRedux, SiAxios, SiJsonwebtokens, SiVite,
    SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiCss3, SiPostman, SiNodedotjs,
    SiMongodb, SiCloudinary, SiExpress, SiMongoose,
    SiFigma,
    SiVercel,
 } from "react-icons/si"
import { FaCcStripe } from "react-icons/fa";
import ImageGallery from 'react-image-gallery';

export const Stage_Technologies_DeCamino = () => {
  return (
    <article className="flex flex-col md:grid md:grid-cols-6 w-full h-auto md:h-full gap-4 p-4 overflow-hidden">
        <div className="flex flex-col col-span-4 gap-2">
            <div className="flex w-full justify-center items-center gap-2">
                <h2 className="text-white text-center text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">{"DeCamino - Igrowker (2024)"}</h2>
                <Image
                    classNames={{
                        img: "w-[40px] h-[40px] xs:w-[48px] xs:h-[48px] sm:w-[56px] sm:h-[56px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] xl:w-[64px] xl:h-[64px]"
                    }}
                    src={Igrowker_Logo.src}
                    alt="Logo de Igrowker"
                />
            </div>
            <div className="md:hidden rounded-2xl bg-slate-950 flex justify-center items-center border-4 border-DC_woodLogo overflow-hidden">
                <ImageGallery
                    items={[{
                        original: "/img/Certificado-Igrowker.webp",
                        thumbnail: "/img/Certificado-Igrowker.webp",
                    }]}
                    showPlayButton={false}
                    showThumbnails={false}
                />
            </div>
            <div className="flex justify-center w-full">
                <div className="rounded-xl bg-DC_softWood p-4 flex flex-wrap justify-center gap-2 max-w-[720px]">
                    <Tooltip
                        placement="top"
                        content="HTML5"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiHtml5/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="top"
                        content="CSS3"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiCss3/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="top"
                        content="JavaScript"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiJavascript/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="top"
                        content="React.js"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiReact/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="top"
                        content="Vite"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiVite/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="top"
                        content="Redux Toolkit"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiRedux/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="top"
                        content="React Leaflet"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiLeaflet/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="top"
                        content="Vercel"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiVercel/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="top"
                        content="Axios"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiAxios/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="top"
                        content="NextUI"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiNextui/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="Tailwind"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiTailwindcss/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="Figma"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiFigma/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="Stripe"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <FaCcStripe/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="Node.js"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiNodedotjs/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="Express"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiExpress/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="MongoDB"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiMongodb/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="Mongoose"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiMongoose/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="Cloudinary"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiCloudinary/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="Postman"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiPostman/>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        content="JsonWebTokens"
                        showArrow
                        classNames={{
                            content:"bg-DC_woodLogo border-2 border-white text-white"
                        }}
                    >
                        <div className="rounded-full border-2 border-white flex justify-center items-center text-white text-2xl xs:text-3xl bg-gradient-to-br  from-[#2C594B]/45 to-[#2C594B] w-12 h-12 xs:w-14 xs:h-14">
                            <SiJsonwebtokens/>
                        </div>
                    </Tooltip>
                </div>
            </div>
            <div className="grid grid-cols-4 items-center w-full h-full gap-2">
                <div className="col-span-1 rounded-2xl bg-slate-950 flex justify-center items-center border-2 border-DC_woodLogo">
                    <a href="https://eu.badgr.com/backpack/badges/66afa72e8992506f591d4f80" className="cursor-pointer p-2">
                        <Image
                            src={"/img/react-igrowker.webp"}
                            alt="Logo de Igrowker"
                        />
                    </a>
                </div>
                <div className="col-span-1 rounded-2xl bg-slate-950 flex justify-center items-center border-2 border-DC_woodLogo">
                    <a href="https://eu.badgr.com/backpack/badges/66afa74b438e9a61856882ff" className="cursor-pointer p-2">
                        <Image
                            src={"/img/typescript-igrowker.webp"}
                            alt="Logo de Igrowker"
                        />
                    </a>
                </div>
                <div className="col-span-1 rounded-2xl bg-slate-950 flex justify-center items-center border-2 border-DC_woodLogo">
                    <a href="https://eu.badgr.com/public/assertions/NDEnSeQlSPOStOb4uNCfVA" className="cursor-pointer p-2">
                        <Image
                            src={"/img/github-igrowker.webp"}
                            alt="Logo de Igrowker"
                        />
                    </a>
                </div>
                <div className="col-span-1 rounded-2xl bg-slate-950 flex justify-center items-center border-2 border-DC_woodLogo">
                    <a href="https://eu.badgr.com/backpack/badges/66afa79b8992506f591d4f84" className="cursor-pointer p-2">
                        <Image
                            src={"/img/git-igrowker.webp"}
                            alt="Logo de Igrowker"
                        />
                    </a>
                </div>
            </div>
        </div>
        <div className="hidden md:col-span-2 md:flex justify-center items-center">
            <div className="rounded-2xl bg-slate-950 flex justify-center items-center border-4 border-DC_woodLogo overflow-hidden">
                <ImageGallery
                    items={[{
                        original: "/img/Certificado-Igrowker.webp",
                        thumbnail: "/img/Certificado-Igrowker.webp",
                    }]}
                    showPlayButton={false}
                    showThumbnails={false}
                />
            </div>
        </div>
    </article>
  )
}
