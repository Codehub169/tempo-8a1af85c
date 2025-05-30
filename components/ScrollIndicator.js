'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="text-hueneu-primary cursor-pointer"
      animate={{
        y: [0, 10, 0], // Bouncing effect
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      onClick={() => {
        // Smooth scroll to the next section
        // Assuming the next section has an id, e.g., 'story'
        const nextSection = document.getElementById('story'); // Or the ID of the section after hero
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      title="Scroll down"
    >
      <ChevronDown size={36} strokeWidth={1.5} />
    </motion.div>
  );
};

export default ScrollIndicator;
