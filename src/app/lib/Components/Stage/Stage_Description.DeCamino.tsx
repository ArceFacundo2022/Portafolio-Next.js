import Igrowker_Logo from "@/assets/icons/Igrowkers.webp"
import { Image } from "@nextui-org/react"


export const Stage_Description_DeCamino = () => {

  return (
          <article className="md:grid w-full h-auto md:h-full flex flex-col md:grid-cols-5 lg:grid-cols-6 gap-2">
            <div className="order-2 md:order-1 md:col-span-2 border-r-0 md:border-r-3 border-DC_woodLogo rounded-0 md:rounded-r-2xl overflow-hidden overflow-y-scroll scrollbar-hide">
                <div className="bg-white flex justify-center items-center pt-4 rounded-0 md:rounded-tr-2xl">
                    <Image
                    classNames={{
                        img: "max-w-[128px] max-h-[128px] border-4 rounded-full border-DC_woodLogo"
                    }
                    }
                    src={"https://res.cloudinary.com/dw7nvkjxx/image/upload/v1719470218/DeCamino/DeCaminoCirculo_bm96lu.png"}
                    alt="Logo de DeCamino"
                    />
                </div>
                <div className="text-black font-normal text-sm xs:text-medium xs:font-medium xl:font-semibold bg-gradient-to-br from-DC_softWood via-DC_Celeste to-DC_Celeste/30 rounded-t-3xl mt-[-48px] w-full h-auto pr-4 pb-2 pt-[56px]">
                    <div className="flex">
                      <h4 className="text-gray-900/80 text-medium font-bold pl-4 pr-4 py-1 bg-gradient-to-r from-DC_woodLogo to-DC_softWood rounded-r-full flex">Descripción general:</h4>
                    </div>
                    <p className="pl-4 py-2">DeCamino es una aplicación web mobile first que busca fomentar el
                      turismo en pueblos rurales a través de la gastronomía local. La aplicación permite a los
                      usuarios descubrir y planificar rutas que incluyan los mejores restaurantes caseros y de
                      comida a pie de calle en pueblos rurales mientras viajan. Además, ofrece diversas
                      funcionalidades que enriquecen la experiencia del usuario y promueven el turismo
                      sostenible en áreas rurales.
                    </p>
                    <div className="flex">
                      <h4 className="text-gray-900/80 text-medium font-bold pl-4 pr-4 py-1 bg-gradient-to-r from-DC_woodLogo to-DC_softWood rounded-r-full flex">Problema que se intenta resolver:</h4>
                    </div>
                    <p className="pl-4 py-2">Muchos pueblos rurales del interior están enfrentando un declive debido a la falta de
                      turistas y oportunidades de trabajo. La falta de visibilidad y accesibilidad para los visitantes
                      potenciales está acelerando este problema y esa disminución del turismo afecta
                      negativamente a las economías locales, llevando al cierre de negocios, la pérdida de cultura
                      y la emigración de la población joven en busca de mejores oportunidades.
                    </p>
                    <div className="flex">
                      <h4 className="text-gray-900/80 text-medium font-bold pl-4 pr-4 py-1 bg-gradient-to-r from-DC_woodLogo to-DC_softWood rounded-r-full flex">Solución propuesta:</h4>
                    </div>
                    <p className="pl-4 py-2">DeCamino busca revitalizar estos pueblos promoviendo su oferta gastronómica casera y
                      conectando a los turistas con restaurantes locales o comidas al paso a lo largo de sus rutas.
                      La aplicación no solo facilita el descubrimiento de estos lugares, sino que también ofrece
                      una experiencia enriquecida mediante recomendaciones personalizadas, filtros avanzados y
                      funcionalidades sociales. Fomentando el turismo sostenible, se busca que la plataforma sea
                      robusta, segura y fácil de usar, tanto para los usuarios como para los negocios locales.
                    </p>
                </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-3 lg:col-span-4 flex flex-col justify-center items-center overflow-hidden gap-2 py-4 pr-4">
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
              <div className="w-full max-w-[650px] h-full px-4 pb-4 flex items-center justify-center">
                <video className="border-4 border-DC_woodLogo rounded-xl" controls>
                  <source src={"https://res.cloudinary.com/dw7nvkjxx/video/upload/v1723482623/DeCamino/DeCamino_mliky6.mp4"}></source>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </article>
  )
}
