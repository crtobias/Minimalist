import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { gitLogo, gmail, react } from "../../assets";
import { Boton } from "../Boton";
import styles from "./card.module.css";

export const Card = ({ title, img, more, git, deploy,mantenimiento,tec }) => {
    const BlackMode = useSelector((state) => state.blackmode);
    const [showDiv, setShowDiv] = useState(true);
    const [alertMessage, setAlertMessage] = useState("");

    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };

    const handleGitClick = (event) => {
        if (!git) {
            event.preventDefault();
            setAlertMessage("¡El enlace del repositorio está vacío!");
        }
    };

    const handleDeployClick = (event) => {
        if (!deploy) {
            event.preventDefault();
            setAlertMessage("¡El enlace de deploy está vacío!");
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlertMessage("");
        }, 2000); // 5000 milisegundos = 5 segundos

        return () => clearTimeout(timer);
    }, [alertMessage]);

    return (
        <section className={BlackMode ? styles[`container-card-black`] : styles[`container-card-light`]}>
            <img className={styles[`img-card`]} src={img} alt={title} />
            <div className={styles[`title-more`]}>
                <h1 className={BlackMode ? styles[`title-card-black`] : styles[`title-card-light`]}>{title}</h1>
                <Boton texto="Mas info" onClick={toggleDiv} />
            </div>
            <div className={showDiv ? styles[`div-oculto`] : styles[`div-no-oculto`]}>
                <button className={styles.cierre} onClick={toggleDiv}>Cerrar</button>
                <p>{more}</p>
                <h2>Tecnologias : {tec}</h2>
                <p>Estado : {mantenimiento}</p>
                <div className={styles[`div-logos`]}>
                    <p className={styles[`div-logos-l`]}>
                        <h5>Repositorio</h5>
                        <a href={git} target="_blank" onClick={handleGitClick}><img className={styles.icons} src={gitLogo} alt="" /></a>
                    </p>
                    <br />
                    <p className={styles[`div-logos-l`]}>
                        <h5>Web</h5>
                        <a href={deploy} target="_blank" onClick={handleDeployClick}><img className={styles.icons} src={gmail} alt="" /></a>
                    </p>
                </div>
            </div>
            {alertMessage && (
                <div className={styles.alert}>
                    {alertMessage}
                </div>
            )}
        </section>
    );
};
