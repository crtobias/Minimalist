import styles from "./skills.module.css"
import { useSelector } from "react-redux";


export const Skills = ({texto, onClick}) => {

    const BlackMode = useSelector((state) => state.blackmode);

return(
    <div className={BlackMode ? styles[`container-skills-black`] : styles[`container-skills-light`]} onClick={onClick}> 
        <img src={texto} alt="l" />
    </div>
)
}