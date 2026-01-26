import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Trophy, Star, Target } from 'lucide-react';
import achievementsData from '../data/achievements.json';

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsPage() {
  const containerRef = useRef(null);
  const [achievements] = useState(achievementsData.achievements);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('.achievement-section');
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

  const [timeline] = useState(achievementsData.timeline);

  return (
    <div ref={containerRef} className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 bg-white border-b-2 border-borderNeutral">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-textPrimary mb-6">
            Our <span className="gradient-heading-smooth">Achievements</span>
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl">
            Celebrating the accomplishments and milestones of ITSA members.
          </p>
        </div>
      </section>

      {/* Achievement Cards */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-50 border-b-2 border-borderNeutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="achievement-section group p-8 rounded-2xl bg-white border border-borderNeutral hover:border-primary/60 transition-all duration-300 hover-lift"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                  <Trophy size={24} className="text-white" />
                </div>
                <h3 className="text-textPrimary font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-textSecondary text-sm mb-4">{achievement.description}</p>
                <p className="text-secondary font-semibold text-sm">{achievement.award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Achievements Timeline */}
      <section className="py-20 bg-white relative overflow-hidden border-b-2 border-borderNeutral">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-textPrimary text-center mb-16">Notable Milestones</h2>

          <div className="space-y-8">
            {timeline.map((achievement, idx) => (
              <div
                key={idx}
                className="achievement-section group flex gap-8 items-start p-8 rounded-2xl bg-sectionBg border border-borderNeutral hover:border-primary/60 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">{achievement.date?.split(' ')[0]}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-textPrimary font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-textSecondary">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sectionBg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-textPrimary mb-6">Be Part of the Success Story</h2>
          <p className="text-xl text-textSecondary mb-8">
            Join ITSA and contribute to our growing list of achievements and innovations.
          </p>
          <button className="px-8 py-3 bg-btn-gradient text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold">
            Get Involved Today
          </button>
        </div>
      </section>
    </div>
  );
}
