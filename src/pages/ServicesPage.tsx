import { Link, useLocation } from 'react-router-dom';
import {
  Home, Building2, Zap, Lightbulb, Shield, CircuitBoard,
  Cable, Plug, Wrench, ClipboardCheck, Layers, Phone, ChevronRight
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const residentialServices = [
  {
    icon: Home,
    title: 'New Homes & Extensions',
    desc: 'Complete electrical wiring and installation for new builds, extensions, and granny flats. We work with builders and homeowners to deliver compliant, future-ready electrical systems.',
    benefits: ['Full wiring compliance', 'Future-proof design', 'Builder coordination'],
  },
  {
    icon: Wrench,
    title: 'Renovations & Rewires',
    desc: 'Update old wiring, add new circuits, and modernise your electrical system during renovations. We handle everything from kitchen rewires to whole-home upgrades.',
    benefits: ['Minimal disruption', 'Code compliance', 'Power upgrades'],
  },
  {
    icon: Lightbulb,
    title: 'Smart Home Automation & Lighting Design',
    desc: 'Transform your home with intelligent lighting, automated blinds, integrated audio, and smart security systems controlled from your phone or voice.',
    benefits: ['App & voice control', 'Energy savings', 'Custom scenes'],
  },
  {
    icon: Plug,
    title: 'EV Charger Installation',
    desc: 'We install Level 2 EV chargers for all major brands including Tesla, BYD, and MG. Home and commercial charging solutions with load management.',
    benefits: ['All EV brands', 'Load balancing', 'Fast charging'],
  },
  {
    icon: CircuitBoard,
    title: 'Switchboard Upgrades & Safety Checks',
    desc: 'Upgrade your old fuse box to a modern switchboard with safety switches (RCDs) and circuit breakers. Essential for home safety and insurance compliance.',
    benefits: ['RCD protection', 'Surge protection', 'Safety compliance'],
  },
  {
    icon: Zap,
    title: 'Ceiling Fans & Air Conditioning Power',
    desc: 'Dedicated power circuits for air conditioners, ceiling fan installation, and exhaust fans. Keep your home comfortable year-round.',
    benefits: ['Dedicated circuits', 'Energy efficient', 'Year-round comfort'],
  },
];

const commercialServices = [
  {
    icon: Building2,
    title: 'Office & Retail Fit-outs',
    desc: 'Complete electrical fit-outs for offices, retail stores, and hospitality venues. Power, lighting, data, and signage all handled by one team.',
    benefits: ['Minimal downtime', 'After-hours work', 'Code compliant'],
  },
  {
    icon: Layers,
    title: 'Strata & Body Corporate',
    desc: 'Specialised electrical services for strata properties. Common area lighting, intercoms, switchboard maintenance, and emergency repairs.',
    benefits: ['Strata experience', 'Common areas', 'Emergency repairs'],
  },
  {
    icon: Cable,
    title: 'Data & Communications',
    desc: 'Structured cabling, fibre optic, NBN readiness, and Wi-Fi network design for commercial spaces. Reliable connectivity for your business.',
    benefits: ['Fibre & structured', 'NBN ready', 'Wi-Fi design'],
  },
  {
    icon: Lightbulb,
    title: 'LED Lighting Retrofits & Energy Audits',
    desc: 'Replace old fluorescent and halogen lighting with energy-efficient LED solutions. Reduce power bills by up to 70% with our retrofit service.',
    benefits: ['Up to 70% savings', 'Government rebates', 'Quick ROI'],
  },
  {
    icon: Zap,
    title: '3-Phase Power & Industrial',
    desc: '3-phase power installation for commercial kitchens, workshops, factories, and industrial equipment. Heavy-duty wiring and distribution boards.',
    benefits: ['Heavy duty', 'Industrial grade', 'Full compliance'],
  },
  {
    icon: Shield,
    title: 'Emergency & Exit Lighting',
    desc: 'Installation, testing, and maintenance of emergency and exit lighting systems. Compliant with AS/NZS 2293 standards for commercial buildings.',
    benefits: ['AS/NZS 2293', '6-monthly testing', 'Compliance reports'],
  },
];

const emergencyServices = [
  {
    icon: Zap,
    title: '24/7 Emergency Call-out',
    desc: 'Power outages, electrical faults, burning smells, sparking switches — our emergency electricians are on call 24 hours a day, 7 days a week across Western Sydney.',
    benefits: ['24/7 availability', 'Fast response', 'All emergencies'],
  },
  {
    icon: ClipboardCheck,
    title: 'Safety Inspections & Certificates',
    desc: 'Pre-purchase electrical inspections, rental safety checks, and compliance certificates. Protect your investment and ensure tenant safety.',
    benefits: ['Pre-purchase checks', 'Rental safety', 'Compliance certs'],
  },
];

function ServiceCard({ service }: { service: typeof residentialServices[0] }) {
  return (
    <div className="group bg-white rounded-xl border border-[#ECECEC] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[#011633]/10 h-full flex flex-col">
      <div className="w-14 h-14 rounded-xl bg-[#011633]/5 flex items-center justify-center mb-5 group-hover:bg-[#FE5000]/10 transition-colors duration-500">
        <service.icon size={26} className="text-[#011633] group-hover:text-[#FE5000] transition-colors duration-500" />
      </div>
      <h3 className="text-heading-md text-[#011633] mb-3">{service.title}</h3>
      <p className="text-[#777777] leading-relaxed mb-5">{service.desc}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {service.benefits.map((b) => (
          <span key={b} className="text-xs font-medium text-[#011633] bg-[#F8F8F8] px-3 py-1 rounded-full">
            {b}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-[#ECECEC]">
        <Link to="/get-quote" className="btn-primary text-sm py-3 px-5">
          Quote This Service
        </Link>
        <Link
          to="/contact"
          className="text-[#011633] font-semibold text-sm uppercase tracking-wide flex items-center gap-1 hover:text-[#FE5000] transition-colors"
        >
          Learn More <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const location = useLocation();
  const path = location.pathname;

  const tabs = [
    { label: 'All Services', href: '/services' },
    { label: 'Residential', href: '/services/residential' },
    { label: 'Commercial', href: '/services/commercial' },
  ];

  const activeTab = tabs.find((t) => t.href === path) || tabs[0];

  const showResidential = activeTab.label === 'All Services' || activeTab.label === 'Residential';
  const showCommercial = activeTab.label === 'All Services' || activeTab.label === 'Commercial';

  useScrollReveal();

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#011633] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(254,80,0,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative z-10 content-max">
          <div className="animate-scroll-reveal">
            <span className="text-[15px] font-semibold uppercase tracking-widest text-[#FE5000]">
              What We Offer
            </span>
            <h1 className="text-display-lg text-white mt-4 max-w-[700px]">
              Our Electrical Services
            </h1>
            <p className="text-lg text-white/70 mt-6 max-w-[600px] leading-relaxed">
              From residential repairs to commercial fit-outs, we provide comprehensive electrical solutions across Sydney&apos;s West and Greater Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-20 z-50 bg-white border-b border-[#ECECEC] shadow-sm">
        <div className="content-max">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                to={tab.href}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeTab.label === tab.label
                    ? 'bg-[#011633] text-white'
                    : 'text-[#656565] hover:bg-[#F8F8F8] hover:text-[#011633]'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Services */}
      {showResidential && (
        <section className="section-padding bg-[#F8F8F8]">
          <div className="content-max">
            <div className="animate-scroll-reveal mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#011633] flex items-center justify-center">
                  <Home size={20} className="text-white" />
                </div>
                <h2 className="text-display-sm text-[#011633]">Residential Services</h2>
              </div>
              <p className="text-[#777777] max-w-[600px]">
                Expert electrical services for homeowners, from new builds and renovations to smart home automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {residentialServices.map((s, i) => (
                <div key={s.title} className={`animate-scroll-reveal stagger-${(i % 3) + 1} h-full`}>
                  <ServiceCard service={s} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Commercial Services */}
      {showCommercial && (
        <section className={`${showResidential ? 'section-padding' : 'section-padding'} bg-white`}>
          <div className="content-max">
            <div className="animate-scroll-reveal mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#011633] flex items-center justify-center">
                  <Building2 size={20} className="text-white" />
                </div>
                <h2 className="text-display-sm text-[#011633]">Commercial Services</h2>
              </div>
              <p className="text-[#777777] max-w-[600px]">
                Professional electrical solutions for offices, retail, strata, and industrial properties.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {commercialServices.map((s, i) => (
                <div key={s.title} className={`animate-scroll-reveal stagger-${(i % 3) + 1} h-full`}>
                  <ServiceCard service={s} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Emergency Services */}
      <section className={`${showCommercial ? 'section-padding' : 'section-padding'} bg-[#F8F8F8]`}>
        <div className="content-max">
          <div className="animate-scroll-reveal mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#FE5000] flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <h2 className="text-display-sm text-[#011633]">Emergency &amp; Maintenance</h2>
            </div>
            <p className="text-[#777777] max-w-[600px]">
              When electrical emergencies strike, we&apos;re available 24/7 to get you back up and running safely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] items-stretch">
            {emergencyServices.map((s, i) => (
              <div key={s.title} className={`animate-scroll-reveal stagger-${i + 1} h-full`}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="mt-12 animate-scroll-reveal bg-[#011633] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-heading-lg text-white mb-2">24/7 Emergency Service</h3>
              <p className="text-white/70">Available around the clock for electrical emergencies across Western Sydney.</p>
            </div>
            <a href="tel:1300600404" className="btn-primary whitespace-nowrap flex items-center gap-2">
              <Phone size={18} />
              1300 600 404
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#011633]">
        <div className="content-max text-center animate-scroll-reveal">
          <h2 className="text-display-md text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-lg text-white/70 max-w-[500px] mx-auto mb-8">
            Contact our friendly team for expert advice and a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-quote" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-[#011633]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
