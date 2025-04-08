"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  content: string;
  author: string;
  company?: string;
}

function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      content: "Very professional from initial discussions through to commissioning of the system. The system has performed admirably and more than meets my requirements - even on cloudy days!",
      author: "Philip Waterer"
    },
    {
      content: "We had our W. Giertsen solar installation for almost two years now and have nothing but praise for the system; indeed we have recommended it to many friends. Paul and his team did a brilliant job, we never notice power cuts and have never had any issues.",
      author: "Madeleine Wackernagel"
    },
    {
      content: "We have invested in your solar power generation on all our farms; 40 percent of our energy is from these solar panels and we're saving huge amounts on our energy bill every month.",
      author: "Chris Kulei",
      company: "Sian Farms"
    },
    {
      content: "The supercapacitor technology combined with solar panels has completely changed how we operate. Zero downtime, faster charging, and exceptional reliability.",
      author: "Robert Njeri",
      company: "Green Solutions Kenya"
    },
    {
      content: "After comparing multiple options, this solar solution was by far the best investment. ROI has been outstanding, and the maintenance team has been excellent.",
      author: "Sarah Odhiambo",
      company: "Nairobi Restaurant Group"
    },
    {
      content: "The installation process was quick and professional. The system has been working flawlessly for over a year now, even during the rainy season.",
      author: "Daniel Kimani"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Hear from Our Customers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Customer Success Stories</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with our solar solutions.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent-gold rounded-full mx-auto" />
        </motion.div>

        {/* Testimonial Marquee */}
        <div className="relative w-full overflow-hidden my-8">
          <div className="flex flex-nowrap animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary/30 text-secondary hover:text-primary px-6 py-3 rounded-md font-medium transition-all duration-300 group shadow-sm hover:shadow-md"
          >
            More Testimonials
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 group shadow-md hover:shadow-lg"
          >
            Case Studies
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className="flex-none w-[320px] md:w-[400px] px-3 py-2"
    >
      <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-accent-gold fill-accent-gold" />
          ))}
        </div>
        
        <div className="relative">
          <Quote className="absolute -top-3 -left-2 h-8 w-8 text-primary/10 rotate-180" />
          <p className="text-gray-700 mb-6 text-sm md:text-base relative z-10">
            "{testimonial.content}"
          </p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <p className="font-semibold text-secondary">
            {testimonial.author}
          </p>
          {testimonial.company && (
            <p className="text-sm text-gray-500">{testimonial.company}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection; 