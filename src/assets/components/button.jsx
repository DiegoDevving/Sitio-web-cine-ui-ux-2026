export default function Button({ text, onClick }) {
  return (
    <button
    // Evento de react
      onClick={onClick}
      style={{
        padding: "8px 16px",
        backgroundColor: "#ffc107",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginintop: "8px",
      }}
    >
      {text}
    </button>
  );
}