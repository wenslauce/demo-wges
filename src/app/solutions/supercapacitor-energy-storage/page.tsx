"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { Zap, Shield, Settings, Leaf, Battery, CheckCircle, Building, Home, Server, Cpu, Clock, Wrench } from "lucide-react";

// Dynamically import Header and Footer to avoid SSR issues
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

// Define static animation variants (no functions)
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const slideInFromRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInFromLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function SupercapacitorEnergyStoragePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[650px]">
          <Image
            src="/images/sector-coupling.avif"
            alt="Graphene Supercapacitor Energy Storage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.span 
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-white">Advanced Energy Storage</span>
                </motion.span>

                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Powering Innovation with High-Performance Supercapacitors
                </motion.h1>
                
                <motion.p 
                  className="text-white/90 text-lg mb-8 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  At WGES, we believe in pushing the boundaries of energy storage technology. Our graphene supercapacitors are engineered for unmatched reliability, efficiency, and sustainability—ensuring power is always available, even in the most demanding environments.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <Link
                    href="/contact"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md inline-flex items-center font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span>Get Quote</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                  <Link
                    href="#benefits"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-md inline-flex items-center font-medium transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Floating stats cards */}
          <motion.div 
            className="absolute -bottom-20 left-0 right-0 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Battery className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary">20,000+</h3>
                      <p className="text-gray-600">Charge Cycles</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary">15-20 Years</h3>
                      <p className="text-gray-600">Operational Life</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-accent-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary">100%</h3>
                      <p className="text-gray-600">Environmentally Friendly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement Section */}
        <div className="container mx-auto px-4 py-32 mt-20" id="about">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeftVariant}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
                  Revolutionary Energy Storage for a Reliable Future
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  At WGES, we believe in pushing the boundaries of energy storage technology. Our graphene supercapacitors are engineered for unmatched reliability, efficiency, and sustainability—ensuring power is always available, even in the most demanding environments.
                </p>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">Pioneering Technology</h3>
                    <p className="text-gray-600">Our proprietary graphene technology represents the cutting edge of energy storage innovation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">German Engineering</h3>
                    <p className="text-gray-600">Designed and manufactured with precision German engineering for ultimate reliability.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">Sustainability Focus</h3>
                    <p className="text-gray-600">We're committed to creating energy solutions that are as good for the planet as they are for your power needs.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="#benefits" 
                className="text-primary font-medium inline-flex items-center group"
              >
                <span>Discover the benefits</span>
                <svg 
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRightVariant}
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/solar-panels.avif"
                  alt="Supercapacitor Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-medium text-secondary mb-2">Next-Gen Energy Storage</h3>
                    <p className="text-gray-700">Our supercapacitors represent a fundamental shift in how energy is stored and delivered, outperforming traditional batteries in reliability, longevity, and environmental impact.</p>
                  </div>
              </div>
            </div>
              
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl z-[-1]" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary-green/5 rounded-full blur-3xl z-[-1]" />
            </motion.div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-gray-50 py-20" id="applications">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
                <span className="text-sm font-medium text-primary">Versatile Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">
                Applications
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our supercapacitor solutions are versatile enough to power a wide range of applications across different industries
              </p>
            </motion.div>

            {/* Enhanced Applications Cards with Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Residential & Community Energy */}
              <motion.div 
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/images/solar-panels.avif"
                    alt="Residential & Community Energy"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Home className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">Residential & Community Energy</h3>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Solar energy storage systems</span>
                  </li>
                        <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Rural mini-grids and off-grid power solutions</span>
                  </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span>Home backup power systems</span>
                  </li>
                </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Commercial & Industrial Use */}
              <motion.div 
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/images/operations.avif"
                    alt="Commercial & Industrial Use"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Building className="h-6 w-6 text-primary-green" />
                      </div>
                      <h3 className="text-2xl font-semibold">Commercial & Industrial Use</h3>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary-green/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-green"></div>
                    </div>
                    <span>Office buildings, retail stores, and warehouses</span>
                  </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary-green/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-green"></div>
                    </div>
                    <span>Cold rooms and refrigeration solutions</span>
                  </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary-green/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-green"></div>
                          </div>
                          <span>Hospitals, banks, and data centers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Energy Infrastructure & Backup Power */}
              <motion.div 
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/images/sector-coupling.avif"
                    alt="Energy Infrastructure & Backup Power"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Server className="h-6 w-6 text-accent-gold" />
                      </div>
                      <h3 className="text-2xl font-semibold">Energy Infrastructure & Backup</h3>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                          </div>
                          <span>Microgrid and grid-connected solutions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                          </div>
                          <span>Power Backup Systems (PBS) & UPS</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                          </div>
                          <span>Telecom tower backup solutions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                          </div>
                          <span>Emergency backup power systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Specialized & Heavy-Duty Applications */}
              <motion.div 
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/images/battery-storage.avif"
                    alt="Specialized & Heavy-Duty Applications"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Cpu className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-semibold">Specialized & Heavy-Duty</h3>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          </div>
                          <span>Military bases and defense equipment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          </div>
                          <span>Marine and mining industries</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          </div>
                          <span>Agricultural energy solutions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          </div>
                          <span>Utility-scale energy storage</span>
                  </li>
                </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Application Benefits */}
            <motion.div 
              className="mt-24 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 p-10 flex items-center justify-center">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-semibold text-secondary mb-4">Why Choose Supercapacitors for Your Application?</h3>
                    <p className="text-gray-600 mb-6">Our supercapacitor solutions deliver consistent performance across all applications, providing significant advantages over traditional energy storage systems.</p>
                    <div className="flex items-center gap-4">
                      <Link
                        href="/contact"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md inline-flex items-center font-medium transition-all"
                      >
                        <span>Get Application Guide</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                    <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center text-center">
                      <Battery className="h-8 w-8 text-primary mb-4" />
                      <h4 className="text-lg font-medium text-secondary mb-2">Longer Lifecycle</h4>
                      <p className="text-gray-600 text-sm">20,000+ charge cycles compared to 500-3,000 for traditional batteries</p>
                    </div>
                    
                    <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center text-center">
                      <Zap className="h-8 w-8 text-primary-green mb-4" />
                      <h4 className="text-lg font-medium text-secondary mb-2">Rapid Charging</h4>
                      <p className="text-gray-600 text-sm">Minutes instead of hours, with high power density for quick energy discharge</p>
                    </div>
                    
                    <div className="p-6 flex flex-col items-center text-center">
                      <Leaf className="h-8 w-8 text-accent-gold mb-4" />
                      <h4 className="text-lg font-medium text-secondary mb-2">Eco-Friendly</h4>
                      <p className="text-gray-600 text-sm">No toxic materials and fully recyclable components with minimal environmental impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Supercapacitor Storage Section */}
        <div className="container mx-auto px-4 py-20" id="benefits">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
              <span className="text-sm font-medium text-primary">Key Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">
              Why Supercapacitor Storage?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our graphene supercapacitors outperform traditional batteries in every metric that matters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {/* Performance & Efficiency */}
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-primary-green"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Unmatched Performance & Efficiency
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Battery className="h-3 w-3 text-primary" />
                    </div>
                    <span>High Efficiency – Super-fast charging with ultra-high energy transfer efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Zap className="h-3 w-3 text-primary" />
                    </div>
                    <span>High Discharge Power – Supports large energy bursts when needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Battery className="h-3 w-3 text-primary" />
                    </div>
                    <span>100% Depth of Discharge (DoD) – Utilizes full battery capacity without degradation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Battery className="h-3 w-3 text-primary" />
                    </div>
                    <span>No Capacity Degradation – Maintains efficiency over 20,000 of cycles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Leaf className="h-3 w-3 text-primary" />
                    </div>
                    <span>Environmentally Friendly – Long-lasting, reducing waste and carbon footprint</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Reliability & Safety */}
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-green to-accent-gold"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center mb-6 group-hover:bg-primary-green/20 transition-all">
                  <Shield className="h-8 w-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Extreme Reliability & Safety
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-primary-green/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <CheckCircle className="h-3 w-3 text-primary-green" />
                    </div>
                    <span>Ultra-Long Cycle Life – Outlasts traditional batteries, deferring disposal and reducing environmental impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-primary-green/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Shield className="h-3 w-3 text-primary-green" />
                    </div>
                    <span>No Thermal Runaway Risk – Operates without heat generation, eliminating safety concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-primary-green/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Shield className="h-3 w-3 text-primary-green" />
                    </div>
                    <span>Performs in Extreme Temperatures – From -40°C to 65°C, ideal for harsh environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-primary-green/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Shield className="h-3 w-3 text-primary-green" />
                    </div>
                    <span>High Safety Standards – Resistant to overcharging, overheating, and electrical failures</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Low Maintenance & Smart Control */}
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent-gold to-primary"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-accent-gold/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-all">
                  <Settings className="h-8 w-8 text-accent-gold" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Low Maintenance & Smart Control
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-accent-gold/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Wrench className="h-3 w-3 text-accent-gold" />
                    </div>
                    <span>No Maintenance Required – Runs independently with self-regulating technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-accent-gold/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Settings className="h-3 w-3 text-accent-gold" />
                    </div>
                    <span>Smart BMS Integration – Monitors cell current, voltage, temperature, ensuring optimized performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 h-5 rounded-full bg-accent-gold/10 flex-shrink-0 flex items-center justify-center mt-1">
                      <Wrench className="h-3 w-3 text-accent-gold" />
                    </div>
                    <span>Easy Installation – Modular and scalable, adaptable to different energy storage needs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          {/* Feature Comparison Table */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 bg-primary text-white border-b border-primary-dark">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Supercapacitor vs Lithium Comparison
              </h3>
              <p className="text-sm text-white/80 mt-1">Comprehensive analysis of performance metrics and long-term benefits</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-primary">WGES Supercapacitors</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Lithium Batteries</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-green-50/30">
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <Battery className="h-4 w-4 text-gray-500" />
                      Storage Cycle Life
                    </td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">20,000 cycles</td>
                    <td className="px-6 py-4 text-sm text-gray-700">6,000 cycles</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-gray-500" />
                      DC to DC efficiency (@25°)
                    </td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">99% (Constant over time)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">70 to 90% (degrade over time)</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v4l2 2"></path>
                      </svg>
                      Rated Useable Capacity (%)
                    </td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">100%</td>
                    <td className="px-6 py-4 text-sm text-gray-700">80% (degrade over time)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
                      </svg>
                      Temperature Range
                    </td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">-40°C to 65°C (natural cooling)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">-20°C to 65°C (cooling required)</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 12h8"></path>
                      </svg>
                      Charge and Discharge Rate
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full mr-2">Selected</span>
                      <span className="text-primary font-medium">1.8C</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">0.1C to 0.5C</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <path d="M8 2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2Z"></path>
                        <path d="M16 4a2 2 0 0 1 2 2v10c0 1.1-.9 2-2 2H8a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2"></path>
                        <path d="M10 2v2"></path>
                        <path d="M14 2v2"></path>
                        <path d="M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                        <path d="M12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      </svg>
                      Thermal Runway
                    </td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">No Risk</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Medium to High Risk</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      Warranty Period
                    </td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">10+ years (no performance degradation)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Max 10 years (performance degradation)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <path d="M12 2v8"></path>
                        <path d="m16 6-4 4-4-4"></path>
                        <path d="M8 16a4 4 0 0 1 8 0"></path>
                        <path d="M10 20h4"></path>
                      </svg>
                      Over-Charging and Safety
                    </td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">Draws Charge only as needed</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Potential Issues</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-gray-500" />
                      Reliability
                    </td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">Maintenance Free and Reliable</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Some Maintenance Required</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-gray-500" />
                      Environmental Impact
                    </td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">Carbon based non-toxic materials</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Significant</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary py-24">
          <div className="container mx-auto px-4">
            <div className="relative p-10 md:p-16 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10" />
              <div className="absolute inset-0 opacity-5" />
              
              <motion.div 
                className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                    Ready to Upgrade Your Energy Storage?
                  </h2>
                  <p className="text-white/80 text-lg mb-6">
                    Speak with our energy experts about how our supercapacitor solutions can benefit your specific needs.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Free consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Custom solutions</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Technical support</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span>Contact Sales</span>
                  </Link>
                  <Link
                    href="/resources/supercapacitor-whitepaper"
                    className="bg-white/10 hover:bg-white/15 text-white border border-white/10 px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all"
                  >
                    <span>Download Whitepaper</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="container mx-auto px-4 py-20" id="case-studies">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">
              Case Studies
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              See how our energy solutions have transformed operations for our clients
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative h-48">
                <Image
                  src="/images/projects/samburu-soroi.avif"
                  alt="Samburu Soroi Lodge"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  Off-grid Solution
                </span>
                <h3 className="text-xl font-semibold text-secondary mb-2">Samburu Soroi Lodge</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Location:</span> Samburu, Kenya
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Capacity:</span> 275kWp, 334kWh
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Type:</span> Safari Lodge
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Grid:</span> Off grid
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-48">
                <Image
                  src="/images/projects/bitri.avif"
                  alt="Botswana Institute of Technology"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-green/10 text-primary-green text-xs font-medium mb-3">
                  Educational Institution
                </span>
                <h3 className="text-xl font-semibold text-secondary mb-2">Botswana Institute of Technology</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Location:</span> Gaborone, Botswana
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Capacity:</span> 500kWp
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Type:</span> University
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Grid:</span> On grid
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-48">
                <Image
                  src="/images/projects/ameco.avif"
                  alt="AMECO"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-medium mb-3">
                  Fuel Save Solution
                </span>
                <h3 className="text-xl font-semibold text-secondary mb-2">AMECO</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Location:</span> Nairobi, Kenya
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Capacity:</span> 150kWp
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Type:</span> Local Utility Company
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Grid:</span> Fuel Save
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/solutions/case-studies"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md inline-flex items-center font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <span>View All Case Studies</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 