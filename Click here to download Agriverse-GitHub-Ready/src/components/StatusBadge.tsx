import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: 'live' | 'upcoming' | 'ended' | 'claimed' | 'overdue';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  size = 'md',
  className = '' 
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'px-2 py-0.5',
      icon: 'w-3 h-3',
      text: 'text-xs'
    },
    md: {
      container: 'px-3 py-1',
      icon: 'w-4 h-4',
      text: 'text-sm'
    },
    lg: {
      container: 'px-4 py-2',
      icon: 'w-5 h-5',
      text: 'text-base'
    }
  };

  // Status configurations
  const statusConfig = {
    live: {
      bg: 'bg-agri-primary/20',
      text: 'text-agri-primary',
      icon: Clock,
      label: 'Live'
    },
    upcoming: {
      bg: 'bg-agri-accent/20',
      text: 'text-agri-accent',
      icon: Clock,
      label: 'Upcoming'
    },
    ended: {
      bg: 'bg-agri-secondary/50',
      text: 'text-agri-text/70',
      icon: CheckCircle,
      label: 'Ended'
    },
    claimed: {
      bg: 'bg-agri-primary/20',
      text: 'text-agri-primary',
      icon: CheckCircle,
      label: 'Claimed'
    },
    overdue: {
      bg: 'bg-red-500/20',
      text: 'text-red-400',
      icon: AlertCircle,
      label: 'Overdue'
    }
  };

  const config = sizeConfig[size];
  const statusCfg = statusConfig[status];
  const IconComponent = statusCfg.icon;

  return (
    <motion.div
      className={`flex items-center space-x-1 ${statusCfg.bg} rounded-full ${config.container} ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <IconComponent className={`${config.icon} ${statusCfg.text}`} />
      <span className={`${config.text} ${statusCfg.text} font-light`}>{statusCfg.label}</span>
    </motion.div>
  );
};

export default StatusBadge;