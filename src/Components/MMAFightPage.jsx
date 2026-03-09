import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const MMAFightPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const topSliderVideos = [
    { id: 1, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RogerHuertavsChadHinton.png', title: 'Roger Huerta vs Chad Hinton', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0506d21e-0595-42ad-b75e-0ffb7f177d4f/play_720p.mp4' },
    { id: 2, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RampageJacksonvsJoeyBeltran.png', title: 'Rampage Jackson vs Joey Beltran', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/89883c94-0135-4030-ac72-960174d92372/play_720p.mp4' },
    { id: 3, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PhilDavisvsFrancisCarmont.png', title: 'Phil Davis vs Francis Carmont', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/9a138d03-c6c0-4ee9-986f-893444a0cf70/play_720p.mp4' },
    { id: 4, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsRoryMacDonald.png', title: 'Paul Daley vs Rory MacDonald', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8b8ac3ed-221d-44b8-83d4-6faaecc0857d/play_720p.mp4' },
    { id: 5, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsRomarioManoeldaSilva.png', title: 'Paul Daley vs Romario Manoel da Silva', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8b2cb0c8-8f1c-447c-9d90-aec351f4c67c/play_720p.mp4' },
    { id: 6, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsBrennanWard.png', title: 'Paul Daley vs Brennan Ward', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/e0bb630e-6a38-4b1c-a830-08f619746c35/play_720p.mp4' },
    { id: 7, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PatrickyPitbullvsRyanCouture.png', title: 'Patricky Pitbull vs Ryan Couture', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ca0126aa-94c1-4926-b37d-9f33aab2a805/play_720p.mp4' }
  ];

  const gridVideos = [
    { id: 8, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PatrickyPitbullvsJoshThomson.png', title: 'Patricky Pitbull vs Josh Thomson', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a0951b01-2c78-4047-90ef-f6a7508c60b7/play_720p.mp4' },
    { id: 9, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/NoadLahatvsScottCleve.png', title: 'Noad Lahat vs Scott Cleve', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/b4182ba5-39fc-4bc5-8dc7-54df9d1a1bd8/play_720p.mp4' },
    { id: 10, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/MattMitrionevsCarlSeumanutafa.png', title: 'Matt Mitrione vs Carl Seumanutafa', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/41468e3e-a80e-4e45-be67-71dfd3114d84/play_720p.mp4' },
    { id: 11, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/LeiMacFarlanevsEmilyDucote.png', title: 'Lei MacFarlane vs Emily Ducote', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c879b40e-2ef9-4947-80e6-870a741aa29c/play_720p.mp4' },
    { id: 12, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JuliaBuddvsArleneBlencowe.png', title: 'Julia Budd vs Arlene Blencowe', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/50b54767-c992-4858-a8a8-5e4cc0c3e579/play_720p.mp4' },
    { id: 13, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JohnSaltervsBrandonHalsey.png', title: 'John Salter vs Brandon Halsey', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8149ea95-b891-44be-9ee7-1bd8bc41a0b7/play_720p.mp4' },
    { id: 14, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JoeWarrenvsJoeSoto.png', title: 'Joe Warren vs Joe Soto', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c2ef7a20-42f4-4a26-b4a6-19cb9a7fefcd/play_720p.mp4' },
    { id: 15, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JavyAyalavsRaphaelButler.png', title: 'Javy Ayala vs Raphael Butler', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ec14be76-3315-4492-80ff-00196c9b7554/play_720p.mp4' },
    { id: 16, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JamesGallaghervsAnthonyTaylor.png', title: 'James Gallagher vs Anthony Taylor', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/066551b6-aa7f-4413-8e77-e4373250d545/play_720p.mp4' },
    { id: 17, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/GeorgiKarakhanyanvsBubbaJenkins.png', title: 'Georgi Karakhanyan vs Bubba Jenkins', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/e0aea8d8-7357-43e6-a7af-6c26e22e49f7/play_720p.mp4' },
    { id: 18, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/DouglasLimavsBenSaunders.png', title: 'Douglas Lima vs Ben Saunders', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/201c3be3-4473-46bf-bf15-3aec44883d0b/play_720p.mp4' },
    { id: 19, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/DerekCamposvsBrandonGirtz3.png', title: 'Derek Campos vs Brandon Girtz 3', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/b9764815-1ec9-4a7f-9579-31660a95b0b5/play_720p.mp4' },
    { id: 20, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/DeniseKielholtzvsJessicaMiddleton.png', title: 'Denise Kielholtz vs Jessica Middleton', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d3cf506b-f378-40c2-982a-4aa6e1b95781/play_720p.mp4' },
    { id: 21, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/ChinzoMachidavsMarioNavarro.png', title: 'Chinzo Machida vs Mario Navarro', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8a0961e0-d365-4b0f-be9b-1abb88fda42e/play_720p.mp4' },
    { id: 22, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/BrennanWardvsDennisOlson.png', title: 'Brennan Ward vs Dennis Olson', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/e2d9064c-bd94-4b4e-b82b-582ad7e2618b/play_720p.mp4' },
    { id: 23, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/AlexanderShlemenkovsKendallGrove.png', title: 'Alexander Shlemenko vs Kendall Grove', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/50232254-5402-4a15-8f07-74d53605ecee/play_720p.mp4' }
  ];

  const hoverSliderVideos = [
    { id: 24, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/AlejandraLaravsLenaOvchynnikova.png', title: 'Alejandra Lara vs Lena Ovchynnikova', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/88c841d6-ad03-4a6d-923f-bd789b2753c7/play_720p.mp4' },
    { id: 25, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/AaronPicovsJustinLinn.png', title: 'Aaron Pico vs Justin Linn', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/43f8690d-d968-4e01-9193-aeb0fd42af67/play_720p.mp4' },
    { id: 26, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RogerHuertavsChadHinton.png', title: 'Roger Huerta vs Chad Hinton', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c879b40e-2ef9-4947-80e6-870a741aa29c/play_720p.mp4' },
    { id: 27, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RampageJacksonvsJoeyBeltran.png', title: 'Rampage Jackson vs Joey Beltran', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/50b54767-c992-4858-a8a8-5e4cc0c3e579/play_720p.mp4' },
    { id: 28, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PhilDavisvsFrancisCarmont.png', title: 'Phil Davis vs Francis Carmont', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8149ea95-b891-44be-9ee7-1bd8bc41a0b7/play_720p.mp4' },
    { id: 29, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsRoryMacDonald.png', title: 'Paul Daley vs Rory MacDonald', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c2ef7a20-42f4-4a26-b4a6-19cb9a7fefcd/play_720p.mp4' },
    { id: 30, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsRomarioManoeldaSilva.png', title: 'Paul Daley vs Romario Manoel da Silva', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ec14be76-3315-4492-80ff-00196c9b7554/play_720p.mp4' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topSliderVideos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topSliderVideos.length) % topSliderVideos.length);
  const nextHoverSlide = () => setHoverSlide((prev) => (prev + 1) % hoverSliderVideos.length);
  const prevHoverSlide = () => setHoverSlide((prev) => (prev - 1 + hoverSliderVideos.length) % hoverSliderVideos.length);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden pt-20 md:pt-24">
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(/MMAFIGHTFeaturedBattles.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="MMA FIGHT – Featured Battles" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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
        <AnimatedTitle title="Top MMA Fight Matches" className="font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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

      <div className="relative bg-black py-16 md:py-20" style={{ backgroundImage: 'url(/MMAFIGHTFeaturedBattles.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedTitle title="Watch More Intense MMA Fight Battles" className="text-white mb-6 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          {/* <button className="bg-white hover:bg-gray-200 text-black font-general font-bold px-8 py-4 rounded-lg text-lg transition-all">Explore More</button> */}
        </div>
      </div>

      <div className="relative bg-gray-900 py-16 md:py-24 transition-all duration-500" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => setIsHovered(!isHovered)}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Click Here" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <div className={`transition-all duration-500 ${isHovered ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
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

export default MMAFightPage;
