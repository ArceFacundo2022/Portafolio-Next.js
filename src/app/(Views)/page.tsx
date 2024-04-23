import { Stars } from "@/app/lib/Components/Stars"
import { NavBar } from "../lib/Components/NavBar"
import { Section_Hero } from "../lib/Components/Sections/Section_Hero";
import { Section_Projects } from "../lib/Components/Sections/Section_Projects";


export default function Home() {


  return (
    <>
      <NavBar/>
      <main className="w-full max-h-screen fondo-de-estrellas overflow-hidden overflow-y-hidden">
        <Stars/>
      </main>
      <Section_Hero/>
      <Section_Projects/>
    </>
  );
}
