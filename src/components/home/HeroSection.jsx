import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import homeData from '../../data/home.json';

export default function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [hero] = useState(homeData.hero);

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      gsap.from(titleRef.current.children, {
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }

    // Animate subtitle
    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        delay: 0.4,
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
      });
    }

    // Scroll indicator animation
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-slate to-navy opacity-80" />
      
      {/* Animated background circles */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div ref={titleRef} className="mb-6 space-y-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-reveal">
            {hero.title.split('\n').map((line, idx) => (
              <span key={idx} className="text-reveal-line block text-white">{line}</span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl max-w-2xl mx-auto mt-10 mb-10">
          <span className="text-indigo-100 font-semibold">{hero.subtitle}</span>
        </p>

        {/* Description */}
        <p className="text-slate-400 text-base md:text-lg mb-12">
          {hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href={hero.ctaLink} className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 font-semibold inline-block">
            {hero.cta}
          </a>
          <button className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-all duration-300 font-semibold">
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex items-center justify-center">
            <ChevronDown size={20} className="text-indigo-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
