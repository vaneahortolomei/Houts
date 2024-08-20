import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<MotionSectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
