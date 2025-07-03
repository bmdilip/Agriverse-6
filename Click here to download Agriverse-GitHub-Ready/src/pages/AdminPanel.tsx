import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, Shield, Settings, AlertTriangle, CheckCircle, Clock, DollarSign, TrendingUp, Eye, Edit, Trash2, Plus, Filter, Download, Upload, Bell, Lock, Unlock, UserCheck, UserX, FileText, MapPin, Calendar, Camera, Zap, Target, Coins, TreePine, Leaf, Building, Globe, RefreshCw, Cog as Cow, Bird, Bone } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const dashboardStats = {
    totalUsers: 2847,
    totalInvestments: 4250000,
    activeProjects: 156,
    pendingVerifications: 23,
    totalNFTs: 8934,
    carbonOffset: 1247.5,
    avStaked: 12500000,
    roiDistributed: 847000
  };

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'agriyield', label: 'AgriYield', icon: Leaf },
    { id: 'agrifarms', label: 'AgriFarms', icon: TreePine },
    { id: 'carbonvault', label: 'CarbonVault', icon: Globe },
    { id: 'livestock', label: 'Livestock', icon: Cow }
  ];

  const projectBatches = [
    {
      id: 1,
      name: "Organic Wheat Farm Batch #1",
      type: "AgriYield",
      status: "Active",
      nftQuantity: 100,
      minted: 75,
      roi: "18%",
      maturityPeriod: "120 days",
      totalInvestment: "$125,000",
      kycRequired: true,
      whitelistEnabled: false,
      stakingEnabled: true,
      coverImage: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=400",
      documents: ["MoU.pdf", "Legal_Certificate.pdf"],
      liveFeedUrl: null
    },
    {
      id: 2,
      name: "Teak Forest Plantation Batch #1",
      type: "AgriFarms",
      status: "Active",
      nftQuantity: 50,
      minted: 32,
      roi: "12%",
      maturityPeriod: "5 years",
      totalInvestment: "$280,000",
      kycRequired: true,
      whitelistEnabled: true,
      stakingEnabled: true,
      coverImage: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=400",
      documents: ["Forest_License.pdf", "Environmental_Clearance.pdf"],
      liveFeedUrl: "https://example.com/live-feed-1"
    },
    {
      id: 3,
      name: "Carbon Offset Trees Batch #2",
      type: "CarbonVault",
      status: "Pending",
      nftQuantity: 200,
      minted: 0,
      roi: "Environmental",
      maturityPeriod: "Permanent",
      totalInvestment: "$95,000",
      kycRequired: false,
      whitelistEnabled: false,
      stakingEnabled: false,
      coverImage: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=400",
      documents: ["Carbon_Certificate.pdf"],
      liveFeedUrl: null
    },
    {
      id: 4,
      name: "Premium Dairy Cattle Farm Batch #1",
      type: "Livestock",
      status: "Active",
      nftQuantity: 80,
      minted: 45,
      roi: "22%",
      maturityPeriod: "180 days",
      totalInvestment: "$160,000",
      kycRequired: true,
      whitelistEnabled: false,
      stakingEnabled: true,
      coverImage: "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=400",
      documents: ["Veterinary_Certificate.pdf", "Farm_License.pdf"],
      liveFeedUrl: "https://example.com/live-feed-2"
    },
    {
      id: 5,
      name: "Free-Range Poultry Farm Batch #1",
      type: "Livestock",
      status: "Active",
      nftQuantity: 120,
      minted: 78,
      roi: "25%",
      maturityPeriod: "90 days",
      totalInvestment: "$85,000",
      kycRequired: true,
      whitelistEnabled: false,
      stakingEnabled: true,
      coverImage: "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=400",
      documents: ["Organic_Certificate.pdf", "Health_Inspection.pdf"],
      liveFeedUrl: "https://example.com/live-feed-3"
    }
  ];

  const filteredBatches = activeFilter === 'all' 
    ? projectBatches 
    : projectBatches.filter(batch => batch.type.toLowerCase() === activeFilter);

  const analyticsData = {
    agriYield: {
      totalBatches: 15,
      totalInvestors: 847,
      nftsMinted: 1250,
      roiDistributed: "$125,000"
    },
    agriFarms: {
      totalProjects: 8,
      totalInvestors: 324,
      liveFeedViews: 15420,
      roiDistributed: "$89,000"
    },
    carbonVault: {
      carbonCredits: 5420,
      co2Offset: "1,247 tons",
      topWallets: 156,
      offsetsByType: { trees: 60, renewable: 25, conservation: 15 }
    },
    livestock: {
      totalAnimals: 745,
      totalInvestors: 256,
      healthStatus: "98% Excellent",
      roiDistributed: "$78,000",
      categories: { cattle: 45, goats: 30, poultry: 25 }
    },
    staking: {
      totalStaked: "$12.5M",
      avgAPY: "14.2%",
      totalRewards: "$1.8M",
      activeStakers: 2156
    }
  };

  const recentUsers = [
    { id: 1, wallet: "0x1234...5678", joinDate: "2025-01-15", status: "Active", nfts: 5, avBalance: "1,250" },
    { id: 2, wallet: "0x9876...4321", joinDate: "2025-01-14", status: "Pending", nfts: 0, avBalance: "0" },
    { id: 3, wallet: "0x5555...7777", joinDate: "2025-01-13", status: "Active", nfts: 12, avBalance: "3,450" }
  ];

  const systemAlerts = [
    { id: 1, type: "warning", message: "High server load detected", time: "5 min ago" },
    { id: 2, type: "info", message: "New project submission received", time: "15 min ago" },
    { id: 3, type: "success", message: "ROI payout completed for Batch #5", time: "1 hour ago" }
  ];

  const getTypeIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'agriyield': return <Leaf className="w-5 h-5" />;
      case 'agrifarms': return <TreePine className="w-5 h-5" />;
      case 'carbonvault': return <Globe className="w-5 h-5" />;
      case 'livestock': return <Cow className="w-5 h-5" />;
      default: return <Leaf className="w-5 h-5" />;
    }
  };

  const BatchModal = ({ batch, onClose }) => {
    if (!batch) return null;

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
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-light text-agri-text mb-2">{batch.name}</h2>
                <span className="px-3 py-1 bg-agri-primary/20 text-agri-primary rounded-full text-sm">
                  {batch.type}
                </span>
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
                  src={batch.coverImage} 
                  alt={batch.name}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-agri-text/70 mb-2">ROI Percentage</label>
                    <input
                      type="text"
                      defaultValue={batch.roi}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:outline-none focus:border-agri-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-agri-text/70 mb-2">Maturity Period</label>
                    <input
                      type="text"
                      defaultValue={batch.maturityPeriod}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:outline-none focus:border-agri-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-agri-text/70 mb-2">NFT Quantity</label>
                    <input
                      type="number"
                      defaultValue={batch.nftQuantity}
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:outline-none focus:border-agri-primary"
                    />
                  </div>

                  {batch.liveFeedUrl && (
                    <div>
                      <label className="block text-agri-text/70 mb-2">Live Feed URL</label>
                      <input
                        type="url"
                        defaultValue={batch.liveFeedUrl}
                        placeholder="https://example.com/live-feed"
                        className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:outline-none focus:border-agri-primary"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-agri-text mb-4">Toggle Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-agri-text">KYC Required</span>
                      <button className={`w-12 h-6 rounded-full relative ${batch.kycRequired ? 'bg-agri-primary' : 'bg-agri-secondary'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${batch.kycRequired ? 'right-0.5' : 'left-0.5'}`} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-agri-text">Whitelist Enabled</span>
                      <button className={`w-12 h-6 rounded-full relative ${batch.whitelistEnabled ? 'bg-agri-primary' : 'bg-agri-secondary'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${batch.whitelistEnabled ? 'right-0.5' : 'left-0.5'}`} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-agri-text">Staking Enabled</span>
                      <button className={`w-12 h-6 rounded-full relative ${batch.stakingEnabled ? 'bg-agri-primary' : 'bg-agri-secondary'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${batch.stakingEnabled ? 'right-0.5' : 'left-0.5'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-agri-text mb-4">Documents</h3>
                  <div className="space-y-2">
                    {batch.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-agri-secondary/20 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-agri-primary" />
                          <span className="text-agri-text">{doc}</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-agri-text hover:text-agri-primary">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-agri-text hover:text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="w-full p-3 border-2 border-dashed border-agri-border rounded-lg text-agri-text/70 hover:border-agri-primary hover:text-agri-primary transition-colors">
                      <Upload className="w-5 h-5 mx-auto mb-1" />
                      Upload Document
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-agri-text mb-4">Smart Contract Controls</h3>
                  <div className="space-y-3">
                    <button className="w-full py-3 bg-agri-primary/20 border border-agri-primary/30 text-agri-primary rounded-lg hover:bg-agri-primary/30 transition-colors">
                      Trigger ROI Payout
                    </button>
                    <button className="w-full py-3 bg-agri-accent/20 border border-agri-accent/30 text-agri-accent rounded-lg hover:bg-agri-accent/30 transition-colors">
                      Approve RWAcert
                    </button>
                    <button className="w-full py-3 bg-agri-secondary/50 text-agri-text rounded-lg hover:bg-agri-secondary transition-colors">
                      Update Metadata
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-8">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-agri-secondary/50 text-agri-text rounded-lg font-medium hover:bg-agri-secondary transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-3 bg-agri-primary text-agri-dark rounded-lg font-medium hover:bg-agri-primary/90 transition-colors">
                Save Changes
              </button>
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
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-light font-outfit text-agri-text">
              <span className="text-agri-primary">Admin</span> Panel
            </h1>
            <p className="text-agri-text/70 font-light">Manage platform operations and monitor system health</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 bg-agri-card border border-agri-border rounded-lg text-agri-text focus:border-agri-primary focus:outline-none"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <button className="p-2 bg-agri-primary/20 text-agri-primary rounded-lg hover:bg-agri-primary/30 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'batches', label: 'Batch Control', icon: Building },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'contracts', label: 'Smart Contracts', icon: Zap },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-light transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-agri-primary text-agri-dark'
                  : 'bg-agri-card border border-agri-border text-agri-text hover:border-agri-primary'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-agri-primary" />
                    <span className="text-agri-text/70">Total Users</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-agri-accent" />
                </div>
                <div className="text-3xl font-light text-agri-text mb-2">{dashboardStats.totalUsers.toLocaleString()}</div>
                <div className="text-agri-accent text-sm">+12% from last month</div>
              </div>

              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-agri-primary" />
                    <span className="text-agri-text/70">Total Investments</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-agri-accent" />
                </div>
                <div className="text-3xl font-light text-agri-text mb-2">${(dashboardStats.totalInvestments / 1000000).toFixed(1)}M</div>
                <div className="text-agri-accent text-sm">+18% from last month</div>
              </div>

              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Coins className="w-6 h-6 text-agri-primary" />
                    <span className="text-agri-text/70">AV Staked</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-agri-accent" />
                </div>
                <div className="text-3xl font-light text-agri-text mb-2">${(dashboardStats.avStaked / 1000000).toFixed(1)}M</div>
                <div className="text-agri-accent text-sm">+25% from last month</div>
              </div>

              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-agri-primary" />
                    <span className="text-agri-text/70">ROI Distributed</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-agri-accent" />
                </div>
                <div className="text-3xl font-light text-agri-text mb-2">${(dashboardStats.roiDistributed / 1000).toFixed(0)}K</div>
                <div className="text-agri-accent text-sm">+8% from last month</div>
              </div>
            </div>

            {/* System Alerts */}
            <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
              <h3 className="text-xl font-medium text-agri-text mb-4">System Alerts</h3>
              <div className="space-y-3">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className={`flex items-center justify-between p-4 rounded-lg ${
                    alert.type === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/20' :
                    alert.type === 'info' ? 'bg-blue-500/10 border border-blue-500/20' :
                    'bg-agri-primary/10 border border-agri-primary/20'
                  }`}>
                    <div className="flex items-center space-x-3">
                      {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-400" />}
                      {alert.type === 'info' && <Bell className="w-5 h-5 text-blue-400" />}
                      {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-agri-primary" />}
                      <span className="text-agri-text">{alert.message}</span>
                    </div>
                    <span className="text-agri-text/70 text-sm">{alert.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <h3 className="text-xl font-medium text-agri-text mb-4">Recent Users</h3>
                <div className="space-y-3">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 bg-agri-secondary/20 rounded-lg">
                      <div>
                        <div className="text-agri-text font-medium font-mono">{user.wallet}</div>
                        <div className="text-agri-text/70 text-sm">{user.joinDate}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          user.status === 'Active' ? 'text-agri-primary' : 'text-agri-accent'
                        }`}>
                          {user.status}
                        </div>
                        <div className="text-agri-text/70 text-sm">{user.nfts} NFTs • {user.avBalance} AV</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <h3 className="text-xl font-medium text-agri-text mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 py-3 bg-agri-primary text-agri-dark rounded-lg font-medium hover:bg-agri-primary/90 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Create New Batch</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 py-3 bg-agri-accent/20 border border-agri-accent text-agri-accent rounded-lg font-medium hover:bg-agri-accent/30 transition-colors">
                    <RefreshCw className="w-4 h-4" />
                    <span>Trigger ROI Payout</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 py-3 bg-agri-secondary/50 text-agri-text rounded-lg font-medium hover:bg-agri-secondary transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Export Global Report</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Batch Control Tab */}
        {activeTab === 'batches' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-light text-agri-text">Project Batches</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-agri-primary text-agri-dark rounded-lg hover:bg-agri-primary/90 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Create New Batch</span>
              </button>
            </div>

            {/* Batch Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-light transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-agri-primary text-agri-dark'
                      : 'bg-agri-card border border-agri-border text-agri-text hover:border-agri-primary'
                  }`}
                >
                  <filter.icon className="w-4 h-4" />
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBatches.map((batch, index) => (
                <motion.div
                  key={batch.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-agri-card border border-agri-border rounded-2xl overflow-hidden hover:border-agri-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedBatch(batch)}
                >
                  <div className="relative h-48">
                    <img 
                      src={batch.coverImage} 
                      alt={batch.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/60 to-transparent" />
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(batch.type)}
                        <span className="px-2 py-1 bg-agri-primary/20 text-agri-primary rounded-full text-xs">
                          {batch.type}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        batch.status === 'Active' ? 'bg-agri-primary/20 text-agri-primary' : 'bg-agri-accent/20 text-agri-accent'
                      }`}>
                        {batch.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-agri-text font-medium">{batch.name}</div>
                      <div className="text-agri-text/70 text-sm">{batch.minted}/{batch.nftQuantity} NFTs minted</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-agri-text/70 text-sm">ROI</div>
                        <div className="text-agri-primary font-medium">{batch.roi}</div>
                      </div>
                      <div>
                        <div className="text-agri-text/70 text-sm">Period</div>
                        <div className="text-agri-text">{batch.maturityPeriod}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex space-x-2">
                        {batch.kycRequired && <span className="px-2 py-1 bg-agri-primary/20 text-agri-primary rounded text-xs">KYC</span>}
                        {batch.whitelistEnabled && <span className="px-2 py-1 bg-agri-accent/20 text-agri-accent rounded text-xs">Whitelist</span>}
                        {batch.stakingEnabled && <span className="px-2 py-1 bg-agri-secondary/50 text-agri-text rounded text-xs">Staking</span>}
                      </div>
                      {batch.liveFeedUrl && <Camera className="w-4 h-4 text-agri-primary" />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* AgriYield Analytics */}
              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Leaf className="w-6 h-6 text-agri-primary" />
                  <h3 className="text-lg font-medium text-agri-text">AgriYield</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Total Batches</span>
                    <span className="text-agri-text">{analyticsData.agriYield.totalBatches}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Investors</span>
                    <span className="text-agri-text">{analyticsData.agriYield.totalInvestors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">NFTs Minted</span>
                    <span className="text-agri-text">{analyticsData.agriYield.nftsMinted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">ROI Distributed</span>
                    <span className="text-agri-primary">{analyticsData.agriYield.roiDistributed}</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-agri-secondary/50 text-agri-text rounded-lg text-sm hover:bg-agri-secondary transition-colors">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Export CSV
                </button>
              </div>

              {/* AgriFarms Analytics */}
              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TreePine className="w-6 h-6 text-agri-primary" />
                  <h3 className="text-lg font-medium text-agri-text">AgriFarms</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Projects</span>
                    <span className="text-agri-text">{analyticsData.agriFarms.totalProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Investors</span>
                    <span className="text-agri-text">{analyticsData.agriFarms.totalInvestors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Live Feed Views</span>
                    <span className="text-agri-text">{analyticsData.agriFarms.liveFeedViews.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">ROI Distributed</span>
                    <span className="text-agri-primary">{analyticsData.agriFarms.roiDistributed}</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-agri-secondary/50 text-agri-text rounded-lg text-sm hover:bg-agri-secondary transition-colors">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Export CSV
                </button>
              </div>

              {/* CarbonVault Analytics */}
              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-agri-primary" />
                  <h3 className="text-lg font-medium text-agri-text">CarbonVault</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Carbon Credits</span>
                    <span className="text-agri-text">{analyticsData.carbonVault.carbonCredits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">CO₂ Offset</span>
                    <span className="text-agri-text">{analyticsData.carbonVault.co2Offset}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Top Wallets</span>
                    <span className="text-agri-text">{analyticsData.carbonVault.topWallets}</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-agri-secondary/50 text-agri-text rounded-lg text-sm hover:bg-agri-secondary transition-colors">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Export CSV
                </button>
              </div>

              {/* Livestock Analytics */}
              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Cow className="w-6 h-6 text-agri-primary" />
                  <h3 className="text-lg font-medium text-agri-text">Livestock</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Total Animals</span>
                    <span className="text-agri-text">{analyticsData.livestock.totalAnimals}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Investors</span>
                    <span className="text-agri-text">{analyticsData.livestock.totalInvestors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Health Status</span>
                    <span className="text-agri-primary">{analyticsData.livestock.healthStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">ROI Distributed</span>
                    <span className="text-agri-primary">{analyticsData.livestock.roiDistributed}</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-agri-secondary/50 text-agri-text rounded-lg text-sm hover:bg-agri-secondary transition-colors">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Export CSV
                </button>
              </div>

              {/* Staking Analytics */}
              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Coins className="w-6 h-6 text-agri-primary" />
                  <h3 className="text-lg font-medium text-agri-text">Staking</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Total Staked</span>
                    <span className="text-agri-text">{analyticsData.staking.totalStaked}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Avg APY</span>
                    <span className="text-agri-text">{analyticsData.staking.avgAPY}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Total Rewards</span>
                    <span className="text-agri-text">{analyticsData.staking.totalRewards}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agri-text/70 text-sm">Active Stakers</span>
                    <span className="text-agri-text">{analyticsData.staking.activeStakers}</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-agri-secondary/50 text-agri-text rounded-lg text-sm hover:bg-agri-secondary transition-colors">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Export CSV
                </button>
              </div>
            </div>

            {/* Livestock Category Breakdown */}
            <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
              <h3 className="text-xl font-medium text-agri-text mb-6">Livestock Category Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-agri-secondary/20 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Cow className="w-6 h-6 text-agri-primary" />
                    <h4 className="text-lg font-medium text-agri-text">Cattle</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-agri-text/70">Percentage</span>
                      <span className="text-agri-primary">{analyticsData.livestock.categories.cattle}%</span>
                    </div>
                    <div className="w-full bg-agri-border rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-agri-primary to-agri-primary/80 h-2 rounded-full"
                        style={{ width: `${analyticsData.livestock.categories.cattle}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-agri-text/70">ROI Range</span>
                      <span className="text-agri-text">18-22%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-agri-text/70">Maturity</span>
                      <span className="text-agri-text">180-210 days</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-agri-secondary/20 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Bone className="w-6 h-6 text-agri-primary" />
                    <h4 className="text-lg font-medium text-agri-text">Goats</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-agri-text/70">Percentage</span>
                      <span className="text-agri-primary">{analyticsData.livestock.categories.goats}%</span>
                    </div>
                    <div className="w-full bg-agri-border rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-agri-primary to-agri-primary/80 h-2 rounded-full"
                        style={{ width: `${analyticsData.livestock.categories.goats}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-agri-text/70">ROI Range</span>
                      <span className="text-agri-text">16-20%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-agri-text/70">Maturity</span>
                      <span className="text-agri-text">150-180 days</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-agri-secondary/20 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Bird className="w-6 h-6 text-agri-primary" />
                    <h4 className="text-lg font-medium text-agri-text">Poultry</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-agri-text/70">Percentage</span>
                      <span className="text-agri-primary">{analyticsData.livestock.categories.poultry}%</span>
                    </div>
                    <div className="w-full bg-agri-border rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-agri-primary to-agri-primary/80 h-2 rounded-full"
                        style={{ width: `${analyticsData.livestock.categories.poultry}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-agri-text/70">ROI Range</span>
                      <span className="text-agri-text">22-28%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-agri-text/70">Maturity</span>
                      <span className="text-agri-text">90-120 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Report */}
            <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium text-agri-text">Global Report</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-agri-primary text-agri-dark rounded-lg hover:bg-agri-primary/90 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Export All Users</span>
                </button>
              </div>
              <div className="text-center py-8">
                <BarChart3 className="w-16 h-16 text-agri-primary mx-auto mb-4" />
                <p className="text-agri-text/70">Comprehensive analytics dashboard with charts and metrics</p>
                <p className="text-agri-text/50 text-sm mt-2">Export includes: Wallets, NFTs, AV Balance, Carbon, Yield, Staking</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-agri-card border border-agri-border rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-agri-border">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-light text-agri-text">User Management</h3>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-agri-secondary/50 text-agri-text rounded-lg hover:bg-agri-secondary transition-colors">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-agri-primary text-agri-dark rounded-lg hover:bg-agri-primary/90 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-agri-secondary/20">
                  <tr>
                    <th className="text-left p-4 text-agri-text/70 font-light">Wallet</th>
                    <th className="text-left p-4 text-agri-text/70 font-light">Join Date</th>
                    <th className="text-left p-4 text-agri-text/70 font-light">Status</th>
                    <th className="text-left p-4 text-agri-text/70 font-light">NFTs</th>
                    <th className="text-left p-4 text-agri-text/70 font-light">AV Balance</th>
                    <th className="text-left p-4 text-agri-text/70 font-light">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-agri-border hover:bg-agri-secondary/10">
                      <td className="p-4">
                        <div className="text-agri-text font-mono">{user.wallet}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-agri-text/70">{user.joinDate}</div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === 'Active' 
                            ? 'bg-agri-primary/20 text-agri-primary' 
                            : 'bg-agri-accent/20 text-agri-accent'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="text-agri-text">{user.nfts}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-agri-text">{user.avBalance}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button className="p-2 text-agri-text hover:text-agri-primary transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-agri-text hover:text-agri-accent transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-agri-text hover:text-red-400 transition-colors">
                            <UserX className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>

      {/* Batch Modal */}
      {selectedBatch && (
        <BatchModal 
          batch={selectedBatch} 
          onClose={() => setSelectedBatch(null)} 
        />
      )}
    </div>
  );
};

export default AdminPanel;