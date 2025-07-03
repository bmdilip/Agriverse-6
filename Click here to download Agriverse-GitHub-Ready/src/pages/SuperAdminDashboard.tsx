import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Users, 
  Shield, 
  Settings, 
  BarChart3, 
  Database,
  Lock,
  Unlock,
  Eye,
  Edit,
  Trash2,
  Plus,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Globe,
  Server,
  Activity,
  UserCheck,
  UserX,
  Key,
  FileText,
  Coins,
  TrendingUp
} from 'lucide-react';

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const platformStats = {
    totalUsers: 12847,
    totalAdmins: 8,
    activeContracts: 15,
    totalValue: '$24.5M',
    monthlyGrowth: '+18.5%',
    systemHealth: 99.8,
    activeTransactions: 1247,
    pendingActions: 23
  };

  const adminUsers = [
    {
      id: 1,
      username: 'admin_john',
      email: 'john@agriverse.io',
      role: 'Senior Admin',
      permissions: ['minting', 'analytics', 'staking', 'marketplace'],
      lastLogin: '2025-01-15 14:30',
      status: 'Active',
      actionsToday: 45,
      createdAt: '2024-12-01'
    },
    {
      id: 2,
      username: 'admin_sarah',
      email: 'sarah@agriverse.io',
      role: 'Content Admin',
      permissions: ['analytics', 'marketplace'],
      lastLogin: '2025-01-15 09:15',
      status: 'Active',
      actionsToday: 23,
      createdAt: '2024-11-15'
    },
    {
      id: 3,
      username: 'admin_mike',
      email: 'mike@agriverse.io',
      role: 'Technical Admin',
      permissions: ['minting', 'certs', 'staking'],
      lastLogin: '2025-01-14 18:45',
      status: 'Inactive',
      actionsToday: 0,
      createdAt: '2024-10-20'
    }
  ];

  const smartContracts = [
    {
      name: 'AgriNFT',
      address: '0x1234...5678',
      status: 'Active',
      version: 'v2.1.0',
      lastUpdate: '2025-01-10',
      gasUsed: '2.4M',
      transactions: 15420
    },
    {
      name: 'AgriVault',
      address: '0x9876...4321',
      status: 'Active',
      version: 'v1.8.2',
      lastUpdate: '2025-01-08',
      gasUsed: '1.8M',
      transactions: 8934
    },
    {
      name: 'YieldManager',
      address: '0x5555...7777',
      status: 'Paused',
      version: 'v1.5.1',
      lastUpdate: '2025-01-05',
      gasUsed: '3.2M',
      transactions: 23456
    },
    {
      name: 'CertificateEngine',
      address: '0x8888...9999',
      status: 'Active',
      version: 'v2.0.0',
      lastUpdate: '2025-01-12',
      gasUsed: '1.2M',
      transactions: 5678
    },
    {
      name: 'RWAcert',
      address: '0x2222...3333',
      status: 'Active',
      version: 'v1.9.0',
      lastUpdate: '2025-01-11',
      gasUsed: '0.8M',
      transactions: 3421
    }
  ];

  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'YieldManager contract paused for maintenance',
      time: '2 hours ago',
      severity: 'Medium'
    },
    {
      id: 2,
      type: 'info',
      message: 'New admin user created: admin_sarah',
      time: '1 day ago',
      severity: 'Low'
    },
    {
      id: 3,
      type: 'error',
      message: 'Failed transaction detected on AgriVault',
      time: '3 days ago',
      severity: 'High'
    }
  ];

  const recentActions = [
    {
      admin: 'admin_john',
      action: 'Updated NFT metadata for batch #127',
      timestamp: '2025-01-15 14:25',
      category: 'NFT Management'
    },
    {
      admin: 'admin_sarah',
      action: 'Approved marketplace listing #456',
      timestamp: '2025-01-15 13:45',
      category: 'Marketplace'
    },
    {
      admin: 'admin_mike',
      action: 'Triggered ROI payout for AgriYield batch',
      timestamp: '2025-01-15 12:30',
      category: 'Yield Management'
    }
  ];

  const availablePermissions = [
    { id: 'minting', name: 'NFT Minting', description: 'Create and mint new NFTs' },
    { id: 'certs', name: 'Certificates', description: 'Manage RWAcert and legal documents' },
    { id: 'staking', name: 'Staking Pools', description: 'Configure staking parameters' },
    { id: 'analytics', name: 'Analytics', description: 'View platform analytics and reports' },
    { id: 'marketplace', name: 'Marketplace', description: 'Manage NFT marketplace operations' },
    { id: 'contracts', name: 'Smart Contracts', description: 'Deploy and manage contracts' }
  ];

  const AdminModal = ({ admin, onClose, onSave }) => {
    const [editedAdmin, setEditedAdmin] = useState(admin || {
      username: '',
      email: '',
      role: '',
      permissions: [],
      status: 'Active'
    });

    const handlePermissionToggle = (permissionId) => {
      setEditedAdmin(prev => ({
        ...prev,
        permissions: prev.permissions.includes(permissionId)
          ? prev.permissions.filter(p => p !== permissionId)
          : [...prev.permissions, permissionId]
      }));
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-agri-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-agri-card border border-agri-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light text-agri-text">
                {admin ? 'Edit Admin' : 'Create Admin'}
              </h2>
              <button onClick={onClose} className="text-agri-text/70 hover:text-agri-text">
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-agri-text/70 mb-2">Username</label>
                  <input
                    type="text"
                    value={editedAdmin.username}
                    onChange={(e) => setEditedAdmin({...editedAdmin, username: e.target.value})}
                    className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-purple-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-agri-text/70 mb-2">Email</label>
                  <input
                    type="email"
                    value={editedAdmin.email}
                    onChange={(e) => setEditedAdmin({...editedAdmin, email: e.target.value})}
                    className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-purple-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-agri-text/70 mb-2">Role</label>
                <select
                  value={editedAdmin.role}
                  onChange={(e) => setEditedAdmin({...editedAdmin, role: e.target.value})}
                  className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text focus:border-purple-400 focus:outline-none"
                >
                  <option value="">Select Role</option>
                  <option value="Senior Admin">Senior Admin</option>
                  <option value="Content Admin">Content Admin</option>
                  <option value="Technical Admin">Technical Admin</option>
                  <option value="Analytics Admin">Analytics Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-agri-text/70 mb-4">Permissions</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {availablePermissions.map((permission) => (
                    <div
                      key={permission.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        editedAdmin.permissions?.includes(permission.id)
                          ? 'border-purple-400 bg-purple-400/10'
                          : 'border-agri-border hover:border-purple-400/50'
                      }`}
                      onClick={() => handlePermissionToggle(permission.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-agri-text font-medium">{permission.name}</div>
                          <div className="text-agri-text/70 text-sm">{permission.description}</div>
                        </div>
                        {editedAdmin.permissions?.includes(permission.id) && (
                          <CheckCircle className="w-5 h-5 text-purple-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => onSave(editedAdmin)}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  {admin ? 'Update Admin' : 'Create Admin'}
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-agri-secondary/50 text-agri-text rounded-lg font-medium hover:bg-agri-secondary transition-colors"
                >
                  Cancel
                </button>
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
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-light font-outfit text-agri-text">
              <span className="text-purple-400">SuperAdmin</span> Dashboard
            </h1>
            <p className="text-agri-text/70 font-light">Platform-wide administration and monitoring</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-agri-card border border-agri-border rounded-lg px-4 py-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-agri-text text-sm">System Healthy</span>
            </div>
            <button className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-purple-400" />
              <span className="text-agri-accent text-sm font-medium">{platformStats.monthlyGrowth}</span>
            </div>
            <div className="text-3xl font-light text-agri-text mb-2">{platformStats.totalUsers.toLocaleString()}</div>
            <div className="text-agri-text/70 text-sm">Total Users</div>
          </div>

          <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Shield className="w-8 h-8 text-purple-400" />
              <span className="text-agri-primary text-sm font-medium">Active</span>
            </div>
            <div className="text-3xl font-light text-agri-text mb-2">{platformStats.totalAdmins}</div>
            <div className="text-agri-text/70 text-sm">Admin Users</div>
          </div>

          <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Database className="w-8 h-8 text-purple-400" />
              <span className="text-agri-accent text-sm font-medium">{platformStats.activeContracts}/15</span>
            </div>
            <div className="text-3xl font-light text-agri-text mb-2">{platformStats.totalValue}</div>
            <div className="text-agri-text/70 text-sm">Platform Value</div>
          </div>

          <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-purple-400" />
              <span className="text-green-400 text-sm font-medium">{platformStats.systemHealth}%</span>
            </div>
            <div className="text-3xl font-light text-agri-text mb-2">{platformStats.activeTransactions}</div>
            <div className="text-agri-text/70 text-sm">Active Transactions</div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'admins', label: 'Admin Management', icon: Users },
            { id: 'contracts', label: 'Smart Contracts', icon: Database },
            { id: 'analytics', label: 'Platform Analytics', icon: TrendingUp },
            { id: 'system', label: 'System Health', icon: Server },
            { id: 'settings', label: 'Global Settings', icon: Settings }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-light transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-agri-card border border-agri-border text-agri-text hover:border-purple-400'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                  <h3 className="text-xl font-medium text-agri-text mb-4">System Alerts</h3>
                  <div className="space-y-3">
                    {systemAlerts.map((alert) => (
                      <div key={alert.id} className={`p-4 rounded-lg border ${
                        alert.type === 'error' ? 'bg-red-500/10 border-red-500/20' :
                        alert.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20' :
                        'bg-blue-500/10 border-blue-500/20'
                      }`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            {alert.type === 'error' && <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />}
                            {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />}
                            {alert.type === 'info' && <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />}
                            <div>
                              <div className="text-agri-text">{alert.message}</div>
                              <div className="text-agri-text/70 text-sm">{alert.time}</div>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            alert.severity === 'High' ? 'bg-red-500/20 text-red-400' :
                            alert.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {alert.severity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                  <h3 className="text-xl font-medium text-agri-text mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-4 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
                      <Database className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm">Backup System</div>
                    </button>
                    <button className="p-4 bg-agri-primary/20 border border-agri-primary/30 text-agri-primary rounded-lg hover:bg-agri-primary/30 transition-colors">
                      <Zap className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm">Sync Metadata</div>
                    </button>
                    <button className="p-4 bg-agri-accent/20 border border-agri-accent/30 text-agri-accent rounded-lg hover:bg-agri-accent/30 transition-colors">
                      <Globe className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm">Refresh IPFS</div>
                    </button>
                    <button className="p-4 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                      <Lock className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm">Emergency Pause</div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-agri-card border border-agri-border rounded-2xl p-6">
                <h3 className="text-xl font-medium text-agri-text mb-4">Recent Admin Actions</h3>
                <div className="space-y-4">
                  {recentActions.map((action, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-agri-secondary/20 rounded-lg">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-agri-text font-medium">{action.action}</div>
                        <div className="text-agri-text/70 text-sm">by {action.admin}</div>
                        <div className="text-agri-text/50 text-xs">{action.timestamp}</div>
                      </div>
                      <span className="px-2 py-1 bg-agri-primary/20 text-agri-primary rounded-full text-xs">
                        {action.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Admin Management Tab */}
          {activeTab === 'admins' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-light text-agri-text">Admin Users</h3>
                <button
                  onClick={() => setSelectedAdmin({})}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Admin</span>
                </button>
              </div>

              <div className="bg-agri-card border border-agri-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-agri-secondary/20">
                      <tr>
                        <th className="text-left p-4 text-agri-text/70 font-light">User</th>
                        <th className="text-left p-4 text-agri-text/70 font-light">Role</th>
                        <th className="text-left p-4 text-agri-text/70 font-light">Permissions</th>
                        <th className="text-left p-4 text-agri-text/70 font-light">Last Login</th>
                        <th className="text-left p-4 text-agri-text/70 font-light">Status</th>
                        <th className="text-left p-4 text-agri-text/70 font-light">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adminUsers.map((admin) => (
                        <tr key={admin.id} className="border-b border-agri-border hover:bg-agri-secondary/10">
                          <td className="p-4">
                            <div>
                              <div className="text-agri-text font-medium">{admin.username}</div>
                              <div className="text-agri-text/70 text-sm">{admin.email}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-agri-text">{admin.role}</span>
                          </td>
                          <td className="p-4">
                            <div className="flex flex-wrap gap-1">
                              {admin.permissions.slice(0, 2).map((perm) => (
                                <span key={perm} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                                  {perm}
                                </span>
                              ))}
                              {admin.permissions.length > 2 && (
                                <span className="px-2 py-1 bg-agri-secondary/50 text-agri-text rounded text-xs">
                                  +{admin.permissions.length - 2}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-agri-text/70 text-sm">{admin.lastLogin}</div>
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              admin.status === 'Active' 
                                ? 'bg-agri-primary/20 text-agri-primary' 
                                : 'bg-agri-secondary/50 text-agri-text/70'
                            }`}>
                              {admin.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setSelectedAdmin(admin)}
                                className="p-2 text-agri-text hover:text-purple-400 transition-colors"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-agri-text hover:text-agri-primary transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-agri-text hover:text-red-400 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Smart Contracts Tab */}
          {activeTab === 'contracts' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-agri-text">Smart Contract Management</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {smartContracts.map((contract, index) => (
                  <div key={index} className="bg-agri-card border border-agri-border rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-medium text-agri-text">{contract.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        contract.status === 'Active' ? 'bg-agri-primary/20 text-agri-primary' :
                        contract.status === 'Paused' ? 'bg-agri-accent/20 text-agri-accent' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {contract.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-agri-text/70">Address</span>
                        <span className="text-agri-text font-mono">{contract.address}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-agri-text/70">Version</span>
                        <span className="text-agri-text">{contract.version}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-agri-text/70">Gas Used</span>
                        <span className="text-agri-text">{contract.gasUsed}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-agri-text/70">Transactions</span>
                        <span className="text-agri-text">{contract.transactions.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                        contract.status === 'Active' 
                          ? 'bg-agri-accent/20 text-agri-accent hover:bg-agri-accent/30'
                          : 'bg-agri-primary/20 text-agri-primary hover:bg-agri-primary/30'
                      }`}>
                        {contract.status === 'Active' ? 'Pause' : 'Resume'}
                      </button>
                      <button className="flex-1 py-2 px-3 bg-agri-secondary/50 text-agri-text rounded-lg text-sm font-medium hover:bg-agri-secondary transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other tabs would be implemented similarly... */}
        </motion.div>
      </div>

      {/* Admin Modal */}
      {selectedAdmin && (
        <AdminModal 
          admin={selectedAdmin.id ? selectedAdmin : null}
          onClose={() => setSelectedAdmin(null)}
          onSave={(adminData) => {
            console.log('Saving admin:', adminData);
            setSelectedAdmin(null);
          }}
        />
      )}
    </div>
  );
};

export default SuperAdminDashboard;