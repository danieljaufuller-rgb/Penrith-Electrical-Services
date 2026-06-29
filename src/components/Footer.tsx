import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  'Electrical Repairs',
  'Lighting Installations',
  'Safety Inspections',
  'Switchboard Upgrades',
  'Rewiring Services',
  'Appliance Installation',
  'EV Charger Installation',
  'Smart Home Automation',
];

const serviceAreas = [
  'Penrith',
  'Blacktown',
  'Parramatta',
  'Castle Hill',
  'Baulkham Hills',
  'Blue Mountains',
  'St Marys',
  'Mount Druitt',
  'Campbelltown',
  'Liverpool',
  'Bankstown',
  'Western Sydney',
];

export default function Footer() {
  return (
    <footer className="bg-[#011633] text-white">
      <div className="content-max pt-20 pb-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/">
              <svg width="206" height="43" viewBox="0 0 206 43" fill="none">
                <text x="0" y="20" fill="#FFFFFF" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="17" letterSpacing="0.5">
                  PENRITH ELECTRICAL
                </text>
                <text x="0" y="38" fill="#FE5000" fontFamily="Archivo, sans-serif" fontWeight="400" fontSize="14" letterSpacing="3">
                  SERVICES
                </text>
              </svg>
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-[280px]">
              Premium electrical services for homes and businesses across Sydney's West & Greater Sydney.
            </p>

            {/* Contact Info */}
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:1300600404" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FE5000] transition-colors">
                <Phone size={16} />
                <span>1300 600 404</span>
              </a>
              <a href="mailto:info@penrithelectrical.com.au" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FE5000] transition-colors">
                <Mail size={16} />
                <span>info@penrithelectrical.com.au</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>123 High Street, Penrith NSW 2750</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#FE5000] hover:border-[#FE5000] transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-heading-md text-white mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-heading-md text-white mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="text-heading-md text-white mb-5">Service Areas</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300 cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-heading-md text-white mb-4">Certifications</h4>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-white/50 bg-white/10 px-3 py-1.5 rounded inline-block w-fit">
                  Master Electricians Australia
                </span>
                <span className="text-xs text-white/50 bg-white/10 px-3 py-1.5 rounded inline-block w-fit">
                  NSW Fair Trading Licensed
                </span>
                <span className="text-xs text-white/50 bg-white/10 px-3 py-1.5 rounded inline-block w-fit">
                  Fully Insured
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Penrith Electrical Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-white/20">|</span>
            <span>NSW Fair Trading Lic. No. 123456C</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
