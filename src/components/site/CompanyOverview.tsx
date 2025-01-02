import React from "react";

function CompanyOverviewFinal() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          Company Overview
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">LLPN</h2>
            <p className="text-gray-300">
              LLP Identification Number:{" "}
              <span className="font-medium text-blue-300">ACC-6353</span>
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">PAN</h2>
            <p className="text-gray-300">
              Permanent Account Number:{" "}
              <span className="font-medium text-blue-300">AAVFT1086E</span>
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">TAN</h2>
            <p className="text-gray-300">
              Tax Deduction and Collection Account Number:{" "}
              <span className="font-medium text-blue-300">BPLT03845C</span>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://technoshiftinnovation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Visit Our Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverviewFinal;
