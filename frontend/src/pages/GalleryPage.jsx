import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { artworks, categories } from '../data/mock';
import { useCart } from '../context/CartContext';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart, isInCart } = useCart();

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="section-spacing bg-[#faf8f5]">
        <div className="container-gallery">
          <div className="text-center max-w-2xl mx-auto">
            <p className="nav-link text-[#c9a962] mb-4">Collection</p>
            <h1 className="section-title text-4xl md:text-5xl mb-6">Gallery</h1>
            <p className="body-text">
              Explore the complete collection of original paintings available for acquisition. 
              Each piece is a unique work created with passion and dedication.
            </p>
            <div className="gold-accent-center mt-8"></div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container-gallery">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="caption-text">
              Showing {filteredArtworks.length} {filteredArtworks.length === 1 ? 'work' : 'works'}
            </p>

            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden flex items-center gap-2 nav-link"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} />
              Filter
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`nav-link transition-colors ${
                    selectedCategory === cat.id ? 'text-[#c9a962]' : ''
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowFilters(false);
                  }}
                  className={`px-4 py-2 text-sm border transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                      : 'border-gray-300 hover:border-[#c9a962]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-spacing-large">
        <div className="container-gallery">
          <div className="artwork-grid">
            {filteredArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="artwork-card bg-white rounded-sm overflow-hidden shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link to={`/artwork/${artwork.id}`}>
                  <div className="artwork-image-container aspect-[4/5]">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="artwork-image"
                    />
                    {!artwork.available && (
                      <div className="absolute top-4 right-4 bg-[#1a1a1a] text-white text-xs uppercase tracking-wider px-3 py-1 z-10">
                        Sold
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <Link to={`/artwork/${artwork.id}`}>
                    <p className="caption-text mb-1">{artwork.year}</p>
                    <h3 className="artwork-title mb-2 hover:text-[#c9a962] transition-colors">
                      {artwork.title}
                    </h3>
                  </Link>
                  <p className="caption-text mb-1">{artwork.medium}</p>
                  <p className="caption-text mb-4">{artwork.dimensions}</p>
                  <div className="flex items-center justify-between">
                    <p className="price-text">${artwork.price.toLocaleString()}</p>
                    {artwork.available && (
                      <button
                        onClick={() => addToCart(artwork)}
                        disabled={isInCart(artwork.id)}
                        className={`text-sm font-sans uppercase tracking-wider transition-colors ${
                          isInCart(artwork.id)
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-[#c9a962] hover:text-[#a88a42]'
                        }`}
                      >
                        {isInCart(artwork.id) ? 'In Cart' : 'Add to Cart'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-16">
              <p className="body-text">No artworks found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="section-spacing bg-[#faf8f5]">
        <div className="container-gallery text-center">
          <h2 className="section-title mb-4">Looking for Something Specific?</h2>
          <p className="body-text max-w-xl mx-auto mb-8">
            Commission a custom piece or inquire about works not shown in the gallery.
          </p>
          <Link to="/contact" className="btn-gold">
            Contact the Artist
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
