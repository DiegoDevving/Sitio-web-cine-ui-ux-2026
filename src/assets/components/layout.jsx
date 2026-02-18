export default function Layout({ children }) {
  return (
    <main
      style={{
        width: "100vw",       // Ocupa el 100% del ancho de la ventana (viewport width)
        margin: 0,            // Sin márgenes
        padding: "24px",      // Espacio para que las tarjetas no toquen los bordes
        boxSizing: "border-box",
        backgroundColor: "#f4f4f4" // Para que veas que el fondo cubre todo
      }}
    >
      {children}
    </main>
  );
}