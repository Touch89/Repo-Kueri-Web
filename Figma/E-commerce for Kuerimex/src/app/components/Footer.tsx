import React from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Acerca de */}
          <div>
            <h3 className="text-lg mb-4 text-[#D4AF37]">Kuerimex</h3>
            <p className="text-gray-300 text-sm mb-4">
              Productos de piel de la más alta calidad. Artesanía mexicana con diseños únicos y elegantes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg mb-4 text-[#D4AF37]">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/cinturones" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Cinturones
                </Link>
              </li>
              <li>
                <Link to="/carteras" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Carteras
                </Link>
              </li>
              <li>
                <Link to="/bolsas" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Bolsas
                </Link>
              </li>
              <li>
                <Link to="/billeteras" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Billeteras
                </Link>
              </li>
              <li>
                <Link to="/tarjeteros" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Tarjeteros
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de Envíos */}
          <div>
            <h3 className="text-lg mb-4 text-[#D4AF37]">Información</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Política de Envíos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Garantía
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Guía de Tallas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto y Pagos */}
          <div>
            <h3 className="text-lg mb-4 text-[#D4AF37]">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ciudad de México, México</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+525512345678" className="hover:text-[#D4AF37] transition-colors">
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@kuerimex.com" className="hover:text-[#D4AF37] transition-colors">
                  info@kuerimex.com
                </a>
              </li>
            </ul>
            <h4 className="text-sm mb-2 text-[#D4AF37]">Métodos de Pago</h4>
            <div className="flex space-x-2">
              <a href="https://www.visa.com.mx" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white text-[#2C2C2C] rounded text-xs hover:bg-[#D4AF37] hover:text-white transition-colors">
                Visa
              </a>
              <a href="https://www.mastercard.com.mx" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white text-[#2C2C2C] rounded text-xs hover:bg-[#D4AF37] hover:text-white transition-colors">
                Mastercard
              </a>
              <a href="https://www.paypal.com/mx" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white text-[#2C2C2C] rounded text-xs hover:bg-[#D4AF37] hover:text-white transition-colors">
                PayPal
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kuerimex. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
