import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function AboutUs() {
  return (
    <div className="min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 mb-4">
            About Code Sapience
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-6"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Image */}
          <div className="lg:w-1/2">
            <div className="relative h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl transform rotate-3 opacity-70"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-3xl transform -rotate-3 overflow-hidden border border-slate-800">
                <Image
                  src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7000.jpg"
                  alt="AI Technology Illustration"
                  fill
                  className="object-cover p-4"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 space-y-8">
            <p className="text-xl leading-relaxed text-slate-300">
              At Code Sapience, we are a team of seasoned developers with
              extensive experience in AI and software development. Our mission
              is to empower small organizations by making AI implementation and
              deployment accessible and affordable.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "IT Product Development",
                  description:
                    "Tailored solutions to meet specific business needs, ensuring that organizations can leverage AI effectively.",
                  icon: "💻",
                },
                {
                  title: "Consultancy Services",
                  description:
                    "Expert guidance to help businesses navigate the complexities of AI implementation and integration.",
                  icon: "🤝",
                },
                {
                  title: "Cloud-Based AI Services",
                  description:
                    "A flexible pay-as-you-go model that eliminates the need for hefty infrastructure investments.",
                  icon: "☁️",
                },
                {
                  title: "AI-Driven Management",
                  description:
                    "Drawing on our team's vast experience, including IIM graduates and business experts.",
                  icon: "🤖",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-6 rounded-xl",
                    "bg-slate-900/50",
                    "backdrop-blur-sm",
                    "border border-slate-800",
                    "hover:border-slate-700",
                    "shadow-lg shadow-slate-900/50",
                    "hover:shadow-slate-900/70",
                    "transform hover:-translate-y-1",
                    "transition-all duration-300"
                  )}
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
