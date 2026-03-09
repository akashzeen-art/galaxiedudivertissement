import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, X, Eye, Clock } from 'lucide-react'
import TiltCard from './TiltCard'
import AnimatedTitle from './AnimatedTitle'
import wrestlingVideo from '../assets/stock-footage-wrestling-match-slow-motion-suplex-in-ring.webm'

const VideoSliderSection = () => {
  const scrollRef = useRef(null)
  const [playingVideo, setPlayingVideo] = useState(null)
  const videos = [
    { id: 1, title: 'Arm Bender Battles', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmBenderBattles/ArmBenderBattlesThumbnails.jpg', duration: '5:42', views: '2.1M', category: 'Arm Wrestling', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/98ecdb0f-6e36-4f95-b3fc-478009537404/play_360p.mp4' },
    { id: 2, title: 'Arm Clash Chronicles', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmClashChronicles/ArmClashChroniclesThumbnails.jpg', duration: '8:15', views: '3.2M', category: 'Arm Wrestling', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6ca5c577-79cd-499b-82ce-77349391b0b8/play_360p.mp4' },
    { id: 3, title: 'Slap Fight Battle 1', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap1.jpg', duration: '7:30', views: '2.3M', category: 'Slap Fight', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b457eda-e09b-4433-b754-469c32b166c3/play_360p.mp4' },
    { id: 4, title: 'Slap Fight Battle 2', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap2.jpg', duration: '10:20', views: '1.8M', category: 'Slap Fight', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0c44792b-9f49-43ba-8fd3-7ef2786ec7b1/play_360p.mp4' },
    { id: 5, title: 'Roger Huerta vs Chad Hinton', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RogerHuertavsChadHinton.png', duration: '6:45', views: '4.1M', category: 'MMA Fight', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0506d21e-0595-42ad-b75e-0ffb7f177d4f/play_720p.mp4' },
    { id: 6, title: 'Rampage Jackson vs Joey Beltran', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RampageJacksonvsJoeyBeltran.png', duration: '12:30', views: '2.9M', category: 'MMA Fight', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/89883c94-0135-4030-ac72-960174d92372/play_720p.mp4' },
    { id: 7, title: 'Seokbae Kim VS Abolfazl Yaghoubijou', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/SeokbaeKimVSAbolfazlYaghoubijou.png', duration: '9:15', views: '1.5M', category: 'Taekwondo', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a8d14831-2458-47de-8edf-a08daf2bd167/play_720p.mp4' },
    { id: 8, title: 'Moscow 2017 World Taekwondo Grand Prix', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Moscow2017WorldTaekwondoGrandPrixSemifinal.png', duration: '11:00', views: '3.7M', category: 'Taekwondo', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/55c7f309-6549-4e29-85d3-a7d7f77853ab/play_720p.mp4' },
    { id: 9, title: 'Sasipradpa Gym vs Tung Lin Kun', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SasipradpaGymvsTungLinKun.png', duration: '8:45', views: '2.8M', category: 'Kickboxing', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/909baf12-777d-44b6-aaa7-d08a3369f6e1/play_720p.mp4' },
    { id: 10, title: 'Saen Sae Jitka vs Mikey Dating', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SaenSaeJitkavsMikeyDating.png', duration: '15:20', views: '5.2M', category: 'Kickboxing', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d92082aa-43ac-4c1b-90c1-e42306b7d438/play_720p.mp4' }
  ]

  const handlePlayVideo = (videoId) => setPlayingVideo(videoId)
  const handleCloseVideo = () => setPlayingVideo(null)

  return (
    <>
      <section className="py-8 w-full max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white pointer-events-none" />
        
        <div className="relative z-10">
          <AnimatedTitle
            title="FEATURED VIDEOS"
            className="font-zentry text-4xl md:text-4xl font-black text-black text-center mb-16 uppercase"
          />
          
          <div className="flex gap-6 overflow-x-auto snap-x scrollbar-hide pb-4">
            {videos.map((video, index) => (
              <TiltCard key={video.id}>
                <motion.div
                  className="min-w-[280px] bg-white/80 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-200/50 shadow-lg snap-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => handlePlayVideo(video.id)}
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                    
                    <div className="absolute top-3 left-3 bg-violet-300 text-white px-2 py-1 rounded text-xs font-bold">
                      {video.category}
                    </div>
                    
                    <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                    
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="bg-black rounded-full p-4">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-black font-semibold text-lg mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Eye className="w-4 h-4" />
                      {video.views} views
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {playingVideo && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseVideo}
        >
          <button
            onClick={handleCloseVideo}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <motion.div
            className="w-full max-w-5xl aspect-video"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              autoPlay
              controls
              controlsList="nodownload"
              className="w-full h-full rounded-2xl"
              src={videos.find(v => v.id === playingVideo)?.videoUrl}
            />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default VideoSliderSection
