import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Calendar, Clock, MapPin, Bone as Drone, Video, Eye, Star, Shield, Zap, CheckCircle, AlertCircle, Play, Pause, Volume2, Maximize, Settings } from 'lucide-react';

const FarmLive = () => {
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState('drone');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStep, setBookingStep] = useState(1);

  const availableFarms = [
    {
      id: 1,
      name: "Organic Wheat Farm #127",
      location: "Punjab, India",
      type: "AgriYield",
      image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=400",
      cameras: ['drone', 'dome', 'ground'],
      liveNow: true,
      rating: 4.8,
      bookings: 156,
      description: "Premium organic wheat cultivation with 24/7 monitoring"
    },
    {
      id: 2,
      name: "Teak Forest Plantation #89",
      location: "Kerala, India",
      type: "AgriFarms",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=400",
      cameras: ['drone', 'dome'],
      liveNow: false,
      rating: 4.9,
      bookings: 89,
      description: "Sustainable teak plantation with aerial monitoring"
    },
    {
      id: 3,
      name: "Mango Orchard Estate #456",
      location: "Maharashtra, India",
      type: "AgriFarms",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400",
      cameras: ['drone', 'ground'],
      liveNow: true,
      rating: 4.7,
      bookings: 234,
      description: "Premium mango orchard with fruit monitoring system"
    }
  ];

  const cameraTypes = [
    {
      id: 'drone',
      name: 'Drone Camera',
      icon: Drone,
      description: 'Aerial view with 360° rotation',
      features: ['4K Resolution', '360° View', 'Zoom 10x', 'Night Vision'],
      price: '50 AV/hour'
    },
    {
      id: 'dome',
      name: 'Dome Camera',
      icon: Video,
      description: 'Fixed dome with pan/tilt control',
      features: ['HD Resolution', 'Pan/Tilt', 'Zoom 5x', 'Weather Resistant'],
      price: '30 AV/hour'
    },
    {
      id: 'ground',
      name: 'Ground Camera',
      icon: Camera,
      description: 'Ground-level fixed position',
      features: ['HD Resolution', 'Fixed View', 'Zoom 3x', 'Motion Detection'],
      price: '20 AV/hour'
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const userStaking = 2500; // AV tokens staked
  const requiredStaking = 2000; // Required for FarmLive
  const canBook = userStaking >= requiredStaking;

  const handleBooking = () => {
    if (bookingStep < 4) {
      setBookingStep(bookingStep + 1);
    } else {
      // Complete booking
      alert('Booking confirmed! You will receive access details shortly.');
      setBookingStep(1);
    }
  };

  const LiveStreamPlayer = ({ farm }) => (
    <div className="bg-agri-dark rounded-xl overflow-hidden">
      <div className="relative aspect-video bg-agri-secondary/20">
        <img 
          src={farm.image} 
          alt={farm.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-agri-dark/40 flex items-center justify-center">
          <div className="text-center">
            <Play className="w-16 h-16 text-agri-primary mx-auto mb-4" />
            <p className="text-agri-text">Live Stream Placeholder</p>
            <p className="text-agri-text/70 text-sm">Click to start viewing</p>
          </div>
        </div>
        
        {/* Live indicator */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm rounded-full px-3 py-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-400 text-sm font-medium">LIVE</span>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-agri-dark/80 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button className="p-2 bg-agri-primary/20 text-agri-primary rounded-lg hover:bg-agri-primary/30 transition-colors">
                  <Play className="w-4 h-4" />
                </button>
                <button className="p-2 bg-agri-secondary/50 text-agri-text rounded-lg hover:bg-agri-secondary transition-colors">
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-agri-secondary/50 text-agri-text rounded-lg hover:bg-agri-secondary transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
                <button className="p-2 bg-agri-secondary/50 text-agri-text rounded-lg hover:bg-agri-secondary transition-colors">
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-light font-outfit mb-6 text-agri-text">
            <span className="text-agri-primary">FarmLive</span> Monitoring
          </h1>
          <p className="text-xl text-agri-text/70 font-light max-w-3xl mx-auto">
            Book live camera access to monitor your farm investments in real-time. 
            Watch your crops grow with drone, dome, and ground-level cameras.
          </p>
        </motion.div>

        {/* Staking Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mb-8 p-6 rounded-2xl border ${
            canBook 
              ? 'bg-agri-primary/10 border-agri-primary/20' 
              : 'bg-agri-accent/10 border-agri-accent/20'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {canBook ? (
                <CheckCircle className="w-6 h-6 text-agri-primary" />
              ) : (
                <AlertCircle className="w-6 h-6 text-agri-accent" />
              )}
              <div>
                <h3 className={`text-lg font-medium ${canBook ? 'text-agri-primary' : 'text-agri-accent'}`}>
                  {canBook ? 'FarmLive Access Enabled' : 'Staking Required'}
                </h3>
                <p className="text-agri-text/70">
                  {canBook 
                    ? `You have ${userStaking} AV staked (Required: ${requiredStaking} AV)`
                    : `Stake ${requiredStaking} AV tokens to access FarmLive booking`
                  }
                </p>
              </div>
            </div>
            {!canBook && (
              <button className="px-6 py-3 bg-agri-accent text-agri-dark rounded-lg font-medium hover:bg-agri-accent/90 transition-colors">
                Stake Now
              </button>
            )}
          </div>
        </motion.div>

        {/* Live Farms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-agri-text mb-8">Available Farms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableFarms.map((farm, index) => (
              <motion.div
                key={farm.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-agri-card border border-agri-border rounded-2xl overflow-hidden hover:border-agri-primary/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedFarm(farm)}
              >
                <div className="relative h-48">
                  <img 
                    src={farm.image} 
                    alt={farm.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/60 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <span className="px-3 py-1 bg-agri-primary/20 text-agri-primary rounded-full text-xs font-medium">
                      {farm.type}
                    </span>
                    {farm.liveNow && (
                      <div className="flex items-center space-x-1 bg-red-500/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-red-400 text-xs font-medium">LIVE</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-agri-text font-medium text-lg mb-1">{farm.name}</div>
                    <div className="flex items-center text-agri-text/70 text-sm">
                      <MapPin className="w-3 h-3 mr-1" />
                      {farm.location}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-agri-text/70 font-light mb-4">{farm.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-agri-accent" />
                      <span className="text-agri-text">{farm.rating}</span>
                      <span className="text-agri-text/70 text-sm">({farm.bookings} bookings)</span>
                    </div>
                    <div className="flex space-x-1">
                      {farm.cameras.map((camera) => {
                        const CameraIcon = cameraTypes.find(c => c.id === camera)?.icon || Camera;
                        return (
                          <div key={camera} className="w-6 h-6 bg-agri-primary/20 rounded text-agri-primary flex items-center justify-center">
                            <CameraIcon className="w-3 h-3" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button 
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      canBook
                        ? 'bg-agri-primary text-agri-dark hover:bg-agri-primary/90'
                        : 'bg-agri-secondary/50 text-agri-text/50 cursor-not-allowed'
                    }`}
                    disabled={!canBook}
                  >
                    {farm.liveNow ? 'Watch Live' : 'Book Session'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Booking Modal */}
        {selectedFarm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-agri-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-agri-card border border-agri-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-light text-agri-text mb-2">{selectedFarm.name}</h2>
                    <div className="flex items-center text-agri-text/70">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedFarm.location}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedFarm(null)}
                    className="text-agri-text/70 hover:text-agri-text"
                  >
                    ✕
                  </button>
                </div>

                {selectedFarm.liveNow ? (
                  /* Live Stream View */
                  <div className="space-y-6">
                    <LiveStreamPlayer farm={selectedFarm} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-medium text-agri-text mb-4">Farm Information</h3>
                        <div className="bg-agri-secondary/20 rounded-xl p-4">
                          <p className="text-agri-text/70 mb-4">{selectedFarm.description}</p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-agri-text/70 text-sm">Type</div>
                              <div className="text-agri-text">{selectedFarm.type}</div>
                            </div>
                            <div>
                              <div className="text-agri-text/70 text-sm">Rating</div>
                              <div className="text-agri-text">{selectedFarm.rating}/5</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium text-agri-text mb-4">Available Cameras</h3>
                        <div className="space-y-3">
                          {selectedFarm.cameras.map((cameraId) => {
                            const camera = cameraTypes.find(c => c.id === cameraId);
                            return (
                              <button
                                key={cameraId}
                                className="w-full p-3 bg-agri-secondary/20 border border-agri-border rounded-lg hover:border-agri-primary/50 transition-colors text-left"
                              >
                                <div className="flex items-center space-x-3">
                                  <camera.icon className="w-5 h-5 text-agri-primary" />
                                  <div>
                                    <div className="text-agri-text font-medium">{camera.name}</div>
                                    <div className="text-agri-text/70 text-sm">{camera.description}</div>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Booking Flow */
                  <div className="space-y-8">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-between">
                      {[
                        { step: 1, title: 'Select Camera' },
                        { step: 2, title: 'Choose Date' },
                        { step: 3, title: 'Pick Time' },
                        { step: 4, title: 'Confirm' }
                      ].map((item, index) => (
                        <div key={item.step} className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                            bookingStep >= item.step 
                              ? 'border-agri-primary bg-agri-primary/20 text-agri-primary' 
                              : 'border-agri-border bg-agri-secondary/20 text-agri-text/50'
                          }`}>
                            {bookingStep > item.step ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <span>{item.step}</span>
                            )}
                          </div>
                          <div className="ml-3 hidden md:block">
                            <div className={`font-medium ${bookingStep >= item.step ? 'text-agri-text' : 'text-agri-text/50'}`}>
                              {item.title}
                            </div>
                          </div>
                          {index < 3 && (
                            <div className={`w-8 md:w-16 h-0.5 mx-4 ${
                              bookingStep > item.step ? 'bg-agri-primary' : 'bg-agri-border'
                            }`} />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Step Content */}
                    {bookingStep === 1 && (
                      <div>
                        <h3 className="text-2xl font-light text-agri-text mb-6">Select Camera Type</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {cameraTypes.filter(camera => selectedFarm.cameras.includes(camera.id)).map((camera) => (
                            <button
                              key={camera.id}
                              onClick={() => setSelectedCamera(camera.id)}
                              className={`p-6 border rounded-xl transition-all duration-300 text-left ${
                                selectedCamera === camera.id
                                  ? 'border-agri-primary bg-agri-primary/10'
                                  : 'border-agri-border hover:border-agri-primary/50'
                              }`}
                            >
                              <camera.icon className={`w-8 h-8 mb-4 ${
                                selectedCamera === camera.id ? 'text-agri-primary' : 'text-agri-text/70'
                              }`} />
                              <h4 className="text-lg font-medium text-agri-text mb-2">{camera.name}</h4>
                              <p className="text-agri-text/70 text-sm mb-4">{camera.description}</p>
                              <div className="space-y-1">
                                {camera.features.map((feature, idx) => (
                                  <div key={idx} className="text-agri-text/60 text-xs">• {feature}</div>
                                ))}
                              </div>
                              <div className="mt-4 text-agri-primary font-medium">{camera.price}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {bookingStep === 2 && (
                      <div>
                        <h3 className="text-2xl font-light text-agri-text mb-6">Choose Date</h3>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
                        />
                      </div>
                    )}

                    {bookingStep === 3 && (
                      <div>
                        <h3 className="text-2xl font-light text-agri-text mb-6">Pick Time Slot</h3>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 border rounded-lg transition-all duration-300 ${
                                selectedTime === time
                                  ? 'border-agri-primary bg-agri-primary/10 text-agri-primary'
                                  : 'border-agri-border text-agri-text hover:border-agri-primary/50'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {bookingStep === 4 && (
                      <div>
                        <h3 className="text-2xl font-light text-agri-text mb-6">Confirm Booking</h3>
                        <div className="bg-agri-secondary/20 rounded-xl p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-lg font-medium text-agri-text mb-4">Booking Details</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-agri-text/70">Farm</span>
                                  <span className="text-agri-text">{selectedFarm.name}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-agri-text/70">Camera</span>
                                  <span className="text-agri-text">{cameraTypes.find(c => c.id === selectedCamera)?.name}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-agri-text/70">Date</span>
                                  <span className="text-agri-text">{selectedDate}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-agri-text/70">Time</span>
                                  <span className="text-agri-text">{selectedTime}</span>
                                </div>
                                <div className="flex justify-between border-t border-agri-border pt-3">
                                  <span className="text-agri-text font-medium">Total Cost</span>
                                  <span className="text-agri-primary font-medium">
                                    {cameraTypes.find(c => c.id === selectedCamera)?.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-agri-text mb-4">Payment Method</h4>
                              <div className="bg-agri-primary/10 border border-agri-primary/20 rounded-lg p-4">
                                <div className="flex items-center space-x-3">
                                  <Zap className="w-5 h-5 text-agri-primary" />
                                  <div>
                                    <div className="text-agri-text font-medium">AV Tokens</div>
                                    <div className="text-agri-text/70 text-sm">Balance: {userStaking} AV</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between">
                      <button
                        onClick={() => setBookingStep(Math.max(1, bookingStep - 1))}
                        disabled={bookingStep === 1}
                        className="px-6 py-3 bg-agri-secondary/50 text-agri-text rounded-lg font-medium hover:bg-agri-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      
                      <button
                        onClick={handleBooking}
                        disabled={
                          (bookingStep === 1 && !selectedCamera) ||
                          (bookingStep === 2 && !selectedDate) ||
                          (bookingStep === 3 && !selectedTime)
                        }
                        className="px-6 py-3 bg-agri-primary text-agri-dark rounded-lg font-medium hover:bg-agri-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {bookingStep === 4 ? 'Confirm Booking' : 'Next'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Floating Drone Icon */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-16 h-16 bg-gradient-to-r from-agri-primary to-agri-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Drone className="w-8 h-8 text-agri-dark" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FarmLive;