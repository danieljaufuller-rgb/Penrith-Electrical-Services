import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const categories = ['All', 'Electrical Safety', 'Smart Home Trends', 'Energy Efficiency', 'Renovation Guides', 'Commercial Compliance'];

const posts = [
  {
    id: 1,
    title: '5 Electrical Safety Checks Every Sydney Homeowner Should Do Annually',
    excerpt: 'From testing smoke alarms to checking for faulty wiring, these simple checks can prevent electrical fires and keep your family safe.',
    category: 'Electrical Safety',
    date: 'June 15, 2026',
    readTime: '5 min read',
    image: '/images/project-4.jpg',
  },
  {
    id: 2,
    title: 'The Rise of Smart Home Automation in Western Sydney',
    excerpt: 'Discover how homeowners in Penrith and surrounding areas are transforming their homes with smart lighting, security, and climate control.',
    category: 'Smart Home Trends',
    date: 'June 10, 2026',
    readTime: '7 min read',
    image: '/images/project-5.jpg',
  },
  {
    id: 3,
    title: 'How LED Retrofits Can Save You Up to 70% on Lighting Costs',
    excerpt: 'Learn about the financial and environmental benefits of switching from halogen and fluorescent lighting to modern LED solutions.',
    category: 'Energy Efficiency',
    date: 'June 5, 2026',
    readTime: '6 min read',
    image: '/images/project-1.jpg',
  },
  {
    id: 4,
    title: 'Electrical Renovation Guide: What to Budget for Your Kitchen Reno',
    excerpt: 'Planning a kitchen renovation? Here\'s a complete breakdown of electrical costs from power points to pendant lighting and appliance circuits.',
    category: 'Renovation Guides',
    date: 'May 28, 2026',
    readTime: '8 min read',
    image: '/images/project-3.jpg',
  },
  {
    id: 5,
    title: 'EV Charger Installation: What Sydney Homeowners Need to Know',
    excerpt: 'Everything you need to know about installing an EV charger at home, including costs, power requirements, and government rebates.',
    category: 'Energy Efficiency',
    date: 'May 20, 2026',
    readTime: '6 min read',
    image: '/images/project-6.jpg',
  },
  {
    id: 6,
    title: 'Commercial Electrical Compliance Updates for 2026',
    excerpt: 'Stay up to date with the latest changes to Australian electrical standards that affect commercial properties and workplaces.',
    category: 'Commercial Compliance',
    date: 'May 15, 2026',
    readTime: '4 min read',
    image: '/images/project-2.jpg',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

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
              Blog & Resources
            </span>
            <h1 className="text-display-lg text-white mt-4 max-w-[700px]">
              Electrical Tips, Trends & Guides
            </h1>
            <p className="text-lg text-white/70 mt-6 max-w-[600px] leading-relaxed">
              Expert advice from Sydney&apos;s leading electricians. Stay informed about electrical safety, smart technology, and industry updates.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-50 bg-white border-b border-[#ECECEC] shadow-sm">
        <div className="content-max">
          <div className="flex items-center gap-2 overflow-x-auto py-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === c
                    ? 'bg-[#011633] text-white'
                    : 'text-[#656565] hover:bg-[#F8F8F8] hover:text-[#011633]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="content-max">
          <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FE5000] flex items-center gap-1">
                      <Tag size={12} /> {post.category}
                    </span>
                  </div>
                  <h3 className="text-heading-md text-[#011633] mb-3 group-hover:text-[#FE5000] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#777777] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#ECECEC]">
                    <div className="flex items-center gap-4 text-xs text-[#777777]">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <span className="text-[#FE5000] flex items-center gap-1 text-sm font-semibold">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-[#011633]">
        <div className="content-max text-center animate-scroll-reveal">
          <h2 className="text-display-md text-white mb-4">Need Electrical Advice?</h2>
          <p className="text-lg text-white/70 max-w-[500px] mx-auto mb-8">
            Our licensed electricians are here to help. Contact us for expert advice tailored to your needs.
          </p>
          <Link to="/contact" className="btn-primary">
            Speak to an Electrician
          </Link>
        </div>
      </section>
    </>
  );
}
