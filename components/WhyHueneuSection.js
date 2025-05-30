'use client';

import { motion } from 'framer-motion';

/**
 * WhyHueneuSection Component
 * Delivers the emotional brand pitch using poetic copy, highlighting calm, mystery, and balance.
 * Uses subtle animations to enhance the reading experience.
 */
const WhyHueneuSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="why-hueneu"
      className="py-16 md:py-24 bg-neutral-bg text-text-dark min-h-[70vh] flex flex-col justify-center"
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 max-w-3xl text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
      >
        <motion.h2 
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-hueneu-primary mb-8 md:mb-12"
          variants={itemVariants}
        >
          Why hueneu?
        </motion.h2>

        <motion.p 
          className="font-sans text-lg md:text-xl lg:text-2xl text-text-light mb-6 md:mb-8 leading-relaxed"
          variants={itemVariants}
        >
          We don’t just design—<span className="font-medium text-text-dark">we decode stories.</span>
        </motion.p>

        <motion.p 
          className="font-sans text-lg md:text-xl lg:text-2xl text-text-light mb-6 md:mb-8 leading-relaxed"
          variants={itemVariants}
        >
          We believe in designs that speak quietly but <span className="font-medium text-text-dark">stay with you</span>, long after you’ve looked away.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <p className="font-sans text-md md:text-lg text-text-light mt-8 leading-relaxed">
            It’s about the <strong className="text-hueneu-primary font-medium">calm</strong> in the chaos, the <strong className="text-hueneu-primary font-medium">mystery</strong> that invites curiosity, and the perfect <strong className="text-hueneu-primary font-medium">balance</strong> that feels just right. 
            This is where your narrative finds its most evocative aesthetic.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default WhyHueneuSection;
