import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const SlapFightPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const topSliderVideos = [
    { id: 1, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap1.jpg', title: 'Slap Fight Battle 1', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b457eda-e09b-4433-b754-469c32b166c3/play_360p.mp4' },
    { id: 2, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap2.jpg', title: 'Slap Fight Battle 2', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0c44792b-9f49-43ba-8fd3-7ef2786ec7b1/play_360p.mp4' },
    { id: 3, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap3.jpg', title: 'Slap Fight Battle 3', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ad034e46-881e-4d5e-aa4d-dcde0927156f/play_240p.mp4' },
    { id: 4, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap4.jpg', title: 'Slap Fight Battle 4', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/faa02d51-0100-49a8-8626-63318d3f24c6/play_360p.mp4' },
    { id: 5, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap5.jpg', title: 'Slap Fight Battle 5', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f8030163-7c81-4f2a-a960-617f36638303/play_360p.mp4' },
    { id: 6, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap6.jpg', title: 'Slap Fight Battle 6', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/86a2ff3c-242c-4c8c-ba38-372920726272/play_360p.mp4' },
    { id: 7, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap7.jpg', title: 'Slap Fight Battle 7', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/dc34f7ab-a480-4ce5-b494-cbd0c2681acd/play_360p.mp4' }
  ];

  const gridVideos = [
    { id: 8, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap1.jpg', title: 'Top Slap Match 1', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b457eda-e09b-4433-b754-469c32b166c3/play_360p.mp4' },
    { id: 9, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap2.jpg', title: 'Top Slap Match 2', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0c44792b-9f49-43ba-8fd3-7ef2786ec7b1/play_360p.mp4' },
    { id: 10, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap3.jpg', title: 'Top Slap Match 3', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ad034e46-881e-4d5e-aa4d-dcde0927156f/play_240p.mp4' },
    { id: 11, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap4.jpg', title: 'Top Slap Match 4', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/faa02d51-0100-49a8-8626-63318d3f24c6/play_360p.mp4' },
    { id: 12, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap5.jpg', title: 'Top Slap Match 5', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f8030163-7c81-4f2a-a960-617f36638303/play_360p.mp4' },
    { id: 13, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap6.jpg', title: 'Top Slap Match 6', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/86a2ff3c-242c-4c8c-ba38-372920726272/play_360p.mp4' },
    { id: 14, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap7.jpg', title: 'Top Slap Match 7', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/dc34f7ab-a480-4ce5-b494-cbd0c2681acd/play_360p.mp4' },
    { id: 15, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap8.jpg', title: 'Top Slap Match 8', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/67378f39-1fa7-4696-a08c-2d104b6cf273/play_360p.mp4' },
    { id: 16, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap9.jpg', title: 'Top Slap Match 9', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3b177351-641c-4221-b757-43f4aa7eb8bb/play_360p.mp4' },
    { id: 17, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap10.jpg', title: 'Top Slap Match 10', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f695e071-d5e0-467c-8578-5216f13ca4e2/play_360p.mp4' },
    { id: 18, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap11.jpg', title: 'Top Slap Match 11', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/abe6220a-08df-4e5e-ac6b-122243821856/play_360p.mp4' },
    { id: 19, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap12.jpg', title: 'Top Slap Match 12', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/703dd30d-559a-4474-9f00-e73aa0689814/play_360p.mp4' },
    { id: 20, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap13.jpg', title: 'Top Slap Match 13', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d43d49ec-3494-46b4-b4b4-de5ad4f93f0d/play_360p.mp4' },
    { id: 21, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap14.jpg', title: 'Top Slap Match 14', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d124b923-23b7-4e5d-88fb-6a95cf54cf2a/play_360p.mp4' },
    { id: 22, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap15.jpg', title: 'Top Slap Match 15', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/465b8c1c-711e-4f8d-b96c-871affcb187e/play_360p.mp4' },
    { id: 23, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap16.jpg', title: 'Top Slap Match 16', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d02a11d1-2fb1-46fb-93f1-0d2c142b1840/play_360p.mp4' }
  ];

  const hoverSliderVideos = [
    { id: 24, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap12.jpg', title: 'More Slap Videos 1', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/703dd30d-559a-4474-9f00-e73aa0689814/play_360p.mp4' },
    { id: 25, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap13.jpg', title: 'More Slap Videos 2', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d43d49ec-3494-46b4-b4b4-de5ad4f93f0d/play_360p.mp4' },
    { id: 26, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap14.jpg', title: 'More Slap Videos 3', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d124b923-23b7-4e5d-88fb-6a95cf54cf2a/play_360p.mp4' },
    { id: 27, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap15.jpg', title: 'More Slap Videos 4', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/465b8c1c-711e-4f8d-b96c-871affcb187e/play_360p.mp4' },
    { id: 28, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap16.jpg', title: 'More Slap Videos 5', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d02a11d1-2fb1-46fb-93f1-0d2c142b1840/play_360p.mp4' },
    { id: 29, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap17.jpg', title: 'More Slap Videos 6', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/25fcc3f5-3e94-4d79-a3e3-552f926395e8/play_360p.mp4' },
    { id: 30, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap18.jpg', title: 'More Slap Videos 7', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/04a31990-6f35-461e-a001-fe299cb74df7/play_360p.mp4' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topSliderVideos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topSliderVideos.length) % topSliderVideos.length);
  const nextHoverSlide = () => setHoverSlide((prev) => (prev + 1) % hoverSliderVideos.length);
  const prevHoverSlide = () => setHoverSlide((prev) => (prev - 1 + hoverSliderVideos.length) % hoverSliderVideos.length);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden pt-20 md:pt-24">
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(/SLAPFIGHTFeaturedBattles.png?v=1)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="SLAP FIGHT – Featured Battles" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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
        <AnimatedTitle title="Top Slap Fight Matches" className="font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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

      <div className="relative bg-black py-16 md:py-20" style={{ backgroundImage: 'url(/SLAPFIGHTFeaturedBattles.png?v=1)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedTitle title="Watch More Intense Slap Fight Battles" className="text-white mb-6 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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

export default SlapFightPage;
