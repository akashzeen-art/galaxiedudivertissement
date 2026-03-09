import React from 'react'
import { motion } from 'framer-motion'
import { Play, Zap, Calendar } from 'lucide-react';
import wrestlingVideo from '../assets/stock-footage-wrestling-match-slow-motion-suplex-in-ring.webm';

const HeroSection = ({ heroData }) => {
    return (
        <div className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden bg-white">
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-100"
                initial={{ scale: 1.1, filter: "blur(2px)" }}
                animate={{ 
                    scale: [1.1, 1.05, 1.1],
                    filter: ["blur(2px)", "blur(0px)", "blur(1px)"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <source src={wrestlingVideo} type="video/webm" />
            </motion.video>
            <motion.div 
                className="absolute inset-0 bg-white/10"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            ></motion.div>
            
            <div className="relative z-10 text-center px-4 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6">
                        <Zap className="w-4 h-4 text-black" />
                        <span className="text-black text-sm font-semibold">LIVE NOW</span>
                    </div>
                </motion.div>

                <motion.h1 
                    className="font-orbitron text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        textShadow: '0 0 20px rgb(214, 214, 214), 0 0 40px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)'
                    }}
                >
                    {heroData.title}
                </motion.h1>
                
                <motion.p 
                    className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {heroData.subtitle}
                </motion.p>
                
                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <motion.button 
                        className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play className="w-6 h-6 fill-white" />
                        {heroData.primaryCTA}
                    </motion.button>
                    
                    <motion.button 
                        className="bg-white hover:bg-gray-50 text-black px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Calendar className="w-6 h-6" />
                        {heroData.secondaryCTA}
                    </motion.button>
                </motion.div>
                
                <motion.div 
                    className="flex justify-center gap-2 mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection
