import { useSelector } from "react-redux";
import styles from "./footer.module.css"
import { git, gmail, linkedin } from "../../assets";

export const Footer = () => {
    const BlackMode = useSelector((state) => state.blackmode);
    return(
        <section className={BlackMode ? styles[`container-footer-black`] : styles[`container-footer-light`]}>
            <p>Localidad: <br />
            Buenos Aires Argentina <br />
            +54 221 511 5287
            </p>
            <a href="https://github.com/crtobias" target="_blank"><img className={styles.icono} src={git} alt="" /></a>
            <a href="mailto:tgonzalezarriola@gmail.com" target="_blank"><img className={styles.icono}src={gmail} alt="" /></a>
            <a href="https://www.linkedin.com/in/tobias-gonzalez-arriola-0a2399273/" target="_blank"><img className={styles.icono}src={linkedin} alt="" /></a>
        </section>
    )
}