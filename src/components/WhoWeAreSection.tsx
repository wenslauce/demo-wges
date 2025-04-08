"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Zap, Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhoWeAreSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 -right-20 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-primary/5 to-accent-gold/5 blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-accent-gold/5 to-primary/5 blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[30rem] mb-8">
              <Image 
                src="/images/who-we-are.avif" 
                alt="W. Giertsen Energy Solutions team" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
            </div>

            {/* Floating card with stats */}
            <motion.div 
              className="absolute -bottom-12 -right-6 md:right-0 p-6 bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl rounded-xl max-w-[280px] z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Sun size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Years of Experience</div>
                    <div className="text-2xl font-semibold text-secondary">100+</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-accent-gold/10 text-accent-gold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Supercapacitor Expertise</div>
                    <div className="text-2xl font-semibold text-secondary">7 Years</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            <motion.div 
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 w-fit"
            >
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-secondary">Who We Are</span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6"
            >
              Solar power with <span className="text-primary">supercapacitor innovation</span>
            </motion.h2>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 text-gray-600 mb-8"
            >
              <p>
                W. Giertsen Energy Solutions Ltd, based in Nairobi, Kenya, delivers reliable and innovative solar energy solutions tailored for homes, businesses, communities, and non-governmental organizations. As part of the globally recognized W. Giertsen Group, we bring over a century of expertise in sustainable infrastructure.
              </p>
              <p>
                We are unique as we integrate solar power with advanced supercapacitor storage—a technology we've pioneered in Kenya for 7 years. Our systems blend seamlessly with your existing energy infrastructure, delivering reliable power that's built to last. We solve energy challenges with solutions that require minimal maintenance while performing exceptionally, even in Kenya's most demanding environments.
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="/about-us" 
                className="inline-flex items-center gap-2 text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a 
                href="/solutions/case-studies" 
                className="inline-flex items-center gap-2 text-secondary bg-transparent hover:bg-gray-100 border border-gray-300 px-6 py-3 rounded-md font-medium transition-all duration-300"
              >
                View Case Studies
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection; 