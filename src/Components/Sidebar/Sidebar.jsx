import { useEffect, useState } from "react";
import { Menu, Zap, ListCollapse } from "lucide-react";
import { motion } from 'framer-motion';
import { menuItems, libraryItems } from "../../data/sidebarData";
import SidebarItem from "./SidebarItem";
import SidebarTooltip from "./SidebarTooltip";

const Sidebar = ({ isMinimized, onToggle, isMobile, setTooltip, activePage, setActivePage }) => {
  const showTooltip = (e, label) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      label,
      top: rect.top + rect.height / 2,
    });
  };

  const hideTooltip = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  return (
    <motion.div 
      className={`${isMinimized && !isMobile ? 'w-20 p-3' : 'w-64 p-5'} bg-white/95 backdrop-blur-2xl h-screen fixed rounded-r-2xl left-0 top-0 flex flex-col z-50 overflow-y-auto overflow-x-hidden border-r border-gray-200 shadow-2xl transition-all duration-300`}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      {/* Logo */}
      <div className={`flex items-center ${isMinimized && !isMobile ? 'justify-center' : 'justify-between'} mb-8 shrink-0`}>
        {isMinimized && !isMobile ? (
          <img src="/55(2).png" alt="GALAXIE" className="h-13 w-auto object-contain cursor-pointer" onClick={onToggle} />
        ) : (
          <>
            <img src="/55(2).png" alt="GALAXIE" className="h-12 w-auto object-contain" />
            <button
              onClick={onToggle}
              className="text-gray-600 hover:text-black transition-all duration-300 shrink-0 cursor-pointer self-center"
            >
              <ListCollapse className="w-5 h-5 rotate-180" />
            </button>
          </>
        )}
      </div>

      <nav className="overflow-y-auto overflow-x-hidden flex-1">
        <div className="space-y-1">
          {menuItems.map(item => (
            <SidebarItem
              key={item.label}
              {...item}
              active={activePage === item.label}
              isMinimized={isMinimized}
              isMobile={isMobile}
              onHover={(e) => showTooltip(e, item.label)}
              onLeave={hideTooltip}
              onClick={() => setActivePage(item.label)}
            />
          ))}
        </div>

        <div className="border-b border-gray-200 my-6"></div>

        <div className="space-y-1">
          {libraryItems.map(item => (
            <SidebarItem
              key={item.label}
              {...item}
              isMinimized={isMinimized}
              isMobile={isMobile}
              onHover={(e) => showTooltip(e, item.label)}
              onLeave={hideTooltip}
            />
          ))}
        </div>
      </nav>



      {isMinimized && !isMobile && (
        <button
          onClick={onToggle}
          className="mt-4 w-full flex items-center justify-center py-3 text-gray-600 hover:text-black transition-colors cursor-pointer"
        >
          <ListCollapse className="w-5 h-5" />
        </button>
      )}
    </motion.div>
  );
};

export default Sidebar;
