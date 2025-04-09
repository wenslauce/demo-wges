import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Energy Solutions | WGES",
  description: "From solar installations to smart energy management and operations, find tailored solutions with WGES.",
};

interface SolutionCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}

const SolutionCard = ({ title, description, href, imageSrc }: SolutionCardProps) => {
  return (
    <Link
      href={href}
      className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-[220px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center text-primary font-medium">
          <span>Learn more</span>
          <svg
            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Supercapacitor Energy Storage",
      description: "Advanced energy storage solutions with superior power density and cycle life for maximum performance.",
      href: "/solutions/supercapacitor-energy-storage",
      imageSrc: "/images/battery-storage.avif"
    },
    {
      title: "Residential Solutions",
      description: "Integrated energy systems for homes, bringing commercial-grade efficiency to residential properties.",
      href: "/solutions/residential-solutions",
      imageSrc: "/images/sector-coupling.avif"
    },
    {
      title: "Commercial Solutions",
      description: "Comprehensive energy systems for businesses, optimized for performance and cost efficiency.",
      href: "/solutions/commercial-solutions",
      imageSrc: "/images/solar-panels.avif"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of our energy solutions in action, with documented results and insights.",
      href: "/solutions/case-studies",
      imageSrc: "/images/expert-analysis.avif"
    },
    {
      title: "Solar Operations & Maintenance",
      description: "Comprehensive care for solar installations to ensure maximum performance and system longevity.",
      href: "/solutions/solar-operations-maintenance",
      imageSrc: "/images/operations-management.avif"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/solar-panels.avif"
            alt="Energy Solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                  Energy Solutions for a Sustainable Future
                </h1>
                <p className="text-white/80 text-lg">
                  Innovative and integrated energy systems designed for maximum efficiency and sustainability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-gray-700">
              At WGES, we offer a complete range of energy solutions designed to meet the diverse
              needs of businesses and homeowners. From cutting-edge storage technologies to comprehensive
              maintenance services, our solutions are tailored to maximize efficiency, reduce costs,
              and promote sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.href}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                imageSrc={solution.imageSrc}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="bg-secondary rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                  Ready to Transform Your Energy Infrastructure?
                </h2>
                <p className="text-white/80 mb-8">
                  Our expert team is ready to help you design and implement the perfect energy solution
                  for your specific needs. Whether you're a business looking to optimize operations or
                  a homeowner seeking energy independence, we have the expertise to deliver results.
                </p>
                <Link
                  href="/consultation"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md inline-block font-medium transition-all"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 