import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata = {
  title: "Energy Solution Case Studies | WGES",
  description: "Explore real-world implementations of our energy solutions. See how businesses have achieved significant results with WGES's tailored energy systems.",
};

interface ProjectCard {
  title: string;
  specs: string;
  type: string;
  gridType: string;
  previous: string;
  image: string;
  location: string;
}

const projects: ProjectCard[] = [
  {
    title: "Equator Farm",
    specs: "240kWp",
    type: "Flower Farm",
    gridType: "On grid",
    previous: "KPLC",
    image: "/images/projects/equator-farm.avif",
    location: "Nanyuki, Kenya"
  },
  {
    title: "Maasai Flowers",
    specs: "400kWp",
    type: "Flower Farm",
    gridType: "On grid",
    previous: "KPLC",
    image: "/images/projects/maasai-flowers.avif",
    location: "Naivasha, Kenya"
  },
  {
    title: "RIMI Flowers",
    specs: "50kWp",
    type: "Flower Farm",
    gridType: "On grid",
    previous: "KPLC",
    image: "/images/projects/rimi-flowers.avif",
    location: "Naivasha, Kenya"
  },
  {
    title: "Synresins",
    specs: "125kWp",
    type: "Manufacturer",
    gridType: "On grid",
    previous: "KPLC",
    image: "/images/projects/synresins.avif",
    location: "Thika, Kenya"
  },
  {
    title: "AMECO",
    specs: "150kWp",
    type: "Local Utility Company",
    gridType: "Fuel Save",
    previous: "Generator",
    image: "/images/projects/ameco.avif",
    location: "Nairobi, Kenya"
  },
  {
    title: "Samburu Soroi Lodge",
    specs: "275kWp, 334kWh",
    type: "Safari Lodge",
    gridType: "Off grid",
    previous: "off grid",
    image: "/images/projects/samburu-soroi.avif",
    location: "Samburu, Kenya"
  },
  {
    title: "Botswana Institute of Technology (BITRI)",
    specs: "500kWp",
    type: "University",
    gridType: "On grid",
    previous: "Utility",
    image: "/images/projects/bitri.avif",
    location: "Gaborone, Botswana"
  }
];

const keyFeatures = [
  "Solar panels customized to your home's unique energy needs",
  "Save up to 75% or more on electricity bills",
  "Panels built to last, ensuring reliability for decades",
  "Reduce your carbon footprint with sustainable energy"
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CaseStudiesClient 
        projects={projects} 
        keyFeatures={keyFeatures} 
      />
      <Footer />
    </main>
  );
} 