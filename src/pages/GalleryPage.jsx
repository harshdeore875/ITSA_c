import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';
import galleryData from '../data/gallery.json';
import { getImagePlaceholder } from '../utils/helpers';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState('2024-25');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!selectedYear || !galleryData[selectedYear]) {
      setFilteredImages([]);
      return;
    }

    if (selectedCategory) {
      setFilteredImages(galleryData[selectedYear][selectedCategory] || []);
    } else {
      const allImages = Object.values(galleryData[selectedYear]).flat();
      setFilteredImages(allImages);
    }
  }, [selectedYear, selectedCategory]);

  useEffect(() => {
    const images = containerRef.current?.querySelectorAll('.gallery-item');
    if (!images) return;

    images.forEach((img, idx) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top center+=100',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: idx * 0.05,
      });
    });
  }, [filteredImages]);

  const years = Object.keys(galleryData);
  const categories = selectedYear ? Object.keys(galleryData[selectedYear] || {}) : [];

  return (
    <div ref={containerRef} className="w-full bg-navy">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore moments from our events, competitions, and community activities throughout the years.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-slate border-b border-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Year Selection */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Select Year</h3>
            <div className="flex flex-wrap gap-3">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setSelectedCategory(null);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    selectedYear === year
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/50'
                      : 'bg-indigo-900/30 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400/60'
                  }`}
                >
                  {year === '2024-25' ? '2024–25' : '2023–24'}
                </button>
              ))}
            </div>
          </div>

          {/* Category Selection */}
          {categories.length > 0 && (
            <div>
              <h3 className="text-white font-semibold mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    selectedCategory === null
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/50'
                      : 'bg-indigo-900/30 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400/60'
                  }`}
                >
                  All
                </button>
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
          )}
        </div>
      </section>

      {/* Gallery Grid (Masonry Layout) */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No images found in this category.</p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="gallery-item group relative overflow-hidden rounded-2xl break-inside-avoid cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-indigo-900/30 hover:border-indigo-400/60 transition-all duration-300">
                    <img
                      src={image.src || getImagePlaceholder()}
                      alt={image.alt}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn size={32} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 p-2 bg-black/40 rounded-lg hover:bg-black/60 transition-colors"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.src || getImagePlaceholder()}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-2xl"
            />
            <p className="text-gray-300 text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
