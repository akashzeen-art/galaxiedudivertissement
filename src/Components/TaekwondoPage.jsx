import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const TaekwondoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const topSliderVideos = [
    {
      id: 1,
      thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/SeokbaeKimVSAbolfazlYaghoubijou.png',
      title: 'Seokbae Kim VS Abolfazl Yaghoubijou',
      videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a8d14831-2458-47de-8edf-a08daf2bd167/play_720p.mp4'
    },
    {
      id: 2,
      thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Moscow2017WorldTaekwondoGrandPrixSemifinal.png',
      title: 'Moscow 2017 World Taekwondo Grand Prix Semifinal',
      videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/55c7f309-6549-4e29-85d3-a7d7f77853ab/play_720p.mp4'
    },
    {
      id: 3,
      thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/MikhailArtamonovVSJesusTortosa.png',
      title: 'Mikhail Artamonov VS Jesus Tortosa',
      videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cad630b4-2546-48c5-aa0d-353d01a1ce08/play_720p.mp4'
    },
    {
      id: 4,
      thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Male58KgQUARTERFINALLeventTUNCATGERvLuca.png',
      title: 'Male 58Kg QUARTER FINAL Levent TUNCAT',
      videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3ce41f12-ac74-4bb0-9669-42bea5da56cd/play_720p.mp4'
    },
    {
      id: 5,
      thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMiladBEIGIVSMaksimKHRAMTCOV.png',
      title: 'M-80kg Milad BEIGI VS Maksim KHRAMTCOV',
      videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/bf18fc3f-d965-47b8-9790-b3f3bd1fd4e5/play_720p.mp4'
    },
    {
      id: 6,
      thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKhramtcovVSSeifEISSA.png',
      title: 'M-80kg Maksim Khramtcov VS Seif EISSA',
      videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/934c99f1-b6a0-4633-b25f-b2976a696e33/play_720p.mp4'
    },
    {
      id: 7,
      thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKHRAMTCOVVSHwanNAMGOONG.png',
      title: 'M-80kg Maksim KHRAMTCOV VS Hwan NAMGOONG',
      videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/9d9cfd28-5d52-43ca-b5bb-5f4087484bb4/play_720p.mp4'
    }
  ];

  const gridVideos = [
    { id: 8, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Male58KgQUARTERFINALLeventTUNCATGERvLuca.png', title: 'Male 58Kg QUARTER FINAL Levent TUNCAT', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39691b2e-fae9-463b-b262-c3c38b5040c1/play_720p.mp4' },
    { id: 9, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMiladBEIGIVSMaksimKHRAMTCOV.png', title: 'M-80kg Milad BEIGI VS Maksim KHRAMTCOV', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/179622e3-b123-49c1-9e1d-feb36e8623b0/play_720p.mp4' },
    { id: 10, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKhramtcovVSSeifEISSA.png', title: 'M-80kg Maksim Khramtcov VS Seif EISSA', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f7373e80-f6e0-4e4e-addb-9426c5f25d14/play_720p.mp4' },
    { id: 11, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKHRAMTCOVVSHwanNAMGOONG.png', title: 'M-80kg Maksim KHRAMTCOV VS Hwan NAMGOONG', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/2ae4ad95-c9db-4e7b-81bf-ef94c3662c4a/play_720p.mp4' },
    { id: 12, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgHwanNAMGOONGVSKeREN.png', title: 'M-80kg Hwan NAMGOONG VS Ke REN', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cc9bc6b8-f438-4659-830a-a088aae01d8a/play_720p.mp4' },
    { id: 13, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgHwanNAMGOONGVSAntonKOTKOV.png', title: 'M-80kg Hwan NAMGOONG VS Anton KOTKOV', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d3d72fdb-6aab-4fa4-8677-5ffcfb7b9250/play_720p.mp4' },
    { id: 14, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgCheickSallahCisseVSHwanNamgoong.png', title: 'M-80kg Cheick Sallah Cisse VS Hwan Namgoong', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/9a41b25d-0dc7-497d-a226-72a1d3040e4a/play_720p.mp4' },
    { id: 15, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgAaronCOOKVSAntonKOTKOV.png', title: 'M-80kg Aaron COOK VS Anton KOTKOV', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/54fd40e9-7bfc-4e5a-8732-243b0a478c7b/play_720p.mp4' },
    { id: 16, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M68kgDaehoonLeeVSBorisKrasnov.png', title: 'M-68kg Daehoon Lee VS Boris Krasnov', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8b0bf594-e990-499a-ade7-043bd2e52e8a/play_720p.mp4' },
    { id: 17, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AleksandraKOWALCZUKVSWiamDISLAM.png', title: 'Aleksandra KOWALCZUK VS Wiam DISLAM', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f568fb2e-b714-4f38-8413-d2ac6ff10aac/play_720p.mp4' },
    { id: 18, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AleksandraKOWALCZUKVSJackieGAL.png', title: 'Aleksandra KOWALCZUK VS Jackie GAL', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ab5a5e6e-9838-4d17-ac26-3b6f21a546ff/play_720p.mp4' },
    { id: 19, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AaronCOOKVSZhenWANG.png', title: 'Aaron COOK VS Zhen WANG', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6038eff1-a011-425b-9f6a-89a42ebf67c4/play_720p.mp4' },
    { id: 20, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/68kgSFDaehoonLEEvsAlexeyDENISENKO.png', title: '68kg SF Daehoon LEE vs Alexey DENISENKO', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a8d14831-2458-47de-8edf-a08daf2bd167/play_720p.mp4' },
    { id: 21, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/68kgSeokbaeKIMvsAbolfazlYAGHOUBJOUYBARI.png', title: '68kg Seokbae KIM vs Abolfazl YAGHOUBJOUYBARI', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/55c7f309-6549-4e29-85d3-a7d7f77853ab/play_720p.mp4' },
    { id: 22, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/68kgQFDaehoonLEEvsBorisKRASNOV.png', title: '68kg QF Daehoon LEE vs Boris KRASNOV', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cad630b4-2546-48c5-aa0d-353d01a1ce08/play_720p.mp4' },
    { id: 23, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/68kgBorisKRASNOVvsTemuujinPUREVJAV.png', title: '68kg Boris KRASNOV vs Temuujin PUREVJAV', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3ce41f12-ac74-4bb0-9669-42bea5da56cd/play_720p.mp4' }
  ];

  const hoverSliderVideos = [
    { id: 24, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/SeokbaeKimVSAbolfazlYaghoubijou.png', title: 'Seokbae Kim VS Abolfazl Yaghoubijou', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/bf18fc3f-d965-47b8-9790-b3f3bd1fd4e5/play_720p.mp4' },
    { id: 25, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Moscow2017WorldTaekwondoGrandPrixSemifinal.png', title: 'Moscow 2017 World Taekwondo Grand Prix Semifinal', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/934c99f1-b6a0-4633-b25f-b2976a696e33/play_720p.mp4' },
    { id: 26, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/MikhailArtamonovVSJesusTortosa.png', title: 'Mikhail Artamonov VS Jesus Tortosa', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/9d9cfd28-5d52-43ca-b5bb-5f4087484bb4/play_720p.mp4' },
    { id: 27, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Male58KgQUARTERFINALLeventTUNCATGERvLuca.png', title: 'Male 58Kg QUARTER FINAL Levent TUNCAT', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39691b2e-fae9-463b-b262-c3c38b5040c1/play_720p.mp4' },
    { id: 28, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMiladBEIGIVSMaksimKHRAMTCOV.png', title: 'M-80kg Milad BEIGI VS Maksim KHRAMTCOV', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/179622e3-b123-49c1-9e1d-feb36e8623b0/play_720p.mp4' },
    { id: 29, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKhramtcovVSSeifEISSA.png', title: 'M-80kg Maksim Khramtcov VS Seif EISSA', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f7373e80-f6e0-4e4e-addb-9426c5f25d14/play_720p.mp4' },
    { id: 30, thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKHRAMTCOVVSHwanNAMGOONG.png', title: 'M-80kg Maksim KHRAMTCOV VS Hwan NAMGOONG', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/2ae4ad95-c9db-4e7b-81bf-ef94c3662c4a/play_720p.mp4' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topSliderVideos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topSliderVideos.length) % topSliderVideos.length);
  const nextHoverSlide = () => setHoverSlide((prev) => (prev + 1) % hoverSliderVideos.length);
  const prevHoverSlide = () => setHoverSlide((prev) => (prev - 1 + hoverSliderVideos.length) % hoverSliderVideos.length);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden pt-20 md:pt-24">
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(/TAEKWONDOFeaturedBattles.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="TAEKWONDO – Featured Battles" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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
        <AnimatedTitle title="Top Taekwondo Matches" className="font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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

      <div className="relative bg-black py-16 md:py-20" style={{ backgroundImage: 'url(/TAEKWONDOFeaturedBattles.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedTitle title="Watch More Intense Taekwondo Battles" className="text-white mb-6 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
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

export default TaekwondoPage;
