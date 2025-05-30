'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// It's assumed that a logo.svg file will be placed in the public directory.
// If you have an SVG component for the logo (e.g., from @svgr/webpack), you can import it directly:
// import LogoIcon from '@/public/logo.svg';

const AnimatedLogo = () => {
  // Framer Motion variants for the logo animation
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'circOut',
        delay: 0.3, // Slight delay for the animation to start after page load
      },
    },
  };

  return (
    <motion.div
      className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      aria-label="hueneu studio logo"
    >
      {/* Placeholder for logo.svg. Replace with actual SVG or Image component if logo.svg is an image file. */}
      {/* If using @svgr/webpack as configured in next.config.js, you would do: */}
      {/* <LogoIcon className="w-full h-full text-hueneu-primary" /> */}
      {/* For now, a styled div as a placeholder: */}
      <div 
        className="w-full h-full rounded-full bg-hueneu-primary flex items-center justify-center text-neutral-bg font-heading text-3xl md:text-4xl shadow-subtle"
        title="hueneu logo"
      >
        hN
      </div>
      {/* Example using Next/Image if logo.svg is an actual image file in /public */}
      {/* <Image src="/logo.svg" alt="hueneu Logo" width={160} height={160} priority /> */}
    </motion.div>
  );
};

export default AnimatedLogo;
