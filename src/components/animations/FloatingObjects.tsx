import React from 'react';
import { motion } from 'framer-motion';

interface FloatingObject {
  id: number;
  top: string;
  left: string;
  size: string;
  animation: string;
  color: string;
  shape: 'circle' | 'square' | 'triangle' | 'ring';
}

interface FloatingObjectsProps {
  count?: number;
  colors?: string[];
  className?: string;
}

const FloatingObjects: React.FC<FloatingObjectsProps> = ({ 
  count = 10, 
  colors = ['tech-purple', 'tech-blue', 'tech-pink', 'tech-orange'],
  className = '' 
}) => {
  const generateObjects = (): FloatingObject[] => {
    const objects: FloatingObject[] = [];
    
    for (let i = 0; i < count; i++) {
      const randomTop = `${Math.random() * 100}%`;
      const randomLeft = `${Math.random() * 100}%`;
      const randomSize = `${Math.random() * 5 + 1}rem`;
      
      const animations = [
        'animate-float-horizontal',
        'animate-float-reverse',
        'animate-float-diagonal',
        'animate-float-circle',
      ];
      
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const shapes = ['circle', 'square', 'triangle', 'ring'];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)] as FloatingObject['shape'];
      
      objects.push({
        id: i,
        top: randomTop,
        left: randomLeft,
        size: randomSize,
        animation: randomAnimation,
        color: randomColor,
        shape: randomShape
      });
    }
    
    return objects;
  };
  
  const objects = generateObjects();

  const renderShape = (object: FloatingObject) => {
    const sharedClasses = `floating-object bg-${object.color} opacity-20 ${object.animation}`;
    const style = { top: object.top, left: object.left, width: object.size, height: object.size };
    
    switch (object.shape) {
      case 'circle':
        return (
          <div 
            key={object.id}
            className={`${sharedClasses} rounded-full`}
            style={style}
          />
        );
      case 'square':
        return (
          <div 
            key={object.id}
            className={`${sharedClasses} rounded-md`}
            style={style}
          />
        );
      case 'triangle':
        return (
          <div 
            key={object.id}
            className={`${sharedClasses} bg-transparent`}
            style={{
              ...style,
              width: '0',
              height: '0',
              borderLeft: `${parseInt(object.size) / 2}px solid transparent`,
              borderRight: `${parseInt(object.size) / 2}px solid transparent`,
              borderBottom: `${parseInt(object.size)}px solid currentColor`,
            }}
          />
        );
      case 'ring':
        return (
          <div 
            key={object.id}
            className={`${sharedClasses} rounded-full border-4 bg-transparent`}
            style={style}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {objects.map(object => (
        <motion.div
          key={object.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-20px" }}
          transition={{ duration: 0.5, delay: object.id * 0.1 }}
        >
          {renderShape(object)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingObjects;
