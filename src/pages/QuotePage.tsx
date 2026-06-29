import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Send, CheckCircle2, Phone, Zap, Clock, Shield, Award, Star
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  'Electrical Repairs',
  'Lighting Installation',
  'Safety Inspection',
  'Switchboard Upgrade',
  'Rewiring',
  'Appliance Installation',
  'EV Charger Installation',
  'Smart Home Automation',
  'Ceiling Fans',
  'Emergency Electrical',
  'Commercial Fit-out',
  'Data & Communications',
  'Other',
];

const whyChoose = [
  { icon: Clock, title: '24hr Response', desc: 'Quotes within 24 hours' },
  { icon: Shield, title: 'No Obligation', desc: 'Free, no-pressure quotes' },
  { icon: Award, title: 'Licensed Team', desc: 'Master Electricians' },
  { icon: Star, title: '5-Star Rated', desc: 'Trusted by 1000+ clients' },
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', propertyType: '',
    suburb: '', description: '', preferredTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              Free Quote
            </span>
            <h1 className="text-display-lg text-white mt-4 max-w-[700px]">
              Request a Free Quote
            </h1>
            <p className="text-lg text-white/70 mt-6 max-w-[600px] leading-relaxed">
              Tell us about your electrical project and we&apos;ll provide a detailed, no-obligation quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-white">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Left Info */}
            <div className="lg:col-span-2 animate-scroll-reveal">
              <h2 className="text-display-sm text-[#011633] mb-6">
                What Happens Next?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FE5000] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#011633] mb-1">Submit Your Request</h4>
                    <p className="text-sm text-[#777777]">Fill out the form with details about your electrical needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FE5000] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#011633] mb-1">We Review & Contact You</h4>
                    <p className="text-sm text-[#777777]">Our team reviews your request and calls you within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FE5000] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#011633] mb-1">Site Visit (If Needed)</h4>
                    <p className="text-sm text-[#777777]">For larger jobs, we&apos;ll arrange a free on-site assessment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FE5000] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#011633] mb-1">Receive Your Quote</h4>
                    <p className="text-sm text-[#777777]">Get a detailed written quote with transparent pricing.</p>
                  </div>
                </div>
              </div>

              {/* Why choose cards */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {whyChoose.map((item) => (
                  <div key={item.title} className="bg-[#F8F8F8] rounded-xl p-5 text-center">
                    <item.icon size={24} className="text-[#FE5000] mx-auto mb-2" />
                    <p className="text-sm font-semibold text-[#011633]">{item.title}</p>
                    <p className="text-xs text-[#777777]">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Emergency */}
              <div className="mt-8 bg-[#011633] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={20} className="text-[#FE5000]" />
                  <span className="text-sm font-semibold text-[#FE5000]">Emergency?</span>
                </div>
                <p className="text-white/70 text-sm mb-3">For urgent electrical issues, call us directly for immediate assistance.</p>
                <a href="tel:1300600404" className="text-xl font-bold text-white hover:text-[#FE5000] transition-colors flex items-center gap-2">
                  <Phone size={20} />
                  1300 600 404
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 animate-scroll-reveal stagger-2">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-[#F8F8F8] rounded-2xl p-8 md:p-10">
                  <h3 className="text-heading-lg text-[#011633] mb-6">Your Project Details</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-[#011633] mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] placeholder:text-[#D1D1D1] focus:border-[#011633] focus:outline-none transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#011633] mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] placeholder:text-[#D1D1D1] focus:border-[#011633] focus:outline-none transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#011633] mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email address"
                        className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] placeholder:text-[#D1D1D1] focus:border-[#011633] focus:outline-none transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#011633] mb-2">Service Type *</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] focus:border-[#011633] focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#011633] mb-2">Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] focus:border-[#011633] focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Select property type</option>
                        <option>House</option>
                        <option>Unit / Apartment</option>
                        <option>Townhouse</option>
                        <option>Commercial Office</option>
                        <option>Retail Shop</option>
                        <option>Industrial / Warehouse</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#011633] mb-2">Suburb</label>
                      <input
                        type="text"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        placeholder="e.g. Penrith"
                        className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] placeholder:text-[#D1D1D1] focus:border-[#011633] focus:outline-none transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#011633] mb-2">Preferred Contact Time</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] focus:border-[#011633] focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Any time</option>
                        <option>Morning (7am - 12pm)</option>
                        <option>Afternoon (12pm - 5pm)</option>
                        <option>Evening (5pm - 7pm)</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-[#011633] mb-2">Project Description</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Tell us about your project - what needs to be done, any specific requirements, timeline, etc."
                        rows={5}
                        className="w-full border border-[#D8D8D8] rounded-lg px-5 py-4 text-[15px] text-[#011633] placeholder:text-[#D1D1D1] focus:border-[#011633] focus:outline-none transition-colors resize-none bg-white"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full mt-6">
                    <Send size={16} />
                    Request My Free Quote
                  </button>

                  <p className="text-xs text-[#777777] text-center mt-4">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              ) : (
                <div className="bg-[#F8F8F8] rounded-2xl p-10 md:p-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-display-sm text-[#011633] mb-4">Quote Request Received!</h3>
                  <p className="text-[#777777] max-w-[400px] mx-auto mb-2">
                    Thank you for reaching out. One of our team members will contact you within 24 hours to discuss your project.
                  </p>
                  <p className="text-sm text-[#777777] mb-8">
                    For urgent matters, call us directly at <a href="tel:1300600404" className="text-[#FE5000] font-semibold">1300 600 404</a>.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/" className="btn-primary">Back to Home</Link>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', service: '', propertyType: '', suburb: '', description: '', preferredTime: '' }); }}
                      className="btn-outline border-[#011633] text-[#011633]"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
