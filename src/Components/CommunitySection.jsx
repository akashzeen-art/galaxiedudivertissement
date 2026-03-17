import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, ThumbsUp, MessageCircle, TrendingUp } from 'lucide-react'

const CommunitySection = () => {
  const [selectedPoll, setSelectedPoll] = useState(null)
  const [reactions, setReactions] = useState({
    fire: 1247,
    punch: 892,
    crown: 634
  })

  const handlePollVote = (option) => {
    setSelectedPoll(option)
  }

  const handleReaction = (type) => {
    setReactions(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }))
  }

  return (
    <section className="py-8 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-black mb-8 text-center">
          ESPACE <span className="text-gray-600">FANS</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Poll Section */}
          <motion.div
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-black" />
              <h3 className="font-orbitron text-xl font-bold text-black">Sondage Communautaire</h3>
            </div>
            
            <h4 className="text-black text-lg mb-6">Quelle est votre catégorie préférée ?</h4>
            
            <div className="space-y-3">
              {[
                { name: 'CARTOON', percentage: 45, votes: 2847 },
                { name: 'COMEDY', percentage: 35, votes: 2213 },
                { name: 'COOKING', percentage: 20, votes: 1264 }
              ].map((fighter, index) => (
                <motion.button
                  key={fighter.name}
                  onClick={() => handlePollVote(fighter.name)}
                  className={`w-full p-4 rounded-lg border transition-all duration-300 ${
                    selectedPoll === fighter.name
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-50 border-gray-200 text-black hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{fighter.name}</span>
                    <span className="text-sm">{fighter.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-black h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${fighter.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{fighter.votes} votes</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Fan Reactions */}
          <motion.div
            className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-red-500/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <h3 className="font-orbitron text-xl font-bold text-white">Réactions en Direct</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-around">
                {[
                  { emoji: '🔥', label: 'Feu', count: reactions.fire, type: 'fire' },
                  { emoji: '👊', label: 'Punch', count: reactions.punch, type: 'punch' },
                  { emoji: '👑', label: 'Couronne', count: reactions.crown, type: 'crown' }
                ].map((reaction) => (
                  <motion.button
                    key={reaction.type}
                    onClick={() => handleReaction(reaction.type)}
                    className="flex flex-col items-center p-4 rounded-lg bg-gray-800/60 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-3xl mb-2">{reaction.emoji}</span>
                    <span className="text-white font-semibold text-sm">{reaction.label}</span>
                    <span className="text-red-500 font-bold">{reaction.count}</span>
                  </motion.button>
                ))}
              </div>
              
              <div className="bg-gray-800/60 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Commentaires Récents
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div>
                      <p className="text-white"><span className="font-semibold">Cartoon_Fan</span> CARTOON c'est trop bien ! 🎉</p>
                      <p className="text-gray-400 text-xs">il y a 2 min</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div>
                      <p className="text-white"><span className="font-semibold">Comedy_King</span> COMEDY me fait toujours rire ! 😂</p>
                      <p className="text-gray-400 text-xs">il y a 5 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CommunitySection