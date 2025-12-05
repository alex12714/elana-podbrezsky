import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { exhibitions } from '../data/mock';

const ExhibitionsPage = () => {
  const upcomingExhibitions = exhibitions.filter(ex => ex.upcoming);
  const pastExhibitions = exhibitions.filter(ex => !ex.upcoming);

  const formatDateRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return `${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="section-spacing bg-[#faf8f5]">
        <div className="container-gallery">
          <div className="text-center max-w-2xl mx-auto">
            <p className="nav-link text-[#c9a962] mb-4">Events</p>
            <h1 className="section-title text-4xl md:text-5xl mb-6">Exhibitions</h1>
            <p className="body-text">
              Discover where to experience Elana's work in person. 
              From solo shows to group exhibitions across the globe.
            </p>
            <div className="gold-accent-center mt-8"></div>
          </div>
        </div>
      </section>

      {/* Upcoming Exhibitions */}
      {upcomingExhibitions.length > 0 && (
        <section className="section-spacing-large">
          <div className="container-gallery">
            <h2 className="section-title mb-12">Upcoming</h2>
            
            <div className="space-y-12">
              {upcomingExhibitions.map((exhibition) => (
                <div
                  key={exhibition.id}
                  className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-sm overflow-hidden shadow-sm"
                >
                  <div className="artwork-image-container aspect-[16/10]">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="artwork-image"
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-block px-3 py-1 bg-[#c9a962]/20 text-[#a88a42] text-xs uppercase tracking-wider mb-4">
                      Upcoming
                    </div>
                    <h3 className="section-title text-2xl mb-2">{exhibition.title}</h3>
                    <p className="text-[#c9a962] font-sans text-sm uppercase tracking-wider mb-4">
                      {exhibition.venue}
                    </p>
                    <p className="body-text mb-6">{exhibition.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 caption-text">
                        <Calendar size={16} className="text-[#c9a962]" />
                        {formatDateRange(exhibition.startDate, exhibition.endDate)}
                      </div>
                      <div className="flex items-center gap-2 caption-text">
                        <MapPin size={16} className="text-[#c9a962]" />
                        {exhibition.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Exhibitions */}
      {pastExhibitions.length > 0 && (
        <section className="section-spacing-large bg-[#faf8f5]">
          <div className="container-gallery">
            <h2 className="section-title mb-12">Past Exhibitions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {pastExhibitions.map((exhibition) => (
                <div
                  key={exhibition.id}
                  className="bg-white rounded-sm overflow-hidden shadow-sm artwork-card"
                >
                  <div className="artwork-image-container aspect-[16/10]">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="artwork-image"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="artwork-title mb-2">{exhibition.title}</h3>
                    <p className="text-[#c9a962] font-sans text-xs uppercase tracking-wider mb-3">
                      {exhibition.venue}
                    </p>
                    <p className="caption-text mb-3">{exhibition.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDateRange(exhibition.startDate, exhibition.endDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exhibition.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stay Updated */}
      <section className="section-spacing">
        <div className="container-gallery text-center">
          <h2 className="section-title mb-4">Stay Updated</h2>
          <p className="body-text max-w-xl mx-auto mb-8">
            Be the first to know about new exhibitions and events.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            Follow on Instagram
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ExhibitionsPage;
