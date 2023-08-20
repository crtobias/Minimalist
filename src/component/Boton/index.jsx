import { useSelector } from "react-redux";
import styles from "./boton.module.css"

export const Boton = ({texto, onClick}) => {

    const BlackMode = useSelector((state) => state.blackmode);

return(
    <div className={BlackMode ? styles[`container-boton-black`] : styles[`container-boton-light`]} onClick={onClick}> 
        {texto}
    </div>
)
}