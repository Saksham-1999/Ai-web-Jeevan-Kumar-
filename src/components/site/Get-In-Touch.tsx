import React from 'react'
import { MapPin, Mail, Phone, Heart } from 'lucide-react'

function GetInTouch() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-shadow border border-gray-700">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-900/50 rounded-full mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-white">Our Address</h3>
            <p className="text-gray-300 text-center">
              Nutan K. Choudhary<br />
              B-151 Mahakali Society<br />
              Gulmohar Bhopal<br />
              Pincode: 462016
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-shadow border border-gray-700">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-900/50 rounded-full mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-white">Our Email</h3>
            <div className="text-gray-300 text-center">
              <a href="mailto:nutanchaudhary77@gmail.com" className="block hover:text-blue-400 transition-colors">
                nutanchaudhary77@gmail.com
              </a>
              <a href="mailto:technoshiftinnovation@gmail.com" className="block hover:text-blue-400 transition-colors">
                technoshiftinnovation@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-shadow border border-gray-700">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-900/50 rounded-full mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-white">Our Number</h3>
            <a href="tel:+919584337722" className="text-gray-300 text-center block hover:text-blue-400 transition-colors">
              +91 95843 37722
            </a>
          </div>
        </div>

        {/* Thanks For Attention Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
            <Heart className="w-5 h-5 fill-red-500" />
            <span className="text-lg font-medium text-blue-400">Thanks For Attention</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
