import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.animated-word');

    gsap.fromTo(
      words,
      {
        opacity: 0,
        rotateY: 60,
        rotateX: -40,
        z: -60,
        y: 51,
        x: 10,
      },
      {
        opacity: 1,
        rotateY: 0,
        rotateX: 0,
        z: 0,
        y: 0,
        x: 0,
        stagger: 0.02,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const words = title.split(' ');

  return (
    <div ref={containerRef} className={`${className}`} style={{ perspective: '500px' }}>
      {words.map((word, index) => (
        <span
          key={index}
          className="animated-word inline-block mr-2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
