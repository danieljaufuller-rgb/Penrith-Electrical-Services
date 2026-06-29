import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon, Building2, Zap, Shield,
  Phone, Star, ChevronLeft, ChevronRight,
  Clock, MapPin, Award, BadgeCheck, Leaf, MapPinned, CircuitBoard
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ─── Hero Section ─── */
function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[900px] mx-auto pt-20">
        <div className="animate-scroll-reveal stagger-1">
          <h1 className="text-display-xl text-white tracking-tight font-playfair">
            Penrith Electrical Services
          </h1>
        </div>
        <div className="animate-scroll-reveal stagger-2 mt-6">
          <p className="text-lg md:text-xl text-white/90 max-w-[650px] mx-auto leading-relaxed">
            Premium Electrical Solutions for Sydney Homes &amp; Businesses
          </p>
        </div>
        <div className="animate-scroll-reveal stagger-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/get-quote" className="btn-primary text-base px-8 py-4">
            Get a Free Quote
          </Link>
          <a
            href="tel:1300600404"
            className="btn-outline border-white text-white hover:bg-white hover:text-[#011633] text-base px-8 py-4"
          >
            <Phone size={18} />
            Call Now: 1300 600 404
          </a>
        </div>

        {/* Trust Bar */}
        <div className="animate-scroll-reveal stagger-4 mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
          <span className="flex items-center gap-1.5"><Award size={14} /> Fully Licensed</span>
          <span className="text-white/40">|</span>
          <span className="flex items-center gap-1.5"><Shield size={14} /> Insured</span>
          <span className="text-white/40">|</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> 10+ Years</span>
          <span className="text-white/40">|</span>
          <span className="flex items-center gap-1.5"><MapPin size={14} /> Penrith &amp; Western Sydney</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

/* ─── Services Overview Section ─── */
function ServicesOverview() {
  const services = [
    {
      icon: HomeIcon,
      title: 'Residential Electrical',
      desc: 'Smart homes, renovations, lighting design, EV chargers & more for your home.',
      link: '/services/residential',
      image: '/images/service-residential.jpg',
    },
    {
      icon: Building2,
      title: 'Commercial Electrical',
      desc: 'Offices, retail fit-outs, strata management & industrial electrical solutions.',
      link: '/services/commercial',
      image: '/images/service-commercial.jpg',
    },
    {
      icon: Zap,
      title: 'Emergency & Maintenance',
      desc: '24/7 emergency call-out service. Fast response when you need us most.',
      link: '/services',
      image: '/images/service-emergency.jpg',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="content-max">
        <div className="text-center mb-16 animate-scroll-reveal">
          <span className="text-[15px] font-semibold uppercase tracking-widest text-[#656565]">
            Our Services
          </span>
          <h2 className="text-display-md text-[#011633] mt-4">
            Electrical Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.link}
              className={`group rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-scroll-reveal stagger-${i + 1}`}
            >
              {/* Service Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="w-14 h-14 rounded-full bg-[#011633] flex items-center justify-center mb-5 group-hover:bg-[#FE5000] transition-colors duration-500">
                  <s.icon size={26} className="text-white" />
                </div>
                <h3 className="text-heading-md text-[#011633] mb-3">{s.title}</h3>
                <p className="text-[17px] text-[#777777] leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-[#FE5000] font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                  Learn More <ChevronRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us Section ─── */
function WhyChooseUs() {
  const reasons = [
    { icon: Award, title: 'Master Electricians', desc: 'Fully certified and licensed professionals with decades of combined experience.' },
    { icon: CircuitBoard, title: 'Latest Smart Technology', desc: 'We install and service the newest smart home and automation systems.' },
    { icon: Leaf, title: 'Energy Efficiency Experts', desc: 'LED retrofits, solar integration, and energy audits to reduce your bills.' },
    { icon: BadgeCheck, title: 'Guaranteed Workmanship', desc: 'All work comes with a lifetime workmanship guarantee for your peace of mind.' },
    { icon: Shield, title: 'Safety First', desc: 'We follow strict safety protocols and comply with all Australian standards.' },
    { icon: MapPinned, title: 'Local Sydney Business', desc: 'Proudly serving Western Sydney & Greater Sydney with local knowledge.' },
  ];

  return (
    <section className="section-padding bg-[#011633]">
      <div className="content-max">
        <div className="text-center mb-16 animate-scroll-reveal">
          <span className="text-[15px] font-semibold uppercase tracking-widest text-white/60">
            Why Choose Us
          </span>
          <h2 className="text-display-lg text-white mt-4">
            The Penrith Electrical Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`text-center p-8 animate-scroll-reveal stagger-${i + 1}`}
            >
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <r.icon size={32} className="text-[#FE5000]" />
              </div>
              <h3 className="text-heading-md text-white mb-3">{r.title}</h3>
              <p className="text-[17px] text-white/60 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Projects Section ─── */
function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filters = ['All', 'Residential', 'Commercial', 'Smart Homes', 'Renovations'];

  const projects = [
    { img: '/images/project-1.jpg', title: 'LED Downlight Installation', location: 'Penrith', type: 'Residential' },
    { img: '/images/project-2.jpg', title: 'Office Fit-out & Data Cabling', location: 'Parramatta', type: 'Commercial' },
    { img: '/images/project-3.jpg', title: 'Kitchen Pendant Lighting', location: 'Castle Hill', type: 'Renovations' },
    { img: '/images/project-4.jpg', title: 'Switchboard Upgrade', location: 'Baulkham Hills', type: 'Residential' },
    { img: '/images/project-5.jpg', title: 'Smart Home Automation', location: 'Blacktown', type: 'Smart Homes' },
    { img: '/images/project-6.jpg', title: 'Outdoor Landscape Lighting', location: 'Blue Mountains', type: 'Residential' },
    { img: '/images/project-commercial-2.jpg', title: 'Retail Shop Lighting', location: 'Liverpool', type: 'Commercial' },
    { img: '/images/project-commercial-3.jpg', title: 'Strata Common Area Lighting', location: 'Bankstown', type: 'Commercial' },
    { img: '/images/project-smarthome-2.jpg', title: 'Smart Lighting System', location: 'Campbelltown', type: 'Smart Homes' },
    { img: '/images/project-smarthome-3.jpg', title: 'Home Security & CCTV', location: 'St Marys', type: 'Smart Homes' },
    { img: '/images/project-renovation-2.jpg', title: 'Bathroom Electrical Reno', location: 'Glenmore Park', type: 'Renovations' },
    { img: '/images/project-renovation-3.jpg', title: 'Home Extension Wiring', location: 'Jordan Springs', type: 'Renovations' },
  ];

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.type === activeFilter);

  // Reset hover state when filter changes
  useEffect(() => {
    setHoveredIndex(null);
  }, [activeFilter]);

  return (
    <section className="section-padding bg-white">
      <div className="content-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 animate-scroll-reveal">
          <div>
            <span className="text-[15px] font-semibold uppercase tracking-widest text-[#656565]">
              Featured Projects
            </span>
            <h2 className="text-display-md text-[#011633] mt-4">Our Recent Work</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-[#011633] text-white'
                    : 'bg-[#F8F8F8] text-[#656565] hover:bg-[#011633] hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid with key forces re-mount on filter change */}
        <div key={activeFilter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={`${p.title}-${i}`}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${(i % 3) * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-[#011633]/90 via-[#011633]/30 to-transparent transition-opacity duration-500 ${
                hoveredIndex === i ? 'opacity-100' : 'opacity-0'
              }`} />
              <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FE5000] bg-[#FE5000]/20 px-3 py-1 rounded-full">
                  {p.type}
                </span>
                <h3 className="text-heading-md text-white mt-2">{p.title}</h3>
                <p className="text-sm text-white/70 flex items-center gap-1 mt-1">
                  <MapPin size={14} /> {p.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const testimonials = [
    { name: 'Sarah M.', location: 'Penrith', text: 'Amazing job upgrading our switchboard. The team was punctual, friendly, and left our home spotless. Highly recommend!' },
    { name: 'John D.', location: 'Blacktown', text: 'Fantastic service! They installed new lighting in our office and the results are incredible. Professional and efficient.' },
    { name: 'Emily R.', location: 'Castle Hill', text: 'We lost power late at night and they came out within the hour. Fast, reliable, and fairly priced. Our go-to electricians.' },
    { name: 'Michael T.', location: 'Parramatta', text: 'The team rewired our entire kitchen during renovation. Everything was done on time and on budget. Exceptional quality.' },
    { name: 'Lisa K.', location: 'Baulkham Hills', text: 'Very happy with the smart home system they installed. The guys were knowledgeable and patient explaining how it all works.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/testimonials-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#011633]/85" />
      </div>

      <div className="relative z-10 content-max">
        <div className="text-center mb-16 animate-scroll-reveal">
          <span className="text-[15px] font-semibold uppercase tracking-widest text-white/60">
            Testimonials
          </span>
          <h2 className="text-display-lg text-white mt-4">
            See What Our Customers Say
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="animate-scroll-reveal">
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-[800px] mx-auto shadow-2xl">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#FE5000] fill-[#FE5000]" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-[#011633] leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#011633] flex items-center justify-center text-white font-bold text-lg">
                {testimonials[currentIndex].name[0]}
              </div>
              <div>
                <p className="font-semibold text-[#011633]">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-[#777777]">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-[#FE5000] w-8' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner Section ─── */
function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/cta-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#011633]/70" />

      <div className="relative z-10 content-max text-center">
        <div className="animate-scroll-reveal">
          <h2 className="text-display-lg text-white mb-4">
            Ready to Power Your Next Project?
          </h2>
          <p className="text-lg text-white/80 max-w-[600px] mx-auto mb-10">
            Get a free, no-obligation quote from our expert electricians. We&apos;ll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-quote" className="btn-primary text-base px-10 py-4">
              Request a Quote
            </Link>
            <a
              href="tel:1300600404"
              className="btn-outline border-white text-white hover:bg-white hover:text-[#011633] text-base px-10 py-4"
            >
              <Phone size={18} />
              1300 600 404
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Home Page ─── */
export default function Home() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
