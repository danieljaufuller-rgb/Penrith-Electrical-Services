import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, X, ChevronRight, Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Project {
  id: number;
  img: string;
  title: string;
  location: string;
  type: string;
  scope: string;
  testimonial?: { name: string; text: string };
}

const projects: Project[] = [
  {
    id: 1, img: '/images/project-1.jpg', title: 'LED Downlight Installation',
    location: 'Penrith', type: 'Residential', scope: 'Complete LED downlight upgrade throughout a 4-bedroom home. 36 new downlights installed with dimmer switches.',
    testimonial: { name: 'Sarah M., Penrith', text: 'The lighting transformation is incredible. Our home feels so much brighter and modern.' },
  },
  {
    id: 2, img: '/images/project-2.jpg', title: 'Office Fit-out & Data Cabling',
    location: 'Parramatta', type: 'Commercial', scope: 'Full electrical fit-out for a 200sqm commercial office including power, data cabling, and LED panel lighting.',
    testimonial: { name: 'David W., Parramatta', text: 'Professional team that worked after hours to minimise business disruption. Highly recommended.' },
  },
  {
    id: 3, img: '/images/project-3.jpg', title: 'Kitchen Pendant Lighting',
    location: 'Castle Hill', type: 'Renovations', scope: 'Kitchen renovation electrical work including pendant lights, under-cabinet LED strips, and new power points.',
    testimonial: { name: 'Michael T., Castle Hill', text: 'They rewired our entire kitchen perfectly. The pendant lights look stunning.' },
  },
  {
    id: 4, img: '/images/project-4.jpg', title: 'Switchboard Upgrade',
    location: 'Baulkham Hills', type: 'Residential', scope: 'Full switchboard replacement from old ceramic fuses to modern RCD-protected circuit breakers with surge protection.',
  },
  {
    id: 5, img: '/images/project-5.jpg', title: 'Smart Home Automation',
    location: 'Blacktown', type: 'Smart Homes', scope: 'Complete smart home system installation including lighting automation, security cameras, intercom, and climate control.',
    testimonial: { name: 'Lisa K., Blacktown', text: 'Now I control everything from my phone. The team was patient and explained everything.' },
  },
  {
    id: 6, img: '/images/project-6.jpg', title: 'Outdoor Landscape Lighting',
    location: 'Blue Mountains', type: 'Residential', scope: 'Design and installation of outdoor LED landscape lighting including garden spotlights, pathway lights, and pool lighting.',
  },
];

const filters = ['All', 'Residential', 'Commercial', 'Smart Homes', 'Renovations'];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl max-w-[700px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="aspect-video overflow-hidden rounded-t-2xl">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FE5000] bg-[#FE5000]/10 px-3 py-1 rounded-full">
              {project.type}
            </span>
            <span className="text-xs text-[#777777] flex items-center gap-1">
              <MapPin size={12} /> {project.location}
            </span>
          </div>
          <h3 className="text-display-sm text-[#011633] mb-4">{project.title}</h3>
          <p className="text-[#777777] leading-relaxed mb-6">{project.scope}</p>

          {project.testimonial && (
            <div className="bg-[#F8F8F8] rounded-xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#FE5000] fill-[#FE5000]" />
                ))}
              </div>
              <p className="text-[#011633] italic mb-3">&ldquo;{project.testimonial.text}&rdquo;</p>
              <p className="text-sm font-semibold text-[#011633]">— {project.testimonial.name}</p>
            </div>
          )}

          <div className="mt-6">
            <Link to="/get-quote" className="btn-primary">
              Get a Similar Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.type === activeFilter);

  // Reset selected project when filter changes
  useEffect(() => {
    setSelectedProject(null);
  }, [activeFilter]);

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
              Our Portfolio
            </span>
            <h1 className="text-display-lg text-white mt-4 max-w-[700px]">
              Featured Projects
            </h1>
            <p className="text-lg text-white/70 mt-6 max-w-[600px] leading-relaxed">
              Browse our completed work across residential, commercial, and smart home projects throughout Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-50 bg-white border-b border-[#ECECEC] shadow-sm">
        <div className="content-max">
          <div className="flex items-center gap-2 overflow-x-auto py-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-[#011633] text-white'
                    : 'text-[#656565] hover:bg-[#F8F8F8] hover:text-[#011633]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="content-max">
          <div key={activeFilter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                style={{ animationDelay: `${(i % 3) * 100}ms` }}
                onClick={() => setSelectedProject(p)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#011633]/90 via-[#011633]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FE5000] bg-[#FE5000]/20 px-3 py-1 rounded-full">
                    {p.type}
                  </span>
                  <h3 className="text-heading-md text-white mt-2">{p.title}</h3>
                  <p className="text-sm text-white/70 flex items-center gap-1 mt-1">
                    <MapPin size={14} /> {p.location}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-white text-sm font-semibold">
                    View Case Study <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#777777] text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#011633]">
        <div className="content-max text-center animate-scroll-reveal">
          <h2 className="text-display-md text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-white/70 max-w-[500px] mx-auto mb-8">
            Let&apos;s discuss your electrical needs and create a solution tailored to your requirements.
          </p>
          <Link to="/get-quote" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
