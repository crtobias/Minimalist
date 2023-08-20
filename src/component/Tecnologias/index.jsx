import {  icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, react } from "../../assets"
import { Skills } from "../Skills"
import { useSelector } from "react-redux";
import styles from "./tec.module.css"

export const Tecnologias = (props) => {
    const BlackMode = useSelector((state) => state.blackmode);
    return(
        <section id={props.id} className={styles.container}>
            <h2 className={BlackMode ? styles[`title-black`] : styles[`title-light`]}>Skills</h2>
            <div className={styles[`container-skills`]}>
                <Skills texto={icon1}/>
                <Skills texto={icon2}/>
                <Skills texto={icon3}/>
                <Skills texto={icon4}/>
                <Skills texto={icon5}/>
                <Skills texto={icon6}/>
                <Skills texto={icon7}/>
                <Skills texto={icon8}/>
            </div>
        </section>
    )
}