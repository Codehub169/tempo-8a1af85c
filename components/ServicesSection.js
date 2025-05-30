'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Define service data array
const services = [
  {
    name: 'Branding',
    description: 'Branding, but make it memorable.',
    iconPath: '/service-icons/branding.svg',
  },
  {
    name: 'Packaging',
    description: 'Packaging, but make it poetic.',
    iconPath: '/service-icons/packaging.svg',
  },
  {
    name: 'Social Media',
    description: 'Social media, but make it soulful.',
    iconPath: '/service-icons/social-media.svg',
  },
  {
    name: 'Stationery',
    description: 'Stationery, but make it story-telling.',
    iconPath: '/service-icons/stationery.svg',
  },
  {
    name: 'Coffee Table Books',
    description: 'Coffee table books, but make them captivating.',
    iconPath: '/service-icons/coffee-table-books.svg',
  },
  {
    name: 'Creative Projects',
    description: 'Creative projects, but make them connect.',
    iconPath: '/service-icons/creative-projects.svg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-neutral-bg text-text-dark">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-heading text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="bg-white p-8 rounded-softer shadow-subtle hover:shadow-interactive transition-all duration-300 ease-out transform hover:-translate-y-1 flex flex-col items-center text-center group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <div className="mb-6 w-16 h-16 flex items-center justify-center text-hueneu-accent group-hover:text-hueneu-primary transition-colors duration-300">
                {/* Assuming SVGs are in public folder and next/image can handle them or they are components */}
                {/* For SVGs as components via svgr (as configured): You'd import them and use like <BrandingIcon /> */}
                {/* Using next/image for SVGs in public folder: */}
                <Image src={service.iconPath} alt={`${service.name} icon`} width={56} height={56} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-text-dark mb-3">{service.name}</h3>
              <p className="font-sans text-text-light text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
