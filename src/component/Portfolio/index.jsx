import { Card } from "../Card"
import styles from "./port.module.css"
import data from "../../DB/proyectos.json"
import { useSelector } from "react-redux"

export const Portfolio =  (props) => {
    
    const BlackMode = useSelector((state) => state.blackmode);
    return(
        <section id={props.id} className={styles.container}>
            <h2 className={BlackMode?styles[`title-main-black`]:styles[`title-main-light`]}>Proyectos</h2>
            <div className={styles.cards}>
                {data.map((data)=>{
                    return(
                        <Card title={data.title} img={data.img} git={data.git} deploy={data.deploy} more={data.more} mantenimiento={data.mantenimiento} tec={data.tec}/>
                    )
                })}
            </div>
        </section>
    )
}