
import React, { useState } from "react";
import styles from "./nav.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { blackModeChange } from '../../redux/restoSlice';
import { Boton } from "../Boton";
import { BotonNav } from "../BotonNav";
import { log } from "../../assets";

export const Nav = () => {
  const [showDiv, setShowDiv] = useState(false);
  const BlackMode = useSelector((state) => state.blackmode);
  const dispatch = useDispatch();

  const toggleDiv = () => {
    setShowDiv(!showDiv); 
  };

  return (
    <section>


      <section className={BlackMode ? styles[`container-nav-black`] : styles[`container-nav-light`]}>
      <div className={styles[`opcion-nav`]}>
        <BotonNav texto="Opcion 2" onClick={toggleDiv} />
      </div>
      <div className={styles[`opcion-nav`]}>
        <Boton onClick={() => dispatch(blackModeChange())} texto={BlackMode ? "Dark" : "Light"} />
      </div>
      <div className={styles[`opcion-nav`]}>
       <img className={styles.log} src={log} alt="" />
      </div>


      <div className={BlackMode ? `${styles["container-menu-black"]} ${showDiv ? styles["active"] : ""}` : `${styles["container-menu-light"]} ${showDiv ? styles["active"] : ""}`}>
      <div className={styles[`opcion-nav`]}>
        <a href="#2">
        <Boton  texto='Skills'   />
        </a>
      </div>
      
      
      <div className={styles[`opcion-nav`]}>
        <a href="#1">
        <Boton  texto='Home'   />
        </a>
      </div>
      
      
      <div className={styles[`opcion-nav`]}>
       <a href="#3">
       <Boton  texto='Portfolio'  />
       </a>
      </div>
      </div>

    </section>





    <section className={BlackMode ? styles[`container-desktop-black`] : styles[`container-desktop-light`]}>
      
      <div className={styles[`opcion-nav`]}>
        <Boton onClick={() => dispatch(blackModeChange())} texto={BlackMode ? "Dark" : "Light"} />
      </div>
      <div className={styles[`opcion-nav`]}>
        <a href="#2">
        <Boton  texto='Skills' />
        </a>
      </div>
      
      
      <div className={styles[`opcion-nav`]}>
        <a href="#1">
        <Boton  texto='Home' />
        </a>
      </div>
      
      
      <div className={styles[`opcion-nav`]}>
       <a href="#3">
       <Boton  texto='Portfolio' />
       </a>
      </div>
      

      <div className={styles[`opcion-nav`]}>
       <img className={styles.log} src={log} alt="" />
      </div>

     

    </section>





    </section>
  );
}

