"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="min-h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full px-4 py-12 relative z-10 mt-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[50%] space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
              Code Sapience Service
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl max-w-2xl">
              Empowering your digital journey with cutting-edge solutions and innovative technology
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-full border border-neutral-700 text-white font-medium hover:bg-neutral-900 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[50%]"
          >
            <Image
              src="https://fastwpdemo.com/newwp/sinco/wp-content/uploads/2022/02/ils_13.svg"
              alt="Code Sapience Logo"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Hero;
