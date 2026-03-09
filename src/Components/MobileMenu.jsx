import {
  X,
} from "lucide-react";
import { motion } from 'framer-motion';

import { menuItems, libraryItems } from "../data/sidebarData";

const MobileMenu = ({ isOpen, onClose, activePage, setActivePage }) => {

  const handleNavigation = (label) => {
    setActivePage(label);
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-50 transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <motion.div
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-screen bg-white/95 backdrop-blur-2xl z-50 border-l border-gray-200 shadow-2xl`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <img src="/55(2).png" alt="HardKnockTV" className="h-12 w-auto object-contain" />
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto space-y-2">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleNavigation(item.label)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    activePage === item.label
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <item.icon
                    className={`w-5 h-5 ${activePage === item.label ? "text-white" : ""}`}
                  />
                  <span className="text-[15px] font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="border-b border-gray-200 my-4"></div>

            <div className="space-y-1">
              {libraryItems.map((item, index) => (
                <motion.button
                  key={index}
                  className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-black transition-all"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (menuItems.length + index) * 0.1 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-[15px] font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;