import React from 'react';
import Slider from 'react-slick';
import { ProductCard } from './ProductCard';
import { Product } from '../context/CartContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductSliderProps {
  title: string;
  products: Product[];
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#8B7355] hover:bg-[#D4AF37] text-white p-2 rounded-full shadow-lg transition-colors duration-200"
    aria-label="Siguiente"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#8B7355] hover:bg-[#D4AF37] text-white p-2 rounded-full shadow-lg transition-colors duration-200"
    aria-label="Anterior"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

export const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  const settings = {
    dots: true,
    infinite: products.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-3xl text-[#2C2C2C] mb-6">{title}</h2>
      <div className="relative px-12">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};