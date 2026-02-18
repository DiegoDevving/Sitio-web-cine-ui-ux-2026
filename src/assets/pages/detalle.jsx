import Layout from "../components/layout"; // Asegúrate de que la ruta sea correcta

function Detalle() {
  return (
    <Layout>
      <div
      style={{
        padding: "24px",

      }}
    >
      <h2>Detalles de la Película</h2>
      
      <img
        src="https://via.placeholder.com/800x400" // Reemplaza con el link real
        alt="Nombre de la película"
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p style={{ lineHeight: "1.6", color: "#333" }}>
        AQUÍ VA UNA SINOPSIS DE LA PELÍCULA. Puedes pasar esta información 
        como una prop si quieres que sea dinámica.
      </p>
      </div>
    </Layout>
  );
}

export default Detalle;