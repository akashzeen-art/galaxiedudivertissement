import { motion } from 'framer-motion';

const SidebarItem = ({
  icon: Icon,
  label,
  active,
  isMinimized,
  isMobile,
  onHover,
  onLeave,
  onClick,
}) => {
  return (
    <motion.button
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`w-full flex items-center cursor-pointer ${
        isMinimized && !isMobile ? "justify-center" : "gap-4"
      } px-3 py-3 rounded-lg transition-all duration-300 ${
        active 
          ? "bg-black text-white" 
          : "text-gray-600 hover:text-black hover:bg-gray-100"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className={`w-5 h-5 shrink-0 ${active ? "text-white" : ""}`} />
      {(!isMinimized || isMobile) && (
        <span className="text-[15px] whitespace-nowrap font-medium">{label}</span>
      )}
    </motion.button>
  );
};

export default SidebarItem;
