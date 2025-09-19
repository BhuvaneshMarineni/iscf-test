import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Users, Calendar, Globe } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/events', label: 'Events' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/contact', label: 'Contact' },
    { href: '/gallery', label: 'Gallery' },
  ];

  const supportLinks = [
    { href: '/contact', label: 'Donate' },
    { href: '/get-involved', label: 'Volunteer' },
    { href: '/get-involved', label: 'Partner with Us' },
    { href: '/contact', label: 'Prayer Requests' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ISCF Info */}
          <div className="lg:col-span-1">
            <Logo variant="white" className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Serving international students at Old Dominion University since 1995. 
              Building bridges of friendship, faith, and community across cultures.
            </p>
            <div className="flex items-center text-gray-400 text-sm mb-2">
              <Users className="w-4 h-4 mr-2" />
              <span>20,000+ Students Served</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>29 Years of Ministry</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-google-blue-300 transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support & Get Involved</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-google-blue-300 transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-3" />
                <a href="mailto:info@iscfodu.org" className="hover:text-google-blue-300 transition-colors">
                  info@iscfodu.org
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-3" />
                <a href="tel:+1-757-XXX-XXXX" className="hover:text-google-blue-300 transition-colors">
                  (757) XXX-XXXX
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Old Dominion University<br />Norfolk, VA</span>
              </div>
            </div>

            <h4 className="text-white font-medium text-sm mb-3">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/iscfodu"
                className="text-gray-400 hover:text-google-blue-300 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/iscfodu"
                className="text-gray-400 hover:text-google-blue-300 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/17571234567"
                className="text-gray-400 hover:text-google-blue-300 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ISCF - International Student Christian Fellowship. All rights reserved.
            </p>
            <div className="flex items-center text-gray-500 text-xs">
              <Globe className="w-4 h-4 mr-1" />
              <span>Serving students from 100+ countries since 1995</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;