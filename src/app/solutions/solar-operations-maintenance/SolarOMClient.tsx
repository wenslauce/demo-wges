'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, BarChart, Shield, Wrench, Users, Zap, MonitorCheck, Cpu } from "lucide-react";
import SolutionsOverview from "@/components/SolutionsOverview";

interface ServiceProps {
  title: string;
  index: string;
  description: string;
  features: string[];
  icon: string;
}

interface ExpertiseProps {
  title: string;
  description: string;
  image: string;
}

interface SolarOMClientProps {
  keyFeatures: string[];
  services: ServiceProps[];
  expertiseHighlights: ExpertiseProps[];
}

export default function SolarOMClient({ keyFeatures, services, expertiseHighlights }: SolarOMClientProps) {
  return (
    <div className="pt-0 pb-16">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/images/operations-management.avif"
          alt="Expert Solar Operations & Maintenance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 flex items-center">
          <div className="container-custom">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                <Wrench className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">Professional Maintenance</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                Expert Solar Operations & Maintenance
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Maximize Your Solar Investment with Our Certified Engineers and Energy Auditors
              </p>
              <Link
                href="/consultation"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md inline-flex items-center font-medium transition-all group"
              >
                Get Quote
                <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container-custom -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary">200+</h3>
                <p className="text-gray-600">Certified Energy Auditors</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary">24/7</h3>
                <p className="text-gray-600">Monitoring & Support</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary">98%</h3>
                <p className="text-gray-600">System Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container-custom py-24">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
            Our Solar O&M Services
          </h2>
          <p className="text-gray-700 text-lg">
            We understand that installing a solar system is just the beginning. To ensure maximum performance, longevity, and efficiency, regular monitoring and maintenance are essential. Our Operations & Management (O&M) services are designed to keep your solar energy system operating at peak efficiency, protecting your investment while maximizing energy savings.
          </p>
        </motion.div>

        {/* Key Features Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100"
              >
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-gray-50 p-6 flex items-center justify-between border-b border-gray-100">
                <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
                <span className="text-3xl font-bold text-primary/20">{service.index}</span>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expertise Highlights Section */}
      <div className="bg-gray-50 py-24">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-secondary">Why Choose Us</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
              Expert Solar Maintenance & Support
            </h2>
            <p className="text-gray-700 text-lg">
              Our comprehensive approach to solar operations and maintenance ensures your system performs at its best for decades to come
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseHighlights.map((item, idx) => (
              <motion.div 
                key={item.title} 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col md:flex-row h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="md:w-2/5 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-secondary mb-3">{item.title}</h3>
                  <p className="text-gray-700 flex-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container-custom py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
            Benefits of Professional Solar O&M
          </h2>
          <p className="text-gray-700 text-lg">
            Investing in professional maintenance provides significant long-term advantages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Maximized Yield</h3>
            <p className="text-gray-700">
              Ensure your system generates maximum energy and revenue throughout its lifetime.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Extended Lifespan</h3>
            <p className="text-gray-700">
              Proper maintenance significantly extends the operational life of your solar investment.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Reduced Downtime</h3>
            <p className="text-gray-700">
              Proactive monitoring and maintenance minimize system failures and downtime.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Warranty Protection</h3>
            <p className="text-gray-700">
              Professional maintenance helps maintain manufacturer warranties and guarantees.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Monitoring Center Images */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
              Advanced Monitoring Technology
            </h2>
            <p className="text-gray-700 mb-6">
              Our state-of-the-art monitoring center is equipped with the latest technology to track your solar system's performance in real-time. Our team of experts constantly monitors system data to identify potential issues before they lead to failures or reduced efficiency.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                  <MonitorCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-secondary">24/7 Real-time Monitoring</h3>
                  <p className="text-gray-600">Continuous tracking of system performance with immediate alerts for any issues.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-secondary">AI-Powered Diagnostics</h3>
                  <p className="text-gray-600">Advanced algorithms identify potential issues before they affect system performance.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/monitoring-center.avif"
                alt="Solar Monitoring Center"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/maintenance-work.avif"
                alt="Solar Panel Maintenance"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-2 aspect-video relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/system-inspection.avif"
                alt="Solar System Inspection"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Solutions Overview */}
      <section className="section-wrapper">
        <SolutionsOverview />
      </section>

      {/* CTA Section */}
      <div className="bg-secondary py-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Ready to Maximize Your Solar Investment?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Our expert team is ready to help you get the most out of your solar energy system
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/consultation"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all"
              >
                Contact Support Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 