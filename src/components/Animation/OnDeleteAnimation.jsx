import { motion } from 'framer-motion';
import React from 'react';

export const OnDeleteAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1, translateY: 59 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
