import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, BookOpen, Briefcase, Star, ChevronDown } from "lucide-react";
import CollgeImg from '../assets/AboutSliderImage1.jpg';
import Bg from '../assets/AboutUsBg2.png';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const highlights = [
    "Excellence in Technical Education",
    "Industry-Ready Graduates",
    "State-of-the-Art Facilities",
    "100% Placement Assistance",
  ];

  const stats = [
    { icon: Users, number: "5000+", label: "Students" },
    { icon: Award, number: "25+", label: "Years of Excellence" },
    { icon: BookOpen, number: "15+", label: "Programs" },
    { icon: Briefcase, number: "95%", label: "Placement Rate" },
  ];

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      style={{
        background: ` url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Enhanced Animated Background Elements
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
      </div> */}

      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`space-y-8 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Enhanced Badge with better contrast */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium animate-fade-in-up shadow-lg">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Ranked Among Top Engineering Colleges
            </div>

            {/* Main Heading with improved text visibility */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Shape Your
                <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Future
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/90">in Engineering</span>
              </h1>

              {/* Rotating Highlights with better contrast */}
              <div className="h-8 overflow-hidden bg-white/5 backdrop-blur-sm rounded-lg px-2">
                <div
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentSlide * 32}px)` }}
                >
                  {highlights.map((highlight, index) => (
                    <p key={index} className="text-lg sm:text-xl text-blue-100 font-medium h-8 flex items-center">
                      <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Description with improved readability */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl backdrop-blur-sm bg-white/5 p-4 rounded-lg">
              Join Saroj College of Engineering & Polytechnic, where innovation meets excellence. We nurture tomorrow's
              engineers and technologists with cutting-edge curriculum, world-class faculty, and industry partnerships.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/apply"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Apply Now</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative" />
              </Link>

              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              >
                Explore Courses
              </Link>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg mb-2 transition-colors duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Visual Elements */}
          <div className={`relative transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <img
                  src={CollgeImg}
                  alt="Saroj College Campus"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  loading="eager"
                />

                {/* Floating Cards */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg animate-float hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-800">NAAC Accredited</div>
                      <div className="text-xs text-gray-600">A+ Grade</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg animate-float animation-delay-1000 hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-800">Active Students</div>
                      <div className="text-xs text-gray-600">5000+ Enrolled</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-60 animate-bounce shadow-lg"></div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}