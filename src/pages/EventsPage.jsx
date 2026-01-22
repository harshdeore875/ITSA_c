import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Calendar, Users, MapPin } from 'lucide-react';
import eventsData from '../data/events.json';
import { getImagePlaceholder } from '../utils/helpers';

gsap.registerPlugin(ScrollTrigger);

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const allEvents = Object.values(eventsData).flat();
    if (selectedCategory === 'All') {
      setFilteredEvents(allEvents);
    } else {
      setFilteredEvents(allEvents.filter((e) => e.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.event-card-grid');
    if (!cards) return;

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
  }, [filteredEvents]);

  const categories = ['All', 'Technical', 'Career & Placement', 'Competitions', 'Social & Cultural', 'Industry Interaction'];

  return (
    <div ref={containerRef} className="w-full bg-navy">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our diverse range of technical events, workshops, competitions, and industry interactions.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-slate border-b border-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white font-semibold mb-6">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/50'
                    : 'bg-indigo-900/30 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No events found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="event-card-grid group rounded-2xl overflow-hidden bg-slate border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover-lift cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || getImagePlaceholder()}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-xs font-semibold rounded-full">
                        {event.category}
                      </span>
                      <span className="text-gray-400 text-xs">{event.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <button className="w-full py-2 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-indigo-500/30">
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedEvent.image || getImagePlaceholder()}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-xs font-semibold rounded-full">
                  {selectedEvent.category}
                </span>
                <span className="text-gray-400 text-sm">{selectedEvent.year}</span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{selectedEvent.title}</h2>

              <div className="space-y-3 mb-6 text-gray-300">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-indigo-400" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-indigo-400" />
                  <span>{selectedEvent.coordinators.join(', ')}</span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {selectedEvent.description}
              </p>

              <div className="flex gap-4">
                <button className="flex-1 py-3 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 font-semibold">
                  Register Now
                </button>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="flex-1 py-3 px-6 border-2 border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-all duration-300 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
