const SidebarTooltip = ({ visible, label, top }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed left-22 px-3 py-2 bg-gray-900 border border-red-500/30
                 text-white text-sm rounded-lg pointer-events-none
                 whitespace-nowrap z-50 glow-red"
      style={{
        top,
        transform: "translateY(-50%)",
      }}
    >
      {label}
    </div>
  );
};

export default SidebarTooltip;
