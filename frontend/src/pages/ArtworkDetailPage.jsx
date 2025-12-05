import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import { artworks, featuredArtwork } from '../data/mock';
import { useCart } from '../context/CartContext';

const ArtworkDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();

  // Find artwork from both artworks and featured
  const allArtworks = [featuredArtwork, ...artworks];
  const artwork = allArtworks.find((art) => art.id === id);

  if (!artwork) {
    return (
      <div className="min-h-screen pt-20">
        <section className="section-spacing-large">
          <div className="container-gallery text-center">
            <h1 className="section-title mb-4">Artwork Not Found</h1>
            <p className="body-text mb-8">The artwork you're looking for doesn't exist.</p>
            <Link to="/gallery" className="btn-gold">
              Browse Gallery
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(artwork);
  };

  // Get related artworks (excluding current)
  const relatedArtworks = artworks
    .filter((art) => art.id !== id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container-gallery">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 nav-link hover:text-[#c9a962]"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </section>

      {/* Artwork Detail */}
      <section className="section-spacing-large">
        <div className="container-gallery">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="artwork-image-container aspect-[4/5] rounded-sm overflow-hidden bg-gray-100">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="lg:py-8">
              <p className="nav-link text-[#c9a962] mb-2">{artwork.year}</p>
              <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl mb-4">
                {artwork.title}
              </h1>
              <div className="gold-accent mb-8"></div>

              {artwork.description && (
                <p className="body-text mb-8">{artwork.description}</p>
              )}

              {/* Specifications */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="caption-text">Medium</span>
                  <span className="font-sans text-sm">{artwork.medium}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="caption-text">Dimensions</span>
                  <span className="font-sans text-sm">{artwork.dimensions}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="caption-text">Year</span>
                  <span className="font-sans text-sm">{artwork.year}</span>
                </div>
                {artwork.category && (
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="caption-text">Category</span>
                    <span className="font-sans text-sm capitalize">{artwork.category}</span>
                  </div>
                )}
              </div>

              {/* Price & Cart */}
              <div className="bg-[#faf8f5] p-6 rounded-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-lg">Price</span>
                  <span className="price-text text-2xl">
                    ${artwork.price.toLocaleString()}
                  </span>
                </div>

                {artwork.available !== false ? (
                  <button
                    onClick={handleAddToCart}
                    disabled={isInCart(artwork.id)}
                    className={`w-full flex items-center justify-center gap-2 ${
                      isInCart(artwork.id)
                        ? 'btn-outline bg-green-50 border-green-600 text-green-600'
                        : 'btn-gold'
                    }`}
                  >
                    {isInCart(artwork.id) ? (
                      <>
                        <Check size={18} />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={18} />
                        Add to Cart
                      </>
                    )}
                  </button>
                ) : (
                  <div className="w-full py-3 text-center bg-gray-100 text-gray-500 font-sans text-sm uppercase tracking-wider">
                    Sold
                  </div>
                )}

                {isInCart(artwork.id) && (
                  <Link
                    to="/cart"
                    className="block w-full text-center mt-4 nav-link hover:text-[#c9a962]"
                  >
                    View Cart
                  </Link>
                )}
              </div>

              {/* Inquiry */}
              <div className="mt-6 text-center">
                <p className="caption-text">
                  Questions about this piece?
                  <Link to="/contact" className="text-[#c9a962] hover:underline ml-1">
                    Contact the artist
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Works */}
      {relatedArtworks.length > 0 && (
        <section className="section-spacing-large bg-[#faf8f5]">
          <div className="container-gallery">
            <h2 className="section-title mb-12">You May Also Like</h2>
            <div className="artwork-grid">
              {relatedArtworks.map((art) => (
                <Link
                  key={art.id}
                  to={`/artwork/${art.id}`}
                  className="artwork-card bg-white rounded-sm overflow-hidden"
                >
                  <div className="artwork-image-container aspect-[4/5]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="artwork-image"
                    />
                  </div>
                  <div className="p-6">
                    <p className="caption-text mb-1">{art.year}</p>
                    <h3 className="artwork-title mb-2">{art.title}</h3>
                    <p className="price-text">${art.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArtworkDetailPage;
