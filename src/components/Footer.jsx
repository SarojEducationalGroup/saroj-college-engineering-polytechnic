"use client"

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SCEP</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Saroj College</h3>
                <p className="text-sm text-gray-300">Engineering & Polytechnic</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with quality technical education and fostering innovation for a better tomorrow.
              Building the next generation of engineers and technologists.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about-scep" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About SCEP
                </Link>
              </li>
              <li>
                <Link to="/courses-offered" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            
              <li>
                <Link to="#campus-life" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Campus Life
                </Link>
              </li>
              
            </ul>
          </div>

      

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Chand Sarai, Near Gosainganj,
                    <br />
                    Sultanpur Road, Lucknow,
                    <br />
                    Uttar Pradesh, 226006
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+91 9555699988</p>
                  <p className="text-gray-300 text-sm">+91 9810054878</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">admission.cell@seglko.org</p>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Saroj College of Engineering & Polytechnic. All rights reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex justify-center md:justify-end space-x-6">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Terms and Conditions
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
