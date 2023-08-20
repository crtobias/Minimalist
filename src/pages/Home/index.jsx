import React, { useState } from "react";
import styles from "./home.module.css";
import { useSelector } from "react-redux";
import { Datos, Tecnologias,  Portfolio } from "../../component";



export const Home = () => {

    const BlackMode = useSelector((state) => state.blackmode);
   

    return (
        <div className={BlackMode ? styles[`container-home-black`] : styles[`container-home-light`]}> 
         
            <Datos id="1"/>
            <Tecnologias id="2"/>
            <Portfolio id="3"/>

        </div>
    );
};
