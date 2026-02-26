import React from 'react';
import { useParams, Navigate } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Lista de categorías válidas
  const validCategories = ['cinturones', 'carteras', 'bolsas', 'billeteras', 'tarjeteros'];
  
  // Si no es una categoría válida, redirigir al home
  if (!category || !validCategories.includes(category)) {
    return <Navigate to="/" replace />;
  }
  
  const categoryProducts = products.filter((p) => p.category === category);
  
  const categoryTitles: Record<string, string> = {
    cinturones: 'Cinturones',
    carteras: 'Carteras',
    bolsas: 'Bolsas',
    billeteras: 'Billeteras',
    tarjeteros: 'Tarjeteros',
  };

  const title = categoryTitles[category || ''] || 'Productos';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl text-[#2C2C2C] mb-4">{title}</h1>
        <p className="text-gray-600">
          Descubre nuestra colección exclusiva de {title.toLowerCase()} de piel genuina.
        </p>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No hay productos disponibles en esta categoría.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};