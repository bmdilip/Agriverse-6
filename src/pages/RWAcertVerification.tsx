import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  Upload, 
  FileText, 
  Clock, 
  Award,
  AlertCircle,
  Download,
  Eye,
  Search,
  MapPin,
  Calendar,
  User,
  Building,
  Leaf,
  TrendingUp
} from 'lucide-react';

const RWAcertVerification = () => {
  const [activeTab, setActiveTab] = useState('verify');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState('pending');

  const verificationSteps = [
    {
      step: 1,
      title: "Upload Documents",
      description: "Submit property documents, legal certificates, and ownership proofs",
      status: "completed"
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Our AI system analyzes documents for authenticity and compliance",
      status: "completed"
    },
    {
      step: 3,
      title: "Expert Review",
      description: "Legal experts verify the analysis and validate ownership",
      status: "in-progress"
    },
    {
      step: 4,
      title: "Blockchain Registration",
      description: "Asset is registered on blockchain with RWAcert certification",
      status: "pending"
    }
  ];

  const verifiedAssets = [
    {
      id: 1,
      title: "Organic Wheat Farm - Punjab",
      type: "Agricultural Land",
      size: "25 acres",
      owner: "Green Farms Ltd.",
      certDate: "2024-01-15",
      certId: "RWA-2024-001",
      status: "Verified",
      value: "$125,000",
      image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Teak Plantation - Kerala",
      type: "Forest Land",
      size: "50 acres",
      owner: "EcoForest Pvt Ltd.",
      certDate: "2024-01-12",
      certId: "RWA-2024-002",
      status: "Verified",
      value: "$280,000",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Mango Orchard - Maharashtra",
      type: "Fruit Plantation",
      size: "15 acres",
      owner: "Fruit Valley Co.",
      certDate: "2024-01-10",
      certId: "RWA-2024-003",
      status: "Verified",
      value: "$95,000",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setVerificationStatus('processing');
    }
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
            <span className="text-agri-primary">RWAcert</span> Verification
          </h1>
          <p className="text-xl text-agri-text/70 font-light max-w-3xl mx-auto">
            Verify and certify real-world assets on the blockchain. 
            Ensure transparency and authenticity for all agricultural investments.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-agri-card border border-agri-border rounded-2xl p-6 text-center">
            <Shield className="w-8 h-8 text-agri-primary mx-auto mb-3" />
            <div className="text-2xl font-light text-agri-text mb-1">2,847</div>
            <div className="text-agri-text/70 text-sm">Assets Verified</div>
          </div>
          <div className="bg-agri-card border border-agri-border rounded-2xl p-6 text-center">
            <Award className="w-8 h-8 text-agri-accent mx-auto mb-3" />
            <div className="text-2xl font-light text-agri-text mb-1">99.8%</div>
            <div className="text-agri-text/70 text-sm">Accuracy Rate</div>
          </div>
          <div className="bg-agri-card border border-agri-border rounded-2xl p-6 text-center">
            <Clock className="w-8 h-8 text-agri-accent mx-auto mb-3" />
            <div className="text-2xl font-light text-agri-text mb-1">{"< 2 min"}</div>
            <div className="text-agri-text/70 text-sm">Verification Time</div>
          </div>
          <div className="bg-agri-card border border-agri-border rounded-2xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-agri-primary mx-auto mb-3" />
            <div className="text-2xl font-light text-agri-text mb-1">$2.4B</div>
            <div className="text-agri-text/70 text-sm">Assets Value</div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-agri-card border border-agri-border rounded-full p-1">
            <button
              onClick={() => setActiveTab('verify')}
              className={`px-8 py-3 rounded-full font-light transition-all duration-300 ${
                activeTab === 'verify'
                  ? 'bg-agri-primary text-agri-dark'
                  : 'text-agri-text hover:text-agri-primary'
              }`}
            >
              <Upload className="w-5 h-5 mr-2 inline" />
              Verify Asset
            </button>
            <button
              onClick={() => setActiveTab('verified')}
              className={`px-8 py-3 rounded-full font-light transition-all duration-300 ${
                activeTab === 'verified'
                  ? 'bg-agri-primary text-agri-dark'
                  : 'text-agri-text hover:text-agri-primary'
              }`}
            >
              <CheckCircle className="w-5 h-5 mr-2 inline" />
              Verified Assets
            </button>
            <button
              onClick={() => setActiveTab('search')}
              className={`px-8 py-3 rounded-full font-light transition-all duration-300 ${
                activeTab === 'search'
                  ? 'bg-agri-primary text-agri-dark'
                  : 'text-agri-text hover:text-agri-primary'
              }`}
            >
              <Search className="w-5 h-5 mr-2 inline" />
              Search Certificates
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'verify' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Upload Section */}
            <div className="bg-agri-card border border-agri-border rounded-2xl p-8">
              <h2 className="text-3xl font-light text-agri-text mb-6">Upload Asset Documents</h2>
              
              <div className="border-2 border-dashed border-agri-border rounded-xl p-8 text-center mb-6">
                <Upload className="w-12 h-12 text-agri-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium text-agri-text mb-2">Drop files here or click to upload</h3>
                <p className="text-agri-text/70 mb-4">
                  Supported formats: PDF, JPG, PNG (Max 10MB per file)
                </p>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="file-upload"
                  className="px-6 py-3 bg-agri-primary text-agri-dark rounded-lg font-medium cursor-pointer hover:bg-agri-primary/90 transition-colors"
                >
                  Choose Files
                </label>
              </div>

              {uploadedFile && (
                <div className="bg-agri-secondary/20 border border-agri-border rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-agri-primary" />
                      <span className="text-agri-text">{uploadedFile.name}</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-agri-accent" />
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-agri-text">Required Documents:</h4>
                <div className="space-y-2">
                  {[
                    "Property Title Deed",
                    "Land Survey Report",
                    "Government Registration",
                    "Environmental Clearance",
                    "Ownership Proof"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-agri-primary rounded-full" />
                      <span className="text-agri-text/70">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Verification Process */}
            <div className="bg-agri-card border border-agri-border rounded-2xl p-8">
              <h2 className="text-3xl font-light text-agri-text mb-6">Verification Process</h2>
              
              <div className="space-y-6">
                {verificationSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.status === 'completed' ? 'bg-agri-primary/20 text-agri-primary' :
                      step.status === 'in-progress' ? 'bg-agri-accent/20 text-agri-accent' :
                      'bg-agri-secondary/50 text-agri-text/50'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : step.status === 'in-progress' ? (
                        <Clock className="w-5 h-5" />
                      ) : (
                        <span className="font-medium">{step.step}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-agri-text mb-1">{step.title}</h4>
                      <p className="text-agri-text/70 font-light">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-agri-primary/10 border border-agri-primary/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-agri-primary" />
                  <div>
                    <h4 className="text-agri-text font-medium">Verification in Progress</h4>
                    <p className="text-agri-text/70 text-sm">Your documents are being reviewed by our experts. You'll receive an update within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'verified' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {verifiedAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-agri-card border border-agri-border rounded-2xl overflow-hidden hover:border-agri-primary/50 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img 
                    src={asset.image} 
                    alt={asset.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-agri-primary/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <CheckCircle className="w-4 h-4 text-agri-primary" />
                      <span className="text-agri-primary text-xs font-medium">Verified</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-agri-primary font-medium text-lg">{asset.value}</div>
                    <div className="text-agri-text/80 text-sm">{asset.size}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-agri-text mb-2">{asset.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-agri-text/70 text-sm">
                      <Building className="w-4 h-4 mr-2" />
                      {asset.type}
                    </div>
                    <div className="flex items-center text-agri-text/70 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {asset.owner}
                    </div>
                    <div className="flex items-center text-agri-text/70 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Certified: {asset.certDate}
                    </div>
                  </div>
                  
                  <div className="bg-agri-secondary/20 rounded-lg p-3 mb-4">
                    <div className="text-agri-text/70 text-xs mb-1">Certificate ID</div>
                    <div className="text-agri-text font-mono text-sm">{asset.certId}</div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center px-3 py-2 bg-agri-primary/20 text-agri-primary rounded-lg text-sm hover:bg-agri-primary/30 transition-colors">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>
                    <button className="flex-1 flex items-center justify-center px-3 py-2 bg-agri-secondary/50 text-agri-text rounded-lg text-sm hover:bg-agri-secondary transition-colors">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'search' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-agri-card border border-agri-border rounded-2xl p-8">
              <h2 className="text-3xl font-light text-agri-text mb-6 text-center">
                Search RWAcert Certificates
              </h2>
              
              <div className="mb-8">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Enter Certificate ID or Asset Name"
                      className="w-full px-4 py-3 bg-agri-secondary/20 border border-agri-border rounded-lg text-agri-text placeholder-agri-text/50 focus:border-agri-primary focus:outline-none"
                    />
                  </div>
                  <motion.button
                    className="px-8 py-3 bg-agri-primary text-agri-dark rounded-lg font-medium hover:bg-agri-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search className="w-5 h-5 mr-2 inline" />
                    Search
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-agri-secondary/20 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-agri-text mb-4">Quick Search</h3>
                  <div className="space-y-3">
                    {[
                      "RWA-2024-001",
                      "RWA-2024-002", 
                      "RWA-2024-003"
                    ].map((id, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-3 bg-agri-card border border-agri-border rounded-lg hover:border-agri-primary/50 transition-colors"
                      >
                        <div className="text-agri-text font-mono">{id}</div>
                        <div className="text-agri-text/70 text-sm">Click to view certificate</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-agri-secondary/20 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-agri-text mb-4">Verification Guide</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-agri-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-agri-primary text-xs font-medium">1</span>
                      </div>
                      <div>
                        <div className="text-agri-text font-medium">Enter Certificate ID</div>
                        <div className="text-agri-text/70 text-sm">Use the unique RWA certificate identifier</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-agri-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-agri-primary text-xs font-medium">2</span>
                      </div>
                      <div>
                        <div className="text-agri-text font-medium">Verify Authenticity</div>
                        <div className="text-agri-text/70 text-sm">Check blockchain registration and details</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-agri-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-agri-primary text-xs font-medium">3</span>
                      </div>
                      <div>
                        <div className="text-agri-text font-medium">Download Certificate</div>
                        <div className="text-agri-text/70 text-sm">Get official verification document</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-agri-card/50 border border-agri-border rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-agri-primary mx-auto mb-4" />
              <h3 className="text-xl font-medium text-agri-text mb-2">Blockchain Secured</h3>
              <p className="text-agri-text/70 font-light">
                All certificates are immutably stored on blockchain for maximum security and transparency.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-agri-accent mx-auto mb-4" />
              <h3 className="text-xl font-medium text-agri-text mb-2">Expert Verified</h3>
              <p className="text-agri-text/70 font-light">
                Legal and agricultural experts validate every asset before certification.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-agri-primary mx-auto mb-4" />
              <h3 className="text-xl font-medium text-agri-text mb-2">Globally Recognized</h3>
              <p className="text-agri-text/70 font-light">
                RWAcert is recognized by international agricultural and investment bodies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RWAcertVerification;