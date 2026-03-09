import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, TrendingUp, TrendingDown } from 'lucide-react'
import AnimatedTitle from './AnimatedTitle'

const Rankings = ({ rankings }) => {
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
          title="FIGHTER RANKINGS"
          className="font-zentry text-3xl md:text-4xl font-bold text-black mb-8 text-center uppercase"
        />
        
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg">
          <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 border-b border-gray-200">
            <div className="font-orbitron font-bold text-black">RANK</div>
            <div className="font-orbitron font-bold text-black">FIGHTER</div>
            <div className="font-orbitron font-bold text-black">RECORD</div>
            <div className="font-orbitron font-bold text-black">KO %</div>
          </div>
          
          {rankings.map((fighter, index) => (
            <motion.div
              key={fighter.rank}
              className="grid grid-cols-4 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-all duration-300 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  fighter.rank <= 3 
                    ? 'bg-black text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {fighter.rank <= 3 ? (
                    <Trophy className="w-4 h-4" />
                  ) : (
                    fighter.rank
                  )}
                </div>
                {fighter.rank <= 3 && (
                  <span className="text-black font-bold">#{fighter.rank}</span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold transition-colors">
                  {fighter.fighter}
                </span>
                {index < 3 && (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                )}
              </div>
              
              <div className="text-black font-mono">
                {fighter.record}
              </div>
              
              <div className="flex items-center gap-2">
                <motion.span
                  className="text-black font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {fighter.koPercentage}%
                </motion.span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-black to-gray-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${fighter.koPercentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* <div className="text-center mt-6">
          <motion.button
            className="bg-violet-300 hover:bg-violet-300/80 text-white border-0 px-8 py-3 rounded-lg font-general uppercase font-bold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Rankings
          </motion.button>
        </div> */}
      </motion.div>
    </section>
  )
}

export default Rankings