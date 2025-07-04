import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Calendar, Clock, MapPin, Zap } from 'lucide-react';

const FloatingDrone = () => {
  const [showModal, setShowModal] = useState(false);

  const DroneIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M12 12C13.1 12 14 11.1 14 10S13.1 8 12 8 10 8.9 10 10 10.9 12 12 12M8 18C8.55 18 9 17.55 9 17S8.55 16 8 16 7 16.45 7 17 7.45 18 8 18M16 18C16.55 18 17 17.55 17 17S16.55 16 16 16 15 16.45 15 17 15.45 18 16 18Z"/>
    </svg>
  );

  const FarmLiveModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-agri-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setShowModal(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-agri-card/95 backdrop-blur-xl border border-agri-border rounded-2xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-agri-primary to-agri-primary/80 rounded-xl flex items-center justify-center">
                <DroneIcon />
              </div>
              <div>
                <h2 className="text-xl font-medium text-agri-text">FarmLive Access</h2>
                <p className="text-agri-text/70 text-sm">Live farm monitoring</p>
              </div>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="text-agri-text/70 hover:text-agri-text transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-agri-primary/10 border border-agri-primary/20 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-5 h-5 text-agri-primary" />
                <span className="text-agri-text font-medium">Staking Required</span>
              </div>
              <p className="text-agri-text/70 text-sm mb-3">
                You need to stake at least 2,000 AV tokens to access FarmLive monitoring features.
              </p>
              <div className="text-agri-primary font-medium">Current Stake: 0 AV</div>
            </div>

            <div className="space-y-3">
              <h3 className="text-agri-text font-medium">FarmLive Features:</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Camera className="w-4 h-4 text-agri-primary" />
                  <span className="text-agri-text/80 text-sm">Live drone camera feeds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-agri-primary" />
                  <span className="text-agri-text/80 text-sm">Schedule monitoring sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-agri-primary" />
                  <span className="text-agri-text/80 text-sm">24/7 farm surveillance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-agri-primary" />
                  <span className="text-agri-text/80 text-sm">Multiple farm locations</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <motion.button
                onClick={() => {
                  setShowModal(false);
                  window.location.href = '/staking';
                }}
                className="flex-1 py-3 bg-gradient-to-r from-agri-primary to-agri-primary/80 text-agri-dark rounded-lg font-medium hover:shadow-lg hover:shadow-agri-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Stake AV Tokens
              </motion.button>
              <motion.button
                onClick={() => {
                  setShowModal(false);
                  window.location.href = '/farm-live';
                }}
                className="flex-1 py-3 bg-agri-card border border-agri-border text-agri-text rounded-lg font-medium hover:border-agri-primary/50 hover:bg-agri-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      {/* Floating Drone Button */}
      <motion.div
        className="fixed bottom-24 right-6 z-40"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <motion.button
          onClick={() => setShowModal(true)}
          className="w-16 h-16 bg-gradient-to-r from-agri-primary to-agri-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-agri-primary/25 hover:shadow-xl hover:shadow-agri-primary/40 transition-all duration-300 text-agri-dark"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 30px rgba(179, 255, 171, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          title="FarmLive Monitoring"
        >
          <DroneIcon />
        </motion.button>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-agri-primary/20 animate-ping" />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && <FarmLiveModal />}
      </AnimatePresence>
    </>
  );
};

export default FloatingDrone;