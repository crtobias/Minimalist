// store.js
import { configureStore } from "@reduxjs/toolkit";
import defaultReducer from "./restoSlice"; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const store = configureStore({
  reducer: defaultReducer
});

export default store; // Utiliza la exportación por defecto
