import MovieCard from "../components/moviecard";
import Layout from "../components/layout"; // Asegúrate de que la ruta sea correcta

function Cartelera({ cambiarVista }) {
  return (
    <Layout> 
      <div
      style={{
        display: "grid",
        // Corregido: eliminado el espacio en 'repeat'
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
      }}
    >
      <MovieCard
        title="Shingeki No Kyojin: The Final Season"
        image="https://m.media-amazon.com/images/M/MV5BMzVhOGMzYzQtNzgyMi00NjZmLWEzYjUtMjQ2NDE3Njk4MmRkXkEyXkFqcGc@._V1_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />
      
      <MovieCard
        title="Bob Esponja: Al Rescate"
        image="https://m.media-amazon.com/images/M/MV5BNjAyZDQwOTktZjc@Yi00MzNjLWI1NmUtODI2ZjJmYWRjOTA3XkEyXkFqcGc@._V1_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />
      </div>
    </Layout>
  );
}

export default Cartelera;