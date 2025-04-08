"use client";

import React from "react";
import { motion } from "framer-motion";
import { BatteryCharging, Zap, Award, Clock, ShieldCheck, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  accentColor: string;
}

const FeatureCard = ({ title, description, icon, index, accentColor }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex flex-col h-full"
    >
      <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 h-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-transparent via-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-700" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-transparent via-transparent to-accent-gold/5 group-hover:to-accent-gold/10 transition-all duration-700" />
        </div>

        <div className="relative flex flex-col z-10 h-full">
          <div className={cn(
            "mb-4 p-3 rounded-xl w-fit",
            `bg-${accentColor}/10 text-${accentColor}`
          )}>
            {icon}
          </div>
          
          <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          
          <div className={cn(
            "mt-4 w-12 h-1 rounded-full bg-gradient-to-r",
            `from-${accentColor} to-${accentColor}/60`
          )} />
        </div>
      </div>
    </motion.div>
  );
};

export function WhyWorkWithUsSection() {
  const features = [
    {
      title: "Proven Reliability",
      description: "Advanced supercapacitor battery that outlasts traditional batteries, backed by 7 years of successful installations across Kenya.",
      icon: <BatteryCharging size={24} />,
      accentColor: "primary"
    },
    {
      title: "Superior Performance",
      description: "Faster battery charging, longer lifespan, and consistent power when you need it most – even in challenging conditions.",
      icon: <Zap size={24} />,
      accentColor: "accent-gold"
    },
    {
      title: "Expert Solutions",
      description: "Customized solar systems designed specifically for your needs, with personalized service from Kenya's most experienced team.",
      icon: <Award size={24} />,
      accentColor: "primary-green"
    },
    {
      title: "Faster Charging",
      description: "Our supercapacitor technology charges significantly faster than conventional batteries, reducing downtime and maximizing productivity.",
      icon: <Clock size={24} />,
      accentColor: "accent-gold"
    },
    {
      title: "Enhanced Durability",
      description: "Built to withstand Kenya's diverse climate conditions with superior protection against heat, dust, and humidity.",
      icon: <ShieldCheck size={24} />,
      accentColor: "primary"
    },
    {
      title: "Seamless Integration",
      description: "Our systems integrate perfectly with your existing infrastructure, providing a smooth transition to renewable energy.",
      icon: <Settings size={24} />,
      accentColor: "primary-green"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-gold/5 to-transparent rounded-full blur-3xl opacity-60" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Why Work With Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Powering Kenya's Future, Together</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Choose the most trusted name in solar energy with innovative technology that delivers superior results and exceptional reliability.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithUsSection; 