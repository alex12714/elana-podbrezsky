import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CheckoutSuccessPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-spacing-large">
        <div className="container-gallery">
          <div className="text-center max-w-md mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h1 className="section-title mb-4">Thank You!</h1>
            <p className="body-text mb-8">
              Your order has been placed successfully. You will receive a confirmation 
              email shortly with your order details and tracking information.
            </p>
            <div className="gold-accent-center mb-8"></div>
            <p className="caption-text mb-8">
              If you have any questions about your order, please don't hesitate to 
              <Link to="/contact" className="text-[#c9a962] hover:underline ml-1">
                contact us
              </Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery" className="btn-gold inline-flex items-center justify-center gap-2">
                Continue Shopping
                <ArrowRight size={16} />
              </Link>
              <Link to="/" className="btn-outline">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutSuccessPage;
