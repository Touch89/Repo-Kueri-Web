import React from 'react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-3xl text-[#2C2C2C] mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">
            Agrega productos de nuestra colección para comenzar tu compra.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#8B7355] hover:bg-[#D4AF37] text-white px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl text-[#2C2C2C] mb-8">Carrito de Compras</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl text-[#2C2C2C] mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus className="w-5 h-5 text-[#8B7355]" />
                    </button>
                    <span className="text-lg text-[#2C2C2C] min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="w-5 h-5 text-[#8B7355]" />
                    </button>
                  </div>
                  <span className="text-xl text-[#8B7355]">
                    ${(item.price * item.quantity).toLocaleString('es-MX')}
                  </span>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="self-start p-2 hover:bg-red-50 rounded-full transition-colors"
                aria-label="Eliminar producto"
              >
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl text-[#2C2C2C] mb-6">Resumen del Pedido</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${cartTotal.toLocaleString('es-MX')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Envío</span>
                <span>{cartTotal >= 800 ? 'Gratis' : '$100'}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl text-[#2C2C2C]">
                  <span>Total</span>
                  <span className="text-[#8B7355]">
                    ${(cartTotal >= 800 ? cartTotal : cartTotal + 100).toLocaleString('es-MX')}
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#8B7355] hover:bg-[#D4AF37] text-white py-3 rounded-lg transition-colors duration-200 mb-4">
              Proceder al Pago
            </button>
            <Link
              to="/"
              className="block text-center text-[#8B7355] hover:text-[#D4AF37] transition-colors"
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
