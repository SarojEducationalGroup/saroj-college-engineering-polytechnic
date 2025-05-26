"use client"

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About SCEP
                </a>
              </li>
              <li>
                <a href="#admissions" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#academics" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Academics
                </a>
              </li>
              <li>
                <a href="#faculty" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#placements" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Placements
                </a>
              </li>
              <li>
                <a href="#campus-life" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Campus Life
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  News & Events
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Academic Programs</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-1">Engineering</h5>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#computer-engineering"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Computer Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      href="#civil-engineering"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Civil Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mechanical-engineering"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Mechanical Engineering
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-1">Polytechnic</h5>
                <ul className="space-y-1">
                  <li>
                    <a href="#diploma-computer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      Diploma in Computer
                    </a>
                  </li>
                  <li>
                    <a href="#diploma-civil" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      Diploma in Civil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#diploma-mechanical"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Diploma in Mechanical
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
                  <p className="text-gray-300 text-sm">+91 22 1234 5678</p>
                  <p className="text-gray-300 text-sm">+91 22 8765 4321</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">info@sarojcollege.edu.in</p>
                  <p className="text-gray-300 text-sm">admissions@sarojcollege.edu.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Office Hours:
                    <br />
                    Mon - Fri: 9:00 AM - 5:00 PM
                    <br />
                    Sat: 9:00 AM - 1:00 PM
                  </p>
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
                <a href="#privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#sitemap" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
