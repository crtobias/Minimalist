import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./botonnav.module.css";

export const BotonNav = ({ onClick }) => {
  const BlackMode = useSelector((state) => state.blackmode);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onClick(); 
  };

  return (
    <div
      className={`${BlackMode ? styles["container-boton-black"] : styles["container-boton-light"]} ${
        styles["navbar-toggle"]
      } ${isOpen ? styles.open : ""}`}
      onClick={handleToggle}
    >
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
    </div>
  );
};
