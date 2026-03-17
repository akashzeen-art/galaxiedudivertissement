import { Search, Bell, Menu, Zap } from "lucide-react";
import { motion } from 'framer-motion';
import logo from '../assets/profile-image.jpg'

const Header = ({ onMobileMenuClick, isMinimized }) => {
  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 ${isMinimized ? "lg:left-20" : "lg:left-64"
        } bg-white/95 backdrop-blur-xl z-40 px-4 md:px-8 py-4 flex items-center justify-between gap-3 border-b border-gray-200 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onMobileMenuClick}
        className="lg:hidden text-black p-2 hover:bg-gray-100 rounded-lg shrink-0 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex items-center gap-2">
        <img src="/55.png" alt="GALAXIE" className="h-8 md:h-10 w-auto object-contain" />
      </div>

      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          <input type="text"
            placeholder='Rechercher dessins animés, comédies, cuisine, mode...'
            className='w-full bg-gray-50 text-black pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-black placeholder-gray-400 text-sm md:text-base transition-all'
          />
        </div>
      </div>


    </motion.header>
  );
};

export default Header;