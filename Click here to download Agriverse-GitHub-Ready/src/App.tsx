import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChatWidget from './components/LiveChatWidget';
import FloatingDrone from './components/FloatingDrone';

// Pages
import HomePage from './pages/HomePage';
import AgriYield from './pages/AgriYield';
import AgriFarms from './pages/AgriFarms';
import CarbonVault from './pages/CarbonVault';
import GamingDashboard from './pages/GamingDashboard';
import AgriGPT from './pages/AgriGPT';
import UserDashboard from './pages/UserDashboard';
import ReferralSystem from './pages/ReferralSystem';
import Leaderboard from './pages/Leaderboard';
import Purchase from './pages/Purchase';
import AVStaking from './pages/AVStaking';
import NFTNaming from './pages/NFTNaming';
import SubmitProject from './pages/SubmitProject';
import LegalZone from './pages/LegalZone';
import RWAcertVerification from './pages/RWAcertVerification';
import AdminPanel from './pages/AdminPanel';
import NFTMarketplace from './pages/NFTMarketplace';
import FarmLive from './pages/FarmLive';
import SuperAdminLogin from './pages/SuperAdminLogin';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import Livestock from './pages/Livestock';
import AgriHub from './pages/AgriHub';

// Enhanced Background with particles
const ParticleBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Animated gradient orbs */}
    <motion.div
      className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-agri-primary/10 to-agri-primary/5 blur-3xl"
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <motion.div
      className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-agri-primary/8 to-agri-primary/3 blur-3xl"
      animate={{
        x: [0, -100, 0],
        y: [0, 100, 0],
        scale: [1, 0.8, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <motion.div
      className="absolute -bottom-40 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-agri-primary/6 to-agri-primary/2 blur-3xl"
      animate={{
        x: [0, -50, 0],
        y: [0, -100, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    
    {/* Floating particles */}
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-agri-primary/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -100, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

// Scroll progress bar
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-agri-primary to-agri-primary/50 z-50 origin-left"
      style={{ scaleX: scrollProgress }}
    />
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-agri-dark text-agri-text font-outfit relative">
        <ParticleBackground />
        <ScrollProgress />
        
        <div className="relative z-10">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/agriyield" element={<AgriYield />} />
              <Route path="/agrifarms" element={<AgriFarms />} />
              <Route path="/carbonvault" element={<CarbonVault />} />
              <Route path="/gaming" element={<GamingDashboard />} />
              <Route path="/agrigpt" element={<AgriGPT />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/referral" element={<ReferralSystem />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/staking" element={<AVStaking />} />
              <Route path="/nft-naming" element={<NFTNaming />} />
              <Route path="/submit-project" element={<SubmitProject />} />
              <Route path="/legal" element={<LegalZone />} />
              <Route path="/rwacert" element={<RWAcertVerification />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/marketplace" element={<NFTMarketplace />} />
              <Route path="/farm-live" element={<FarmLive />} />
              <Route path="/superadmin-login" element={<SuperAdminLogin />} />
              <Route path="/superadmin-dashboard" element={<SuperAdminDashboard />} />
              <Route path="/livestock" element={<Livestock />} />
              <Route path="/agrihub" element={<AgriHub />} />
            </Routes>
          </main>
          <Footer />
          <LiveChatWidget />
          <FloatingDrone />
        </div>
        
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(26, 31, 43, 0.95)',
              color: '#DADADA',
              border: '1px solid #2A2E3C',
              backdropFilter: 'blur(12px)',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;