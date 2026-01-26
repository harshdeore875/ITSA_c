import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutData from '../data/about.json';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef(null);
  const [about,setabout]=useState(aboutData.about);
  

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('.about-section');
    if (sections) return;

    sections.forEach((section, idx) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: idx * 0.1,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 bg-white border-b-2 border-borderNeutral">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-textPrimary mb-6">
            About <span className="gradient-heading-smooth">ITSA</span>
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl">
            {about.vision}
          </p>
        </div>
      </section>

      {/* About Section 1 */}
      <section className="about-section py-20 px-4 bg-gradient-to-b from-blue-50 to-slate-50 relative overflow-visible min-h-max border-b-2 border-borderNeutral">
        {/* <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5" /> */}
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="min-h-full">
              <h2 className="text-4xl font-bold text-textPrimary mb-6">Who We Are</h2>
              <p className="text-textSecondary text-lg mb-4 leading-relaxed">
                {about.history.description}
              </p>
              <p className="text-textSecondary text-lg leading-relaxed">
                Our community comprises developers, designers, innovators, and leaders who collaborate to create exceptional learning experiences and meaningful projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 auto-rows-max">
              {about.values && about.values.map((value, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-borderNeutral hover:border-primary/60 transition-all duration-300 min-h-fit"
                >
                  <p className="text-textPrimary font-semibold text-center">{value.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-section py-20 px-4 bg-gradient-to-b from-white to-slate-50 relative overflow-visible min-h-max border-b-2 border-borderNeutral">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-textPrimary text-center mb-16">Our Vision & Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-8 auto-rows-max">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-sectionBg border border-borderNeutral min-h-fit">
              <h3 className="text-2xl font-bold gradient-heading-smooth mb-4">Vision</h3>
              <p className="text-textSecondary text-lg leading-relaxed mb-4">
                {about.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-sectionBg border border-borderNeutral min-h-fit">
              <h3 className="text-2xl font-bold gradient-heading-smooth mb-4">Mission</h3>
              <ul className="space-y-2">
                {about.mission && about.mission.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-textSecondary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-section py-20 px-4 bg-gradient-to-b from-slate-50 to-blue-50 relative overflow-visible min-h-max border-b-2 border-borderNeutral">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-textPrimary text-center mb-16">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8 auto-rows-max">
            {about.values && about.values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-borderNeutral hover:border-primary/60 transition-all duration-300 hover-lift min-h-fit"
              >
                <h3 className="text-2xl font-bold text-textPrimary mb-4">{value.title}</h3>
                <p className="text-textSecondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative overflow-visible min-h-max border-t-2 border-borderNeutral" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-bg-primary rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-textPrimary mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-textSecondary mb-8">
            Become part of a dynamic community dedicated to technology, innovation, and growth.
          </p>
          <button className="px-8 py-3 bg-btn-gradient text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}
