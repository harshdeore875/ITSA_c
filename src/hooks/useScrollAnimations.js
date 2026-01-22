import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (selector = '.scroll-reveal') => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(selector);
    if (!elements) return;

    elements.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector]);

  return containerRef;
};

export const useParallax = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'center center',
          scrub: 1,
          markers: false,
        },
        y: -100,
        opacity: 1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector]);
};

export const useTextReveal = (ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const textElements = ref.current.querySelectorAll('.text-reveal-line');
    if (textElements.length === 0) return;

    gsap.from(textElements, {
      duration: 0.8,
      y: '100%',
      stagger: 0.05,
      ease: 'power3.out',
    });
  }, [ref]);
};

export const animateCounter = (element, target, duration = 2) => {
  const increment = target / (duration * 60);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 1000 / 60);
};
