import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const ArmWrestlingPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const topSliderVideos = [
    { id: 1, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmBenderBattles/ArmBenderBattlesThumbnails.jpg', title: 'Arm Bender Battles', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/98ecdb0f-6e36-4f95-b3fc-478009537404/play_360p.mp4' },
    { id: 2, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmClashChronicles/ArmClashChroniclesThumbnails.jpg', title: 'Arm Clash Chronicles', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6ca5c577-79cd-499b-82ce-77349391b0b8/play_360p.mp4' },
    { id: 3, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmClashDynasty/ArmClashDynastyThumbnails.jpg', title: 'Arm Clash Dynasty', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c17fff03-c6e0-4cdd-ab5d-3659f2b13e3a/play_360p.mp4' },
    { id: 4, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmClashUniverse/ArmClashUniversThumbnails.jpg', title: 'Arm Clash Universe', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/406795bb-9093-4998-87ae-51dd48a0a58b/play_360p.mp4' },
    { id: 5, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmDominators/ArmDominatorsThumbnails.jpg', title: 'Arm Dominators', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6ef1f044-0286-470a-981c-dd15e299bf06/play_360p.mp4' },
    { id: 6, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmFuryLeague/ArmFuryLeagueThumbnails.jpg', title: 'Arm Fury League', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/52ec98d0-ef79-4dec-9fbd-3ca16a45bfd5/play_480p.mp4' },
    { id: 7, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmGritArena/ArmGritArenaThumbnails.jpg', title: 'Arm Grit Arena', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/2226d83c-0e2e-4660-90c7-71fa91b5f8f2/play_360p.mp4' }
  ];

  const gridVideos = [
    { id: 8, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmLockLegends/ArmLockLegendsThumbnails.jpg', title: 'Arm Lock Legends', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6ca5c577-79cd-499b-82ce-77349391b0b8/play_360p.mp4' },
    { id: 9, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmPowerSyndicate/ArmPowerSyndicateThumbnails.jpg', title: 'Arm Power Syndicate', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c17fff03-c6e0-4cdd-ab5d-3659f2b13e3a/play_360p.mp4' },
    { id: 10, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmRageArena/ArmRageArenaThumbnails.jpg', title: 'Arm Rage Arena', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/406795bb-9093-4998-87ae-51dd48a0a58b/play_360p.mp4' },
    { id: 11, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmSparksLeague/ArmSparksLeagueThumbnails.jpg', title: 'Arm Sparks League', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6ef1f044-0286-470a-981c-dd15e299bf06/play_360p.mp4' },
    { id: 12, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmTitanEmpire/ArmTitanEmpireThumbnails.jpg', title: 'Arm Titan Empire', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/52ec98d0-ef79-4dec-9fbd-3ca16a45bfd5/play_480p.mp4' },
    { id: 13, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmTitanShowdown/ArmTitanShowdownThumbnails.jpg', title: 'Arm Titan Showdown', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/2226d83c-0e2e-4660-90c7-71fa91b5f8f2/play_360p.mp4' },
    { id: 14, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmTitanTrials/ArmTitanTrialsThumbnails.jpg', title: 'Arm Titan Trials', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c57bb0bc-f159-4b2e-9f9e-3fcf4b17b72f/play_360p.mp4' },
    { id: 15, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmVoltageLeague/ArmVoltageLeagueThumbnails.jpg', title: 'Arm Voltage League', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c1b5c70f-52cd-4cd5-ad12-4ec5c73377b2/play_360p.mp4' },
    { id: 16, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmstormElite/ArmstormEliteThumbnails.jpg', title: 'Armstorm Elite', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/b78597cb-31cb-4516-9fe6-2dde945110be/play_480p.mp4' },
    { id: 17, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/BattleoftheGrip/BattleoftheGripThumbnails.jpg', title: 'Battle of the Grip', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0767d106-b3ae-4737-b01e-9711d29ea301/play_480p.mp4' },
    { id: 18, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/Bone-LockBattles/Bone-LockBattlesThumbnails.jpg', title: 'Bone-Lock Battles', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/820b3a7b-a262-465f-acd3-6c3e568c74e5/play_360p.mp4' },
    { id: 19, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ClashofForearms/ClashofForearmsThumbnails.jpg', title: 'Clash of Forearms', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ca51225e-a763-4de2-a0e2-a3b4413c0663/play_360p.mp4' },
    { id: 20, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ForearmFrenzy/ForearmFrenzyThumbnails.jpg', title: 'Forearm Frenzy', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/70ec6640-a185-442e-b2a5-96cc7965a0d5/play_360p.mp4' },
    { id: 21, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripCommanderCup/GripCommanderCupThumbnails.jpg', title: 'Grip Commander Cup', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a9895bff-356e-4415-932a-1ec4f0803a5a/play_360p.mp4' },
    { id: 22, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripForceEmpire/GripForceEmpireThumbnails.jpg', title: 'Grip Force Empire', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/56f056c4-8333-4b5f-bba4-88b18c2ed680/play_360p.mp4' },
    { id: 23, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripGladiators/GripGladiatorsThumbnails.jpg', title: 'Grip Gladiators', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/1ac4c026-8ba1-45b5-9bf5-348bf545addb/play_360p.mp4' }
  ];

  const hoverSliderVideos = [
    { id: 24, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripKingChampionship/GripKingChampionshipThumbnails.jpg', title: 'Grip King Championship', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/820b3a7b-a262-465f-acd3-6c3e568c74e5/play_360p.mp4' },
    { id: 25, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripMastersLeague/GripMastersLeagueThumbnails.jpg', title: 'Grip Masters League', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ca51225e-a763-4de2-a0e2-a3b4413c0663/play_360p.mp4' },
    { id: 26, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripRageCircuit/GripRageCircuitThumbnails.jpg', title: 'Grip Rage Circuit', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/70ec6640-a185-442e-b2a5-96cc7965a0d5/play_360p.mp4' },
    { id: 27, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripTitanShow/GripTitanShowThumbnails.jpg', title: 'Grip Titan Show', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a9895bff-356e-4415-932a-1ec4f0803a5a/play_360p.mp4' },
    { id: 28, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripVanguard/GripVanguardThumbnails.jpg', title: 'Grip Vanguard', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/56f056c4-8333-4b5f-bba4-88b18c2ed680/play_360p.mp4' },
    { id: 29, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripquakeBattles/GripquakeBattlesThumbnails.jpg', title: 'Gripquake Battles', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/1ac4c026-8ba1-45b5-9bf5-348bf545addb/play_360p.mp4' },
    { id: 30, thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripshockLeague/GripshockLeagueThumbnails.jpg', title: 'Gripshock League', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d893cefb-2d9a-400a-836a-50cb2dc147e0/play_360p.mp4' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topSliderVideos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topSliderVideos.length) % topSliderVideos.length);
  const nextHoverSlide = () => setHoverSlide((prev) => (prev + 1) % hoverSliderVideos.length);
  const prevHoverSlide = () => setHoverSlide((prev) => (prev - 1 + hoverSliderVideos.length) % hoverSliderVideos.length);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden pt-20 md:pt-24">
      {/* Section 1: Hero Banner + Slider */}
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(/ARMWRESTLING%E2%80%93FeaturedBattles.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="ARM WRESTLING – Featured Battles" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          
          {/* Slider */}
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
            
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            
            <div className="flex justify-center gap-2 mt-6">
              {topSliderVideos.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: 4x4 Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <AnimatedTitle title="Top Arm Wrestling Matches" className="font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {gridVideos.map((video) => (
            <div key={video.id} className="relative group cursor-pointer transform hover:scale-105 transition-transform" onClick={() => setSelectedVideo(video)}>
              <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-white" fill="white" />
              </div>
              <p className="text-gray-800 font-semibold mt-2">{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Promotional Banner */}
      <div className="relative bg-black py-16 md:py-20" style={{ backgroundImage: 'url(/ARMWRESTLING%E2%80%93FeaturedBattles.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedTitle title="Watch More Intense Arm Wrestling Battles" className="text-white mb-6 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          {/* <button className="bg-white hover:bg-gray-200 text-black font-general font-bold px-8 py-4 rounded-lg text-lg transition-all">
            Explore More
          </button> */}
        </div>
      </div>

      {/* Section 4: Hover Banner + Slider */}
      <div 
        className="relative bg-gray-900 py-16 md:py-24 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Click Here" className="text-white mb-8 font-zentry text-3xl md:text-6xl font-black text-center uppercase" />
          
          <div className={`transition-all duration-500 ${isHovered ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${hoverSlide * (100 / 3)}%)` }}>
                  {hoverSliderVideos.map((video) => (
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
              
              <button onClick={prevHoverSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full z-10">
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </button>
              <button onClick={nextHoverSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full z-10">
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </button>
              
              <div className="flex justify-center gap-2 mt-6">
                {hoverSliderVideos.map((_, idx) => (
                  <button key={idx} onClick={() => setHoverSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${hoverSlide === idx ? 'bg-white w-8' : 'bg-white/50'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
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
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArmWrestlingPage;
