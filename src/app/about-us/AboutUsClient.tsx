'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Building, Award, History, Users, MapPin, FileCheck } from "lucide-react";

interface ValueProps {
  title: string;
  description: string;
  icon: string;
}

interface CertificateProps {
  name: string;
  description: string;
  logo: string;
}

interface MilestoneProps {
  year: string;
  event: string;
  image: string;
}

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

interface LocationProps {
  city: string;
  country: string;
  address: string;
  image: string;
}

interface AboutUsClientProps {
  coreValues: ValueProps[];
  certificates: CertificateProps[];
  milestones: MilestoneProps[];
  qualityCommitments: string[];
  teamMembers: TeamMemberProps[];
  locations: LocationProps[];
}

export default function AboutUsClient({
  coreValues,
  certificates,
  milestones,
  qualityCommitments,
  teamMembers,
  locations
}: AboutUsClientProps) {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/images/about-hero.avif"
          alt="About WGES"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
          <div className="container-custom">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                <Building className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">Established 1875</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                A robust and traditional industrial group
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Innovation and value-creating growth since 1875
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* History & Legacy Section */}
      <div className="container-custom py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <History className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-secondary">Our Legacy</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
              150+ years of innovation and excellence
            </h2>
            <p className="text-gray-700 mb-6">
              W. Giertsen Energy Solutions is your reliable specialist and lifecycle partner for solar-based applications in demanding environments. The company is part of the W. Giertsen Group founded in 1875 in Bergen, Norway. We act as a system integrator and long-term solar energy lifecycle partner with offices in Bergen (Norway), Frankfurt (Germany) and Nairobi (Kenya) ensuring our closeness to customers and partners.
            </p>
            <p className="text-gray-700 mb-6">
              We design, engineer and execute application-specific solutions and projects geared toward safe, efficient and reliable operation, reducing long-term energy cost and environmental impact. Based on tier 1 proven components and decades of experience in application engineering.
            </p>
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
                src="/images/legacy-1.avif"
                alt="Historical W. Giertsen Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/legacy-2.avif"
                alt="Modern Solar Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-2 aspect-video relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/legacy-3.avif"
                alt="W. Giertsen Through the Years"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container-custom py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-700 text-lg">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <motion.div 
              key={value.title}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Image 
                  src={value.icon} 
                  alt={value.title} 
                  width={28} 
                  height={28}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="bg-gray-50 py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <FileCheck className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-secondary">Quality Assurance</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
                Our Commitment to Excellence
              </h2>
              <p className="text-gray-700 mb-6">
                W. Giertsen Energy Solutions is based on an open and honest organizational culture that values the diversity of its team. We are committed to the safety of employees, clients and the communities in which we work.
              </p>
              <p className="text-gray-700 mb-6 font-medium">
                We, the W. Giertsen team, achieve this by:
              </p>
              <ul className="space-y-3 mb-6">
                {qualityCommitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-gray-700">{commitment}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 italic">
                Quality, consistency and environmental stewardship is fundamental to W. Giertsen Energy Solutions' projects and operation
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">Certificates</h3>
              <p className="text-gray-700 mb-6">We hold the following certifications by DNV-GL:</p>
              
              <div className="space-y-4">
                {certificates.map((cert, idx) => (
                  <motion.div 
                    key={cert.name}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image 
                        src={cert.logo} 
                        alt={cert.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-secondary">{cert.name}</h4>
                      <p className="text-gray-600">{cert.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="container-custom py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Global Presence</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
            Our Locations
          </h2>
          <p className="text-gray-700 text-lg">
            Serving customers worldwide from our strategic offices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, idx) => (
            <motion.div 
              key={location.city}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={location.image}
                  alt={`${location.city}, ${location.country}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {location.city}
                    </h3>
                    <p className="text-white/80">{location.country}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>{location.address}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Careers CTA Section */}
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
              Join Our Team
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Be part of our 150-year legacy of innovation and excellence
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/careers"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all group"
              >
                View Career Opportunities
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 