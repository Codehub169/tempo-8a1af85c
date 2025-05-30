'use client';

import { motion } from 'framer-motion';

const textBlockVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const textChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const whoKnewVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.5 },
  },
};

const StorySection = () => {
  return (
    <section id="story" className="py-20 md:py-32 bg-white text-text-dark">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textBlockVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-heading mb-8 md:mb-12"
            variants={textChildVariants}
          >
            The <span className="text-hueneu-accent">hue</span><span className="text-hueneu-primary">neu</span> Story
          </motion.h2>
          
          <motion.p 
            className="font-sans text-lg md:text-xl text-text-light leading-relaxed mb-6"
            variants={textChildVariants}
          >
            At hueneu, we believe in the quiet power of balance. 
            '<span className="font-semibold text-hueneu-accent">Hue</span>' represents the vibrant bursts of creativity, the unexpected color in a monochrome world, the spark that ignites a story.
          </motion.p>
          
          <motion.p 
            className="font-sans text-lg md:text-xl text-text-light leading-relaxed mb-10 md:mb-16"
            variants={textChildVariants}
          >
            '<span className="font-semibold text-hueneu-primary">Neu</span>' is its grounding counterpart—the calm neutrality, the intentional space, the quiet confidence that allows the story to breathe and resonate deeply.
            Together, they create designs that are not just seen, but felt.
          </motion.p>

          <motion.div 
            className="relative inline-block p-4"
            variants={textChildVariants} // Re-use for simple reveal before more complex animation
          >
            <motion.p 
              className="font-heading text-2xl md:text-3xl text-hueneu-primary italic relative z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'circOut'}}
            >
              It's the art of surprise, the joy in discovery...
            </motion.p>
            {/* This is a teaser for the "Who Knew?" moment. 
                A dedicated WhoKnewElement.js component would handle more complex visuals/interactions. */}
            <motion.span
              className="font-heading text-4xl md:text-5xl text-hueneu-accent font-bold absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 transform rotate-3 origin-bottom-left z-20 bg-neutral-bg px-2 py-1 shadow-md rounded-sm"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}
              variants={whoKnewVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Who Knew?
            </motion.span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
