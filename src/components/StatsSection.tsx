"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Sun, Building2, Calendar, Zap } from "lucide-react";

interface CountAnimationProps {
  number: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}

const CountAnimation = ({
  number,
  suffix = "",
  decimals = 0,
  className = "",
  duration = 2
}: CountAnimationProps) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    let startValue = 0;
    const startTime = performance.now();
    
    const updateValue = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const currentValue = startValue + (number - startValue) * progress;
      
      if (decimals === 0) {
        setDisplayValue(Math.round(currentValue).toString());
      } else {
        setDisplayValue(currentValue.toFixed(decimals));
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
  }, [number, duration, decimals]);

  return (
    <span className={className}>
      {displayValue}
      {suffix}
    </span>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  statNumber: number;
  statSuffix?: string;
  decimals?: number;
  label: string;
  delay?: number;
}

const StatCard = ({
  icon,
  statNumber,
  statSuffix = "",
  decimals = 0,
  label,
  delay = 0
}: StatCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:translate-y-[-5px] group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="bg-primary/10 rounded-full p-3 w-fit mb-4 text-primary group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      
      <div className="mt-2">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white flex items-end">
          {isInView && (
            <CountAnimation 
              number={statNumber} 
              suffix={statSuffix} 
              decimals={decimals}
              duration={2.5}
            />
          )}
        </h3>
        <div className="text-sm md:text-base text-gray-300 mt-2">{label}</div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br from-primary/0 to-primary/10 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section id="intro" className="bg-secondary py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Our Impact in Numbers</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Transforming Kenya's energy landscape with reliable and sustainable solar solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <StatCard
            icon={<Building2 size={24} />}
            statNumber={450}
            statSuffix="+"
            label="Projects Completed"
            delay={0.1}
          />
          
          <StatCard
            icon={<Zap size={24} />}
            statNumber={5.5}
            statSuffix="+"
            decimals={1}
            label="MWp Installed"
            delay={0.2}
          />
          
          <StatCard
            icon={<Calendar size={24} />}
            statNumber={50}
            statSuffix="+"
            label="Years of Expertise"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
