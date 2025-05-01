
import React from 'react';
import { motion } from 'framer-motion';
import { FloatingDots } from './FloatingDots';
import FloatingObjects from './FloatingObjects';

export const AnimatedPageBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FloatingObjects count={12} />
        <FloatingDots />
      </motion.div>
    </div>
  );
};
