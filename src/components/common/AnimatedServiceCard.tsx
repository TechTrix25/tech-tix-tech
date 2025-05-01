
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface AnimatedServiceCardProps {
  number: string;
  title: string;
  description: string;
  color: "emerald" | "orange" | "purple" | "teal";
}

const colorVariants = {
  emerald: "bg-emerald-400/20",
  orange: "bg-orange-400/20",
  purple: "bg-purple-400/20",
  teal: "bg-teal-400/20",
};

const numberColorVariants = {
  emerald: "bg-emerald-400",
  orange: "bg-orange-400",
  purple: "bg-purple-400",
  teal: "bg-teal-700",
};

export const AnimatedServiceCard = ({ number, title, description, color }: AnimatedServiceCardProps) => {
  return (
    <div>
    <motion.div
      className="relative p-6 bg-white rounded-xl shadow-sm duration-700 hover:scale-110 cursor-pointer h-50"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn(
        "absolute top-4 left-4 w-16 h-16 rounded-full -z-10 blur-xl",
        colorVariants[color]
      )} />
      
      <div className="flex flex-col space-y-4">
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold",
          numberColorVariants[color]
        )}>
          {number}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
    </div>
  );
};
