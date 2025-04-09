import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, Leaf, Globe, Lightbulb, Recycle, Clock, Building, Users, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Sustainability Policy | WGES",
  description: "W. Giertsen Energy Solutions commitment to environmental sustainability and responsible business practices.",
};

export default function SustainabilityPolicyPage() {
  const lastUpdated = "May 20, 2024";

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Page Header */}
        <div className="bg-secondary py-16 md:py-20">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="h-6 w-6 text-accent-gold" />
              <h1 className="text-3xl md:text-4xl font-semibold text-white">Sustainability Policy</h1>
            </div>
            <p className="text-white/80 text-lg max-w-3xl">
              Our commitment to creating a more sustainable future through responsible business practices and renewable energy solutions.
            </p>
            <div className="flex items-center gap-2 mt-4 text-white/60">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* Sustainability Policy Content */}
        <div className="container-custom py-16">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
              <div className="space-y-12">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Our Commitment to Sustainability
                  </h2>
                  <p className="text-gray-700 mb-4">
                    At W. Giertsen Energy Solutions, we recognize that our business activities have an impact on the environment and society. We are committed to conducting our operations in a manner that promotes sustainability, reduces environmental impact, and contributes positively to the communities we serve.
                  </p>
                  <p className="text-gray-700 mb-4">
                    This Sustainability Policy outlines our approach to environmental stewardship, sustainable development, and corporate responsibility. It serves as a framework for making business decisions that align with our commitment to creating long-term value while protecting the planet.
                  </p>
                  <p className="text-gray-700">
                    Our vision is to be a leading provider of renewable energy solutions that empower businesses and communities to transition to cleaner, more sustainable energy sources.
                  </p>
                </section>

                {/* Environmental Stewardship */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    Environmental Stewardship
                  </h2>
                  <p className="text-gray-700 mb-6">
                    We are committed to minimizing the environmental impact of our operations and promoting practices that conserve natural resources, reduce pollution, and mitigate climate change.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="text-xl font-medium text-secondary mb-3">Climate Action</h3>
                      <p className="text-gray-700 mb-3">
                        We recognize the urgent need to address climate change and are committed to reducing our carbon footprint and helping our clients reduce theirs. We:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Measure and report our greenhouse gas emissions</li>
                        <li>Set science-based targets for emissions reduction</li>
                        <li>Invest in renewable energy for our operations</li>
                        <li>Develop innovative low-carbon solutions for our customers</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="text-xl font-medium text-secondary mb-3">Resource Efficiency</h3>
                      <p className="text-gray-700 mb-3">
                        We strive to use resources efficiently and minimize waste in all aspects of our operations:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Implementing energy efficiency measures across our facilities</li>
                        <li>Reducing water consumption through conservation initiatives</li>
                        <li>Minimizing waste generation and promoting recycling</li>
                        <li>Adopting circular economy principles in our business model</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="text-xl font-medium text-secondary mb-3">Biodiversity Protection</h3>
                      <p className="text-gray-700 mb-3">
                        We acknowledge the importance of biodiversity and ecosystems, and commit to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Assessing and minimizing the impacts of our projects on local ecosystems</li>
                        <li>Implementing biodiversity management plans for sensitive areas</li>
                        <li>Supporting conservation initiatives in the regions where we operate</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Renewable Energy Focus */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Renewable Energy Focus
                  </h2>
                  <p className="text-gray-700 mb-6">
                    As a renewable energy solutions provider, we are at the forefront of the transition to a cleaner energy future. Our business model is centered around accelerating the adoption of renewable energy technologies.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Lightbulb className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium text-secondary">Solar Energy Solutions</h3>
                      </div>
                      <p className="text-gray-700">
                        We design, install, and maintain high-quality solar energy systems that provide clean, renewable electricity to businesses and communities.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium text-secondary">Energy Storage</h3>
                      </div>
                      <p className="text-gray-700">
                        We offer energy storage solutions that enable greater integration of renewable energy and enhance energy security and resilience.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium text-secondary">Energy Efficiency</h3>
                      </div>
                      <p className="text-gray-700">
                        We help our clients optimize their energy use through energy-efficient systems and smart energy management solutions.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium text-secondary">Training & Education</h3>
                      </div>
                      <p className="text-gray-700">
                        We provide training and educational resources to build capacity for renewable energy adoption and maintenance.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Sustainable Business Practices */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-primary" />
                    Sustainable Business Practices
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We integrate sustainability considerations into all aspects of our business operations and decision-making processes.
                  </p>
                  <div className="space-y-4">
                    <div className="p-5 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Sustainable Supply Chain</h3>
                      <p className="text-gray-700">
                        We work with suppliers who share our commitment to sustainability and implement a responsible procurement policy that considers environmental and social factors in addition to economic ones.
                      </p>
                    </div>
                    <div className="p-5 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Sustainable Product Lifecycle</h3>
                      <p className="text-gray-700">
                        We design our products and services with consideration for their entire lifecycle, from sourcing of materials to end-of-life management. We are committed to extending product lifespans, facilitating repairs, and ensuring proper recycling of components.
                      </p>
                    </div>
                    <div className="p-5 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Green Facilities</h3>
                      <p className="text-gray-700">
                        We design and operate our facilities to minimize environmental impact, incorporating energy efficiency, water conservation, and waste reduction measures. We aim to achieve recognized green building certifications for our major facilities.
                      </p>
                    </div>
                    <div className="p-5 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Sustainable Transportation</h3>
                      <p className="text-gray-700">
                        We are transitioning our vehicle fleet to electric and low-emission alternatives, optimizing logistics to reduce transportation emissions, and encouraging sustainable commuting options for our employees.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Social Responsibility */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Social Responsibility</h2>
                  <p className="text-gray-700 mb-4">
                    We recognize our responsibility to contribute positively to the communities where we operate and to society at large.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
                    <h3 className="font-medium text-blue-800 mb-3">Our Community Commitments:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Creating quality jobs and investing in employee development</li>
                      <li>Respecting human rights throughout our operations and supply chain</li>
                      <li>Engaging with local communities and addressing their concerns</li>
                      <li>Supporting local economic development through our business activities</li>
                      <li>Contributing to community development initiatives and philanthropy</li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    We believe that access to clean, reliable energy is a foundation for economic development and improved quality of life. Our renewable energy solutions aim to expand energy access while reducing environmental impacts.
                  </p>
                </section>

                {/* Governance and Reporting */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Governance and Reporting</h2>
                  <p className="text-gray-700 mb-4">
                    We have established governance structures and processes to ensure effective implementation of our sustainability policy.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Sustainability Governance</h3>
                      <p className="text-gray-700 text-sm">
                        Our sustainability efforts are overseen by senior management, with regular reporting to the Board of Directors. We have a dedicated sustainability team responsible for coordinating sustainability initiatives across the company.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Performance Monitoring</h3>
                      <p className="text-gray-700 text-sm">
                        We set specific, measurable sustainability targets and regularly monitor our performance against these targets. We use key performance indicators (KPIs) to track progress and identify areas for improvement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Transparency and Reporting</h3>
                      <p className="text-gray-700 text-sm">
                        We are committed to transparency in our sustainability performance. We publish an annual sustainability report that discloses our environmental and social impacts, achievements, and challenges.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Stakeholder Engagement</h3>
                      <p className="text-gray-700 text-sm">
                        We actively engage with our stakeholders—including customers, employees, suppliers, local communities, and investors—to understand their expectations and concerns regarding our sustainability performance.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Continuous Improvement */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Continuous Improvement</h2>
                  <p className="text-gray-700 mb-4">
                    We recognize that sustainability is a journey of continuous improvement. We regularly review and update our sustainability policy, strategies, and targets to reflect evolving scientific understanding, stakeholder expectations, and best practices.
                  </p>
                  <p className="text-gray-700">
                    We encourage innovation and creative thinking to advance sustainability within our company and across our industry. We participate in industry initiatives and partnerships to share knowledge and collaborate on sustainability challenges.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our sustainability policy or initiatives, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-medium text-secondary mb-2">W. Giertsen Energy Solutions</p>
                    <p className="text-gray-700">Email: sustainability@giertsen.no</p>
                    <p className="text-gray-700">Phone: +254 796 214 350</p>
                    <p className="text-gray-700">Address: Church Road No 90, Westlands, Nairobi, Kenya</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Links */}
        <div className="bg-gray-50 py-12">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold text-secondary mb-8 text-center">Related Policies</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/privacy-policy" 
                className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium text-secondary">Privacy Policy</span>
              </Link>
              <Link 
                href="/terms-of-service" 
                className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium text-secondary">Terms of Service</span>
              </Link>
              <Link 
                href="/cookie-policy" 
                className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium text-secondary">Cookie Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 