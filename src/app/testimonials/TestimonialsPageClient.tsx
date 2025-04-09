'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, DollarSign, Leaf, ZapIcon, Clock, Quote, ArrowRight } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

interface Testimonial {
  content: string;
  author: string;
  company?: string;
  date?: string;
  rating: number;
  image?: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface TestimonialsPageClientProps {
  additionalTestimonials: Testimonial[];
  benefits: Benefit[];
}

export default function TestimonialsPageClient({ 
  additionalTestimonials, 
  benefits 
}: TestimonialsPageClientProps) {
  
  // Get icon based on type
  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'saving':
        return <DollarSign className="h-6 w-6 text-primary" />;
      case 'eco':
        return <Leaf className="h-6 w-6 text-primary-green" />;
      case 'reliable':
        return <ZapIcon className="h-6 w-6 text-accent-gold" />;
      case 'setup':
        return <Clock className="h-6 w-6 text-secondary" />;
      default:
        return <Star className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <div className="pt-0 pb-16">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/testimonials-hero.avif"
          alt="Customer Testimonials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
          <div className="container-custom">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                Why Our Customers Trust Giertsen Energy
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Our mission is clear: to deliver clean, reliable, and affordable energy solutions that create real impact. But our true success is reflected in the lives we transform.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container-custom py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            From energy-independent homes to innovative businesses embracing sustainability, our customers' journeys with W. Giertsen Energy Solutions highlight the power of renewable energy. Explore how we are driving a greener, more resilient future—one project at a time.
          </p>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={benefit.title}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {getIcon(benefit.icon)}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hear from customers intro section */}
      <div className="container-custom py-16">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
            Hear from Our Customers
          </h2>
          <p className="text-gray-700 text-lg">
            Across the nation, homeowners, businesses, and community leaders are sharing their transformative experiences with W. Giertsen Energy Solutions. From embracing clean energy to reducing costs and driving meaningful environmental change, our solutions are empowering them to build a more sustainable and resilient future.
          </p>
        </motion.div>
      </div>

      {/* Import the existing TestimonialsSection component */}
      <TestimonialsSection />

      {/* Featured Testimonials Grid */}
      <div className="container-custom py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
            Featured Success Stories
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover detailed experiences from our customers who have transformed their energy consumption with our solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalTestimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.1 }}
            >
              {testimonial.image && (
                <div className="md:w-1/3 relative">
                  <div className="aspect-square relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              <div className={`p-6 flex flex-col ${testimonial.image ? 'md:w-2/3' : 'w-full'}`}>
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent-gold fill-accent-gold" />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10 rotate-180" />
                  <p className="text-gray-700 relative z-10">
                    {testimonial.content}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="font-semibold text-secondary">
                    {testimonial.author}
                  </p>
                  {testimonial.company && (
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  )}
                  {testimonial.date && (
                    <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join hundreds of satisfied customers and start your renewable energy journey today
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/consultation"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all group"
              >
                Get Quote                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 