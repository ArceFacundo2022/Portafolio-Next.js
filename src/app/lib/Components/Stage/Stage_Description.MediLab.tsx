
export const Stage_Description_Medilab = () => {
    return (
        <article className="py-3 w-full relative">
            <header className="pb-6 text-xl 2xs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center text-blue-600/70 font-Vollkorn font-extrabold">
                <p className="border-b-2 border-blue-600/70">⚜ Descripción ⚜</p>
            </header>
            <main className="p-4 rounded-lg bg-blue-950/50 w-full text-tiny xs:text-sm">
                <p className="pb-3">
                    <strong className="text-medium text-blue-600 font-Chakra">MEDILAB</strong> fue el primer <strong className=" text-blue-400/80">proyecto fullstack</strong> que realizamos en la carrera con un equipo de 3 personas, 
                    en las que nos embarcamos a resolver la problemática de la falta de acceso a la información de historias clínicas y la
                    no centralización de las mismas.
                </p>
                <p className="pb-3">
                    Este proyecto fue realizado desde el análisis mismo de la problemática a resolver, hasta la presentación con el <strong className=" text-blue-400/80">prototipo mínimo y viable</strong>
                    . Trabajando durante todo el primer año de la carrera, para implementar todos los conocimientos del mismo en un único proyecto
                </p>
                <p className="pb-3">
                    El proyecto consistía en una pagina web de consultas de historias clínicas, en la que los profesionales médicos podían hacer consultas sobre los archivos médicos
                    de sus pacientes y poder agregar mas archivos al mismo. Los pacientes podían recibir notificaciones sobre nuevas historias clínicas subidas en su cuenta y poder
                    revisarlos y descargarlos.
                </p>
                <p>
                    La página web contaba con las siguientes <strong className=" text-blue-400/80">funcionalidades</strong>:
                    <ul>
                        <li>🔷 Registro e Inicio de Sesión</li>
                        <li>🔷 Perfil de usuarios</li>
                        <li>🔷 Navegación entre perfiles</li>
                        <li>🔷 Manejo de archivos</li>
                        <li>🔷 Notificaciones</li>
                    </ul>
                </p>

            </main>
        </article>
    )
}
