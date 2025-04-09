"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Star, Trophy } from "lucide-react";

interface AwardLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
  year?: string;
}

export function AwardsSection() {
  const awards: AwardLogo[] = [
    {
      src: "/images/awards/AFSIA_solar_awards.png",
      alt: "AFSIA Solar Award",
      width: 280,
      height: 120,
      description: "Excellence in Solar Innovation",
      year: "2023"
    },
    {
      src: "/images/awards/un_images_MasterbrandLogotype_solid_blue_RGB-1024x302.png",
      alt: "United Nations Recognition",
      width: 280,
      height: 120,
      description: "Sustainable Development Goals Champion",
      year: "2022"
    },
    {
      src: "/images/awards/solarquater.avif",
      alt: "Solar Quarter Award",
      width: 280,
      height: 120,
      description: "Best Solar Storage Solution",
      year: "2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl opacity-70" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Excellence Recognized</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Awards & Recognition</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Our commitment to innovation and excellence in renewable energy has earned us recognition from leading industry organizations.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent-gold rounded-full mx-auto" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center bg-white rounded-2xl p-8 shadow-md border border-gray-100 group hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-accent-gold fill-accent-gold" />
                ))}
              </div>
              
              <div className="w-full h-32 relative flex items-center justify-center mb-6 p-6">
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={award.width}
                  height={award.height}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              
              {award.year && (
                <div className="absolute -top-4 -left-4 bg-accent-gold/90 text-secondary font-bold rounded-full h-14 w-14 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {award.year}
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-secondary mb-2">{award.alt}</h3>
              <p className="text-gray-600 text-center">{award.description}</p>
              
              <div className="mt-6 flex gap-2">
                <Award className="text-primary/80 h-5 w-5" />
                <span className="text-sm text-primary/80 font-medium">Award of Excellence</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated band with scrolling award recognition text */}
        <div className="relative py-6 bg-primary/5 rounded-xl overflow-hidden my-10">
          <div className="animate-marquee flex gap-8 items-center whitespace-nowrap">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary/80" />
                <span className="text-secondary font-medium">Award-Winning Solar Solutions</span>
                <Star className="h-4 w-4 text-accent-gold fill-accent-gold" />
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-gray-700 max-w-2xl mx-auto">
            These accolades reflect our dedication to providing innovative, reliable, and sustainable energy solutions that transform lives and businesses across Kenya.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AwardsSection; 