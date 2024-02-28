import { useSelector } from "react-redux";
import { git, gmail, linkedin, yo, yo1 } from "../../assets"
import styles from "./datos.module.css"

export const Datos = (props) => {
    const BlackMode = useSelector((state) => state.blackmode);
    return(
       <section id={props.id} className={styles[`container-datos`]}>
        <section className={styles[`container-datos-info-foto`]}>
            <img className={BlackMode ? styles[`myfoto-black`] : styles[`myfoto-light`]} src={yo} alt="asdf" />
            <h1 className={styles.name}>
                Tobias Gonzalez Arriola
               <a href="https://export-download.canva.com/DAktU/DAFvfvDAktU/29/0-6971992277799300034.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240227T141917Z&X-Amz-Expires=44526&X-Amz-Signature=d214e7cee11a7ca38225dac0761e1682325196f19b1dfb4e44ebb7cb3641a624&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27cv-tobias.pdf.pdf&response-expires=Wed%2C%2028%20Feb%202024%2002%3A41%3A23%20GMT" target="_blank"> <p className={BlackMode ? styles[`cv-black`] : styles[`cv-light`]}>cv</p></a>
            </h1>
        </section>
        <section className={BlackMode ? styles[`container-datos-info-black`] : styles[`container-datos-info-light`]}>
           <p className={styles.lore}>Soy un Desarrollador Web Full-Stack y Estudiante de ATIC en UNLP con un constante interés en aprender nuevas tecnologías. Mi enfoque se centra principalmente en el diseño y el desarrollo del front-end. Originario de la ciudad de La Plata, Buenos Aires, nací en Córdoba, específicamente en Río Cuarto. Desde siempre he sentido una fuerte atracción hacia la programación y la creación de juegos.</p>
        </section>
        <section className={styles[`container-icons`]}>
           <a href="https://github.com/crtobias" target="_blank"> <img className={styles.icons} src={git} alt="" /></a>
            <a href="mailto:tgonzalezarriola@gmail.com" target="_blank"><img className={styles.icons} src={gmail} alt="" /></a>
            <a href="https://www.linkedin.com/in/tobias-gonzalez-arriola-0a2399273/" target="_blank"><img className={styles.icons} src={linkedin} alt="" /></a>
        </section>
       </section> 
    )
}
