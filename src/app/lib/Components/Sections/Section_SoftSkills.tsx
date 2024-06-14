
import React from 'react';
import { FaComments, FaUsers, FaExchangeAlt, FaClock, FaLeaf, FaCheckCircle, FaLightbulb, FaBook, FaChessKing, FaHandHoldingHeart } from 'react-icons/fa';

export const Section_SoftSkills = () => {

  const style_card_glass = [{
    "--r":-15
  } as React.CSSProperties,{
    "--r":5
  } as React.CSSProperties,{
    "--r":25
  } as React.CSSProperties,{
    "--r":-15
  } as React.CSSProperties,{
    "--r":5
  } as React.CSSProperties];

  return (
    <main className="bg-slate-950 w-full min-h-screen px-2 z-10 xl:px-16 lg:px-12 md:px-10 sm:px-8 xs:px-6 2xs:px-3 flex flex-col gap-5" 
    id="section_softSkills"
    >
      <section>
        <header className="pt-20 pb-10 flex align-middle justify-center text-center">
          <h1 className="font-Vollkorn text-3xl text-white border-b-2 border-blue-600">{" HABILIDADES BLANDAS "}</h1>
        </header>
        <main className='container-cards-glass justify-center items-center flex flex-col'>
          <div className='w-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-col-1 justify-center items-center gap-y-5 sm:gap-y-8 md:gap-y-10'>
            <article style={style_card_glass[0]} className="card-glass p-1.5">
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >GESTION DEL TIEMPO</h1>
              <div className='card-icon-skill'>
                  <FaClock/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>El recurso más valioso que tenemos.</h4>
            </article>

            <article style={style_card_glass[1]}  className="card-glass p-1.5">
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >TRABAJO EN EQUIPO</h1>
              <div className='card-icon-skill'>
                  <FaUsers/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>{`Al comprometernos con nuestro equipo, dejamos el "yo" y adoptamos el "nosotros".`}</h4>
            </article>

            <article style={style_card_glass[2]} className="card-glass p-1.5" >
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >RESOLUCIÓN DE PROBLEMAS</h1>
              <div className='card-icon-skill'>
                  <FaLightbulb/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>El ser humano está hecho para solucionar problemas.</h4>
            </article>

            <article style={style_card_glass[3]} className="card-glass p-1.5">
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >COMUNICACIÓN</h1> 
              <div className='card-icon-skill'>
                  <FaComments/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>La comunicación es la base de toda relación.</h4>
            </article>

            <article style={style_card_glass[4]} className="card-glass p-1.5">
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >RESPONSABILIDAD</h1>
              <div className='card-icon-skill'>
                  <FaCheckCircle/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>La palabra de uno define el valor que los demás nos otorgan.</h4>
            </article>

            <article style={style_card_glass[0]} className="card-glass p-1.5">
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >APRENDIZAJE CONTINUO</h1>
              <div className='card-icon-skill'>
                  <FaBook/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>No hay un día en el que me acueste sin haber aprendido algo nuevo.</h4>
            </article>

            <article style={style_card_glass[1]}  className="card-glass p-1.5">
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >PACIENCIA</h1>
              <div className='card-icon-skill'>
                  <FaLeaf/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>Todo tiene su tiempo; apresurar las cosas no garantiza su calidad.</h4>
            </article>

            <article style={style_card_glass[2]} className="card-glass p-1.5" >
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >ADAPTACIÓN</h1>
              <div className='card-icon-skill'>
                  <FaExchangeAlt/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>Aferrarse al pasado te mantendrá allí.</h4>
            </article>

            <article style={style_card_glass[3]} className="card-glass p-1.5">
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >LIDERAZGO</h1>
              <div className='card-icon-skill'>
                  <FaChessKing/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>Cooperando y apoyándonos llegamos más lejos.</h4>
            </article>

            <article style={style_card_glass[4]} className="card-glass p-1.5">
              <h1 className='font-bold font-Vollkorn text-lg text-center text-white pb-3' >EMPATÍA</h1>
              <div className='card-icon-skill'>
                  <FaHandHoldingHeart/>
              </div>
              <h4 className='font-bold font-Vollkorn text-sm text-center text-blue-500 pt-3 card-text'>Si no te pones en los zapatos del otro, ¿cómo esperas que el otro haga lo mismo?</h4>
            </article>
          </div>
        </main>
      </section>
    </main>
  )
}
