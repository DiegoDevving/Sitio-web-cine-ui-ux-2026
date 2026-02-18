import MovieCard from "../components/moviecard";
import Layout from "../components/layout";

function Home({ cambiarVista }) {
  return (
  <Layout> 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
    >
      <MovieCard
        title="Avatar: Fuego y Cenizas"
        image="https://m.media-amazon.com/images/M/MVSBYjZjNDdkZmYtYmF1ZSO0NzU5LThhNTEtMjkyNGJHNzk50WUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="¡Ayuda!"
        image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Arco"
        image="https://poluxweb.com/Polux3/images/data/cine/resenas/2026/febrero/Arco/Arco-01.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />
      </div>
    </Layout>
  );
}

export default Home;