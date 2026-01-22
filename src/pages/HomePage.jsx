import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturedEventsSection from '../components/home/FeaturedEventsSection';
import AboutPreviewSection from '../components/home/AboutPreviewSection';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <AboutPreviewSection />
      <FeaturedEventsSection />
    </div>
  );
}
