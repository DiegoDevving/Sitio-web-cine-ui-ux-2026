export default function PromoCard({ title, description, image, discount }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        position: "relative"
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
      <div style={{ position: "relative" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: "#e74c3c",
            color: "white",
            padding: "8px 12px",
            borderRadius: "4px",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
          {discount}
        </div>
      </div>
      <div style={{ padding: "12px" }}>
        <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#333" }}>
          {title}
        </h3>
        <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
