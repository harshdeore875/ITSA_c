import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import homeData from '../../data/home.json';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedEventsSection() {
  const containerRef = useRef(null);
  const featuredEvents = homeData.featuredEvents || [];

  useEffect(() => {
    // Add small delay to ensure DOM is rendered
    const timeout = setTimeout(() => {
      const cards = containerRef.current?.querySelectorAll('.event-card');
      if (!cards || cards.length === 0) return;

      const triggers = [];
      cards.forEach((card, idx) => {
        const trigger = gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: idx * 0.1,
        });
        triggers.push(trigger.scrollTrigger);
      });

      return () => {
        triggers.forEach((t) => t?.kill());
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white relative overflow-hidden border-b-2 border-borderNeutral">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Featured <span className="gradient-heading-smooth">Events</span>
          </h2>
          <p className="text-textSecondary text-lg">Discover our most exciting upcoming events </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents && featuredEvents.length > 0 ? (
            featuredEvents.map((event,ind) => (
            <div
              key={event.id}
              className="event-card group rounded-2xl overflow-hidden bg-white border border-borderNeutral hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                    {event.category}
                  </span>
                  <span className="text-textSecondary text-xs">{event.date}</span>
                </div>

                <h3 className="text-xl font-bold text-textPrimary mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <button className="w-full py-2 px-4 bg-btn-gradient text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>
            ))
          ) : (
            <p className="text-textSecondary col-span-full text-center">No events available</p>
          )}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-300 font-semibold">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}
