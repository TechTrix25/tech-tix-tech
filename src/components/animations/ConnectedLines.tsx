
import React from 'react';
import { motion } from 'framer-motion';

interface ConnectedLinesProps {
  color?: string;
}

const ConnectedLines: React.FC<ConnectedLinesProps> = ({ color = '#8B5CF6' }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" className="absolute">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Vertical connecting lines */}
        <path
          d="M50% 10% L50% 90%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-draw-line"
        />
        {/* Horizontal connecting lines */}
        <path
          d="M10% 50% L90% 50%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-draw-line"
        />
      </svg>
      
      {/* Animated balls */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-tech-purple"
        style={{ left: '50%', top: '10%' }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-tech-blue"
        style={{ left: '10%', top: '50%' }}
        animate={{
          x: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default ConnectedLines;
