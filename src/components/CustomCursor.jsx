import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const handleDocumentMouseEnter = () => setIsVisible(true);
    const handleDocumentMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleDocumentMouseEnter);
    document.addEventListener('mouseleave', handleDocumentMouseLeave);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleDocumentMouseEnter);
      document.removeEventListener('mouseleave', handleDocumentMouseLeave);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    isVisible && (
      <div
        className={`fixed top-0 left-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full pointer-events-none z-50 transition-all duration-200 ease-out ${
          isHovering ? 'w-8 h-8 opacity-50 cursor:none  ' : 'w-4 h-4'
        }`}
        style={{
          transform: `translate(${position.x - (isHovering ? 16 : 8)}px, ${position.y - (isHovering ? 16 : 8)}px)`,
          
        }}
      />
    )
  );
};

export default CustomCursor;