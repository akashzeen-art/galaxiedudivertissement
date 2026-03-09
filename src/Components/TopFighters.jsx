import React from 'react'
import { motion } from 'framer-motion'
import { Zap, TrendingUp } from 'lucide-react'
import TiltCard from './TiltCard'
import AnimatedTitle from './AnimatedTitle'

const TopFighters = ({ fighters }) => {
  return (
    <section className="py-8 w-full max-w-7xl mx-auto relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white pointer-events-none" />
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AnimatedTitle
          title="TOP FIGHTERS"
          className="font-zentry text-3xl md:text-4xl font-bold text-black mb-8 text-center uppercase"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {fighters.slice(0, 4).map((fighter, index) => (
            <TiltCard key={fighter.id}>
            <motion.div
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 5 }}
            >
              {fighter.trending && (
                <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  AI
                </div>
              )}
              
              <div className="relative mb-4">
                <img
                  src={fighter.image}
                  alt={fighter.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-gray-200 group-hover:border-gray-300 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gray-100/5 group-hover:bg-gray-200/5 transition-all duration-300"></div>
              </div>
              
              <h3 className="font-orbitron text-xl font-bold text-black mb-2">
                {fighter.name}
              </h3>
              
              <div className="text-gray-500 text-sm mb-4">
                <p>{fighter.weightClass}</p>
                <p>{fighter.country}</p>
                <p className="text-black font-semibold">{fighter.record}</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Power Rating</span>
                    <span className="text-black font-bold">{fighter.powerRating}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-black to-gray-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${fighter.powerRating}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">KO %</span>
                    <span className="text-black font-bold">{fighter.koPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${fighter.koPercentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default TopFighters