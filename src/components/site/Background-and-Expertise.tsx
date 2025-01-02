import React from 'react';
import { cn } from '@/lib/utils';

function BackgroundAndExpertise() {
  const expertiseAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Deep understanding of AI/ML algorithms, neural networks, and natural language processing to develop AI solutions that solve complex problems and optimize processes."
    },
    {
      title: "Business Consulting",
      description: "Strategic advisory experience, helping organizations navigate AI adoption and integrate it with their business processes for long-term success."
    },
    {
      title: "Software Development",
      description: "Proficiency in building robust, scalable software solutions tailored to client needs, from web and mobile apps to enterprise-grade systems."
    },
    {
      title: "Cloud Computing",
      description: "Expertise in delivering cloud-based solutions, enabling flexible, scalable infrastructure for AI services and application development."
    },
    {
      title: "Cybersecurity and Data Protection",
      description: "Strong focus on data security and AI-driven threat detection to safeguard businesses from cyber risks."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Background and Expertise
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            The founders of Code Sapience come with extensive experience in software development and artificial intelligence.
          </p>
        </div>

        {/* Background Section */}
        <div className="mb-20 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-blue-500">Our Background</h3>
          <p className="text-slate-400 leading-relaxed">
            With a strong background in AI technologies, software engineering, and IT infrastructure, 
            our team has collectively worked across various industries, contributing to innovative solutions 
            that enhance business operations. Our founders are graduates of prestigious institutions such as 
            the Indian Institutes of Management (IIM), bringing a unique blend of technical expertise and 
            business acumen to the table.
          </p>
        </div>

        {/* Expertise Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-blue-500">Key Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className={cn(
                  "p-6 rounded-xl transition-all duration-300",
                  "bg-white/5 backdrop-blur-lg hover:bg-white/10",
                  "border border-gray-200 dark:border-gray-800",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                <h4 className="text-xl font-semibold mb-3 text-purple-500">{area.title}</h4>
                <p className="text-slate-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundAndExpertise;
