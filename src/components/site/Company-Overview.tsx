import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function CompanyOverview() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Company Overview
              </h2>
              <p className="text-blue-600 font-semibold">
                Empowering Through AI Innovation
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Code Sapience dynamic technology firm dedicated to empowering
                small organizations through accessible AI solutions. Founded by
                experienced developers with strong backgrounds in AI and
                software development, we simplify the complexities of AI
                implementation and deployment.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">IT Product Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Custom solutions tailored to your business needs
                  </p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">Expert Consultancy</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Professional guidance for AI implementation
                  </p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">Cloud-Based Solutions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Flexible pay-as-you-go AI services
                  </p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">Automation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Streamline operations with intelligent automation
                  </p>
                </div>
              </div>

              <p className="text-gray-500 dark:text-gray-400">
                Our mission is to break down technological barriers, enabling
                organizations to thrive in an increasingly digital landscape
                without the need for significant infrastructure investment or
                specialized IT staff.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7000.jpg"
              alt="Code Sapience AI Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;
