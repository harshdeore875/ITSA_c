import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import contactData from '../data/contact.json';

export default function ContactPage() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [contact,setcontact] = useState(contactData.contact);
  console.log(contact.description?.name);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('.contact-section');
    if (sections) return;

    sections.forEach((section, idx) => {
      gsap.from(section, {
        delay: idx * 0.1,
        opacity: 0,
        y: 50,
        duration: 0.8,
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div ref={containerRef} className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 bg-white border-b-2 border-borderNeutral">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-textPrimary mb-6">
            Get in <span className="gradient-heading-smooth">Touch</span>
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl">
            {  'Have questions or want to get involved? We would love to hear from you!'}
            
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-50 border-b-2 border-borderNeutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="contact-section group p-8 rounded-2xl bg-white border border-borderNeutral hover:border-primary/60 transition-all duration-300 hover-lift text-center">
              <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-textPrimary font-bold mb-2">Email</h3>
              <a href={`mailto:${contact.email?.[0]?.address}`} className="text-secondary hover:text-primary transition-colors break-all">
                {console.log(contact.email?.[0]?.address)}
              </a>
            </div>

            <div className="contact-section group p-8 rounded-2xl bg-white border border-borderNeutral hover:border-primary/60 transition-all duration-300 hover-lift text-center">
              <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-textPrimary font-bold mb-2">Phone</h3>
              <a href={`tel:${contact.phone?.[0]?.number}`} className="text-secondary hover:text-primary transition-colors break-all">
                {contact.phone?.[0]?.number}
              </a>
            </div>

            <div className="contact-section group p-8 rounded-2xl bg-white border border-borderNeutral hover:border-primary/60 transition-all duration-300 hover-lift text-center">
              <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-textPrimary font-bold mb-2">Location</h3>
              <p className="text-textSecondary">
                {contact.address?.city}, {contact.address?.state}
              </p>
            </div>

            <div className="contact-section group p-8 rounded-2xl bg-white border border-borderNeutral hover:border-primary/60 transition-all duration-300 hover-lift text-center">
              <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-textPrimary font-bold mb-2">Office Hours</h3>
              <p className="text-textSecondary">{contact.hours?.weekdays}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white relative overflow-hidden border-b-2 border-borderNeutral">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="contact-section">
              <h2 className="text-3xl font-bold text-textPrimary mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="flex items-center justify-center h-96 rounded-2xl bg-sectionBg border border-borderNeutral">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <Send className="text-white" size={32} />
                    </div>
                    <p className="text-textPrimary font-semibold text-xl">Message Sent!</p>
                    <p className="text-textSecondary mt-2">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-textPrimary font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-sectionBg border border-borderNeutral text-textPrimary placeholder-textSecondary focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-textPrimary font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-sectionBg border border-borderNeutral text-textPrimary placeholder-textSecondary focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-textPrimary font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-sectionBg border border-borderNeutral text-textPrimary placeholder-textSecondary focus:outline-none focus:border-primary transition-colors"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-textPrimary font-medium mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-sectionBg border border-borderNeutral text-textPrimary placeholder-textSecondary focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-btn-gradient text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Info */}
            <div className="contact-section">
              <div className="p-8 rounded-2xl bg-sectionBg border border-borderNeutral h-full">
                <h2 className="text-3xl font-bold text-textPrimary mb-6">Location & Hours</h2>

                <div className="w-full h-96 rounded-xl overflow-hidden mb-8 border border-borderNeutral">
                  <iframe
                    title="GHRCEM Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2500595831503!2d74.20206631485918!3d19.26887158706649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05b7deadead%3A0x8f435f879758370!2sGH%20Raisoni%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1640000000000"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-secondary font-semibold mb-2">Address</h3>
                    <p className="text-textSecondary">
                      Department of Information Technology<br />
                      GH Raisoni College of Engineering and Management<br />
                      Pune, India
                    </p>
                  </div>

                  <div>
                    <h3 className="text-secondary font-semibold mb-2">Working Hours</h3>
                    <p className="text-textSecondary">
                      Monday - Friday: 10:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>

                  <div>
                    <h3 className="text-secondary font-semibold mb-2">Connect With Us</h3>
                    <div className="flex gap-4">
                      {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
