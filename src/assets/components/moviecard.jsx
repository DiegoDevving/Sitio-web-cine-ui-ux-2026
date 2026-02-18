import Button from "./button"; // Importación relativa en la misma carpeta

export default function MovieCard({ title, image, onVerDetalle }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",     
      }}
    >
      {/* Imgen de peliclula. */}
      <img
        src={image || "https://via.placeholder.com/300x450?text=No+Image"}
        alt={title}
        style={{ 
          width: "100%", 
          height: "300px",
          objectFit: "cover"        
        }}
      />     

      {/* Título de la película. */}
      <div style={{ padding: "12px", textAlign: "center" }}>
        <h3>{title}</h3>
        
        {/* Boton que permite ir a la vista de detalles */}
        <Button text="Ver detalles" onClick={() => onVerDetalle(title)} />
      </div>
    </div>
  );
}