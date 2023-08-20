import { useSelector } from "react-redux";
import {  gitLogo,gmail, react } from "../../assets"
import { Boton } from "../Boton"
import styles from "./card.module.css"
import { useState } from "react";


export const Card = ({title,img,more,git,deploy}) => {
    const BlackMode = useSelector((state) => state.blackmode);
    const [showDiv, setShowDiv] = useState(true);

    const toggleDiv = () => {
        setShowDiv(!showDiv); 
      };


    return (
        <section className={BlackMode ? styles[`container-card-black`] : styles[`container-card-light`]} >
            
            <img className={styles[`img-card`]} src={img} alt={title} />
           <div className={styles[`title-more`]}>
           <h1 className={BlackMode ? styles[`title-card-black`] : styles[`title-card-light`]}>{title}</h1>
            <Boton texto="+" onClick={toggleDiv}/>
           </div>



           <div className={showDiv ? styles[`div-oculto`] : styles[`div-no-oculto`]}>
           <button className={styles.cierre} onClick={toggleDiv} >-</button>
          <div className={styles[`div-logos`]}>
          <p><a href={git} target="_blank"><img className={styles.icons} src={gitLogo} alt="" /></a></p>
           <p><a href={deploy} target="_blank"><img className={styles.icons}  src={gmail} alt="" /></a></p>
          </div>
           <p>{more}</p>
           </div>



        </section>
    )
}