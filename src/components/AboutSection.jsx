import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBook,
  FaFlask,
  FaAward,
  FaUserGraduate,
} from "react-icons/fa";
import { MdEngineering, MdComputer, MdGroups } from "react-icons/md";
import { IoIosRibbon, IoIosRocket } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import AboutImg from "../assets/AboutImg.jpeg";
import ExcellenceBg from "../assets/ExcellenceSectionBg2.png";
import { Link } from "react-router-dom";

const AboutPage = () => {

  const MotionLink = motion(Link);
  // Enhanced animations with spring physics
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: <FaGraduationCap className="text-5xl" />,
      title: "Quality Education",
      description:
        "Industry-relevant curriculum with hands-on learning approach",
    },
    {
      icon: <MdEngineering className="text-5xl" />,
      title: "Advanced Labs",
      description: "₹5Cr+ investment in cutting-edge laboratory equipment",
    },
    {
      icon: <GiTeacher className="text-5xl" />,
      title: "Expert Faculty",
      description: "80% faculty with PhDs and industry experience",
    },
    {
      icon: <FaBook className="text-5xl" />,
      title: "Digital Library",
      description: "50,000+ resources with 24/7 online access",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/3 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></motion.div>
      </div>

      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              EST. 2005 • AICTE APPROVED
            </div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              <span className="text-yellow-300">Saroj College</span> of <br />
              Polytechnic & Engineering
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-blue-100 mb-12"
            >
              Transforming technical education through innovation, excellence,
              and industry-aligned learning
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <MotionLink
              to='/courses-offered'
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl"
              >
                Explore Programs
              </MotionLink>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <div className="animate-bounce w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div
        className="container mx-auto px-6 py-16 relative z-10"
        style={{
          backgroundImage: `url(${ExcellenceBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* College Overview */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div
            variants={fadeIn}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mr-4"></div>
                <span className="text-blue-600 font-bold tracking-wider">
                  PREMIER INSTITUTION
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Excellence in{" "}
                <span className="text-blue-600">Technical Education</span> Since
                2005
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Saroj College of Polytechnic and Engineering has established
                  itself as a leader in technical education, recognized for our
                  innovative curriculum, world-class facilities, and exceptional
                  placement records. Our 15-acre campus is a hub of academic
                  excellence and technological innovation.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  With over{" "}
                  <span className="font-semibold text-blue-600">
                    5,000 successful alumni
                  </span>{" "}
                  working in top companies worldwide, we take pride in our
                  legacy of shaping the engineers and technologists of tomorrow.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <a
                  href="https://seglko.in8.nopaperforms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whilehover={{
                    scale: 1.03,
                    boxShadow: "0 8px 20px -5px rgba(59, 130, 246, 0.5)",
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg"
                >
                  Apply Now
                </a>
              </div>
            </div>

            <motion.div
              variants={fadeIn}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={AboutImg}
                alt="College Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent"></div>

              {/* Floating info cards */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs"
              >
                <div className="flex items-center mb-4">
                  <FaUserGraduate className="text-blue-600 text-2xl mr-3" />
                  <h4 className="font-bold text-gray-800">Student Success</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  95% placement rate with average package of ₹6.5 LPA
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs"
              >
                <div className="flex items-center mb-4">
                  <FaFlask className="text-blue-600 text-2xl mr-3" />
                  <h4 className="font-bold text-gray-800">
                    Innovation in Action
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  50+ breakthroughs by students and faculty
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeIn} className="text-center mb-20">
            <div className="inline-flex flex-col items-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"></div>
              <span className="text-blue-600 font-bold tracking-wider">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The <span className="text-blue-600">Saroj Advantage</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl">
              We provide an educational experience that goes beyond textbooks to
              prepare students for real-world challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-gradient-to-br from-blue-700 to-blue-600 p-10 rounded-3xl shadow-2xl text-center hover:shadow-3xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="p-5 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-500">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Programs Offered */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-4xl shadow-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <div className="py-16 px-8 md:px-16">
                <motion.div
                  variants={fadeIn}
                  className="max-w-4xl mx-auto text-center mb-20"
                >
                  <div className="inline-flex flex-col items-center mb-6">
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mb-4"></div>
                    <span className="text-yellow-300 font-bold tracking-wider">
                      ACADEMIC PROGRAMS
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Shaping{" "}
                    <span className="text-yellow-300">Future Innovators</span>
                  </h2>
                  <p className="text-blue-100 text-xl max-w-3xl mx-auto">
                    Our comprehensive technical programs are designed in
                    collaboration with industry leaders to meet current and
                    future technological demands
                  </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <motion.div
                    variants={fadeIn}
                    className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
                  >
                    <div className="flex items-center mb-10">
                      <div className="p-4 bg-yellow-400 rounded-xl mr-6">
                        <MdEngineering className="text-3xl text-blue-900" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Diploma Programs
                      </h3>
                    </div>
                    <ul className="space-y-6">
                      {[
                        "Mechanical Engineering",
                        "Civil Engineering",
                        "Electrical Engineering",
                        "Electronics & Communication",
                        "Computer Engineering",
                        "Automobile Engineering",
                      ].map((program, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-blue-100">
                            {program}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
                  >
                    <div className="flex items-center mb-10">
                      <div className="p-4 bg-yellow-400 rounded-xl mr-6">
                        <MdComputer className="text-3xl text-blue-900" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Engineering Programs
                      </h3>
                    </div>
                    <ul className="space-y-6">
                      {[
                        "Computer Science & Engineering",
                        "Artificial Intelligence & Machine Learning",
                        "Data Science",
                        "Information Technology",
                        "Electronics & Telecommunication",
                        "Cyber Security",
                      ].map((program, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-blue-100">
                            {program}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeIn} className="text-center mb-20">
            <div className="inline-flex flex-col items-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"></div>
              <span className="text-blue-600 font-bold tracking-wider">
                OUR MILESTONES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              By The <span className="text-blue-600">Numbers</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl">
              Quantifying our impact and commitment to excellence in technical
              education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUserGraduate className="text-5xl" />,
                value: "5000+",
                title: "Successful Alumni",
                description: "Working in top companies worldwide",
              },
              {
                icon: <FaAward className="text-5xl" />,
                value: "95%",
                title: "Placement Rate",
                description: "With average package of ₹6.5 LPA",
              },
              {
                icon: <MdGroups className="text-5xl" />,
                value: "150+",
                title: "Industry Partners",
                description: "For internships and placements",
              },
              {
                icon: <IoIosRocket className="text-5xl" />,
                value: "50+",
                title: "Startups Launched",
                description: "By our student entrepreneurs",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.title}
                </h4>
                <p className="text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-4xl p-16 text-center shadow-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Take the first step towards an exciting career in engineering and
              technology
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://seglko.in8.nopaperforms.com/"
                target="_blank"
                rel="noopener noreferrer"
                whilehover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl"
              >
                Apply for Admission
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
