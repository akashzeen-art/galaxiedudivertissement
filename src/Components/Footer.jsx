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