import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.header className="bg-white shadow-xl  border-gradient-to-r from-blue-600 to-indigo-600 sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and College Name */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg"
              >
                <GraduationCap className="text-white w-8 h-8 " />
              </motion.div>
            </div>
            <div className="hidden md:block">
              <Link
                to="/"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                Saroj College of Engineering
              </Link>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold"
              >
                & Polytechnic
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
                >
                  About
                  <motion.div
                    animate={{ rotate: activeDropdown === "about" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {activeDropdown === "about" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                    >
                      <div className="py-2">
                        {[
                          { href: "/about-scep", label: "About SCEP" },
                          {
                            href: "/chairman-message",
                            label: "Chairman Message",
                          },
                          {
                            href: "/vision-mission",
                            label: "Vision & Mission",
                          },
                        ].map((item, index) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ backgroundColor: "#eff6ff", x: 4 }}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Courses Dropdown */}
              <Link
                to="/courses-offered"
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
              >
                Courses
              </Link>

              {/* Research and Development Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("research")}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
                >
                  Research & Development
                  <motion.div
                    animate={{
                      rotate: activeDropdown === "research" ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {activeDropdown === "research" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                    >
                      <div className="py-2">
                      {[
                          {
                            href: "/research-development",
                            label: "R & D Projects",
                          },
                          {
                            href: "/technologies-developed",
                            label: "Technologies Developed",
                          },

                          {
                            href: "/award-winning-projects",
                            label: "Award Winning Projects",
                          },
                          {
                            href: "/research-and-publications",
                            label: "Research & Publication",
                          },
                        ].map((item, index) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ backgroundColor: "#eff6ff", x: 4 }}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Us */}
              <Link
                to="/contact-us"
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
              >
                Contact Us
              </Link>
            </nav>

            {/* Apply Now Button */}
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://seglko.in8.nopaperforms.com/"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg"
            >
              Apply Now
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile College Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:hidden pb-4"
        >
          <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Saroj College of Engineering & Polytechnic
          </h1>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden border-t border-gray-200 overflow-hidden"
            >
              <div className="pt-4 pb-4 space-y-1">
                {/* Mobile About Dropdown */}
                <div>
                  <motion.button
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    onClick={() => toggleDropdown("mobile-about")}
                    className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200"
                  >
                    About
                    <motion.div
                      animate={{
                        rotate: activeDropdown === "mobile-about" ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === "mobile-about" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-6 space-y-1 overflow-hidden"
                      >
                        {[
                          { href: "/about-scep", label: "About SCEP" },
                          {
                            href: "/chairman-message",
                            label: "Chairman Message",
                          },
                          {
                            href: "/vision-mission",
                            label: "Vision & Mission",
                          },
                        ].map((item, index) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Courses Dropdown */}
                <Link
                  to="/courses-offered"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200"
                >
                  Courses
                </Link>

                {/* Mobile Research Dropdown */}
                <div>
                  <motion.button
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    onClick={() => toggleDropdown("mobile-research")}
                    className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200"
                  >
                    Research & Development
                    <motion.div
                      animate={{
                        rotate: activeDropdown === "mobile-research" ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === "mobile-research" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-6 space-y-1 overflow-hidden"
                      >
                        {[
                          {
                            href: "/research-development",
                            label: "R & D Projects",
                          },
                          {
                            href: "/technologies-developed",
                            label: "Technologies Developed",
                          },

                          {
                            href: "/award-winning-projects",
                            label: "Award Winning Projects",
                          },
                          {
                            href: "/research-and-publications",
                            label: "Research & Publication",
                          },
                         
                        ].map((item, index) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Contact Us */}
                <Link
                  to="/contact"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200"
                >
                  Contact Us
                </Link>

                {/* Mobile Apply Now Button */}
                <div className="pt-4">
                  <motion.a
                     href="https://seglko.in8.nopaperforms.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg"
                  >
                    Apply Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
