import { useSelector } from "react-redux";
import { git, gmail, linkedin, yo, yo1,x } from "../../assets"
import styles from "./datos.module.css"

export const Datos = (props) => {
    const BlackMode = useSelector((state) => state.blackmode);
    return(
       <section id={props.id} className={styles[`container-datos`]}>
        <section className={styles[`container-datos-info-foto`]}>
            <img className={BlackMode ? styles[`myfoto-black`] : styles[`myfoto-light`]} src={yo} alt="asdf" />
            <h1 className={styles.name}>
                Tobias Gonzalez Arriola
               <a href="" target="_blank"> <p className={BlackMode ? styles[`cv-black`] : styles[`cv-light`]}>cv</p></a>
            </h1>
        </section>
        <section className={BlackMode ? styles[`container-datos-info-black`] : styles[`container-datos-info-light`]}>
           <p className={styles.lore}>Soy un desarrollador de software y estudiante de sistemas en la UNLP. Siempre me interesa generar soluciones y proyectos nuevos mientras aprendo nuevas tecnologías y enseño lo que voy aprendiendo en mi camino como desarrollador. </p>
        </section>
        <section className={styles[`container-icons`]}>
           <a href="https://github.com/crtobias" target="_blank"> <img className={styles.icons} src={git} alt="" /></a>
            <a href="mailto:tgonzalezarriola@gmail.com" target="_blank"><img className={styles.icons} src={gmail} alt="" /></a>
            <a href="https://www.linkedin.com/in/tobias-gonzalez-arriola-0a2399273/" target="_blank"><img className={styles.icons} src={linkedin} alt="" /></a>
            <a href="https://twitter.com/crtobias_" target="_blank"> <img className={styles.icons} src={x} alt="" /></a>
        </section>
       </section> 
    )
}
