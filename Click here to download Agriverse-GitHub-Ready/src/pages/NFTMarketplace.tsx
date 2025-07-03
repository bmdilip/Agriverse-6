import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Award, 
  Shield, 
  Eye,
  Heart,
  Share2,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Leaf,
  TreePine,
  Building,
  Zap,
  CheckCircle
} from 'lucide-react';

const NFTMarketplace = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedNFT, setSelectedNFT] = useState(null);

  const filters = [
    { id: 'all', label: 'All NFTs', count: 1247 },
    { id: 'agriyield', label: 'AgriYield', count: 456 },
    { id: 'agrifarms', label: 'AgriFarms', count: 324 },
    { id: 'carbonvault', label: 'CarbonVault', count: 467 }
  ];

  const sortOptions = [
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'roi-high', label: 'Highest ROI' },
    { id: 'ending-soon', label: 'Ending Soon' }
  ];

  const nftListings = [
    {
      id: 1,
      title: "Organic Wheat Farm #127",
      type: "AgriYield",
      price: "2,500 AV",
      usdPrice: "$2,500",
      roi: "18%",
      maturity: 85,
      timeLeft: "45 days",
      seller: "0x1234...5678",
      image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=400",
      rarity: "Common",
      rwaCert: true,
      featured: false,
      likes: 24,
      views: 156,
      description: "Premium organic wheat cultivation with certified practices and guaranteed buyback."
    },
    {
      id: 2,
      title: "Teak Forest Plantation #89",
      type: "AgriFarms",
      price: "5,000 AV",
      usdPrice: "$5,000",
      roi: "12%",
      maturity: 40,
      timeLeft: "2 years",
      seller: "0x9876...4321",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=400",
      rarity: "Rare",
      rwaCert: true,
      featured: true,
      likes: 67,
      views: 342,
      description: "Sustainable teak plantation with 20-year growth cycle and live monitoring."
    },
    {
      id: 3,
      title: "Carbon Offset Trees #234",
      type: "CarbonVault",
      price: "750 AV",
      usdPrice: "$750",
      roi: "Environmental",
      maturity: 100,
      timeLeft: "Permanent",
      seller: "0x5555...7777",
      image: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=400",
      rarity: "Epic",
      rwaCert: true,
      featured: false,
      likes: 89,
      views: 234,
      description: "High-impact carbon sequestration project with verified offset credits."
    },
    {
      id: 4,
      title: "Premium Rice Cultivation #456",
      type: "AgriYield",
      price: "1,800 AV",
      usdPrice: "$1,800",
      roi: "15%",
      maturity: 70,
      timeLeft: "30 days",
      seller: "0x8888...9999",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400",
      rarity: "Rare",
      rwaCert: true,
      featured: false,
      likes: 45,
      views: 189,
      description: "Traditional rice farming with modern irrigation and expert management."
    },
    {
      id: 5,
      title: "Mango Orchard Estate #678",
      type: "AgriFarms",
      price: "3,200 AV",
      usdPrice: "$3,200",
      roi: "14%",
      maturity: 55,
      timeLeft: "18 months",
      seller: "0x2222...3333",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400",
      rarity: "Legendary",
      rwaCert: true,
      featured: true,
      likes: 123,
      views: 567,
      description: "Premium mango orchard with export-quality fruit and annual yields."
    },
    {
      id: 6,
      title: "Bamboo Forest Project #890",
      type: "CarbonVault",
      price: "950 AV",
      usdPrice: "$950",
      roi: "Environmental",
      maturity: 90,
      timeLeft: "Permanent",
      seller: "0x4444...5555",
      image: "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=400",
      rarity: "Common",
      rwaCert: true,
      featured: false,
      likes: 34,
      views: 145,
      description: "Fast-growing bamboo plantation for carbon sequestration and sustainable timber."
    }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Common':
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      case 'Rare':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Epic':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'Legendary':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      default:
        return 'text-agri-primary bg-agri-primary/10 border-agri-primary/20';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'AgriYield':
        return 'text-agri-primary bg-agri-primary/10';
      case 'AgriFarms':
        return 'text-agri-accent bg-agri-accent/10';
      case 'CarbonVault':
        return 'text-green-400 bg-green-400/10';
      default:
        return 'text-agri-text bg-agri-secondary/20';
    }
  };

  const filteredNFTs = nftListings.filter(nft => {
    if (activeFilter === 'all') return true;
    return nft.type.toLowerCase() === activeFilter;
  });

  const NFTModal = ({ nft, onClose }) => {
    if (!nft) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-agri-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-agri-card border border-agri-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-light text-agri-text mb-2">{nft.title}</h2>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRarityColor(nft.rarity)}`}>
                    {nft.rarity}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(nft.type)}`}>
                    {nft.type}
                  </span>
                  {nft.rwaCert && (
                    <span className="px-3 py-1 bg-agri-primary/20 text-agri-primary rounded-full text-xs font-medium">
                      RWAcert Verified
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-agri-text/70 hover:text-agri-text"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img 
                  src={nft.image} 
                  alt={nft.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className="bg-agri-secondary/20 rounded-xl p-4 mb-6">
                  <h3 className="text-lg font-medium text-agri-text mb-3">Description</h3>
                  <p className="text-agri-text/70 font-light leading-relaxed">{nft.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-agri-secondary/20 rounded-lg p-3">
                    <div className="text-agri-text/70 text-sm">Seller</div>
                    <div className="text-agri-text font-mono">{nft.seller}</div>
                  </div>
                  <div className="bg-agri-secondary/20 rounded-lg p-3">
                    <div className="text-agri-text/70 text-sm">Views</div>
                    <div className="text-agri-text">{nft.views}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-agri-primary/10 border border-agri-primary/20 rounded-xl p-6">
                  <div className="text-3xl font-light text-agri-primary mb-2">{nft.price}</div>
                  <div className="text-agri-text/70 mb-4">{nft.usdPrice}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-agri-text/70 text-sm">ROI</div>
                      <div className="text-agri-accent font-medium">{nft.roi}</div>
                    </div>
                    <div>
                      <div className="text-agri-text/70 text-sm">Time Left</div>
                      <div className="text-agri-text">{nft.timeLeft}</div>
                    </div>
                  </div>

                  {nft.maturity < 100 && (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-agri-text/70 mb-2">
                        <span>Maturity Progress</span>
                        <span>{nft.maturity}%</span>
                      </div>
                      <div className="w-full bg-agri-border rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-agri-primary to-agri-accent h-2 rounded-full"
                          style={{ width: `${nft.maturity}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <motion.button
                    className="w-full py-4 bg-gradient-to-r from-agri-primary to-agri-accent text-agri-dark rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-agri-primary/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Buy Now
                  </motion.button>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 py-3 bg-agri-secondary/50 text-agri-text rounded-lg hover:bg-agri-secondary transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>Like ({nft.likes})</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-3 bg-agri-secondary/50 text-agri-text rounded-lg hover:bg-agri-secondary transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

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
            <span className="text-agri-primary">NFT</span> Marketplace
          </h1>
          <p className="text-xl text-agri-text/70 font-light max-w-3xl mx-auto">
            Discover, buy, and sell agricultural NFTs. Trade verified farm assets, 
            crop investments, and carbon credits in our decentralized marketplace.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-agri-text/50" />
              <input
                type="text"
                placeholder="Search NFTs by name, type, or seller..."
                className="w-full pl-10 pr-4 py-3 bg-agri-card border border-agri-border rounded-lg text-agri-text placeholder-agri-text/50 focus:border-agri-primary focus:outline-none"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-agri-card border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-agri-primary text-agri-dark' : 'bg-agri-card border border-agri-border text-agri-text hover:border-agri-primary'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-agri-primary text-agri-dark' : 'bg-agri-card border border-agri-border text-agri-text hover:border-agri-primary'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-light transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-agri-primary text-agri-dark'
                    : 'bg-agri-card border border-agri-border text-agri-text hover:border-agri-primary'
                }`}
              >
                <span>{filter.label}</span>
                <span className="text-xs opacity-70">({filter.count})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* NFT Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
        >
          {filteredNFTs.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedNFT(nft)}
            >
              <div className={`bg-agri-card border border-agri-border rounded-2xl overflow-hidden hover:border-agri-primary/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] ${
                viewMode === 'list' ? 'flex' : ''
              }`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-48' : 'h-48'}`}>
                  <img 
                    src={nft.image} 
                    alt={nft.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/60 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div className="flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRarityColor(nft.rarity)}`}>
                        {nft.rarity}
                      </span>
                      {nft.featured && (
                        <span className="px-3 py-1 bg-agri-accent/20 text-agri-accent rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    {nft.rwaCert && (
                      <div className="flex items-center space-x-1 bg-agri-primary/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <Shield className="w-3 h-3 text-agri-primary" />
                        <span className="text-agri-primary text-xs font-medium">RWA</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-agri-primary font-medium text-lg">{nft.price}</div>
                        <div className="text-agri-text/80 text-sm">{nft.usdPrice}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-agri-text/70 text-xs">
                          <Heart className="w-3 h-3" />
                          <span>{nft.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-agri-text/70 text-xs">
                          <Eye className="w-3 h-3" />
                          <span>{nft.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-medium text-agri-text">{nft.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(nft.type)}`}>
                      {nft.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-agri-text/70 mb-4">
                    <span>Seller: {nft.seller}</span>
                    <span>ROI: {nft.roi}</span>
                  </div>
                  
                  {nft.maturity < 100 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-agri-text/70 mb-2">
                        <span>Progress</span>
                        <span>{nft.maturity}%</span>
                      </div>
                      <div className="w-full bg-agri-border rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-agri-primary to-agri-accent h-2 rounded-full"
                          style={{ width: `${nft.maturity}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-sm text-agri-text/70">
                      <Clock className="w-4 h-4" />
                      <span>{nft.timeLeft}</span>
                    </div>
                    <span className="text-agri-primary font-medium">View Details</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-agri-secondary/50 text-agri-text rounded-full font-light text-lg hover:bg-agri-secondary transition-all duration-300">
            Load More NFTs
          </button>
        </motion.div>
      </div>

      {/* NFT Modal */}
      {selectedNFT && (
        <NFTModal 
          nft={selectedNFT} 
          onClose={() => setSelectedNFT(null)} 
        />
      )}
    </div>
  );
};

export default NFTMarketplace;