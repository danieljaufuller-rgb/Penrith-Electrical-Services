import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="content-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <svg
              width={scrolled ? 170 : 206}
              height="43"
              viewBox="0 0 206 43"
              fill="none"
              className="transition-all duration-300"
            >
              <text
                x="0"
                y="20"
                fill={scrolled || !isHome ? '#011633' : '#FFFFFF'}
                fontFamily="Archivo, sans-serif"
                fontWeight="700"
                fontSize="17"
                letterSpacing="0.5"
              >
                PENRITH ELECTRICAL
              </text>
              <text
                x="0"
                y="38"
                fill={scrolled || !isHome ? '#FE5000' : '#FE5000'}
                fontFamily="Archivo, sans-serif"
                fontWeight="400"
                fontSize="14"
                letterSpacing="3"
              >
                SERVICES
              </text>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-[15px] font-semibold uppercase tracking-wide transition-colors duration-300 group ${
                  scrolled || !isHome
                    ? location.pathname === link.href ||
                      (link.href !== '/' && location.pathname.startsWith(link.href))
                      ? 'text-[#011633]'
                      : 'text-[#656565] hover:text-[#011633]'
                    : location.pathname === link.href ||
                      (link.href !== '/' && location.pathname.startsWith(link.href))
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-500 ${
                    location.pathname === link.href ||
                    (link.href !== '/' && location.pathname.startsWith(link.href))
                      ? 'w-full bg-[#FE5000]'
                      : 'w-0 bg-[#FE5000] group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right side - CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:1300600404"
              className={`flex items-center gap-2 text-[15px] font-semibold transition-colors duration-300 ${
                scrolled || !isHome ? 'text-[#011633]' : 'text-white'
              }`}
            >
              <Phone size={16} />
              <span>1300 600 404</span>
            </a>
            <Link to="/get-quote" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled || !isHome ? 'text-[#011633]' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="content-max py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[15px] font-semibold uppercase tracking-wide py-2 transition-colors ${
                location.pathname === link.href
                  ? 'text-[#FE5000]'
                  : 'text-[#011633] hover:text-[#FE5000]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#ECECEC] flex flex-col gap-3">
            <a href="tel:1300600404" className="flex items-center gap-2 text-[#011633] font-semibold">
              <Phone size={16} />
              1300 600 404
            </a>
            <Link to="/get-quote" className="btn-primary w-full text-center">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
