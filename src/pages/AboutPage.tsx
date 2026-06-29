import {
  Award, Shield, HeartHandshake, Lightbulb, Phone,
  MapPin, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const values = [
  { icon: Shield, title: 'Safety', desc: 'Every job prioritises the safety of our team, your family, and your property. We follow strict safety protocols and comply with all Australian standards.' },
  { icon: Award, title: 'Quality', desc: 'We use premium materials and proven techniques to deliver workmanship that lasts. No shortcuts, no compromises — just quality you can count on.' },
  { icon: HeartHandshake, title: 'Reliability', desc: 'When we say we\'ll be there, we\'ll be there. Punctual, professional, and dependable service every single time.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of the curve with the latest smart home technology, energy-efficient solutions, and industry best practices.' },
];

const certifications = [
  'Master Electricians Australia Member',
  'NSW Fair Trading Licensed (Lic. No. 123456C)',
  'Fully Insured (Public Liability $20M)',
  'ASP Level 2 Authorised',
  'Working at Heights Certified',
  'First Aid & CPR Certified',
];

const communityWork = [
  'Sponsor of Penrith City Soccer Club',
  'Volunteer electrical work for local charities',
  'Participated in Nepean Hospital fundraising events',
  'Supported Western Sydney apprenticeship programs',
  'Annual free safety inspections for elderly residents',
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
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
              About Us
            </span>
            <h1 className="text-display-lg text-white mt-4 max-w-[800px]">
              Powering Sydney&apos;s Finest Homes and Businesses
            </h1>
            <p className="text-lg text-white/70 mt-6 max-w-[600px] leading-relaxed">
              A family-owned electrical business built on trust, expertise, and a genuine commitment to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Text Column */}
            <div className="animate-scroll-reveal">
              <span className="text-[15px] font-semibold uppercase tracking-widest text-[#656565]">
                Our Story
              </span>
              <h2 className="text-display-sm text-[#011633] mt-4 mb-6">
                Local Roots. Premium Expertise.
              </h2>
              <div className="space-y-4 text-[#777777] leading-relaxed text-[17px]">
                <p>
                  Founded in Penrith over a decade ago, Penrith Electrical Services began as a small family operation with a simple mission: provide honest, high-quality electrical work to our local community.
                </p>
                <p>
                  What started as a one-man operation has grown into a trusted team of licensed electricians serving the entire Greater Sydney region. But despite our growth, we&apos;ve never lost that personal, family-business touch.
                </p>
                <p>
                  We understand the unique electrical needs of Sydney homes and businesses — from heritage properties in the Blue Mountains to modern smart homes in Castle Hill and large-scale commercial fit-outs in Parramatta.
                </p>
                <p>
                  Every member of our team is a fully licensed, Master Electrician who takes pride in their craft. We don&apos;t just fix electrical problems — we build long-term relationships with our clients based on trust, transparency, and exceptional workmanship.
                </p>
              </div>
            </div>
            {/* Image Column */}
            <div className="animate-scroll-reveal stagger-2">
              <div className="relative pl-6 pb-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/electrician-portrait.jpg"
                    alt="Lead electrician at Penrith Electrical Services"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 bg-[#FE5000] text-white rounded-xl p-5 shadow-xl">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm font-medium opacity-90">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="content-max">
          <div className="text-center mb-16 animate-scroll-reveal">
            <span className="text-[15px] font-semibold uppercase tracking-widest text-[#656565]">
              Our Values
            </span>
            <h2 className="text-display-md text-[#011633] mt-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className={`bg-white rounded-xl p-8 text-center animate-scroll-reveal stagger-${i + 1}`}>
                <div className="w-16 h-16 rounded-full bg-[#011633]/5 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={28} className="text-[#FE5000]" />
                </div>
                <h3 className="text-heading-md text-[#011633] mb-3">{v.title}</h3>
                <p className="text-[#777777] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="animate-scroll-reveal">
              <span className="text-[15px] font-semibold uppercase tracking-widest text-[#656565]">
                Certifications & Memberships
              </span>
              <h2 className="text-display-sm text-[#011633] mt-4 mb-6">
                Licensed, Certified & Insured
              </h2>
              <p className="text-[#777777] leading-relaxed mb-8">
                We maintain the highest industry standards and hold all required certifications to work on residential, commercial, and industrial electrical systems across New South Wales.
              </p>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#FE5000] mt-0.5 flex-shrink-0" />
                    <span className="text-[#011633] font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scroll-reveal stagger-2">
              <span className="text-[15px] font-semibold uppercase tracking-widest text-[#656565]">
                Community Involvement
              </span>
              <h2 className="text-display-sm text-[#011633] mt-4 mb-6">
                Proudly Part of Western Sydney
              </h2>
              <p className="text-[#777777] leading-relaxed mb-8">
                We believe in giving back to the community that has supported us for over a decade. Here are some of the ways we contribute:
              </p>
              <div className="space-y-4">
                {communityWork.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <HeartHandshake size={20} className="text-[#FE5000] mt-0.5 flex-shrink-0" />
                    <span className="text-[#011633]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="section-padding bg-[#011633]">
        <div className="content-max">
          <div className="text-center mb-16 animate-scroll-reveal">
            <span className="text-[15px] font-semibold uppercase tracking-widest text-[#FE5000]">
              Service Areas
            </span>
            <h2 className="text-display-lg text-white mt-4">
              Where We Work
            </h2>
            <p className="text-lg text-white/70 mt-4 max-w-[600px] mx-auto">
              Based in Penrith, we service homes and businesses across Western Sydney and Greater Sydney.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 animate-scroll-reveal">
            {[
              'Penrith', 'Blacktown', 'Parramatta', 'Castle Hill',
              'Baulkham Hills', 'Blue Mountains', 'St Marys', 'Mount Druitt',
              'Campbelltown', 'Liverpool', 'Bankstown', 'Richmond',
              'Windsor', 'Emu Plains', 'Glenmore Park', 'Jordan Springs',
              'Cranebrook', 'Kingswood', 'Werrington', 'Cambridge Park',
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3 text-white/80 hover:bg-white/10 transition-colors"
              >
                <MapPin size={14} className="text-[#FE5000] flex-shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="content-max text-center animate-scroll-reveal">
          <h2 className="text-display-md text-[#011633] mb-4">
            Experience the Penrith Electrical Difference
          </h2>
          <p className="text-lg text-[#777777] max-w-[500px] mx-auto mb-8">
            Join thousands of satisfied customers across Sydney&apos;s West. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-quote" className="btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:1300600404" className="btn-outline border-[#011633] text-[#011633]">
              <Phone size={18} />
              1300 600 404
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
