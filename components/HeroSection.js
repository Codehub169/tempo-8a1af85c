'use client';

import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2 + 0.5, // Delay after logo animation
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative text-center p-8 bg-neutral-bg overflow-hidden"
    >
      {/* Content container for vertical centering and spacing */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'circOut' }}
        >
          <AnimatedLogo />
        </motion.div>

        <motion.h1 
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-dark mt-10 mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Where stories find their aesthetic.
        </motion.h1>
        
        <motion.p 
          className="font-sans text-lg md:text-xl text-text-light max-w-md md:max-w-lg"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Designs that whisper loud stories.
        </motion.p>
      </div>

      {/* Scroll Indicator at the bottom of the viewport */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;
