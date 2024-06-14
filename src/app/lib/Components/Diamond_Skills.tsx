import {Button} from "@nextui-org/react";
import { useContext } from "react";
import { FaComments, FaUsers, FaExchangeAlt, FaClock, FaLeaf, FaCheckCircle, FaLightbulb, FaBook, FaChessKing, FaHandHoldingHeart } from 'react-icons/fa';
import { SoftSkills_Context } from "../utils/context/SoftSkills.context";

export const Diamond_Skills = () => {

  const { selected, setSkillState } = useContext(SoftSkills_Context)

  const SkillInfo = [{
    name: "RESOLUCIÓN DE PROBLEMAS",
    img: "",
    frase:"El ser humano está hecho para solucionar problemas."
  },{
    name: "ADAPTACIÓN",
    img: "",
    frase:"Aferrarse al pasado te mantendrá allí."
  },{
    name: "GESTION DEL TIEMPO",
    img: "",
    frase:"El recurso más valioso que tenemos."
  },{
    name: "LIDERAZGO",
    img: "",
    frase:"Cooperando y apoyándonos llegamos más lejos."
  },{
    name: "RESPONSABILIDAD",
    img: "",
    frase:"La palabra de uno define el valor que los demás nos otorgan."
  },{
    name: "COMUNICACIÓN",
    img: "",
    frase:"La comunicación es la base de toda relación"
  },{
    name: "TRABAJO EN EQUIPO",
    img: "",
    frase:`Al comprometernos con nuestro equipo, dejamos el "yo" y adoptamos el "nosotros".`
  },{
    name: "EMPATÍA",
    img: "",
    frase:"Si no te pones en los zapatos del otro, ¿cómo esperas que el otro haga lo mismo?"
  },{
    name: "PACIENCIA",
    img: "",
    frase:"Todo tiene su tiempo; apresurar las cosas no garantiza su calidad."
  },{
    name: "APRENDIZAJE CONTINUO",
    img: "",
    frase:"No hay un día en el que me acueste sin haber aprendido algo nuevo."
  }]

  const HandleSkill = (index:number) => {
    setSkillState(SkillInfo[index])
  }

    const style_div = [
        {
            "--i": 0,
        } as React.CSSProperties,
        {
            "--i": 1,
        } as React.CSSProperties,
        {
            "--i": 2,
        } as React.CSSProperties,
    ]

return (
    <main className="rombo-skills relative flex w-auto h-auto flex-col justify-start p-2 border-4 border-blue-600 gap-[-16px] bg-gradient-to-br from-[#ACBBE5] to-[#4C5A7F]">
          {/*------------------------------| Article 1 |---------------------------------- */}
          <article className="w-full flex justify-start">
            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Solucionar Problemas" className="button-skill"
                onClick={()=> {HandleSkill(0)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaLightbulb/>
                  </b>
                </span>
              </Button>
            </div>

            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Trabajo en equipo" className="button-skill"
                onClick={()=> {HandleSkill(6)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaUsers/>
                  </b>
                </span>
              </Button>
            </div>

            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Aprendizaje Continuo" className="button-skill"
                onClick={()=> {HandleSkill(9)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaBook/>
                  </b>
                </span>
              </Button>
            </div>

            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Empatia" className="button-skill"
                onClick={()=> {HandleSkill(7)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaHandHoldingHeart/>
                  </b>
                </span>
              </Button>
            </div>
          </article>

          {/*------------------------------| Article 2 |---------------------------------- */}
          <article className="w-full flex justify-start">
            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Comunicacion" className="button-skill"
                onClick={()=> {HandleSkill(5)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaComments/>
                  </b>
                </span>
              </Button>
            </div>

            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Gestion del tiempo" className="button-skill"
                onClick={()=> {HandleSkill(2)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaClock/>
                  </b>
                </span>
              </Button>
            </div>

            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Responsabilidad" className="button-skill"
                onClick={()=> {HandleSkill(4)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaCheckCircle/>
                  </b>
                </span>
              </Button>
            </div>

          </article>

          {/*------------------------------| Article 3 |---------------------------------- */}
          <article className="w-full flex justify-start">
            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Adaptacion" className="button-skill"
              onClick={()=> {HandleSkill(1)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaExchangeAlt/>
                  </b>
                </span>
              </Button>
            </div>

            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Paciencia" className="button-skill"
                onClick={()=> {HandleSkill(8)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaLeaf/>
                  </b>
                </span>
              </Button>
            </div>

          </article>

          {/*------------------------------| Article 4 |---------------------------------- */}
          <article className="w-full flex justify-start">
            <div style={style_div[0]}>
              <Button isIconOnly aria-label="Liderazgo" className="button-skill"
                onClick={()=> {HandleSkill(3)}}
              >
                <span className=" rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-950/95">
                  <b>
                    <FaChessKing/>
                  </b>
                </span>
              </Button>
            </div>

          </article>
        </main>
  )
}
