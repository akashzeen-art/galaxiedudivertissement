import React from 'react'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import TiltCard from './TiltCard'
import AnimatedTitle from './AnimatedTitle'

const NewsSection = ({ news }) => {
  return (
    <section className="py-8 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AnimatedTitle
          title="NEWS & UPDATES"
          className="font-zentry text-3xl md:text-4xl font-bold text-black mb-8 text-center uppercase"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <TiltCard key={article.id}>
            <motion.div
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-black font-bold text-xl mb-3 line-clamp-2 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {article.summary}
                </p>
                
                <motion.button
                  className="flex items-center gap-2 text-black font-semibold transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
            </TiltCard>
          ))}
        </div>
        
        {/* <div className="text-center mt-8">
          <motion.button
            className="bg-gray-100 hover:bg-black text-gray-700 hover:text-white border border-gray-200 hover:border-black px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All News
          </motion.button>
        </div> */}
      </motion.div>
    </section>
  )
}

export default NewsSection