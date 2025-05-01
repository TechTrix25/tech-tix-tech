
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Card className="border border-gray-100 hover:border-tech-purple/20 transition-all h-full">
        <CardHeader className="space-y-2">
          <div className="w-12 h-12 mb-2 rounded-full bg-gradient-tech flex items-center justify-center text-white">
            {icon}
          </div>
          <CardTitle className="text-lg sm:text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm sm:text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
