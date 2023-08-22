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
               <a href="https://export-download.canva.com/pIngk/DAFnHxpIngk/62/0-5415978918563671835.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230820%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230820T200038Z&X-Amz-Expires=28284&X-Amz-Signature=c777516f46659693715bf0de40391394fb87a2e7510b5829e07f3972cabc9b02&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27CV-1.pdf.pdf&response-expires=Mon%2C%2021%20Aug%202023%2003%3A52%3A02%20GMT" target="_blank"> <p className={BlackMode ? styles[`cv-black`] : styles[`cv-light`]}>cv</p></a>
            </h1>
        </section>
        <section className={BlackMode ? styles[`container-datos-info-black`] : styles[`container-datos-info-light`]}>
           <p className={styles.lore}> I am a passionate Full Stack developer with a focus on Front-end development and interface design, with experience in both individual and team projects. I work with technologies such as HTML, CSS, JavaScript, React, Redux, Node.js, Express, SQL, PostgreSQL, and Sequelize. I am always excited to learn new technologies and enhance my skills. I stand out for my emphasis on quality and teamwork collaboration, and I am also familiar with TypeScript. I am constantly seeking professional growth opportunities.</p>
        </section>
        <section className={styles[`container-icons`]}>
           <a href="https://github.com/crtobias" target="_blank"> <img className={styles.icons} src={git} alt="" /></a>
            <a href="mailto:tgonzalezarriola@gmail.com" target="_blank"><img className={styles.icons} src={gmail} alt="" /></a>
            <a href="https://www.linkedin.com/in/tobias-gonzalez-arriola-0a2399273/" target="_blank"><img className={styles.icons} src={linkedin} alt="" /></a>
        </section>
       </section> 
    )
}