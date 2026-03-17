import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import SidebarTooltip from './Components/Sidebar/SidebarTooltip.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import MobileMenu from './Components/MobileMenu.jsx';
import Header from './Components/Header.jsx';
import EnhancedHeroSection from './Components/EnhancedHeroSection.jsx';
import EnhancedFeatures from './Components/EnhancedFeatures.jsx';
import VideoSliderSection from './Components/VideoSliderSection.jsx';
import HeroSection from './Components/HeroSection.jsx';
import FeaturedEvents from './Components/FeaturedEvents.jsx';
import VideoSection from './Components/VideoSection.jsx';
import TopFighters from './Components/TopFighters.jsx';
import Rankings from './Components/Rankings.jsx';
import AIRecommendations from './Components/AIRecommendations.jsx';
import NewsSection from './Components/NewsSection.jsx';
import CommunitySection from './Components/CommunitySection.jsx';
import Footer from './Components/Footer.jsx';
import CartoonPage from './Components/ArmWrestlingPage.jsx';
import ComedyPage from './Components/SlapFightPage.jsx';
import CookingPage from './Components/MMAFightPage.jsx';
import FashionPage from './Components/TaekwondoPage.jsx';
import { heroData, featuredEvents, slapVideos, topFighters, rankings } from './data/allData';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [activePage, setActivePage] = useState('Accueil');

  function handleMobileMenuToggle() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleSidebarToggle() {
    setIsSidebarMinimized(!isSidebarMinimized);
  }

  const [tooltip, setTooltip] = useState({
    visible: false,
    label: "",
    top: 0,
  });

  const renderPageContent = () => {
    switch(activePage) {
      case 'Accueil':
        return (
          <>
            <EnhancedHeroSection />
            <EnhancedFeatures />
            <VideoSliderSection />
            <div className="px-4 md:px-8 pb-8 space-y-12 md:space-y-16 bg-white">
              <TopFighters fighters={topFighters} />
              <Rankings rankings={rankings} />
              <CommunitySection />
            </div>
          </>
        );
      case 'Fighters':
        return (
          <div className="px-4 md:px-8 py-8 pt-20 md:pt-24">
            <TopFighters fighters={topFighters} />
          </div>
        );
      case 'Events':
        return (
          <div className="px-4 md:px-8 py-8 pt-20 md:pt-24">
            <FeaturedEvents events={featuredEvents} />
          </div>
        );
      case 'Videos':
        return (
          <div className="px-4 md:px-8 py-8 pt-20 md:pt-24">
            <VideoSection videos={slapVideos} />
          </div>
        );
      case 'Rankings':
        return (
          <div className="px-4 md:px-8 py-8 pt-20 md:pt-24">
            <Rankings rankings={rankings} />
          </div>
        );
      case 'News':
        return (
          <div className="px-4 md:px-8 py-8 pt-20 md:pt-24">
            <div>News Section</div>
          </div>
        );
      case 'Dessin Animé':
        return <CartoonPage />;
      case 'Comédie':
        return <ComedyPage />;
      case 'Cuisine':
        return <CookingPage />;
      case 'Mode':
        return <FashionPage />;
      default:
        return (
          <>
            <HeroSection heroData={heroData} />
            <div className="px-4 md:px-8 pb-8 space-y-12 md:space-y-16">
              <FeaturedEvents events={featuredEvents} />
              <VideoSection videos={slapVideos} />
              <TopFighters fighters={topFighters} />
              <Rankings rankings={rankings} />
              <CommunitySection />
            </div>
          </>
        );
    }
  };

  return (
    <>
      <motion.div 
        className='bg-white min-h-screen w-full overflow-x-hidden'
      >
      <div className='hidden lg:block'>
        <Sidebar
          isMinimized={isSidebarMinimized}
          onToggle={handleSidebarToggle}
          isMobile={false}
          setTooltip={setTooltip}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        {tooltip.visible && isSidebarMinimized && !isMobileMenuOpen && (
          <SidebarTooltip
            {...tooltip}
          />
        )}
      </div>

      <div className='lg:hidden'>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuToggle}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>

      <div className={`${isSidebarMinimized ? "lg:ml-20" : "lg:ml-64"} min-h-screen transition-all duration-300 w-full overflow-x-hidden`}>
        <Header
          onMobileMenuClick={handleMobileMenuToggle}
          isMinimized={isSidebarMinimized}
        />

        <motion.main 
          key={activePage}
          className="pt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPageContent()}
        </motion.main>
        <Footer />
      </div>
    </motion.div>
    </>
  )
}

export default App
