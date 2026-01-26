import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';
import homeData from '../../data/home.json';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreviewSection() {
  const containerRef = useRef(null);
  const aboutPreview = homeData.aboutPreview || { description: '', points: [] };

  useEffect(() => {
    // Add small delay to ensure DOM is rendered
    const timeout = setTimeout(() => {
      if (!containerRef.current) return;

      const trigger = gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
      });

      return () => {
        trigger.scrollTrigger?.kill();
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-r from-blue-50 to-slate-50 relative overflow-hidden border-b-2 border-borderNeutral">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-secondary" />
              <span className="text-secondary font-semibold text-sm">ABOUT ITSA</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6 leading-tight">
              Empowering the <span className="gradient-heading-smooth">Next Generation</span> of Tech Leaders
            </h2>

            <p className="text-textSecondary text-lg mb-6 leading-relaxed">
              {aboutPreview.description}
            </p>

            <div className="space-y-4 mb-8">
              {aboutPreview.points.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <p className="text-textPrimary">{item}</p>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-btn-gradient text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold">
              Explore ITSA
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 border border-borderNeutral rounded-2xl" />
            
            {/* Animated grid */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary/60 transition-all duration-300"
                    style={{
                      animation: `float ${3 + item * 0.2}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Glowing elements */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-primary rounded-full filter blur-2xl opacity-20" />
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-secondary rounded-full filter blur-2xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
