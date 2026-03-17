import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const B1 = 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24';
const B2 = 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-26';

const TITLES_24 = [
  "10 idées de coiffures plaquées sur un carré mi-long lisse",
  "4 Tuto Turban Facile À Faire",
  "Acne Routine",
  "Anti-Imperfections (Routine & Conseils)",
  "Cheveux longs (Routine)",
  "Chignon base traie au milieu [Tuto Coiffure]",
  "Cocooning de routine",
  "Comment faire une perruque facile & rapide",
  "Contouring rapide et pas cher",
  "Easy Eye Liner pour les nuls",
  "Éliminez correctement les faux ongles et prenez soin de vos ongles naturels",
  "Épiler ses sourcils",
  "Halloween Sugar Skull - Tuto Maquillage",
  "Hijab simple à réaliser (5 méthodes)",
  "Je coupe et refais mes cheveux SEUL",
  "Je me maquille UNIQUEMENT avec la trousse de ma sœur",
  "Je me tatoue les lèvres (Test du Rouge)",
  "Jolie compilation de maquillage pour les yeux",
  "La meilleure astuce pour un eyeliner",
  "Lápiz Labial Tutorial Compilación",
  "Le meilleur maquillage cheveux bouclés",
  "Le meilleur masque - DIY",
  "Les formes d'ongles sur capsules faux ongles",
  "Les meilleurs tutoriels de maquillage",
];

const TITLES_26 = [
  "Lisser cheveux avec un lisseur fer à l'",
  "Lisser ses Cheveux sans Chaleur",
  "Lisse toiles cheveux sans",
  "Maquillage Melanin - Transformation",
  "Maquillage nude pour peau foncée",
  "Maquillage pour les yeux pailleté violet classique",
  "Maquillage quotidien simple",
  "Maquillage simple",
  "Maquillage tutorial de Kylie Jenner",
  "Maquiller ses sourcils",
  "Masque détox (tous types de peau)",
  "Masque noir anti points noirs",
  "Meilleurs tutoriels de maquillage",
  "Mettre des faux cils [7 méthodes]",
  "Morning Routine Printemps",
  "Orange Makeup (Dégradé pour les débutants)",
  "Poser des faux cils pour les débutants",
  "Routine Soins Corps - Printemps Été",
  "Smokey eyes makeup (for beginner)",
  "Solide anti-frisottis qui favorise la pousse - DIY Shampoing",
  "Teint Unifié - Cacher ses imperfections",
  "Test Bigoudis Magique (Boucles sans chaleur)",
  "Tuto French Manucure simple (4 techniques)",
  "Tuto maquillage pour débutant (NAKED)",
  "Un bronzage parfait, naturel et lumineux",
  "Vernis semi-permanent et appliquer pour l'enlever",
];

const f24 = (n) => ({ id: `a${n}`, thumbnail: `${B1}/i${n}.jpg`, title: TITLES_24[n - 1], videoUrl: `${B1}/v${n}.mp4` });
const f26 = (n) => ({ id: `b${n}`, thumbnail: `${B2}/i${n}.jpg`, title: TITLES_26[n - 1], videoUrl: `${B2}/v${n}.mp4` });

const TaekwondoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState(0);

  const topSliderVideos = Array.from({ length: 7 }, (_, i) => f24(i + 1));
  const gridVideos = [
    ...Array.from({ length: 17 }, (_, i) => f24(i + 8)),
    ...Array.from({ length: 16 }, (_, i) => f26(i + 1)),
  ];
  const hoverSliderVideos = Array.from({ length: 7 }, (_, i) => f26(i + 20));

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topSliderVideos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topSliderVideos.length) % topSliderVideos.length);
  const nextHoverSlide = () => setHoverSlide((prev) => (prev + 1) % hoverSliderVideos.length);
  const prevHoverSlide = () => setHoverSlide((prev) => (prev - 1 + hoverSliderVideos.length) % hoverSliderVideos.length);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden pt-20 md:pt-24">
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i18.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="MODE – Vidéos en Vedette" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
                {topSliderVideos.map((video) => (
                  <div key={video.id} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(video)}>
                      <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full aspect-video object-cover" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 rounded-lg flex items-center justify-center transition-all">
                        <Play className="w-16 h-16 text-white" fill="white" />
                      </div>
                      <p className="text-white text-center mt-2 font-semibold h-12 line-clamp-2">{video.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full"><ChevronLeft className="w-6 h-6 text-white" /></button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full"><ChevronRight className="w-6 h-6 text-white" /></button>
            <div className="flex justify-center gap-2 mt-6">
              {topSliderVideos.map((_, idx) => (<button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/50'}`} />))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <AnimatedTitle title="Meilleures Vidéos Mode" className="font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {gridVideos.map((video) => (
            <div key={video.id} className="relative group cursor-pointer transform hover:scale-105 transition-transform" onClick={() => setSelectedVideo(video)}>
              <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><Play className="w-12 h-12 text-white" fill="white" /></div>
              <p className="text-gray-800 font-semibold mt-2 h-12 line-clamp-2">{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-black py-16 md:py-20" style={{ backgroundImage: 'url(https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedTitle title="Regardez Plus de Superbes Vidéos Mode" className="text-white mb-6 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
        </div>
      </div>

      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Plus de Vidéos Mode" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${hoverSlide * (100 / 3)}%)` }}>
                {hoverSliderVideos.map((video) => (
                  <div key={video.id} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(video)}>
                      <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full aspect-video object-cover" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 rounded-lg flex items-center justify-center transition-all"><Play className="w-16 h-16 text-white" fill="white" /></div>
                      <p className="text-white text-center mt-2 font-semibold">{video.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevHoverSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full"><ChevronLeft className="w-6 h-6 text-white" /></button>
            <button onClick={nextHoverSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full"><ChevronRight className="w-6 h-6 text-white" /></button>
            <div className="flex justify-center gap-2 mt-6">
              {hoverSliderVideos.map((_, idx) => (<button key={idx} onClick={() => setHoverSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${hoverSlide === idx ? 'bg-white w-8' : 'bg-white/50'}`} />))}
            </div>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            {selectedVideo.videoUrl ? (
              <video src={selectedVideo.videoUrl} controls controlsList="nodownload" autoPlay className="w-full aspect-video" />
            ) : (
              <img src={selectedVideo.thumbnail} alt={selectedVideo.title} className="w-full aspect-video object-cover" />
            )}
            <div className="p-4"><h3 className="text-xl font-bold text-white">{selectedVideo.title}</h3></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaekwondoPage;
