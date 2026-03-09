import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => onComplete && onComplete(),
      });

      tl.to('.preloader-content', {
        opacity: 0,
        duration: 0.8,
      })
        .to('.preloader-logo', {
          scale: 0.4,
          y: -window.innerHeight / 2 + 50,
          duration: 1.5,
          ease: 'power2.inOut',
        }, '-=0.5')
        .to('.preloader', {
          opacity: 0,
          duration: 0.8,
        });
    }
  }, [progress, onComplete]);

  return (
    <div className="preloader fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="preloader-content text-center">
        <div className="preloader-logo mb-8">
          <img src="/55(2).png" alt="HardKnockTV" className="h-24 w-auto mx-auto" />
        </div>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white mt-4 font-general">{progress}%</p>
      </div>
    </div>
  );
};

export default Preloader;
