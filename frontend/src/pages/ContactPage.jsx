import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import { artistInfo } from '../data/mock';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Message sent successfully! Elana will be in touch soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="section-spacing bg-[#faf8f5]">
        <div className="container-gallery">
          <div className="text-center max-w-2xl mx-auto">
            <p className="nav-link text-[#c9a962] mb-4">Get in Touch</p>
            <h1 className="section-title text-4xl md:text-5xl mb-6">Contact</h1>
            <p className="body-text">
              For inquiries about artwork, commissions, or exhibition opportunities, 
              please reach out using the form below or contact directly.
            </p>
            <div className="gold-accent-center mt-8"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing-large">
        <div className="container-gallery">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="section-title text-2xl mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block caption-text mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block caption-text mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block caption-text mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="artwork-inquiry">Artwork Inquiry</option>
                    <option value="commission">Commission Request</option>
                    <option value="exhibition">Exhibition Opportunity</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block caption-text mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#c9a962] focus:outline-none transition-colors font-sans text-sm resize-none"
                    placeholder="Tell me about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold flex items-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="section-title text-2xl mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-lg mb-4">Studio</h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${artistInfo.email}`}
                      className="flex items-center gap-4 body-text hover:text-[#c9a962] transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#faf8f5] rounded-full flex items-center justify-center">
                        <Mail size={18} className="text-[#c9a962]" />
                      </div>
                      {artistInfo.email}
                    </a>
                    <div className="flex items-center gap-4 body-text">
                      <div className="w-10 h-10 bg-[#faf8f5] rounded-full flex items-center justify-center">
                        <MapPin size={18} className="text-[#c9a962]" />
                      </div>
                      {artistInfo.location}
                    </div>
                  </div>
                </div>

                <div className="gold-accent"></div>

                <div>
                  <h3 className="font-serif text-lg mb-4">Follow Along</h3>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 body-text hover:text-[#c9a962] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#faf8f5] rounded-full flex items-center justify-center">
                      <Instagram size={18} className="text-[#c9a962]" />
                    </div>
                    {artistInfo.instagram}
                  </a>
                </div>

                <div className="gold-accent"></div>

                <div className="bg-[#faf8f5] p-8 rounded-sm">
                  <h3 className="font-serif text-lg mb-4">Response Time</h3>
                  <p className="body-text text-sm">
                    I typically respond to inquiries within 2-3 business days. 
                    For urgent matters regarding purchased artwork, please indicate 
                    "Urgent" in your subject line.
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

export default ContactPage;
