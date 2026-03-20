import { FeatureGrid } from "../home/FeatureGrid";
import { ProductGrid } from "../home/ProductGrid";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/productos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Datos:", data);
        const productosOrganizados = data.map((producto) => ({
          id: producto.id,
          name: producto.nombre,
          description: producto.descripcion,
          price: "$" + producto.precio,
          image: producto.imagen_url,
        }));
        setProductos(productosOrganizados);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <FeatureGrid />

      <ProductGrid title="Modelos de Cinturones" products={productos} />
    </div>
  );
};
