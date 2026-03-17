import React from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Newsletter Section */}
          <div className="text-center mb-12">
            <h3 className="font-zentry text-2xl font-bold text-white mb-4 uppercase">
              RESTEZ DIVERTIS
            </h3>
            <p className="text-gray-400 mb-6 font-circular-web">Recevez les dernières actualités sur les dessins animés, la comédie, la cuisine et la mode</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Entrez votre e-mail"
                className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-300 placeholder-gray-500"
              />
              <motion.button
                className="bg-violet-300 hover:bg-violet-300/80 text-white px-6 py-3 rounded-lg font-general uppercase font-bold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S'abonner
              </motion.button>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="font-zentry text-xl font-bold text-white mb-4 md:mb-0">
              GALAX<span className="text-violet-300">IE</span>
            </div>
            <p className="text-gray-500 text-sm font-circular-web">
              © 2026 GALAXIE. Tous droits réservés.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer