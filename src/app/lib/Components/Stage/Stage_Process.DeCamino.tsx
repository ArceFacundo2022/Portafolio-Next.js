import Igrowker_Logo from "@/assets/icons/Igrowkers.webp"
import { Image } from "@nextui-org/react"
import ImageGallery from 'react-image-gallery';


export const Stage_Process_DeCamino = () => {

    const images = [
        {
            original: "/img/DeCamino_img01.webp",
            thumbnail: "/img/DeCamino_img01.webp",
        },
        {
            original: "/img/DeCamino_img02.webp",
            thumbnail: "/img/DeCamino_img02.webp",
        },
        {
            original: "/img/DeCamino_img03.webp",
            thumbnail: "/img/DeCamino_img03.webp",
        },
        {
            original: "/img/DeCamino_img04.webp",
            thumbnail: "/img/DeCamino_img04.webp",
        },
        {
            original: "/img/DeCamino_img05.webp",
            thumbnail: "/img/DeCamino_img05.webp",
        },
        {
            original: "/img/DeCamino_img06.webp",
            thumbnail: "/img/DeCamino_img06.webp",
        },
        {
            original: "/img/DeCamino_img07.webp",
            thumbnail: "/img/DeCamino_img07.webp",
        },
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
                      <h4 className="text-gray-900/80 text-medium font-bold pl-4 pr-4 py-1 bg-gradient-to-r from-DC_woodLogo to-DC_softWood rounded-full flex">Proceso</h4>
                    </div>
                    <pre className="pl-4 font-semibold py-2 text-break text-wrap font-Poppins">{`   De camino fue un proyecto de corto tiempo, desarrollado por un grupo grande de JR enfocados en aprender nuevas tecnologías y ganar experiencia laboral, mientras demuestran sus habilidades al mundo.
\n   En el momento de presentar el equipo utilizamos Whatsapp como también discord para coordinar las reuniones ya que era un trabajo remoto, usamos github para el control de tareas, repositorios ect.
\n   Utilizamos Figma para hacer los diseños de las vistas como sugerencias de diseño, herramientas conversores de imágenes y IA para retocar y mejorar la calidad de las imágenes
\n   Nosotros dividimos el proceso de desarrollo en etapas que se dividían en semana, con entregables a fin de semana que cumplían las tareas y funciones solicitadas por el cliente a fin de tener un proyecto mínimo y viable a final del proyecto.`}
                    </pre>
                    <div className="flex">
                      <h4 className="text-gray-900/80 text-medium font-bold pl-4 pr-4 py-1 bg-gradient-to-r from-DC_woodLogo to-DC_softWood rounded-r-full flex">Primera Semana:</h4>
                    </div>
                    <pre className="pl-4 font-semibold py-2 text-break text-wrap font-Poppins">{`   Designamos los roles, tareas por miembro, arquitecturas, tecnologías y el proceso de desarrollo.Para trabajar en conjunto y sin pisar el trabajo de los demás, además de fomentar el trabajo y comunicación con cada área del proyecto.`}
                    </pre>
                    <div className="flex">
                      <h4 className="text-gray-900/80 text-medium font-bold pl-4 pr-4 py-1 bg-gradient-to-r from-DC_woodLogo to-DC_softWood rounded-r-full flex">Segunda Semana:</h4>
                    </div>
                    <pre className="pl-4 font-semibold py-2 text-break text-wrap font-Poppins">{`   División de tareas, grupos de trabajo, colaboración en la elaboración de diseño en Figma, configuraciones de los repositorios, desarrollo de las entidades y tablas de la base de datos, definir por completo los requerimientos funcionales y las pruebas de software que se realizarían.`}
                    </pre>
                    <div className="flex">
                      <h4 className="text-gray-900/80 text-medium font-bold pl-4 pr-4 py-1 bg-gradient-to-r from-DC_woodLogo to-DC_softWood rounded-r-full flex">Tercera semana:</h4>
                    </div>
                    <pre className="pl-4 font-semibold py-2 text-break text-wrap font-Poppins">{`   Se entregaban todas las tareas de la segunda semana, testeadas y probadas para posteriormente subir a producción en un hosting web para, hacer pruebas de software y análisis de rendimiento y se dictaminaban nuevas tareas.`}
                    </pre>
                    <div className="flex">
                      <h4 className="text-gray-900/80 text-medium font-bold pl-4 pr-4 py-1 bg-gradient-to-r from-DC_woodLogo to-DC_softWood rounded-r-full flex">Cuarta semana - Final:</h4>
                    </div>
                    <pre className="pl-4 font-semibold py-2 text-break text-wrap font-Poppins">{`   A partir de la cuarta semana, el procesos fue repetitivo, ya los equipos sabían cómo trabajar y desempeñarse, se tomaba los entregables de la semana pasada, y se los testeaba poco a poco mientras cada comienzo de semana se designaban unos nuevos.

   Al llegar la fecha final, terminamos desarrollando las tareas principales para tener un proyecto mínimo y viable y procedimos a presentarlo ante todos sorprendiendo al cliente.`}
                    </pre>
                </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-5 flex flex-col justify-center items-center overflow-hidden gap-2 py-4 pr-4">
              <div className="flex w-full justify-center items-center gap-2 pt-2 px-6">
                <h2 className="text-white text-center text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">{"DeCamino - Igrowker (2024)"}</h2>
                <Image
                  classNames={{
                    img: "w-[40px] h-[40px] xs:w-[48px] xs:h-[48px] sm:w-[56px] sm:h-[56px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] xl:w-[64px] xl:h-[64px]"
                  }
                  }
                  src={Igrowker_Logo.src}
                  alt="Logo de Igrowker"
                />
              </div>
              <div className="w-[100%] max-w-[560px] h-full px-4 pb-4 flex items-center justify-center">
                <div className="border-4 border-DC_woodLogo rounded-3xl overflow-hidden">
                  <ImageGallery
                      
                      items={images}
                      showPlayButton={false}
                      showThumbnails={false}
                  />
                </div>
              </div>
            </div>
        </article>
  )
}
