import React from "react";
import { cn } from "@/lib/utils";

function TransformativePowerOfAI() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              The Transformative Power of AI
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              AI is heralded as the most pivotal technology of the 21st century,
              fundamentally changing the landscape of business, society, and
              daily life.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Impact on Humanity
            </h2>
            <blockquote className="text-lg italic text-gray-300 border-l-4 border-purple-500 pl-4">
              According to Sundar Pichai, CEO of Alphabet and Google, AI&apos;s impact will surpass that of fire, electricity, and the internal combustion engine.
            </blockquote>
          </div>
        </div>
      </div>

      {/* Industry Transformation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Industry Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Manufacturing",
              description:
                "AI can optimize production processes, enhance supply chain management, and facilitate predictive maintenance.",
            },
            {
              title: "Healthcare",
              description:
                "AI enables personalized medicine, improves diagnostics through image recognition, and automates administrative tasks.",
            },
            {
              title: "Finance",
              description:
                "AI-powered algorithms can detect fraudulent transactions in real time, assess credit risk, and automate trading strategies.",
            },
          ].map((industry, index) => (
            <div
              key={index}
              className={cn(
                "p-6 rounded-xl transition-all duration-300",
                "bg-gradient-to-br from-purple-50 to-blue-50",
                "from-purple-900/20 to-blue-900/20",
                "hover:shadow-lg hover:scale-105"
              )}
            >
              <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
              <p className="text-gray-300">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Key Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-4">86%</div>
              <p className="text-gray-300">
                of executives believe implementing AI will significantly enhance
                their organization&apos;s competitive positioning
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-4">$733B</div>
              <p className="text-gray-300">
                Projected global AI market size by 2027, with a CAGR of 42.2%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransformativePowerOfAI;
