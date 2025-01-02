import React from 'react'
import { cn } from '@/lib/utils'

function EmbracingAIResponsibly() {
  const sections = [
    {
      title: "Ethical Considerations",
      points: [
        "Job Displacement: Automation may lead to job loss in certain sectors, necessitating workforce retraining and reskilling initiatives.",
        "Algorithmic Bias: AI systems can inherit biases present in training data, leading to unfair outcomes in hiring, lending, and law enforcement."
      ]
    },
    {
      title: "Proactive Approach to Risk Mitigation",
      points: [
        "Conducting regular audits of AI systems to ensure fairness and transparency.",
        "Engaging with stakeholders to understand concerns and co-create solutions that address ethical dilemmas."
      ]
    },
    {
      title: "Training and Development",
      points: [
        "Develop programs that teach employees how to work alongside AI tools.",
        "Foster an environment of continuous learning to keep pace with technological advancements."
      ]
    },
    {
      title: "Cultural Shift",
      points: [
        "Encourage experimentation and collaboration across teams.",
        "Promote an understanding of AI's capabilities and limitations to harness its potential effectively."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Why Your Organization Needs AI
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground/80">
          Embracing AI Responsibly
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={cn(
                "p-6 rounded-xl backdrop-blur-sm",
                "border border-foreground/10",
                "bg-gradient-to-br from-foreground/5 to-foreground/10",
                "hover:from-foreground/10 hover:to-foreground/15",
                "transition-all duration-300 ease-in-out",
                "group"
              )}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground/90 group-hover:text-purple-500">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.points.map((point, pointIndex) => (
                  <li 
                    key={pointIndex}
                    className="flex items-start space-x-2 text-foreground/70"
                  >
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="group-hover:text-foreground/90 transition-colors">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-50">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className={cn(
                "absolute h-[1px] w-[1px] opacity-0",
                "before:absolute before:h-[1px] before:w-[100px]",
                "before:bg-gradient-to-r before:from-transparent before:via-purple-500 before:to-transparent",
                "animate-meteor-effect"
              )}
              style={{
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmbracingAIResponsibly
