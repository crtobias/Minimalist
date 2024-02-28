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
               <a href="https://www.linkedin.com/in/tobias-gonzalez-arriola-0a2399273/details/featured/1709082411543/single-media-viewer/?profileId=ACoAAELMajoBaczBg1nQxeFzVhpa_y0mSZCTvgY" target="_blank"> <p className={BlackMode ? styles[`cv-black`] : styles[`cv-light`]}>cv</p></a>
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
