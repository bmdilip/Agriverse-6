import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Wallet, 
  MapPin, 
  Leaf, 
  Shield, 
  TrendingUp, 
  Globe, 
  Zap,
  Users,
  BarChart3,
  Award,
  ChevronRight,
  Play,
  Download,
  Star,
  CheckCircle,
  TreePine,
  Coins,
  Target
} from 'lucide-react';

const HomePage = () => {
  const [currentStat, setCurrentStat] = React.useState(0);

  const liveStats = [
    { label: 'Acres Tokenized', value: '2,847', suffix: '', color: 'text-agri-primary' },
    { label: 'CO₂ Offset', value: '1.2M', suffix: 'tons', color: 'text-agri-primary' },
    { label: 'ROI Distributed', value: '$847K', suffix: '', color: 'text-agri-primary' },
    { label: 'Active Investors', value: '12,450', suffix: '', color: 'text-agri-primary' }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % liveStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const howItWorksSteps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Link your Web3 wallet to access the platform",
      color: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
    },
    {
      icon: Globe,
      title: "Browse Projects",
      description: "Explore verified farms and carbon projects",
      color: "from-agri-primary/20 to-agri-primary/30 border-agri-primary/30"
    },
    {
      icon: TrendingUp,
      title: "Invest & Earn",
      description: "Purchase NFTs and earn real-world yields",
      color: "from-purple-500/20 to-purple-600/20 border-purple-500/30"
    },
    {
      icon: Award,
      title: "Track Impact",
      description: "Monitor your environmental and financial returns",
      color: "from-agri-primary/20 to-agri-primary/30 border-agri-primary/30"
    }
  ];

  const whyAgriverseFeatures = [
    {
      icon: Shield,
      title: "RWAcert Verified",
      description: "All assets are blockchain-verified and certified as real-world assets",
      color: "text-agri-primary"
    },
    {
      icon: MapPin,
      title: "Real Assets",
      description: "Backed by tangible farms, crops, and carbon projects with live monitoring",
      color: "text-agri-primary"
    },
    {
      icon: BarChart3,
      title: "Proven Yields",
      description: "Track record of consistent returns with transparent ROI distribution",
      color: "text-agri-primary"
    },
    {
      icon: Leaf,
      title: "Carbon Impact",
      description: "Every investment contributes to environmental sustainability and carbon offset",
      color: "text-agri-primary"
    }
  ];

  const products = [
    {
      title: "AgriYield",
      description: "Short to mid-term crop investments with 90-180 day returns",
      image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800",
      roi: "12-18%",
      period: "90-180 days",
      href: "/agriyield",
      gradient: "from-agri-primary/20 to-agri-primary/5"
    },
    {
      title: "AgriFarms",
      description: "Long-term tree and land NFTs with sustainable growth",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=800",
      roi: "8-15%",
      period: "1-5 years",
      href: "/agrifarms",
      gradient: "from-agri-primary/20 to-agri-primary/5"
    },
    {
      title: "CarbonVault",
      description: "Offset your carbon footprint with verified tree NFTs",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800",
      roi: "Environmental",
      period: "Permanent",
      href: "/carbonvault",
      gradient: "from-agri-primary/20 to-agri-primary/5"
    }
  ];

  const trustedLogos = [
    "RWAcert", "BNB Chain", "Base", "Chainlink", "MetaMask", "WalletConnect"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-2 h-2 bg-agri-primary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-1 h-1 bg-agri-primary rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-3 h-3 bg-agri-primary/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="px-6 py-3 bg-agri-primary/10 backdrop-blur-sm border border-agri-primary/20 rounded-full">
                <span className="text-agri-primary font-medium">🌱 Web3 Agriculture Platform</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-light font-outfit mb-6 leading-tight">
              <span className="bg-gradient-to-r from-agri-primary via-agri-primary/90 to-agri-primary bg-clip-text text-transparent">
                Invest in Real Farms
              </span>
              <br />
              <span className="text-agri-text">
                Powered by Blockchain
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-agri-text/80 font-light max-w-4xl mx-auto leading-relaxed">
              Invest in Real Farms, Crops & Carbon Projects—Powered by Blockchain. 
              <br />
              <span className="text-agri-primary">Earn real-world yields while making a positive environmental impact.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to="/agrifarms">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-agri-primary to-agri-primary/90 text-agri-dark rounded-full font-medium text-lg hover:shadow-lg hover:shadow-agri-primary/25 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(179, 255, 171, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
            </Link>
            <motion.button
              className="px-8 py-4 bg-agri-card/50 backdrop-blur-sm border border-agri-border text-agri-text rounded-full font-light text-lg hover:border-agri-primary/50 hover:bg-agri-primary/5 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(179, 255, 171, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Wallet className="w-5 h-5 mr-2 inline" />
              Connect Wallet
            </motion.button>
            <Link to="/submit-project">
              <motion.button
                className="px-8 py-4 bg-agri-card/30 backdrop-blur-sm border border-agri-border text-agri-text rounded-full font-light text-lg hover:border-agri-primary/50 hover:bg-agri-primary/5 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(179, 255, 171, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                List Your Land
                <MapPin className="w-5 h-5 ml-2 inline" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Enhanced Live Impact Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {liveStats.map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-agri-card/50 backdrop-blur-xl border border-agri-border rounded-2xl p-6 hover:border-agri-primary/30 transition-all duration-300 ${
                  currentStat === index ? 'ring-2 ring-agri-primary/20 bg-agri-primary/5' : ''
                }`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(179, 255, 171, 0.1)"
                }}
              >
                <div className={`text-3xl font-light mb-2 transition-all duration-300 ${stat.color}`}>
                  {stat.value}
                  {stat.suffix && <span className="text-lg ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-agri-text/70 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light font-outfit mb-6 text-agri-text">
              How It <span className="text-agri-primary">Works</span>
            </h2>
            <p className="text-xl text-agri-text/70 font-light max-w-2xl mx-auto">
              Get started with blockchain-powered agricultural investments in four simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 border group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className="w-8 h-8 text-agri-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-agri-primary rounded-full flex items-center justify-center text-agri-dark text-sm font-medium shadow-lg shadow-agri-primary/25">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-agri-text mb-3">{step.title}</h3>
                <p className="text-agri-text/70 font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-agri-card/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light font-outfit mb-6 text-agri-text">
              Investment <span className="text-agri-primary">Products</span>
            </h2>
            <p className="text-xl text-agri-text/70 font-light max-w-2xl mx-auto">
              Choose from our range of verified agricultural and environmental investment opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={product.href}>
                  <div className="bg-agri-card/50 backdrop-blur-xl border border-agri-border rounded-2xl overflow-hidden hover:border-agri-primary/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] hover:shadow-xl hover:shadow-agri-primary/10">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/60 to-transparent" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-agri-primary font-medium text-lg">{product.roi}</div>
                            <div className="text-agri-text/80 text-sm font-light">{product.period}</div>
                          </div>
                          <div className="w-10 h-10 bg-agri-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-agri-primary/30 transition-colors">
                            <ArrowRight className="w-5 h-5 text-agri-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-medium text-agri-text mb-3">{product.title}</h3>
                      <p className="text-agri-text/70 font-light leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Agriverse Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light font-outfit mb-6 text-agri-text">
              Why Choose <span className="text-agri-primary">Agriverse</span>
            </h2>
            <p className="text-xl text-agri-text/70 font-light max-w-2xl mx-auto">
              Built on trust, transparency, and real-world impact with cutting-edge Web3 technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAgriverseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-agri-primary/10 backdrop-blur-sm border border-agri-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-agri-primary/20 transition-all duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-medium text-agri-text mb-3">{feature.title}</h3>
                <p className="text-agri-text/70 font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-20 bg-agri-card/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-agri-text mb-8">
              Trusted by <span className="text-agri-primary">Industry Leaders</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {trustedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-agri-text/60 font-medium text-lg hover:text-agri-primary transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Teaser Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-agri-primary/10 to-agri-primary/5 backdrop-blur-sm border border-agri-primary/20 rounded-3xl p-12"
          >
            <div className="text-6xl mb-6">📱</div>
            <h2 className="text-4xl font-light font-outfit mb-6 text-agri-text">
              Get the <span className="text-agri-primary">Mobile App</span>
            </h2>
            <p className="text-xl text-agri-text/70 font-light mb-8 max-w-2xl mx-auto">
              Manage your agricultural investments on the go. Monitor yields, track carbon credits, and stay connected to your farms.
            </p>
            <div className="text-2xl font-medium text-agri-primary mb-8">
              Coming Soon
            </div>
            <motion.button
              className="px-8 py-4 bg-agri-primary text-agri-dark rounded-full font-medium text-lg hover:shadow-lg hover:shadow-agri-primary/25 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(179, 255, 171, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
              <ChevronRight className="w-5 h-5 ml-2 inline" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Certified & Secure Section */}
      <section className="py-20 bg-agri-card/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light font-outfit mb-6 text-agri-text">
              Certified & <span className="text-agri-primary">Secure</span>
            </h2>
            <p className="text-xl text-agri-text/70 font-light max-w-2xl mx-auto">
              Your investments are protected by industry-leading security and compliance standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Shield, text: "KYC & Legal Validation", color: "text-agri-primary" },
              { icon: Award, text: "Smart Contract Audit", color: "text-agri-primary" },
              { icon: Zap, text: "RWAcert Certification", color: "text-agri-primary" },
              { icon: Users, text: "NFT Certificate Linking", color: "text-agri-primary" },
              { icon: BarChart3, text: "MoU & Risk Compliance", color: "text-agri-primary" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-agri-primary/10 backdrop-blur-sm border border-agri-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-agri-primary/20 transition-all duration-300">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <p className="text-agri-text/80 font-light text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;