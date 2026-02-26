import React, { useState } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Cinturones', path: '/cinturones' },
    { name: 'Carteras', path: '/carteras' },
    { name: 'Bolsas', path: '/bolsas' },
    { name: 'Billeteras', path: '/billeteras' },
    { name: 'Tarjeteros', path: '/tarjeteros' },
    { name: 'Sobre Nosotros', path: '/nosotros' },
  ];

  return (
    <nav className="bg-white border-b border-[#8B7355]/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#8B7355] to-[#D4AF37] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-2xl">K</span>
            </div>
            <span className="text-2xl text-[#8B7355]">Kuerimex</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="p-2 hover:bg-[#8B7355]/10 rounded-full transition-colors"
              aria-label="Iniciar sesión"
            >
              <User className="w-6 h-6 text-[#2C2C2C]" />
            </Link>
            <Link
              to="/carrito"
              className="relative p-2 hover:bg-[#8B7355]/10 rounded-full transition-colors"
              aria-label="Carrito de compras"
            >
              <ShoppingCart className="w-6 h-6 text-[#2C2C2C]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-[#8B7355]/10 rounded-full transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#2C2C2C]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2C2C2C]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#8B7355]/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-[#2C2C2C] hover:bg-[#8B7355]/10 hover:text-[#8B7355] transition-colors rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};