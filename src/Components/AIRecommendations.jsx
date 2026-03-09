import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Play, Calendar, Sparkles } from 'lucide-react'
import TiltCard from './TiltCard'
import AnimatedTitle from './AnimatedTitle'

const AIRecommendations = ({ recommendations }) => {
  return (
    <section className="py-8 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-4">
            <Brain className="w-5 h-5 text-black" />
            <span className="text-black font-semibold">AI POWERED</span>
          </div>
          <AnimatedTitle
            title="RECOMMENDED FOR YOU"
            className="font-zentry text-3xl md:text-4xl font-bold text-black uppercase"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((item, index) => (
            <TiltCard key={item.id}>
            <motion.div
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                
                <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  AI
                </div>
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-black rounded-full p-4">
                    {item.type === 'video' ? (
                      <Play className="w-8 h-8 text-white fill-white" />
                    ) : (
                      <Calendar className="w-8 h-8 text-white" />
                    )}
                  </div>
                </motion.div>
              </div>
              
              <div className="p-4">
                <h3 className="text-black font-semibold text-lg mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <div className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {item.aiTag}
                </div>
              </div>
            </motion.div>
            </TiltCard>
          ))}
        </div>
        
        {/* <div className="text-center mt-8">
          <motion.button
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Brain className="w-5 h-5" />
            Get More AI Recommendations
          </motion.button>
        </div> */}
      </motion.div>
    </section>
  )
}

export default AIRecommendations