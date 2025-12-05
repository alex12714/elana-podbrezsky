import React from 'react';
import { Link } from 'react-router-dom';
import { artistInfo, testimonials } from '../data/mock';
import { Quote } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-spacing-large bg-[#faf8f5]">
        <div className="container-gallery">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="nav-link text-[#c9a962] mb-4">About</p>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl mb-6">
                {artistInfo.name}
              </h1>
              <p className="text-[#c9a962] font-serif text-xl italic mb-8">
                {artistInfo.tagline}
              </p>
              <div className="gold-accent mb-8"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
                <img
                  src={artistInfo.portrait}
                  alt={artistInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="section-spacing-large">
        <div className="container-gallery">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">Artist Statement</h2>
            <div className="gold-accent-center mb-12"></div>
            
            <div className="space-y-6">
              {artistInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="body-text text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing-large bg-[#1a1a1a] text-white">
        <div className="container-gallery">
          <div className="text-center mb-16">
            <p className="nav-link text-[#c9a962] mb-4">The Process</p>
            <h2 className="section-title text-white">Creating Art</h2>
            <div className="gold-accent-center mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#c9a962]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-[#c9a962]">01</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Inspiration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Each piece begins with a moment of connection—a landscape glimpsed, 
                a memory stirred, an emotion felt deeply.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#c9a962]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-[#c9a962]">02</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Creation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Using oil and acrylic on canvas, layers of color are built up over 
                weeks, creating depth and luminosity.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#c9a962]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-[#c9a962]">03</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Connection</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The finished work is a dialogue between artist and viewer, 
                inviting personal interpretation and emotional response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing-large bg-[#faf8f5]">
        <div className="container-gallery">
          <div className="text-center mb-16">
            <p className="nav-link text-[#c9a962] mb-4">Collectors</p>
            <h2 className="section-title">What People Say</h2>
            <div className="gold-accent-center mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-sm shadow-sm">
                <Quote className="text-[#c9a962] mb-4" size={32} />
                <p className="body-text italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-serif font-medium">{testimonial.author}</p>
                  <p className="caption-text">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-gallery text-center">
          <h2 className="section-title mb-4">Interested in a Commission?</h2>
          <p className="body-text max-w-xl mx-auto mb-8">
            I welcome commissions for custom pieces. Let's discuss your vision.
          </p>
          <Link to="/contact" className="btn-gold">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
