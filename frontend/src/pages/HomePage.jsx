import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { featuredArtwork, artworks, artistInfo, exhibitions } from '../data/mock';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  const { addToCart, isInCart } = useCart();
  const displayArtworks = artworks.slice(0, 3);
  const upcomingExhibition = exhibitions.find(ex => ex.upcoming);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={featuredArtwork.image}
            alt={featuredArtwork.title}
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Content */}
        <div className="container-gallery relative z-10">
          <div className="max-w-2xl">
            <p className="nav-link text-[#c9a962] mb-4 animate-fade-in-up">
              Contemporary Abstract Art
            </p>
            <h1 className="hero-title mb-6 animate-fade-in-up animation-delay-100">
              Elana<br />Podbrezsky
            </h1>
            <p className="body-text max-w-lg mb-8 animate-fade-in-up animation-delay-200">
              Exploring the boundaries between abstraction and emotion through 
              bold color and expressive brushwork.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link to="/gallery" className="btn-primary">
                View Collection
              </Link>
              <Link to="/about" className="btn-outline">
                About the Artist
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#c9a962]" size={24} />
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-spacing-large bg-[#faf8f5]">
        <div className="container-gallery">
          <div className="text-center mb-16">
            <p className="nav-link text-[#c9a962] mb-4">Featured Work</p>
            <h2 className="section-title">{featuredArtwork.title}</h2>
            <div className="gold-accent-center mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="artwork-image-container aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src={featuredArtwork.image}
                alt={featuredArtwork.title}
                className="artwork-image"
              />
            </div>
            <div>
              <p className="caption-text mb-2">{featuredArtwork.year}</p>
              <h3 className="artwork-title text-2xl mb-4">{featuredArtwork.title}</h3>
              <p className="body-text mb-6">{featuredArtwork.description}</p>
              <div className="space-y-2 mb-8">
                <p className="caption-text">
                  <span className="text-gray-400">Medium:</span> {featuredArtwork.medium}
                </p>
                <p className="caption-text">
                  <span className="text-gray-400">Dimensions:</span> {featuredArtwork.dimensions}
                </p>
                <p className="price-text text-xl mt-4">
                  ${featuredArtwork.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => addToCart(featuredArtwork)}
                disabled={isInCart(featuredArtwork.id)}
                className={`${isInCart(featuredArtwork.id) ? 'btn-outline opacity-60 cursor-not-allowed' : 'btn-gold'}`}
              >
                {isInCart(featuredArtwork.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Grid */}
      <section className="section-spacing-large">
        <div className="container-gallery">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <p className="nav-link text-[#c9a962] mb-4">Collection</p>
              <h2 className="section-title">Selected Works</h2>
            </div>
            <Link
              to="/gallery"
              className="flex items-center gap-2 nav-link mt-4 md:mt-0 hover:text-[#c9a962] group"
            >
              View All
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="artwork-grid">
            {displayArtworks.map((artwork, index) => (
              <Link
                key={artwork.id}
                to={`/artwork/${artwork.id}`}
                className="artwork-card bg-white rounded-sm overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="artwork-image-container aspect-[4/5]">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="artwork-image"
                  />
                  {!artwork.available && (
                    <div className="absolute top-4 right-4 bg-[#1a1a1a] text-white text-xs uppercase tracking-wider px-3 py-1">
                      Sold
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="caption-text mb-1">{artwork.year}</p>
                  <h3 className="artwork-title mb-2">{artwork.title}</h3>
                  <p className="caption-text mb-3">{artwork.medium}</p>
                  <p className="price-text">${artwork.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-spacing-large bg-[#1a1a1a] text-white">
        <div className="container-gallery">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="nav-link text-[#c9a962] mb-4">About the Artist</p>
              <h2 className="section-title text-white mb-6">Elana Podbrezsky</h2>
              <p className="body-text text-gray-300 mb-8">
                {artistInfo.shortBio}
              </p>
              <Link to="/about" className="btn-gold">
                Learn More
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src={artistInfo.portrait}
                  alt="Elana Podbrezsky"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Exhibition */}
      {upcomingExhibition && (
        <section className="section-spacing-large bg-[#faf8f5]">
          <div className="container-gallery">
            <div className="text-center mb-12">
              <p className="nav-link text-[#c9a962] mb-4">Coming Soon</p>
              <h2 className="section-title">Upcoming Exhibition</h2>
              <div className="gold-accent-center mt-6"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="artwork-image-container aspect-[4/3] rounded-sm overflow-hidden">
                  <img
                    src={upcomingExhibition.image}
                    alt={upcomingExhibition.title}
                    className="artwork-image"
                  />
                </div>
                <div>
                  <h3 className="artwork-title text-2xl mb-2">{upcomingExhibition.title}</h3>
                  <p className="text-[#c9a962] font-sans text-sm uppercase tracking-wider mb-4">
                    {upcomingExhibition.venue}
                  </p>
                  <p className="body-text mb-4">{upcomingExhibition.description}</p>
                  <p className="caption-text mb-6">
                    {new Date(upcomingExhibition.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - 
                    {new Date(upcomingExhibition.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <Link to="/exhibitions" className="btn-outline">
                    View All Exhibitions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
