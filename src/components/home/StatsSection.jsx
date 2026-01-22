import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import homeData from '../../data/home.json';

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const containerRef = useRef(null);
  const countersRef = useRef([]);
  const [stats,setstats] = useState(homeData.stats);
  
  useEffect(() => {
    const counters = countersRef.current;
    
    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.target);
      
      gsap.from(counter, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none none',
        },
        textContent: 0,
        duration: 2,
        ease: 'power3.out',
        snap: { textContent: 1 },
        onUpdate: function () {
          counter.textContent = Math.ceil(this.targets()[0].textContent);
        },
      });
    });
     
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [stats]);
   console.log("hello word");
  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-slate to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg">Academic Year 2024–25 </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
          
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-violet-900/20 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 text-center"
            >
              <div className="mb-4 text-5xl md:text-6xl font-bold gradient-text">
                <span>
                  {stat.number}
                </span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-300 font-medium group-hover:text-indigo-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
