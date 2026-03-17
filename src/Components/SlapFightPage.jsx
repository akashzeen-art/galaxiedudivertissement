import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const BASE = 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50';
const TITLES = [
  "Le running - Ce que tu penses quand..",
  "Quand ton gosse n'est pas rentable",
  "Bande dessinée",
  "Blague Miroir",
  "Bureau des Plaintes, Harry Potter - Lucien Maine",
  "Bureau des Plaintes - Spécial Halloween",
  "COVID - Les masques",
  "COVID - Premier BBQ",
  "Effet Papillon",
  "Emoji",
  "Honnête - L'entretien d'embauche",
  "Jean Michel Bruitage",
  "Jeff Panacloc et Jean-Marc Avec Mimie Mathy Live",
  "L'enfance",
  "L'homme moderne et les inventions",
  "La vérité",
  "Le rap de Gaspard et Balthazar",
  "Le Bon L'Aveugle et le Racisme",
  "Le Bon Prénom",
  "Le don du Lang Urbain [comédie debout]",
  "Le Roi Lion - L'amour brille sous les étoiles",
  "Les Candidats les Plus WTF (Jeux TV)",
  "Le secret de la réussite à l'école",
  "Les gens avec qui ne pas...",
  "Les hommes",
  "Les mémés s'éclatent",
  "Les phrases à ne pas dire à ton ado",
  "Les phrases honnêtes à Noël",
  "Les Réponses de Ouf des Enfants (TV)",
  "Le Surveillant du Bac qu'tu [Rêves d'Avoir]",
  "Ma chanteuse préférée [Kev Adams comédie debout]",
  "Massothérapeute",
  "Princesse VS Princesse",
  "Pub Ok Google",
  "Quand ils font une connerie",
  "Quand le coronavirus a ruiné ta vie",
  "Quand on est Mario et Luigi",
  "Quand on fait du camping",
  "Quand t'as trop peur du coronavirus",
  "Salle d'attente (Ce que tu penses quand)",
  "Se remettre avec son [Laura Domenge comédie debout]",
  "Serveur VS Client",
  "Si Doctissimo était un vrai docteur",
  "Si on traitait nos hommes comme des vêtements",
  "Sketch Point de presse sur la COVID-19",
  "Ski 1800",
  "Top 10 des trucs qui n'arrivent qu'à la campagne",
  "Top 20 des pires voisins pendant un spectacle",
  "Vérification de Sécurité",
  "Vieux Rap VS Nouveau Rap",
];
const v = (n) => ({ id: n, thumbnail: `${BASE}/i${n}.jpg`, title: TITLES[n - 1], videoUrl: `${BASE}/v${n}.mp4` });

const SlapFightPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState(0);

  const topSliderVideos = Array.from({ length: 7 }, (_, i) => v(i + 1));
  const gridVideos = Array.from({ length: 36 }, (_, i) => v(i + 8));
  const hoverSliderVideos = Array.from({ length: 7 }, (_, i) => v(i + 44));

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topSliderVideos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topSliderVideos.length) % topSliderVideos.length);
  const nextHoverSlide = () => setHoverSlide((prev) => (prev + 1) % hoverSliderVideos.length);
  const prevHoverSlide = () => setHoverSlide((prev) => (prev - 1 + hoverSliderVideos.length) % hoverSliderVideos.length);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden pt-20 md:pt-24">
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/i10.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="COMÉDIE – Vidéos en Vedette" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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
                      <p className="text-white text-center mt-2 font-semibold">{video.title}</p>
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
        <AnimatedTitle title="Meilleures Vidéos Comédie" className="font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {gridVideos.map((video) => (
            <div key={video.id} className="relative group cursor-pointer transform hover:scale-105 transition-transform" onClick={() => setSelectedVideo(video)}>
              <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><Play className="w-12 h-12 text-white" fill="white" /></div>
              <p className="text-gray-800 font-semibold mt-2">{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-black py-16 md:py-20" style={{ backgroundImage: 'url(https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/i22.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedTitle title="Regardez Plus de Vidéos Comédie Hilarantes" className="text-white mb-6 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
        </div>
      </div>

      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Plus de Vidéos Comédie" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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

export default SlapFightPage;
