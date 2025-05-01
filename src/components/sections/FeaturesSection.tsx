
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import ConnectedLines from '../animations/ConnectedLines';
import { FloatingDots } from '../animations/FloatingDots';

const features = [
  {
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our powerful analytics tools',
    icon: '📊',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamlessly connect with popular cloud services',
    icon: '☁️',
  },
  {
    title: 'Real-time Updates',
    description: 'Stay informed with instant notifications and updates',
    icon: '⚡',
  },
  {
    title: 'Secure Platform',
    description: 'Enterprise-grade security for your peace of mind',
    icon: '🔒',
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* <FloatingDots /> */}
      <ConnectedLines />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful Features</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Discover what makes our platform unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 relative overflow-hidden group hover:shadow-lg transition-shadow h-full">
                <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
