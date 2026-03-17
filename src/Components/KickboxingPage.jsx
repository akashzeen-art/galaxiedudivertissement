import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const KickboxingPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState(0);

  const topSliderVideos = [
    { id: 1, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SasipradpaGymvsTungLinKun.png', title: 'Sasipradpa Gym vs Tung Lin Kun', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/909baf12-777d-44b6-aaa7-d08a3369f6e1/play_720p.mp4' },
    { id: 2, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SaenSaeJitkavsMikeyDating.png', title: 'Saen Sae Jitka vs Mikey Dating', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d92082aa-43ac-4c1b-90c1-e42306b7d438/play_720p.mp4' },
    { id: 3, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PongpatvsChoMoi.png', title: 'Pongpat vs Cho Moi', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a6936466-05a7-4666-b389-feacb25889f3/play_720p.mp4' },
    { id: 4, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PachitChaiyasornvsSorinRoth.png', title: 'Pachit Chaiyasorn vs Sorin Roth', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cbe8f4f2-528e-4e54-a152-1a2d5ba420d9/play_720p.mp4' },
    { id: 5, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/NewDiamondvsMcNaskus.png', title: 'New Diamond vs McNaskus', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c74db6ad-ff47-4709-a519-d25781bd5ed4/play_720p.mp4' },
    { id: 6, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/MightyWarriorsvsNorris.png', title: 'Mighty Warriors vs Norris', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b9be665-b968-4c0a-ae17-21d0eda84826/play_720p.mp4' },
    { id: 7, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/KichaiVSSacho.png', title: 'Kichai VS Sacho', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39b0d5f6-ecab-4de0-9a10-200550cda509/play_720p.mp4' }
  ];

  const gridVideos = [
    { id: 8, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SasipradpaGymvsTungLinKun.png', title: 'Sasipradpa Gym vs Tung Lin Kun', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/909baf12-777d-44b6-aaa7-d08a3369f6e1/play_720p.mp4' },
    { id: 9, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SaenSaeJitkavsMikeyDating.png', title: 'Saen Sae Jitka vs Mikey Dating', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d92082aa-43ac-4c1b-90c1-e42306b7d438/play_720p.mp4' },
    { id: 10, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PongpatvsChoMoi.png', title: 'Pongpat vs Cho Moi', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a6936466-05a7-4666-b389-feacb25889f3/play_720p.mp4' },
    { id: 11, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PachitChaiyasornvsSorinRoth.png', title: 'Pachit Chaiyasorn vs Sorin Roth', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cbe8f4f2-528e-4e54-a152-1a2d5ba420d9/play_720p.mp4' },
    { id: 12, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/NewDiamondvsMcNaskus.png', title: 'New Diamond vs McNaskus', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c74db6ad-ff47-4709-a519-d25781bd5ed4/play_720p.mp4' },
    { id: 13, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/MightyWarriorsvsNorris.png', title: 'Mighty Warriors vs Norris', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b9be665-b968-4c0a-ae17-21d0eda84826/play_720p.mp4' },
    { id: 14, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/KichaiVSSacho.png', title: 'Kichai VS Sacho', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39b0d5f6-ecab-4de0-9a10-200550cda509/play_720p.mp4' },
    { id: 15, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/IronPilotAutoPartsvsSmurfs.png', title: 'Iron Pilot Auto Parts vs Smurfs', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/626c2c55-b761-4b49-b3e2-bd9e8b3c6ef3/play_720p.mp4' },
    { id: 16, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/GuccivsAlexandruKornazitsky.png', title: 'Gucci vs Alexandru Kornazitsky', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a815ea9e-4eb3-42ec-85e4-08d05154f437/play_720p.mp4' },
    { id: 17, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/DaniellevsDanielle.png', title: 'Danielle vs Danielle', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/50608e42-15a9-42b1-b085-874f89435ceb/play_720p.mp4' },
    { id: 18, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/CanDiamondsTiggerArunGymnasiumJoanHenrique.png', title: 'Can Diamonds Tigger Arun Gymnasium Joan Henrique', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3153a3e8-062c-418a-a016-1a0d5f1964f1/play_720p.mp4' },
    { id: 19, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/BlueSuwanPhetchPoolevsNelinO.png', title: 'Blue Suwan Phetch Poole vs Nelin O', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39429adb-ee10-43fd-9285-f4fe9583ad02/play_720p.mp4' },
    { id: 20, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/BlitzkriegTeachersvsBauDeJonoKochikov.png', title: 'Blitzkrieg Teachers vs Bau De Jono Kochikov', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ff6210eb-a940-4733-b7fa-7c23e02d7211/play_720p.mp4' },
    { id: 21, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/BigSwordRanatKhamvsIsaietMinami.png', title: 'Big Sword Ranat Kham vs Isaiet Minami', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a2757cb7-bd63-4e02-9596-54e5f8d88c4b/play_720p.mp4' },
    { id: 22, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/AStrangeExoticGymvsBryanDenis.png', title: 'A Strange Exotic Gym vs Bryan Denis', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f852c8c3-1511-471a-9521-876cf72f49a7/play_720p.mp4' },
    { id: 23, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SasipradpaGymvsTungLinKun.png', title: 'Sasipradpa Gym vs Tung Lin Kun', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f852c8c3-1511-471a-9521-876cf72f49a7/play_720p.mp4' }
  ];

  const hoverSliderVideos = [
    { id: 24, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/NewDiamondvsMcNaskus.png', title: 'New Diamond vs McNaskus', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d92082aa-43ac-4c1b-90c1-e42306b7d438/play_720p.mp4' },
    { id: 25, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/MightyWarriorsvsNorris.png', title: 'Mighty Warriors vs Norris', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a6936466-05a7-4666-b389-feacb25889f3/play_720p.mp4' },
    { id: 26, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/KichaiVSSacho.png', title: 'Kichai VS Sacho', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cbe8f4f2-528e-4e54-a152-1a2d5ba420d9/play_720p.mp4' },
    { id: 27, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/IronPilotAutoPartsvsSmurfs.png', title: 'Iron Pilot Auto Parts vs Smurfs', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c74db6ad-ff47-4709-a519-d25781bd5ed4/play_720p.mp4' },
    { id: 28, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/GuccivsAlexandruKornazitsky.png', title: 'Gucci vs Alexandru Kornazitsky', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b9be665-b968-4c0a-ae17-21d0eda84826/play_720p.mp4' },
    { id: 29, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/DaniellevsDanielle.png', title: 'Danielle vs Danielle', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39b0d5f6-ecab-4de0-9a10-200550cda509/play_720p.mp4' },
    { id: 30, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/CanDiamondsTiggerArunGymnasiumJoanHenrique.png', title: 'Can Diamonds Tigger Arun Gymnasium Joan Henrique', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/626c2c55-b761-4b49-b3e2-bd9e8b3c6ef3/play_720p.mp4' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topSliderVideos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topSliderVideos.length) % topSliderVideos.length);
  const nextHoverSlide = () => setHoverSlide((prev) => (prev + 1) % hoverSliderVideos.length);
  const prevHoverSlide = () => setHoverSlide((prev) => (prev - 1 + hoverSliderVideos.length) % hoverSliderVideos.length);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden pt-20 md:pt-24">
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(/KICKBOXINGFeaturedBattles.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="KICKBOXING – Featured Battles" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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
        <AnimatedTitle title="Top Kickboxing Matches" className="font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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

      <div className="relative bg-black py-16 md:py-20" style={{ backgroundImage: 'url(/KICKBOXINGFeaturedBattles.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedTitle title="Watch More Intense Kickboxing Battles" className="text-white mb-6 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          {/* <button className="bg-white hover:bg-gray-200 text-black font-general font-bold px-8 py-4 rounded-lg text-lg transition-all">Explore More</button> */}
        </div>
      </div>

      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="More Kickboxing Videos" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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

export default KickboxingPage;
