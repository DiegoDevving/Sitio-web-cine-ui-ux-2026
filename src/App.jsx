import { useState } from "react";
// Componentes
import Header from "./assets/components/header";
// Vistas (Asegúrate de que las rutas coincidan con tus carpetas)
import Home from "./assets/pages/home";
import Cartelera from "./assets/pages/cartelera";
import Detalle from "./assets/pages/detalle";
import Alimentos from "./assets/pages/alimentos";
import Promociones from "./assets/pages/promociones";

function App() {
  // Estado que controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
      {/* Header puede cambiar la vista */}
      <Header cambiarVista={setVistaActual} />

      {/* Renderizado condicional de vistas */}
      {vistaActual === "home" && (
        <Home cambiarVista={setVistaActual} />
      )}
      
      {vistaActual === "cartelera" && (
        <Cartelera cambiarVista={setVistaActual} />
      )}
      
      {vistaActual === "detalle" && (
        <Detalle />
      )}
      
      {vistaActual === "alimentos" && (
        <Alimentos cambiarVista={setVistaActual} />
      )}
      
      {vistaActual === "promociones" && (
        <Promociones cambiarVista={setVistaActual} />
      )}
    </div>
  );
}

export default App;