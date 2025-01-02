import React from "react";
import { cn } from "@/lib/utils";

function EconomicCaseForAI() {
  const stats = [
    {
      title: "Global Economic Impact",
      value: "$13 trillion",
      description:
        "Potential contribution to global economy by 2030 (McKinsey)",
    },
    {
      title: "AI Investment",
      value: "$33 billion",
      description: "Global investments in AI startups (2020)",
    },
    {
      title: "Automation Potential",
      value: "45%",
      description: "of current work tasks can be automated with AI",
    },
    {
      title: "Productivity Increase",
      value: "40%",
      description: "Projected productivity boost by 2035 (Accenture)",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              The Economic Case for AI
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Why Your Organization Needs to Embrace Artificial Intelligence
            </p>
          </div>
        </div>

        {/* Meteor Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute h-0.5 w-0.5 bg-gray-500 rotate-45",
                "animate-meteor-effect"
              )}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-300">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Future-Ready Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8">
          <blockquote className="text-xl md:text-2xl font-medium text-center">
            &ldquo;Organizations that successfully leverage AI will be
            positioned as industry leaders, capable of innovating and adapting
            to evolving market landscapes. Companies that fail to adopt AI risk
            falling behind.&rdquo;
            <footer className="mt-4 text-sm text-gray-400">
              - Andrew Ng, Stanford Professor and Co-Founder of Coursera
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default EconomicCaseForAI;
