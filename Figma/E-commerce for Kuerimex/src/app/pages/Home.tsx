import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { ProductSlider } from '../components/ProductSlider';
import { products } from '../data/products';
import { Truck, Shield, Headphones, Award } from 'lucide-react';

export const Home: React.FC = () => {
  const trendingProducts = products.slice(0, 8);
  const mensProducts = products.filter((p) => p.gender === 'hombre');
  const womensProducts = products.filter((p) => p.gender === 'mujer');
  const bestSellers = products.filter((p) => [1, 4, 6, 8].includes(p.id));
  const belts = products.filter((p) => p.category === 'cinturones');
  const wallets = products.filter((p) => p.category === 'carteras');

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-[#8B7355]/10 p-4 rounded-full mb-4">
              <Truck className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-lg text-[#2C2C2C] mb-2">Envío Gratis</h3>
            <p className="text-sm text-gray-600">En órdenes sobre $800</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-[#8B7355]/10 p-4 rounded-full mb-4">
              <Shield className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-lg text-[#2C2C2C] mb-2">Devoluciones</h3>
            <p className="text-sm text-gray-600">Devoluciones dentro de 72 horas</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-[#8B7355]/10 p-4 rounded-full mb-4">
              <Headphones className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-lg text-[#2C2C2C] mb-2">Soporte 24/7</h3>
            <p className="text-sm text-gray-600">Soporte técnico en cualquier momento</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-[#8B7355]/10 p-4 rounded-full mb-4">
              <Award className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-lg text-[#2C2C2C] mb-2">Garantía</h3>
            <p className="text-sm text-gray-600">Garantía de 1 año en todos los equipos</p>
          </div>
        </div>
      </div>

      {/* Product Sliders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductSlider title="Productos en Tendencia" products={trendingProducts} />
        <ProductSlider title="Más Vendidos" products={bestSellers} />
        <ProductSlider title="Para Dama" products={womensProducts} />
        <ProductSlider title="Para Caballero" products={mensProducts} />
        <ProductSlider title="Cinturones" products={belts} />
        <ProductSlider title="Carteras" products={wallets} />
      </div>
    </div>
  );
};
