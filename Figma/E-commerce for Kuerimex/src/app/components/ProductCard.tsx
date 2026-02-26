import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-lg text-[#2C2C2C] mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl text-[#8B7355]">${product.price.toLocaleString('es-MX')}</span>
          <button
            onClick={handleAddToCart}
            className="bg-[#8B7355] hover:bg-[#D4AF37] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
