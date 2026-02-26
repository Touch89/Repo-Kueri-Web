import React from 'react';
import { Award, Heart, Users, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl text-[#2C2C2C] mb-6">Sobre Nosotros</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Desde 1995, Kuerimex ha sido sinónimo de calidad, artesanía mexicana y diseño elegante
          en productos de piel genuina.
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-16">
        <img
          src="https://images.unsplash.com/photo-1599066852653-42826a50b163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
          alt="Artesanía de piel"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl text-[#2C2C2C] mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">
            Kuerimex nació en el corazón de México con una visión clara: crear productos de piel
            que combinen la tradición artesanal con el diseño contemporáneo. Cada pieza es
            cuidadosamente elaborada por artesanos expertos que han perfeccionado su oficio a lo
            largo de generaciones.
          </p>
          <p className="text-gray-600">
            Utilizamos únicamente piel genuina de la más alta calidad, seleccionada meticulosamente
            para garantizar durabilidad y elegancia. Nuestro compromiso con la excelencia se
            refleja en cada puntada, cada detalle y cada producto que sale de nuestro taller.
          </p>
        </div>
        <div>
          <h2 className="text-3xl text-[#2C2C2C] mb-4">Nuestra Misión</h2>
          <p className="text-gray-600 mb-4">
            Nos dedicamos a preservar la rica tradición mexicana de trabajo en piel mientras
            innovamos con diseños modernos que se adaptan al estilo de vida contemporáneo.
          </p>
          <p className="text-gray-600">
            Creemos en la producción ética, el comercio justo y en apoyar a las comunidades locales
            de artesanos. Cada compra que realizas con nosotros contribuye a mantener viva esta
            hermosa tradición artesanal.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#8B7355]/5 rounded-lg p-8 mb-16">
        <h2 className="text-3xl text-[#2C2C2C] text-center mb-12">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-[#8B7355] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-[#2C2C2C] mb-2">Calidad</h3>
            <p className="text-gray-600 text-sm">
              Solo utilizamos los mejores materiales y técnicas artesanales
            </p>
          </div>
          <div className="text-center">
            <div className="bg-[#8B7355] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-[#2C2C2C] mb-2">Pasión</h3>
            <p className="text-gray-600 text-sm">
              Cada producto es creado con amor y dedicación
            </p>
          </div>
          <div className="text-center">
            <div className="bg-[#8B7355] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-[#2C2C2C] mb-2">Comunidad</h3>
            <p className="text-gray-600 text-sm">
              Apoyamos a artesanos locales y sus familias
            </p>
          </div>
          <div className="text-center">
            <div className="bg-[#8B7355] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-[#2C2C2C] mb-2">Sustentabilidad</h3>
            <p className="text-gray-600 text-sm">
              Comprometidos con prácticas éticas y sustentables
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-[#8B7355] to-[#D4AF37] text-white rounded-lg p-12">
        <h2 className="text-3xl mb-4">¿Listo para experimentar la calidad Kuerimex?</h2>
        <p className="text-lg mb-6 text-white/90">
          Descubre nuestra colección de productos de piel artesanales
        </p>
        <a
          href="/"
          className="inline-block bg-white text-[#8B7355] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Ver Productos
        </a>
      </div>
    </div>
  );
};
