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
    if (!sections) return;

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
    <div ref={containerRef} className="w-full bg-navy">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="gradient-text">ITSA</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {about.vision}
          </p>
        </div>
      </section>

      {/* About Section 1 */}
      <section className="about-section py-20 bg-slate relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                {about.history?.description}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our community comprises developers, designers, innovators, and leaders who collaborate to create exceptional learning experiences and meaningful projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {about.values && about.values.map((value, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/30 to-violet-900/30 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300"
                >
                  <p className="text-white font-semibold text-center">{value.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-section py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Vision & Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-violet-900/30 border border-indigo-500/30">
              <h3 className="text-2xl font-bold gradient-text mb-4">Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {about.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-violet-900/30 border border-indigo-500/30">
              <h3 className="text-2xl font-bold gradient-text mb-4">Mission</h3>
              <ul className="space-y-2">
                {about.mission && about.mission.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-section py-20 bg-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {about.values && about.values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-violet-900/20 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover-lift"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-navy via-slate to-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Become part of a dynamic community dedicated to technology, innovation, and growth.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 font-semibold">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}
