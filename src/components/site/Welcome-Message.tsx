"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function WelcomeMessage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: 1.2,
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
          {/* Content Section with Enhanced Animations */}
          <motion.div className="flex-1 space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Welcome to Code Sapience
            </motion.h1>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "p-6 rounded-2xl space-y-4",
                "bg-gradient-to-b from-white/[0.07] to-transparent",
                "border border-white/[0.1]",
                "group hover:border-white/[0.2] transition-all duration-500"
              )}
            >
              {/* Content remains the same */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-white/70 leading-relaxed"
              >
                We are excited to have you with us, where innovation drives
                success! At Code Sapience, we believe in empowering
                organizations to reach new heights through AI and technology.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-white/70 leading-relaxed"
              >
                Together, we will unlock endless possibilities, accelerate
                growth, and embark on a journey of transformation. With our
                expert guidance and tailored solutions, you&apos;ll be equipped
                to achieve your full potential.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-3">
                <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  Welcome aboard, and let&apos;s shape the future together!
                </p>
                <p className="text-lg font-medium text-purple-400">
                  Code Sapience – Team
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section with Enhanced Animations */}
          <motion.div
            variants={itemVariants}
            // whileHover={{ scale: 1.05 }}
            className="flex-1 relative w-full h-[500px]"
          >
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent blur-xl rounded-2xl"
            />
            <Image
              src="https://img.freepik.com/free-vector/vector-collection-business-people_53876-17617.jpg?t=st=1735812995~exp=1735816595~hmac=ce7286433d955ac6169008321ca9e2b9441134398932a66353e70fbd83cb4833&w=740"
              alt="Welcome Illustration"
              width={740}
              height={1000}
              className="object-cover rounded-2xl h-full w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WelcomeMessage;
