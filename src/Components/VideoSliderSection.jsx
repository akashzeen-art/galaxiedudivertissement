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
    { id: 1, title: 'Le running', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/i1.jpg', duration: '5:42', views: '2.1M', category: 'Comedy', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/v1.mp4' },
    { id: 2, title: 'Bande dessinée', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/i3.jpg', duration: '8:15', views: '3.2M', category: 'Comedy', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/v3.mp4' },
    { id: 3, title: 'Burger au barbecue', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/i4.jpg', duration: '7:30', views: '2.3M', category: 'Cooking', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/v4.mp4' },
    { id: 4, title: 'Lasagna Bolognese', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/i16.jpg', duration: '10:20', views: '1.8M', category: 'Cooking', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/v16.mp4' },
    { id: 5, title: 'Acne Routine', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i3.jpg', duration: '6:45', views: '4.1M', category: 'Fashion', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v3.mp4' },
    { id: 6, title: 'Tuto Turban Facile À Faire', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i2.jpg', duration: '12:30', views: '2.9M', category: 'Fashion', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v2.mp4' },
    { id: 7, title: 'Totally Spies Episode 1', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-11/i1.jpg', duration: '9:15', views: '1.5M', category: 'Cartoon', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-11/v1.mp4' },
    { id: 8, title: 'Totally Spies Episode 2', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-11/i2.jpg', duration: '11:00', views: '3.7M', category: 'Cartoon', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-11/v2.mp4' },
    { id: 9, title: 'Maquillage simple', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i8.jpg', duration: '8:45', views: '2.8M', category: 'Fashion', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v8.mp4' },
    { id: 10, title: 'Moroccan Tagine', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/i20.jpg', duration: '15:20', views: '5.2M', category: 'Cooking', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/v20.mp4' }
  ]

  const handlePlayVideo = (videoId) => setPlayingVideo(videoId)
  const handleCloseVideo = () => setPlayingVideo(null)

  return (
    <>
      <section className="py-8 w-full max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white pointer-events-none" />
        
        <div className="relative z-10">
          <AnimatedTitle
            title="VIDÉOS EN VEDETTE"
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
                      {video.views} vues
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
