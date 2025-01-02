import React from "react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "AI-Powered Automation",
    description:
      "Streamline repetitive tasks using AI-driven automation tools, allowing businesses to focus on strategic growth while reducing human error and operational costs.",
    icon: "🤖",
  },
  {
    title: "AI-Enhanced Business Intelligence",
    description:
      "Leverage AI to analyze large volumes of data and generate actionable insights, empowering better decision-making, forecasting, and business growth strategies.",
    icon: "📊",
  },
  {
    title: "AI Consultancy and Advisory",
    description:
      "Expert AI consulting services to guide organizations through AI adoption, from strategy formulation to deployment, ensuring a smooth and successful integration of AI technology.",
    icon: "💡",
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "Harness NLP technologies to improve customer service, enhance communication channels, and automate language-based processes such as chatbots and sentiment analysis.",
    icon: "💬",
  },
  {
    title: "Machine Learning Model Development",
    description:
      "Design and deploy machine learning models to solve complex business problems, from predictive analytics to risk management, providing a competitive advantage in data-driven decision-making.",
    icon: "🧠",
  },
  {
    title: "Web and Mobile Application Development",
    description:
      "Develop seamless, scalable web and mobile applications for enhanced customer engagement and business efficiency, offering cross-platform solutions with AI integration for superior performance.",
    icon: "📱",
  },
];

function OurSolutions() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Our Solutions
          </h2>
          <p className="text-xl text-slate-400">
            Fueling Growth, Innovation, and Excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={cn(
                "p-6 rounded-xl transition-all duration-300",
                "bg-gray-800/50 backdrop-blur-sm",
                "border border-gray-700",
                "hover:shadow-xl hover:scale-105",
                "group"
              )}
            >
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-400 flex-grow">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurSolutions;
