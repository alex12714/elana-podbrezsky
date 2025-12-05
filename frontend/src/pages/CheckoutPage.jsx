import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Lock, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Mock checkout - will be replaced with Stripe integration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success('Order placed successfully! (Mock checkout)');
      clearCart();
      navigate('/checkout/success');
    } catch (error) {
      toast.error('Checkout failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20">
        <section className="section-spacing-large">
          <div className="container-gallery text-center">
            <h1 className="section-title mb-4">Your Cart is Empty</h1>
            <p className="body-text mb-8">Add some artwork to proceed with checkout.</p>
            <Link to="/gallery" className="btn-gold">
              Browse Gallery
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-[#faf8f5]">
      {/* Header */}
      <section className="py-6 bg-white border-b">
        <div className="container-gallery">
          <Link
            to="/cart"
            className="flex items-center gap-2 nav-link hover:text-[#c9a962]"
          >
            <ArrowLeft size={16} />
            Back to Cart
          </Link>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="section-spacing">
        <div className="container-gallery">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h1 className="section-title text-3xl mb-8">Checkout</h1>
              
              <form onSubmit={handleCheckout} className="space-y-8">
                {/* Contact */}
                <div>
                  <h2 className="font-serif text-lg mb-4">Contact Information</h2>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm bg-white"
                  />
                </div>

                {/* Shipping */}
                <div>
                  <h2 className="font-serif text-lg mb-4">Shipping Address</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="First name"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm bg-white"
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Last name"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm bg-white"
                      />
                    </div>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Address"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm bg-white"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="City"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm bg-white"
                      />
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        placeholder="Postal code"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm bg-white"
                      />
                    </div>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      placeholder="Country"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm bg-white"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone (optional)"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm bg-white"
                    />
                  </div>
                </div>

                {/* Payment Notice */}
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard size={20} className="text-[#c9a962]" />
                    <h2 className="font-serif text-lg">Payment</h2>
                  </div>
                  <p className="caption-text">
                    You will be redirected to our secure payment provider (Stripe) to complete your purchase.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    'Processing...'
                  ) : (
                    <>
                      <Lock size={16} />
                      Complete Purchase
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white p-8 rounded-sm shadow-sm sticky top-28">
                <h2 className="section-title text-xl mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-20 bg-gray-100 rounded-sm overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-sm">{item.title}</h3>
                        <p className="caption-text text-xs">{item.dimensions}</p>
                        <p className="price-text text-sm mt-1">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between caption-text">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between caption-text">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between caption-text">
                    <span>Tax</span>
                    <span>Calculated at payment</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between">
                    <span className="font-serif text-lg">Total</span>
                    <span className="price-text text-xl">
                      ${getCartTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
