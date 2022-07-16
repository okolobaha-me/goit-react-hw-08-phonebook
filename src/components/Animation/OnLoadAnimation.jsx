import { motion } from 'framer-motion';
import React from 'react';

export const OnLoadAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1, translateY: -30 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
