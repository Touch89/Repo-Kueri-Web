import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

export const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const slides = [
    {
      id: 1,
      title: 'Colección Premium de Piel',
      subtitle: 'Descubre la elegancia en cada detalle',
      image: 'https://images.unsplash.com/photo-1764391791965-e57ac12cbb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920',
      link: '/carteras',
      buttonText: 'Ver Carteras',
    },
    {
      id: 2,
      title: 'Cinturones Exclusivos',
      subtitle: 'Calidad artesanal mexicana',
      image: 'https://images.unsplash.com/photo-1599066852653-42826a50b163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920',
      link: '/cinturones',
      buttonText: 'Ver Cinturones',
    },
    {
      id: 3,
      title: 'Accesorios de Lujo',
      subtitle: 'Perfectos para cada ocasión',
      image: 'https://images.unsplash.com/photo-1716307035615-1c6465a32ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920',
      link: '/bolsas',
      buttonText: 'Ver Bolsas',
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="relative h-[500px] md:h-[600px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-4">
                  <h1 className="text-4xl md:text-6xl mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">{slide.subtitle}</p>
                  <Link
                    to={slide.link}
                    className="inline-block bg-[#D4AF37] hover:bg-[#8B7355] text-white px-8 py-4 rounded-lg text-lg transition-colors duration-200"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};