"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { href: "/solutions/supercapacitor-energy-storage", label: "Supercapacitor Energy Storage" },
    { href: "/solutions/residential-solutions", label: "Residential Solutions" },
    { href: "/solutions/commercial-solutions", label: "Commercial Solutions" },
    { href: "/solutions/case-studies", label: "Case Studies" },
    { href: "/solutions/solar-operations-maintenance", label: "Solar Operations & Maintenance" }
  ];

  const companyLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/our-team", label: "Our Team" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" }
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/w-giertsen-energy-solutions-as", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/wgiertsenenergy/", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/WGESGiertsen/", label: "Facebook" }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl opacity-10" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo-white.png" 
                alt="W.Giertsen Energy Solutions Logo" 
                width={180} 
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading supplier of innovative solar power solutions with advanced supercapacitor technology, delivering sustainable energy across Kenya.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-gold mt-0.5" />
                <p className="text-gray-300">Church Road No 90, Westlands-Nairobi</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-gold" />
                <p className="text-gray-300">+254 796 214 350</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-gold" />
                <p className="text-gray-300">energy@giertsen.no</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary-foreground/10 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Solutions Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">
              <span className="border-b-2 border-accent-gold pb-1">Solutions</span>
            </h3>
            <ul className="space-y-3">
              {solutionsLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-accent-gold transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <span className="text-accent-gold">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Company Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">
              <span className="border-b-2 border-accent-gold pb-1">Company</span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-accent-gold transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <span className="text-accent-gold">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Legal Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">
              <span className="border-b-2 border-accent-gold pb-1">Legal</span>
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-accent-gold transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <span className="text-accent-gold">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-5 text-white">
                <span className="border-b-2 border-accent-gold pb-1">Newsletter</span>
              </h3>
              <Link 
                href="#newsletter"
                className="bg-primary hover:bg-primary/90 text-white py-2.5 px-4 rounded-md inline-flex items-center gap-2 transition-all duration-300"
              >
                Subscribe Now
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} W.Giertsen Energy Solutions. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed and developed by <span className="text-accent-gold">Xperts Africa</span> for a sustainable future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
