import React from 'react';
import { Link } from 'react-router';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-9xl text-[#8B7355] mb-4">404</h1>
        <h2 className="text-4xl text-[#2C2C2C] mb-4">Página No Encontrada</h2>
        <p className="text-xl text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-[#8B7355] hover:bg-[#D4AF37] text-white px-8 py-3 rounded-lg transition-colors duration-200"
        >
          <Home className="w-5 h-5" />
          <span>Volver al Inicio</span>
        </Link>
      </div>
    </div>
  );
};
