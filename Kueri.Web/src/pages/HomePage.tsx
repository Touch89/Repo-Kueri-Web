import { FeatureGrid } from "../home/FeatureGrid";
import { ProductGrid } from "../home/ProductGrid";

export const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Cinturon Clasico Negro",
      description: "Cuero liso con hebilla metalica",
      price: "$24.99",
      image: "https://ui.shadcn.com/placeholder.svg",
    },
    {
      id: 2,
      name: "Cinturon Casual Marron",
      description: "Acabado mate para uso diario",
      price: "$21.50",
      image: "https://ui.shadcn.com/placeholder.svg",
    },
    {
      id: 3,
      name: "Cinturon Trenzado Beige",
      description: "Estilo flexible y moderno",
      price: "$19.90",
      image: "https://ui.shadcn.com/placeholder.svg",
    },
    {
      id: 4,
      name: "Cinturon Formal Cognac",
      description: "Ideal para traje y eventos",
      price: "$29.00",
      image: "https://ui.shadcn.com/placeholder.svg",
    },
    {
      id: 5,
      name: "Cinturon Reversible",
      description: "Negro y marron en una sola pieza",
      price: "$32.00",
      image: "https://ui.shadcn.com/placeholder.svg",
    },
    {
      id: 6,
      name: "Cinturon Denim Azul",
      description: "Look urbano con textura tejida",
      price: "$18.75",
      image: "https://ui.shadcn.com/placeholder.svg",
    },
    {
      id: 7,
      name: "Cinturon Western",
      description: "Detalle grabado y hebilla grande",
      price: "$34.50",
      image: "https://ui.shadcn.com/placeholder.svg",
    },
    {
      id: 8,
      name: "Cinturon Minimal",
      description: "Diseno limpio con hebilla fina",
      price: "$22.40",
      image: "https://ui.shadcn.com/placeholder.svg",
    },
  ];

  return <div>
    <FeatureGrid />

    <ProductGrid
      title="Modelos de Cinturones"
      products={featuredProducts} />
  </div>
};