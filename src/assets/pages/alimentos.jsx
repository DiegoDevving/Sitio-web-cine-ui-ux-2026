import FoodCard from "../components/foodcard";
import Layout from "../components/layout"; // Asegúrate de que la ruta sea correcta

function Alimentos({ cambiarVista }) {
  const categorias = {
    drinks: [
      { id: 1, name: "Coca-Cola", image: "https://images.unsplash.com/photo-1554866585-c4db5b2310c3?w=400&h=400&fit=crop", price: "$2.99" },
      { id: 2, name: "Jugo Natural de Naranja", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop", price: "$3.99" }
    ],
    food: [
      { id: 3, name: "Hamburguesa BBQ", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop", price: "$12.99" },
      { id: 4, name: "Pizza Pepperoni", image: "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=400&fit=crop", price: "$14.99" }
    ],
    snacks: [
      { id: 5, name: "Palomitas de Maíz", image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64e4b?w=400&h=400&fit=crop", price: "$4.99" },
      { id: 6, name: "Papas Fritas", image: "https://images.unsplash.com/photo-1566050051773-1a91c4ccd319?w=400&h=400&fit=crop", price: "$3.49" }
    ]
  };

  const categoryLabels = {
    drinks: "Bebidas",
    food: "Comida",
    snacks: "Snacks"
  };

  return (
    <Layout>
      {Object.entries(categorias).map(([categoryKey, items]) => (
        <section key={categoryKey} style={{ marginBottom: "40px" }}>
          {/* Título de la categoría */}
          <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#333", borderBottom: "2px solid #c9f5ea", paddingBottom: "8px" }}>
            {categoryLabels[categoryKey]}
          </h2>
          
          {/* Contenedor Grid para las tarjetas de esta categoría */}
          <div
            style={{
              display: "grid",
              // Al usar 1fr se estirarán para llenar el ancho del monitor
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {items.map((item) => (
              <FoodCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}

export default Alimentos;