import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { artistInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container-gallery py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4">Elana Podbrezsky</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {artistInfo.shortBio}
            </p>
            <div className="gold-accent"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-6 text-[#c9a962]">
              Explore
            </h4>
            <nav className="space-y-3">
              <Link to="/gallery" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About the Artist
              </Link>
              <Link to="/exhibitions" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Exhibitions
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-6 text-[#c9a962]">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${artistInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                {artistInfo.email}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Instagram size={16} />
                {artistInfo.instagram}
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} />
                {artistInfo.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Elana Podbrezsky. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            All artwork images are protected by copyright.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
