import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About ITSA', path: '/about' },
    { name: 'Committee', path: '/committee' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full  z-40 transition-all duration-300    ${
        isScrolled ? ' border-b border-gray-200  bg-white/80' : 'border-gray-200 bg-white '
      }`}
    >
      <div className="max-w-7xl  mx-auto  sm:px-6  lg:px-4">
        <div className="flex mx-auto  justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <img 
                src="/images/ITSA_LOGO.png" 
                alt="ITSA Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-primary font-bold hidden sm:inline">ITSA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-textSecondary hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 bg-btn-gradient text-white rounded-lg hover:shadow-btn-glow transition-all duration-300 text-sm font-medium">
              Get Involved
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-textSecondary hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden   pb-4 border-t border-gray-200 ">
            <div className="pt-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-textSecondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full mt-4 px-6 py-2 bg-btn-gradient text-white rounded-lg text-sm font-medium">
                Get Involved
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
