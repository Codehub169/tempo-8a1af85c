'use client';

import { motion } from 'framer-motion';

/**
 * WhoKnewElement Component
 * Creates a visually surprising "Who Knew?" moment triggered by scroll.
 * This element is designed to be playful and reinforce the studio's mysterious and unexpected design moments.
 */
const WhoKnewElement = () => {
  const elementVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="relative w-full my-16 md:my-24 py-12 flex justify-center items-center overflow-hidden">
      {/* Background flair - subtle and abstract */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 0.5}}
        whileInView={{ opacity: 1, scale: 1}}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut"}}
      >
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-hueneu-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-hueneu-primary/10 rounded-full blur-2xl"></div>
      </motion.div>
      
      {/* Main "Who Knew?" element */}
      <motion.div
        className="relative z-10 p-8 md:p-12 bg-white shadow-interactive rounded-softer transform transition-all duration-300 hover:shadow-xl"
        variants={elementVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }} // Trigger when 60% of the element is in view
      >
        <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-hueneu-accent font-semibold text-center">
          Who Knew?
        </h3>
        <p className="mt-4 text-center text-text-light max-w-sm">
          That quiet design could make such a loud statement. We love those little surprises.
        </p>
      </motion.div>
    </div>
  );
};

export default WhoKnewElement;
