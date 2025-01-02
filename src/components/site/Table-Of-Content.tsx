'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { cn } from '@/lib/utils'

const tableItems = [
  {
    title: "About Us",
    content:
      "Code Sapience is an AI-focused company providing accessible, cloud-based solutions to small businesses. We simplify AI implementation, removing the need for costly infrastructure and technical expertise",
  },
  {
    title: "Our Mission",
    content:
      "Our mission is to break down technology barriers and make AI solutions available to all organizations, empowering them to automate tasks and improve efficiency.",
  },
  {
    title: "Our Services",
    content:
      "We offer AI product development, consultancy, cloud-based AI services, and tailored solutions that fit your business needs—all on a pay-as-you-go model.",
  },
  {
    title: "Our Team",
    content:
      "Our team consists of AI and software experts with deep experience in development and deployment. We leverage this knowledge to deliver smart, tailored solutions that solve business challenges.",
  },
];

function TableOfContent() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Table of Contents
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tableItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "group relative p-8 rounded-2xl",
                "bg-gradient-to-b from-white/[0.07] to-transparent",
                "border border-white/[0.1]",
                "hover:border-white/[0.2] transition-colors duration-500"
              )}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <span className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-xl text-lg font-bold",
                    "bg-gradient-to-br from-purple-500 to-pink-500 text-white",
                    "shadow-lg shadow-purple-500/30"
                  )}>
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed pl-16">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TableOfContent
