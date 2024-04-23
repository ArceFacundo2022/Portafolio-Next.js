import { Card_API_RaM } from "../Cards/Card_API_RaM.Projects";
import { Card_EmpleosF } from "../Cards/Card_EmpleosF.Projects";
import { Card_MediLab } from "../Cards/Card_MediLab.Projects";


export const Section_Projects = () => {
  return (
    <main className="bg-slate-950 w-full h-screen px-16 z-10 xl:px-16 lg:px-12 md:px-10 sm:px-8" id="section_projects">
        <div className="py-20 flex align-middle justify-center">
            <h1 className=" font-Vollkorn text-3xl text-white border-b-2 border-blue-600">{"🔅 PROYECTOS PRINCIPALES 🔅"}</h1>
        </div>
        <section className=" bg-blue-950/25 p-5 rounded-lg grid grid-cols-6 gap-6">
            <Card_API_RaM/>
            <Card_EmpleosF/>
            <Card_MediLab/>
        </section>
    </main>
  )
}
