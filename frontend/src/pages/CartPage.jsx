import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to checkout (will be implemented with Stripe)
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20">
        <section className="section-spacing-large">
          <div className="container-gallery">
            <div className="text-center max-w-md mx-auto">
              <div className="w-20 h-20 bg-[#faf8f5] rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={32} className="text-[#c9a962]" />
              </div>
              <h1 className="section-title mb-4">Your Cart is Empty</h1>
              <p className="body-text mb-8">
                Discover Elana's collection and find the perfect piece for your space.
              </p>
              <Link to="/gallery" className="btn-gold">
                Browse Gallery
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="section-spacing bg-[#faf8f5]">
        <div className="container-gallery">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/gallery"
              className="flex items-center gap-2 nav-link hover:text-[#c9a962]"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
          </div>
          <h1 className="section-title text-4xl md:text-5xl">Shopping Cart</h1>
          <p className="caption-text mt-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </section>

      {/* Cart Items */}
      <section className="section-spacing-large">
        <div className="container-gallery">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 bg-white p-6 rounded-sm shadow-sm"
                >
                  <Link to={`/artwork/${item.id}`} className="shrink-0">
                    <div className="w-32 h-40 bg-gray-100 rounded-sm overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link to={`/artwork/${item.id}`}>
                      <h3 className="artwork-title hover:text-[#c9a962] transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="caption-text mb-1">{item.year}</p>
                    <p className="caption-text mb-1">{item.medium}</p>
                    <p className="caption-text mb-4">{item.dimensions}</p>
                    <p className="price-text text-lg">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start p-2 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#faf8f5] p-8 rounded-sm sticky top-28">
                <h2 className="section-title text-xl mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between caption-text">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between caption-text">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-8">
                  <div className="flex justify-between">
                    <span className="font-serif text-lg">Total</span>
                    <span className="price-text text-xl">
                      ${getCartTotal().toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn-gold w-full mb-4"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-center caption-text hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </button>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="caption-text text-center">
                    Questions about shipping or framing? 
                    <Link to="/contact" className="text-[#c9a962] hover:underline ml-1">
                      Contact us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
