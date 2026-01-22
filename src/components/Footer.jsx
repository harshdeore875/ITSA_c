import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-indigo-900/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">ITSA</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Information Technology Students Association. Empowering students through technology, innovation, and leadership at GH Raisoni College of Engineering and Management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Events', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-indigo-400" />
                <a href="mailto:itsa@ghrcem.ac.in" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                  itsa@ghrcem.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-indigo-400" />
                <a href="tel:+919999999999" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                  +91 9999999999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-indigo-400" />
                <p className="text-gray-400 text-sm">
                  GH Raisoni College<br />
                  Pune, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-indigo-900/30 hover:bg-indigo-900/60 flex items-center justify-center text-indigo-400 hover:text-indigo-300 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-indigo-900/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Information Technology Students Association. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Department of Information Technology | GH Raisoni College of Engineering and Management
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
