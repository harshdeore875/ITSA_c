import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import committeeData from '../data/committee.json';

gsap.registerPlugin(ScrollTrigger);

export default function CommitteePage() {
  const containerRef = useRef(null);
  
  // Extract data first, before any effects
  const authorities = committeeData.committee.authorities || [];
  const core_committee = committeeData.committee.core_committee || [];

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      const cards = containerRef.current?.querySelectorAll('.committee-card');
      if (!cards || cards.length === 0) return;

      cards.forEach((card, idx) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          delay: idx * 0.05,
        });
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [authorities.length, core_committee.length]);

  const CommitteeCard = ({ member, isAuthority = false }) => (
    <div className="committee-card group p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-violet-900/20 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
        <span className="text-white font-bold text-2xl opacity-30">Photo</span>
      </div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
        {member.name}
      </h3>
      <p className={`mb-2 font-semibold ${isAuthority ? 'text-indigo-400' : 'text-violet-400'}`}>
        {member.designation || member.role}
      </p>
      {member.year && <p className="text-gray-400 text-sm">{member.year}</p>}
    </div>
  );

  return (
    <div ref={containerRef} className="w-full bg-navy">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="gradient-text">Committee</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Meet the dedicated leaders and core committee members driving ITSA's mission.
          </p>
        </div>
      </section>

      {/* Authorities */}
      <section className="py-20 bg-slate relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Faculty & Authorities</h2>
          <p className="text-gray-400 mb-12">Leadership and guidance from the Department of Information Technology</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authorities && authorities.length > 0 ? (
              authorities.map((member) => (
                <CommitteeCard key={member.id} member={member} isAuthority={true} />
              ))
            ) : (
              <p className="text-gray-400 col-span-full">No authorities data available</p>
            )}
          </div>
        </div>
      </section>

      {/* Core Committee */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">ITSA Core Committee</h2>
          <p className="text-gray-400 mb-12">2024–25 Academic Year</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {core_committee && core_committee.length > 0 ? (
              core_committee.map((member) => (
                <CommitteeCard key={member.id} member={member} />
              ))
            ) : (
              <p className="text-gray-400 col-span-full">No committee members data available</p>
            )}
          </div>
        </div>
      </section>

      {/* About Committee */}
      <section className="py-20 bg-slate relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Leadership in Action</h2>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Our committee members work tirelessly to organize events, develop the community, and mentor fellow students. Each member brings unique skills and perspectives to drive ITSA forward.
              </p>
              <ul className="space-y-3">
                {['Strategic Planning', 'Event Management', 'Community Building', 'Mentorship'].map((role, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="text-gray-300">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-violet-900/30 border border-indigo-500/30">
              <p className="text-gray-300 text-lg leading-relaxed">
                &quot;The ITSA committee is composed of passionate students dedicated to creating meaningful learning experiences and fostering a culture of innovation and excellence.&quot;
              </p>
              <p className="text-indigo-400 font-semibold mt-4">— Department of Information Technology</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
