import { Card_API_RaM } from "../Cards/Card_API_RaM.Projects";
import { Card_EmpleosF } from "../Cards/Card_EmpleosF.Projects";
import { Card_MediLab } from "../Cards/Card_MediLab.Projects";


export const Section_Projects = () => {
  return (
    <main className="bg-slate-950 w-full min-h-screen px-2 z-10 xl:px-16 lg:px-12 md:px-10 sm:px-8 xs:px-6 2xs:px-3" id="section_projects">
        <div className="py-20 flex align-middle justify-center">
            <h1 className="font-Vollkorn text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white border-b-2 border-blue-600">{"🔅 PROYECTOS PRINCIPALES 🔅"}</h1>
        </div>
        <section 
          className="
          p-5 rounded-lg grid grid-rows-3 grid-cols-1 gap-3
          bg-gradient-to-b from-green-950/55 via-purple-950/55 to-blue-950/55 
          md:bg-gradient-to-r md:grid-rows-1 md:grid-cols-6 md:gap-6 lg:from-green-950/55 lg:via-purple-950/55 lg:to-blue-950/55
          md:from-green-950/55 md:to-purple-950/55"
        >
            <Card_API_RaM/>
            <Card_EmpleosF/>
            <div className="block md:hidden lg:block col-span-1 lg:col-span-2">
              <Card_MediLab/>
            </div>
        </section>
        <section
          className="
          bg-blue-950/55 p-5 rounded-lg hidden lg:hidden
          md:grid md:grid-rows-1 md:grid-cols-5 md:gap-3
          "
        >
          <div className="col-span-3 col-start-2">
            <Card_MediLab/>
          </div>

        </section>
    </main>
  )
}
