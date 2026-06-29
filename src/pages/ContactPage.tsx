import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock, Zap, ChevronDown, ChevronUp,
  CheckCircle2, Send
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  {
    q: 'How quickly can you respond to an emergency call?',
    a: 'Our emergency electricians aim to be on-site within 1-2 hours for calls within the Penrith and Western Sydney area. We have team members on standby 24/7, 365 days a year.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Absolutely. All our electricians are fully licensed with NSW Fair Trading, members of Master Electricians Australia, and we carry $20 million in public liability insurance.',
  },
  {
    q: 'Do you offer free quotes?',
    a: 'Yes! We provide free, no-obligation quotes for all electrical work. For larger projects, we\'ll visit your property to assess the scope before providing a detailed written quote.',
  },
  {
    q: 'What areas do you service?',
    a: 'We\'re based in Penrith and service all of Western Sydney and Greater Sydney, including Blacktown, Parramatta, Castle Hill, Baulkham Hills, Blue Mountains, Campbelltown, Liverpool, and surrounding areas.',
  },
  {
    q: 'Do you handle commercial electrical work?',
    a: 'Yes, we specialise in both residential and commercial electrical services including office fit-outs, retail spaces, strata properties, and industrial installations.',
  },
  {
    q: 'Can you install EV chargers?',
    a: 'Yes, we install EV chargers for all major brands including Tesla, BYD, MG, Hyundai, and more. We handle the entire process from assessment to installation and can advise on load management.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, bank transfer, credit/debit cards (Visa, Mastercard), and Afterpay. Payment terms can be arranged for larger commercial projects.',
  },
  {
    q: 'Do you offer any warranties or guarantees?',
    a: 'All our work comes with a lifetime workmanship guarantee. We also pass on manufacturer warranties for all products and materials we install.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#ECECEC]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-lg font-semibold pr-4 transition-colors ${isOpen ? 'text-[#FE5000]' : 'text-[#011633] group-hover:text-[#FE5000]'}`}>
          {faq.q}
        </span>
        {isOpen ? <ChevronUp size={20} className="text-[#FE5000] flex-shrink-0" /> : <ChevronDown size={20} className="text-[#777777] flex-shrink-0" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'}`}
      >
        <p className="text-[#777777] leading-relaxed pr-8">{faq.a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
              Contact Us
            </span>
            <h1 className="text-display-lg text-white mt-4 max-w-[700px]">
              Get In Touch
            </h1>
            <p className="text-lg text-white/70 mt-6 max-w-[600px] leading-relaxed">
              Have a question or need a quote? We&apos;d love to hear from you. Reach out and our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="animate-scroll-reveal">
              <h2 className="text-display-sm text-[#011633] mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#011633]/5 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#FE5000]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#777777] mb-1">Phone</p>
                    <a href="tel:1300600404" className="text-lg font-semibold text-[#011633] hover:text-[#FE5000] transition-colors">
                      1300 600 404
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#011633]/5 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#FE5000]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#777777] mb-1">Email</p>
                    <a href="mailto:info@penrithelectrical.com.au" className="text-lg font-semibold text-[#011633] hover:text-[#FE5000] transition-colors">
                      info@penrithelectrical.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#011633]/5 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#FE5000]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#777777] mb-1">Address</p>
                    <p className="text-lg font-semibold text-[#011633]">
                      123 High Street, Penrith NSW 2750
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#011633]/5 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#FE5000]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#777777] mb-1">Business Hours</p>
                    <p className="text-[#011633]">Monday – Friday: 7am – 6pm</p>
                    <p className="text-[#011633]">Saturday: 8am – 4pm</p>
                    <p className="text-[#011633]">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#FE5000]/5 rounded-xl p-5 border border-[#FE5000]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#FE5000]/10 flex items-center justify-center flex-shrink-0">
                    <Zap size={20} className="text-[#FE5000]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#FE5000] font-semibold mb-1">24/7 Emergency Service</p>
                    <a href="tel:1300600404" className="text-lg font-bold text-[#FE5000]">
                      1300 600 404
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden bg-[#F8F8F8] h-[250px] flex items-center justify-center border border-[#ECECEC]">
                <div className="text-center">
                  <MapPin size={32} className="text-[#FE5000] mx-auto mb-2" />
                  <p className="text-[#011633] font-semibold">Penrith, NSW 2750</p>
                  <p className="text-sm text-[#777777]">Servicing Western Sydney & Greater Sydney</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scroll-reveal stagger-2">
              <h2 className="text-display-sm text-[#011633] mb-8">Send Us a Message</h2>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#011633] mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] placeholder:text-[#D1D1D1] focus:border-[#011633] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#011633] mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email"
                      className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] placeholder:text-[#D1D1D1] focus:border-[#011633] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#011633] mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] placeholder:text-[#D1D1D1] focus:border-[#011633] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#011633] mb-2">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] focus:border-[#011633] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option>Electrical Repairs</option>
                      <option>Lighting Installation</option>
                      <option>Safety Inspection</option>
                      <option>Switchboard Upgrade</option>
                      <option>Rewiring</option>
                      <option>Appliance Installation</option>
                      <option>EV Charger Installation</option>
                      <option>Smart Home Automation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#011633] mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help?"
                      rows={5}
                      className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] placeholder:text-[#D1D1D1] focus:border-[#011633] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="bg-[#F8F8F8] rounded-xl p-10 text-center">
                  <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-heading-lg text-[#011633] mb-2">Thank You!</h3>
                  <p className="text-[#777777]">We&apos;ve received your message and will be in touch shortly.</p>
                  <button
                    onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-6 text-[#FE5000] font-semibold text-sm uppercase tracking-wide"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="content-max">
          <div className="text-center mb-16 animate-scroll-reveal">
            <span className="text-[15px] font-semibold uppercase tracking-widest text-[#656565]">
              FAQ
            </span>
            <h2 className="text-display-md text-[#011633] mt-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto animate-scroll-reveal">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#011633]">
        <div className="content-max text-center animate-scroll-reveal">
          <h2 className="text-display-md text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/70 max-w-[500px] mx-auto mb-8">
            Request a free, no-obligation quote for your electrical project today.
          </p>
          <Link to="/get-quote" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
