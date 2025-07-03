import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Plane, 
  Home, 
  Car, 
  Utensils, 
  TreePine, 
  Award, 
  TrendingUp,
  Users,
  Leaf,
  Zap
} from 'lucide-react';

const CarbonVault = () => {
  const [activeTab, setActiveTab] = useState('calculator');
  const [carbonData, setCarbonData] = useState({
    travel: { flights: 2, driving: 500 },
    home: { electricity: 300, heating: 150 },
    food: { meat: 3, dairy: 2 },
    energy: { renewable: 50 }
  });
  const [calculatedOffset, setCalculatedOffset] = useState(null);

  const calculateCarbonFootprint = () => {
    const travelEmissions = (carbonData.travel.flights * 0.5) + (carbonData.travel.driving * 0.0002);
    const homeEmissions = (carbonData.home.electricity * 0.0005) + (carbonData.home.heating * 0.002);
    const foodEmissions = (carbonData.food.meat * 0.027) + (carbonData.food.dairy * 0.005);
    const energyReduction = carbonData.energy.renewable * 0.0004;
    
    const totalEmissions = travelEmissions + homeEmissions + foodEmissions - energyReduction;
    const treesNeeded = Math.ceil(totalEmissions * 50); // Rough calculation
    
    setCalculatedOffset({
      totalEmissions: totalEmissions.toFixed(2),
      treesNeeded,
      cost: treesNeeded * 25 // $25 per tree NFT
    });
  };

  const leaderboardData = [
    { rank: 1, name: "EcoWarrior.eth", offset: "125.5 tons", trees: 628, avatar: "🌱" },
    { rank: 2, name: "GreenInvestor", offset: "98.2 tons", trees: 491, avatar: "🌿" },
    { rank: 3, name: "CarbonNeutral", offset: "87.8 tons", trees: 439, avatar: "🍃" },
    { rank: 4, name: "TreeLover", offset: "76.3 tons", trees: 382, avatar: "🌳" },
    { rank: 5, name: "ClimateHero", offset: "65.9 tons", trees: 330, avatar: "🌲" }
  ];

  const offsetProjects = [
    {
      id: 1,
      title: "Amazon Rainforest Restoration",
      location: "Brazil",
      price: "$25",
      co2PerTree: "0.2 tons/year",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800",
      verified: true,
      impact: "High biodiversity protection"
    },
    {
      id: 2,
      title: "Mangrove Conservation",
      location: "Indonesia",
      price: "$30",
      co2PerTree: "0.3 tons/year",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800",
      verified: true,
      impact: "Coastal protection & marine life"
    },
    {
      id: 3,
      title: "Reforestation Initiative",
      location: "Kenya",
      price: "$20",
      co2PerTree: "0.25 tons/year",
      image: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=800",
      verified: true,
      impact: "Community empowerment"
    }
  ];

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
            <span className="text-agri-primary">CarbonVault</span> Offset
          </h1>
          <p className="text-xl text-agri-text/70 font-light max-w-3xl mx-auto">
            Calculate your carbon footprint and offset it with verified tree NFTs. 
            Track your environmental impact and compete on the leaderboard.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-agri-card border border-agri-border rounded-full p-1">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-8 py-3 rounded-full font-light transition-all duration-300 ${
                activeTab === 'calculator'
                  ? 'bg-agri-primary text-agri-dark'
                  : 'text-agri-text hover:text-agri-primary'
              }`}
            >
              <Calculator className="w-5 h-5 mr-2 inline" />
              Calculator
            </button>
            <button
              onClick={() => setActiveTab('offset')}
              className={`px-8 py-3 rounded-full font-light transition-all duration-300 ${
                activeTab === 'offset'
                  ? 'bg-agri-primary text-agri-dark'
                  : 'text-agri-text hover:text-agri-primary'
              }`}
            >
              <TreePine className="w-5 h-5 mr-2 inline" />
              Offset Projects
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-8 py-3 rounded-full font-light transition-all duration-300 ${
                activeTab === 'leaderboard'
                  ? 'bg-agri-primary text-agri-dark'
                  : 'text-agri-text hover:text-agri-primary'
              }`}
            >
              <Award className="w-5 h-5 mr-2 inline" />
              Leaderboard
            </button>
          </div>
        </motion.div>

        {/* Carbon Calculator Tab */}
        {activeTab === 'calculator' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-agri-card border border-agri-border rounded-2xl p-8">
              <h2 className="text-3xl font-light text-agri-text mb-8 text-center">
                Calculate Your Carbon Footprint
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Travel Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-agri-primary/20 rounded-full flex items-center justify-center">
                      <Plane className="w-5 h-5 text-agri-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-agri-text">Travel</h3>
                  </div>
                  
                  <div>
                    <label className="block text-agri-text/70 mb-2">Flights per year</label>
                    <input
                      type="number"
                      value={carbonData.travel.flights}
                      onChange={(e) => setCarbonData({...carbonData, travel: {...carbonData.travel, flights: parseInt(e.target.value) || 0}})}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-agri-text/70 mb-2">Driving miles per month</label>
                    <input
                      type="number"
                      value={carbonData.travel.driving}
                      onChange={(e) => setCarbonData({...carbonData, travel: {...carbonData.travel, driving: parseInt(e.target.value) || 0}})}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Home Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-agri-accent/20 rounded-full flex items-center justify-center">
                      <Home className="w-5 h-5 text-agri-accent" />
                    </div>
                    <h3 className="text-xl font-medium text-agri-text">Home Energy</h3>
                  </div>
                  
                  <div>
                    <label className="block text-agri-text/70 mb-2">Electricity (kWh/month)</label>
                    <input
                      type="number"
                      value={carbonData.home.electricity}
                      onChange={(e) => setCarbonData({...carbonData, home: {...carbonData.home, electricity: parseInt(e.target.value) || 0}})}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-agri-text/70 mb-2">Heating (therms/month)</label>
                    <input
                      type="number"
                      value={carbonData.home.heating}
                      onChange={(e) => setCarbonData({...carbonData, home: {...carbonData.home, heating: parseInt(e.target.value) || 0}})}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Food Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-agri-primary/20 rounded-full flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-agri-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-agri-text">Food Consumption</h3>
                  </div>
                  
                  <div>
                    <label className="block text-agri-text/70 mb-2">Meat servings per week</label>
                    <input
                      type="number"
                      value={carbonData.food.meat}
                      onChange={(e) => setCarbonData({...carbonData, food: {...carbonData.food, meat: parseInt(e.target.value) || 0}})}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-agri-text/70 mb-2">Dairy servings per day</label>
                    <input
                      type="number"
                      value={carbonData.food.dairy}
                      onChange={(e) => setCarbonData({...carbonData, food: {...carbonData.food, dairy: parseInt(e.target.value) || 0}})}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Energy Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-agri-accent/20 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-agri-accent" />
                    </div>
                    <h3 className="text-xl font-medium text-agri-text">Renewable Energy</h3>
                  </div>
                  
                  <div>
                    <label className="block text-agri-text/70 mb-2">Renewable energy usage (%)</label>
                    <input
                      type="number"
                      max="100"
                      value={carbonData.energy.renewable}
                      onChange={(e) => setCarbonData({...carbonData, energy: {...carbonData.energy, renewable: Math.min(100, parseInt(e.target.value) || 0)}})}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <motion.button
                  onClick={calculateCarbonFootprint}
                  className="px-12 py-4 bg-gradient-to-r from-agri-primary to-agri-accent text-agri-dark rounded-full font-medium text-lg hover:shadow-lg hover:shadow-agri-primary/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Calculate My Footprint
                </motion.button>
              </div>

              {calculatedOffset && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-8 bg-agri-primary/10 border border-agri-primary/20 rounded-xl p-6"
                >
                  <h3 className="text-2xl font-medium text-agri-text mb-4 text-center">Your Carbon Footprint</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-light text-agri-primary mb-2">{calculatedOffset.totalEmissions}</div>
                      <div className="text-agri-text/70">tons CO₂/year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-agri-accent mb-2">{calculatedOffset.treesNeeded}</div>
                      <div className="text-agri-text/70">trees needed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-agri-primary mb-2">${calculatedOffset.cost}</div>
                      <div className="text-agri-text/70">to offset</div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <motion.button
                      className="px-8 py-3 bg-agri-primary text-agri-dark rounded-full font-medium hover:bg-agri-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Mint {calculatedOffset.treesNeeded} Tree NFTs
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Offset Projects Tab */}
        {activeTab === 'offset' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offsetProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-agri-card border border-agri-border rounded-2xl overflow-hidden hover:border-agri-primary/50 transition-all duration-300 group hover:transform hover:scale-[1.02]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      {project.verified && (
                        <div className="flex items-center space-x-1 bg-agri-primary/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <Award className="w-4 h-4 text-agri-primary" />
                          <span className="text-agri-primary text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-agri-primary font-medium text-xl">{project.price}</div>
                          <div className="text-agri-text/80 text-sm font-light">per tree NFT</div>
                        </div>
                        <div className="text-right">
                          <div className="text-agri-accent font-medium">{project.co2PerTree}</div>
                          <div className="text-agri-text/80 text-sm font-light">CO₂ absorbed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-agri-text mb-2">{project.title}</h3>
                    <div className="flex items-center text-agri-text/70 text-sm mb-4">
                      <Leaf className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <p className="text-agri-text/70 font-light mb-6">{project.impact}</p>
                    
                    <motion.button
                      className="w-full py-3 bg-gradient-to-r from-agri-primary to-agri-accent text-agri-dark rounded-lg font-medium hover:shadow-lg hover:shadow-agri-primary/25 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Mint Tree NFT
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-agri-card border border-agri-border rounded-2xl p-8">
              <h2 className="text-3xl font-light text-agri-text mb-8 text-center">
                Carbon Offset Leaderboard
              </h2>

              <div className="space-y-4">
                {leaderboardData.map((user, index) => (
                  <motion.div
                    key={user.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      user.rank <= 3 
                        ? 'bg-gradient-to-r from-agri-primary/10 to-agri-accent/10 border border-agri-primary/20' 
                        : 'bg-agri-secondary/20 border border-agri-border hover:border-agri-primary/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        user.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                        user.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                        user.rank === 3 ? 'bg-orange-500/20 text-orange-400' :
                        'bg-agri-secondary text-agri-text'
                      }`}>
                        {user.rank <= 3 ? 
                          (user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉') 
                          : user.rank
                        }
                      </div>
                      <div className="text-2xl">{user.avatar}</div>
                      <div>
                        <div className="text-agri-text font-medium">{user.name}</div>
                        <div className="text-agri-text/70 text-sm">{user.trees} trees planted</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-agri-primary font-medium text-lg">{user.offset}</div>
                      <div className="text-agri-text/70 text-sm">CO₂ offset</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8 p-6 bg-agri-primary/5 border border-agri-primary/20 rounded-xl">
                <TreePine className="w-12 h-12 text-agri-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium text-agri-text mb-2">Join the Movement</h3>
                <p className="text-agri-text/70 font-light mb-4">
                  Start offsetting your carbon footprint today and climb the leaderboard while helping the planet.
                </p>
                <motion.button
                  className="px-8 py-3 bg-agri-primary text-agri-dark rounded-full font-medium hover:bg-agri-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Offsetting
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CarbonVault;