import PromoCard from "../components/promocard";
import Layout from "../components/layout";

function Promociones({ cambiarVista }) {
  const promociones = {
    combos: [
      {
        id: 1,
        title: "Combo Palomitas + Bebida",
        description: "Palomitas grandes + Bebida de 500ml",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64e4b?w=400&h=400&fit=crop",
        discount: "20% OFF"
      },
      {
        id: 2,
        title: "Combo Snack Pack",
        description: "Papas fritas + Candy + Bebida pequeña",
        image: "https://images.unsplash.com/photo-1566050051773-1a91c4ccd319?w=400&h=400&fit=crop",
        discount: "15% OFF"
      }
    ],
    tickets: [
      {
        id: 3,
        title: "2x1 en Entradas",
        description: "Compra 1 entrada y lleva 2 de la misma película",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c6ed2963c?w=400&h=400&fit=crop",
        discount: "50% OFF"
      },
      {
        id: 4,
        title: "2x1 Combo Completo",
        description: "2 Entradas + Combo Palomitas + Bebidas grandes",
        image: "https://images.unsplash.com/photo-1489599849228-ed4dc902ba4a?w=400&h=400&fit=crop",
        discount: "45% OFF"
      }
    ]
  };

  const categoryLabels = {
    combos: "Combos de Snacks",
    tickets: "Ofertas de Entradas"
  };

  return (
    <Layout>
      {Object.entries(promociones).map(([categoryKey, items]) => (
        <section key={categoryKey} style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#333", borderBottom: "2px solid #c9f5ea", paddingBottom: "8px" }}>
            {categoryLabels[categoryKey]}
          </h2>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {items.map((item) => (
              <PromoCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                discount={item.discount}
              />
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}

export default Promociones;
