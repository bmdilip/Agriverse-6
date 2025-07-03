import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Wallet, ChevronDown, User, Shield, Crown, Globe, LogIn } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import CurrencySelector from './CurrencySelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const connectWallet = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'AgriYield', href: '/agriyield' },
    { name: 'AgriHub', href: '/agrihub' },
    { name: 'Gaming', href: '/gaming' },
    {
      name: 'Resources',
      href: '#',
      dropdown: [
        { name: 'AgriGPT', href: '/agrigpt', desc: 'AI investment assistant' },
        { name: 'Leaderboard', href: '/leaderboard', desc: 'Top investors & carbon heroes' },
        { name: 'Referral', href: '/referral', desc: 'Earn rewards for referrals' },
        { name: 'Submit Project', href: '/submit-project', desc: 'List your agricultural project' },
        { name: 'FarmLive', href: '/farm-live', desc: 'Live farm monitoring' },
      ]
    },
    { name: 'RWAcert', href: '/rwacert' },
    { name: 'NFT Marketplace', href: '/marketplace' },
    {
      name: 'Purchase',
      href: '#',
      dropdown: [
        { name: 'AV Token Chart', href: '/purchase#chart', desc: 'View token price & analytics' },
        { name: 'Buy AV', href: '/purchase#buy', desc: 'Purchase AV tokens' },
        { name: 'Cross-chain Swap', href: '/purchase#swap', desc: 'Swap tokens across chains' },
        { name: 'Fiat Payment', href: '/purchase#fiat', desc: 'Buy with credit card' },
      ]
    },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-agri-dark/80 backdrop-blur-xl border-b border-agri-primary/20 shadow-lg shadow-agri-primary/5' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-agri-primary to-agri-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-agri-primary/25"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(179, 255, 171, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-agri-dark font-bold text-xl">A</span>
              </motion.div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-agri-primary to-agri-primary/80 bg-clip-text text-transparent">
                  Agriverse
                </span>
                <div className="text-xs text-agri-text/60 font-light">Web3 Agriculture</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button className="flex items-center space-x-1 px-4 py-2 text-agri-text hover:text-agri-primary transition-all duration-200 font-light rounded-lg hover:bg-agri-primary/5">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-72 bg-agri-card/95 backdrop-blur-xl border border-agri-border rounded-2xl shadow-2xl shadow-agri-primary/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-agri-text hover:text-agri-primary hover:bg-agri-primary/5 transition-all duration-200 rounded-xl group/item"
                            >
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-agri-text/60 mt-1">{subItem.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-agri-text hover:text-agri-primary transition-all duration-200 font-light rounded-lg hover:bg-agri-primary/5 ${
                        location.pathname === item.href ? 'text-agri-primary bg-agri-primary/10' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* Currency Selector */}
            <CurrencySelector />

            {/* Wallet Connection */}
            <motion.button
              onClick={connectWallet}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                isWalletConnected
                  ? 'bg-agri-primary/10 text-agri-primary border-agri-primary/30 shadow-lg shadow-agri-primary/20'
                  : 'bg-agri-card/50 backdrop-blur-sm text-agri-text border-agri-border hover:border-agri-primary/50 hover:bg-agri-primary/5'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Wallet className="w-4 h-4" />
              <span className="font-light">
                {isWalletConnected ? '0x1234...5678' : 'Connect Wallet'}
              </span>
            </motion.button>
            
            {/* Auth Buttons */}
            {isWalletConnected ? (
              <div className="flex items-center space-x-2">
                <Link to="/user-dashboard">
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-agri-primary/10 border border-agri-primary/30 text-agri-primary rounded-lg font-medium hover:bg-agri-primary/20 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-4 h-4" />
                    <span>Dashboard</span>
                  </motion.button>
                </Link>
                
                <Link to="/admin">
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-agri-card/50 backdrop-blur-sm border border-agri-border text-agri-text rounded-lg font-medium hover:border-agri-primary/50 hover:bg-agri-primary/5 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Shield className="w-4 h-4" />
                    <span>Admin</span>
                  </motion.button>
                </Link>

                <Link to="/superadmin-dashboard">
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 rounded-lg font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Crown className="w-4 h-4" />
                    <span>SuperAdmin</span>
                  </motion.button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/user-dashboard">
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-agri-card/50 backdrop-blur-sm border border-agri-border text-agri-text rounded-lg font-medium hover:border-agri-primary/50 hover:bg-agri-primary/5 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>DApp Login</span>
                  </motion.button>
                </Link>
                
                <Link to="/admin">
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-agri-card/50 backdrop-blur-sm border border-agri-border text-agri-text rounded-lg font-medium hover:border-agri-primary/50 hover:bg-agri-primary/5 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Shield className="w-4 h-4" />
                    <span>Admin Login</span>
                  </motion.button>
                </Link>

                <Link to="/superadmin-dashboard">
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 rounded-lg font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Crown className="w-4 h-4" />
                    <span>SuperAdmin</span>
                  </motion.button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-agri-text hover:text-agri-primary transition-colors duration-200 rounded-lg hover:bg-agri-primary/5"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-agri-card/95 backdrop-blur-xl border-t border-agri-border"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-1">
                    <div className="text-agri-text px-3 py-2 text-sm font-medium">
                      {item.name}
                    </div>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-6 py-2 text-sm text-agri-text hover:text-agri-primary hover:bg-agri-primary/5 transition-all duration-200 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-agri-text hover:text-agri-primary hover:bg-agri-primary/5 transition-all duration-200 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-agri-border space-y-2">
              <button
                onClick={connectWallet}
                className="w-full flex items-center justify-center space-x-2 px-3 py-3 text-base font-medium bg-agri-primary/10 border border-agri-primary/30 text-agri-primary rounded-lg"
              >
                <Wallet className="w-4 h-4" />
                <span>{isWalletConnected ? '0x1234...5678' : 'Connect Wallet'}</span>
              </button>
              
              {isWalletConnected && (
                <>
                  <Link to="/user-dashboard" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center space-x-2 px-3 py-3 text-base font-medium bg-agri-card border border-agri-border text-agri-text rounded-lg">
                      <User className="w-4 h-4" />
                      <span>Dashboard</span>
                    </button>
                  </Link>
                  <Link to="/admin" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center space-x-2 px-3 py-3 text-base font-medium bg-agri-card border border-agri-border text-agri-text rounded-lg">
                      <Shield className="w-4 h-4" />
                      <span>Admin</span>
                    </button>
                  </Link>
                  <Link to="/superadmin-dashboard" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center space-x-2 px-3 py-3 text-base font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 rounded-lg">
                      <Crown className="w-4 h-4" />
                      <span>SuperAdmin</span>
                    </button>
                  </Link>
                </>
              )}
              
              <div className="flex items-center justify-between pt-4">
                <LanguageSelector />
                <CurrencySelector />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;