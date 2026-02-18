export default function FoodCard({ name, price, image }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease",
        cursor: "pointer"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover"
        }}
      />
      <div style={{ padding: "12px" }}>
        <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#333" }}>
          {name}
        </h3>
        <p style={{ margin: "0", fontSize: "18px", fontWeight: "bold", color: "#e74c3c" }}>
          {price}
        </p>
      </div>
    </div>
  );
}
