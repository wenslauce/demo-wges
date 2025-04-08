"use client";

import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary"></div>
        <div className="absolute bottom-12 -left-12 w-64 h-64 rounded-full bg-primary"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Shape Energy Together: Get Quote Here.
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Take the first step towards a more sustainable and cost-efficient
            energy solution for your company. Our experts are here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-md font-medium transition-all text-center"
            >
              Get Quote
            </Link>

            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-secondary px-6 py-4 rounded-md font-medium transition-all text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
