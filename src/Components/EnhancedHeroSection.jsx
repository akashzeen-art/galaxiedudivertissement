import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import wrestlingVideo from '../assets/stock-footage-wrestling-match-slow-motion-suplex-in-ring.webm';

gsap.registerPlugin(ScrollTrigger);

const EnhancedHeroSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Video frame morph animation
    gsap.to(video, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0%',
      scrollTrigger: {
        trigger: container,
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-blue-75">
      <video
  ref={videoRef}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover"
  style={{
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    borderRadius: '0%',
  }}
>
  <source
    src="https://api.ameora.fun/content/vas_cartoon/video/tomandjerryfr/LesGRANDESaventuresfantasydeTometJerry.mp4"
    type="video/mp4"
  />
  Votre navigateur ne supporte pas la balise vidéo.
</video>


      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 md:px-10">
        <h1 className="font-zentry text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 uppercase leading-tight">
          DÉCOUVREZ LE <br />
          <span className="text-blue-50">MEILLEUR DIVERTISSEMENT</span>
        </h1>
        <p className="font-circular-web text-lg md:text-xl text-blue-50 max-w-2xl mb-8">
          Explorez les meilleurs dessins animés, comédies, recettes de cuisine et tendances mode. Là où la créativité rencontre le divertissement.
        </p>
        <div className="flex gap-4">
          <button className="bg-violet-300 hover:bg-violet-300/80 text-white px-8 py-4 rounded-lg font-general uppercase font-bold transition-all duration-300 hover:scale-105">
            Explorer Maintenant
          </button>
          <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-lg font-general uppercase font-bold transition-all duration-300 hover:scale-105 border border-white/20">
            Voir les Catégories
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;
