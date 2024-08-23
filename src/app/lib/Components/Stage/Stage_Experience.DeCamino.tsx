import Igrowker_Logo from "@/assets/icons/Igrowkers.webp"
import { Image, Button } from "@nextui-org/react"
import { SiGithub, SiLinkedin} from "react-icons/si";

export const Stage_Experience_DeCamino = () => {

    const team = [
        {
          name: "Andrea Laurino",
          role: "QA",
          linkedIn: "https://www.linkedin.com/in/andrea-laurino/",
          github: "https://github.com/Andrea-Laurino",
          Image: "https://avatars.githubusercontent.com/u/110556252?v=4"
        },
        {
          name: "Bazan Julio Pablo Federico",
          role: "QA",
          linkedIn: "https://www.linkedin.com/in/julio-bazan-6ba406212/",
          github: "https://github.com/FedeBazan",
          Image: "https://avatars.githubusercontent.com/u/48597230?v=4"
        },
        
        {
          name: "Joaquín Romero",
          role: "Frontend",
          linkedIn: "https://www.linkedin.com/in/joaquin-romero-360141191/",
          github: "https://github.com/JDR89",
          Image: "https://avatars.githubusercontent.com/u/87939958?v=4"
        },
        {
          name: "Matias Obregon",
          role: "Frontend",
          linkedIn: "https://www.linkedin.com/in/engineerobregonmatias/",
          github: "https://github.com/MattiasObregon",
          Image: "https://avatars.githubusercontent.com/u/141037830?v=4"
        },
        {
          name: "Christian Zamora Hermida",
          role: "Frontend",
          linkedIn: "https://www.linkedin.com/in/christianzamorahermida/",
          github: "https://github.com/christianzamher",
          Image: "https://avatars.githubusercontent.com/u/77246844?v=4"
        },
        
        {
          name: "Renzo Demarco",
          role: "Fullstack",
          linkedIn: "https://www.linkedin.com/in/renzo-demarco/",
          github: "https://github.com/renzodemarco",
          Image: "https://media.licdn.com/dms/image/D4D03AQGeI1BefH1T4g/profile-displayphoto-shrink_200_200/0/1687966369178?e=1726099200&v=beta&t=JIP1M7ZD_wWq9Vjb2J2S9zz2F1n1MpDJ3bBSdsZp3mM"
        },
        {
          name: "Abel Acevedo",
          role: "Fullstack",
          linkedIn: "https://www.linkedin.com/in/abel-fernando-acevedo/",
          github: "https://github.com/Abel3581",
          Image: "https://avatars.githubusercontent.com/u/59884602?v=4"
        },
        {
          name: "Arce Facundo",
          role: "Fullstack",
          linkedIn: "https://www.linkedin.com/in/facundo-sebastian-arce-9699992b8/",
          github: "https://github.com/ArceFacundo2022",
          Image: "https://avatars.githubusercontent.com/u/111534351?v=4"
        },  
        {
          name: "Jeremias Ianigro",
          role: "Backend",
          linkedIn: "https://www.linkedin.com/in/jeremias-ianigro",
          github: "https://github.com/Jeremiasianigro",
          Image: "https://media.licdn.com/dms/image/D4D03AQEsg0iehmOmDA/profile-displayphoto-shrink_200_200/0/1711134041575?e=1726099200&v=beta&t=GZ9g_Msn0LgYeH-cz-kZPlTs9mboZPrKX6raLsAy3JQ"
        },
        {
          name: "Tamara Migliavacca",
          role: "Backend",
          linkedIn: "https://www.linkedin.com/in/tamara-migliavacca/",
          github: "https://github.com/TamaraMiglia",
          Image: "https://avatars.githubusercontent.com/u/112015373?v=4"
        },
        
        {
          name: "Juan Papi",
          role: "Project manager",
          linkedIn: "https://www.linkedin.com/in/juanpapi/",
          github: "https://github.com/JuanPapi84",
          Image: "https://avatars.githubusercontent.com/u/122549816?v=4"
        }
      ];


  return (
    <article className="flex flex-col md:grid w-full h-auto md:h-full md:grid-cols-8 gap-2">
            <div className="order-2 md:order-1 md:col-span-3 border-r-0 md:border-r-3 border-DC_woodLogo rounded-none md:rounded-r-2xl overflow-hidden overflow-y-scroll scrollbar-hide">
                <div className="bg-white flex justify-center items-center pt-4 rounded-none md:rounded-tr-2xl">
                    <Image
                    classNames={{
                        img: "max-w-[128px] max-h-[128px] border-4 rounded-full border-DC_woodLogo"
                    }
                    }
                    src={"https://res.cloudinary.com/dw7nvkjxx/image/upload/v1719470218/DeCamino/DeCaminoCirculo_bm96lu.png"}
                    alt="Logo de DeCamino"
                    />
                </div>
                <div className="text-black bg-gradient-to-br from-DC_softWood via-DC_Celeste to-DC_Celeste/30 rounded-t-3xl mt-[-48px] w-full h-auto pr-4 pb-2 pt-[56px]">
                    <div className="flex justify-center items-center">
                      <h4 className="text-gray-900/80 text-medium font-bold pl-4 pr-4 py-1 bg-gradient-to-r from-DC_woodLogo to-DC_softWood rounded-full flex">Experiencia</h4>
                    </div>
                    <pre className="pl-4 font-semibold py-2 text-break text-wrap font-Poppins">{"   Para mí fue increíble contar con un equipo tan brillante incluso con falta de experiencia mostraron una increíble determinación y compromiso, aprendiendo tecnologías complicadas en un par de semanas desde 0." +
"\n\n   Fue la primera vez que trabajo como líder con un grupo numeroso y fue sorprendente la disposición que tenían cada uno de los miembros, haciéndome sencillo poder dirigir y manejar gran parte del desarrollo del proyecto en general." +
"\n\n   Fue un verdadero desafío el hacerlo en tan poco tiempo, pero cada uno de los miembros dio todo de por sí y todos quedamos completamente a gusto con el resultado final."}
                    </pre>
                </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-5 flex flex-col justify-center items-center overflow-y-auto gap-2 py-4 pr-4 h-full">
              <div className="flex w-full justify-center items-center gap-2 pt-2 px-6">
                  <h2 className="text-white text-center text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">{"DeCamino - Igrowker (2024)"}</h2>
                  <Image
                      classNames={{
                          img: "w-[40px] h-[40px] xs:w-[48px] xs:h-[48px] sm:w-[56px] sm:h-[56px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] xl:w-[64px] xl:h-[64px]"
                      }}
                      src={Igrowker_Logo.src}
                      alt="Logo de Igrowker"
                  />
              </div>
              <div className="w-full gap-2 px-4 py-1 grid grid-cols-1 min-[550px]:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 bg-DC_softWood border-2 rounded-2xl border-DC_woodLogo overflow-y-auto scrollbar-hide">
                  {team.map((member, i) => (
                      <div key={i} className="p-1 col-span-1 gap-1 rounded-lg bg-gradient-to-br flex justify-between from-[#2C594B]/45 to-[#2C594B]">
                          <div className="flex gap-2 w-full">
                              <div className="flex justify-center items-center py-2 max-w-[88px]">
                                  <Image
                                      classNames={{
                                          wrapper: "w-[72px]",
                                          img: "w-[72px] h-[72px] rounded-full border-2 border-DC_freshMint"
                                      }}
                                      src={member.Image}
                                      alt="Foto de perfil Github"
                                  />
                              </div>
                              <div className="flex flex-col justify-center h-full w-full">
                                  <h3 className="font-semibold text-gray-900/90 text-sm">{member.name}</h3>
                                  <h4 className="text-gray-300/90 text-sm">{member.role}</h4>
                              </div>
                          </div>
                          <div className="flex flex-col justify-end gap-1">
                              <Button
                                  href={member.linkedIn}
                                  size="md"
                                  isIconOnly
                                  aria-label="LinkedIn"
                                  radius="full"
                                  className="bg-gradient-to-br from-DC_freshMint/50 to-DC_greenT border-2 border-white shadow-blue-950/30 text-white font-bold text-xl shadow-lg"
                              >
                                  <SiLinkedin />
                              </Button>
                              <Button
                                  href={member.github}
                                  size="md"
                                  isIconOnly
                                  aria-label="GitHub"
                                  radius="full"
                                  className="bg-gradient-to-br from-DC_freshMint/50 to-DC_greenT border-2 border-white shadow-blue-950/30 text-white font-bold text-xl shadow-lg"
                              >
                                  <SiGithub />
                              </Button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
    </article>
  )
}
