
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackdropProps {
  children?: React.ReactNode;
  className?: string;
  imageUrl: string;
}

const AnimatedBackdrop: React.FC<AnimatedBackdropProps> = ({ 
  children, 
  className = '',
  imageUrl
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ 
          opacity: 1, 
          rotate: 360,
          transition: { 
            opacity: { duration: 0.8 }, 
            rotate: { duration: 80, repeat: Infinity, ease: "linear" } 
          } 
        }}
      >
        <img 
          src={imageUrl} 
          alt="Backdrop" 
          className="w-[150%] h-[150%] object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        />
      </motion.div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackdrop;
