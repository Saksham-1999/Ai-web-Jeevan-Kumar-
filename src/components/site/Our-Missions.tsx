import React from "react";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";

function OurMissions() {
  const missions = [
    {
      title: "Empowerment",
      description: "Enabling small organizations to leverage AI capabilities",
      icon: "💪",
    },
    {
      title: "Accessibility",
      description: "Making AI solutions available and affordable for all",
      icon: "🔓",
    },
    {
      title: "Simplification",
      description: "Streamlining complex AI implementation processes",
      icon: "⚡",
    },
    {
      title: "Automation",
      description: "Enhancing operational efficiency through smart automation",
      icon: "🤖",
    },
    {
      title: "Transformation",
      description: "Revolutionizing business operations in the digital age",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            At Code Sapience, our mission is to empower small organizations by
            providing accessible and effective AI solutions. We strive to
            eliminate the barriers to technology adoption, enabling businesses
            to harness the power of AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={cn(
                "p-8 rounded-2xl transition-all duration-300",
                "bg-gradient-to-b from-white/[0.07] to-transparent",
                "hover:shadow-xl hover:scale-105",
                "border border-white/[0.1]",
                "overflow-hidden relative"
              )}
            >
              <div className="text-4xl mb-4">{mission.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {mission.title}
              </h3>
              <p className="text-foreground/70">{mission.description}</p>
              <Meteors number={10} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurMissions;
