"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Target,
  Eye,
  Heart,
  Building,
  Calendar,
  MapPin,
} from "lucide-react"
import { Layout } from "../components/Layout"
import scepBanner from "../assets/ScepBanner.jpeg"

export default function AboutUsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const stats = [
    { icon: GraduationCap, number: "2000+", label: "Students" },
    { icon: Users, number: "150+", label: "Faculty Members" },
    { icon: Award, number: "25+", label: "Years of Excellence" },
    { icon: BookOpen, number: "15+", label: "Courses Offered" },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in education, research, and innovation to prepare students for global challenges.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We maintain the highest standards of honesty, transparency, and ethical conduct in all our endeavors.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We foster a collaborative environment that encourages teamwork, diversity, and mutual respect.",
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "We embrace innovation and creativity to drive technological advancement and societal progress.",
    },
  ]

  const milestones = [
    { year: "1999", event: "Establishment of Saroj College of Engineering & Polytechnic" },
    { year: "2005", event: "Accreditation by AICTE and affiliation with university" },
    { year: "2010", event: "Introduction of new engineering disciplines" },
    { year: "2015", event: "Launch of research and development center" },
    { year: "2020", event: "Digital transformation and online learning initiatives" },
    { year: "2024", event: "Celebrating 25 years of educational excellence" },
  ]

  return (
   <Layout>
     <div className="min-h-screen bg-gray-50">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative">
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                About SCEP
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl opacity-90 leading-relaxed"
              >
                Empowering minds, shaping futures, and building tomorrow's leaders through quality education and
                innovation
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section variants={itemVariants} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg"
                >
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About Content */}
        <motion.section variants={itemVariants} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Established in 1999, Saroj College of Engineering & Polytechnic (SCEP) has been a cornerstone of
                    technical education, committed to nurturing young minds and preparing them for the challenges of the
                    modern world. Our institution stands as a testament to academic excellence, innovation, and holistic
                    development.
                  </p>
                  <p>
                    Over the past 25 years, we have evolved from a modest beginning to become one of the region's most
                    respected educational institutions. Our journey has been marked by continuous growth, adaptation to
                    technological advances, and an unwavering commitment to quality education.
                  </p>
                  <p>
                    Today, SCEP is home to over 2000 students and 150+ dedicated faculty members who work together to
                    create an environment that fosters learning, research, and personal growth. Our state-of-the-art
                    facilities and industry-aligned curriculum ensure that our graduates are well-prepared for
                    successful careers.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="relative">
                <img
                  src={scepBanner}
                  alt="SCEP Campus"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </motion.section>


        {/* Core Values */}
        <motion.section variants={itemVariants} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center text-gray-800 mb-12">
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

     

        {/* Campus Info */}
        <motion.section
          variants={itemVariants}
          className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white"
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-12">
              Campus Information
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl"
              >
                <Building className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Campus Facilities</h3>
                <p className="opacity-90 leading-relaxed">
                  Modern laboratories, well-equipped classrooms, library, sports facilities, and hostel accommodation.
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl"
              >
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Location</h3>
                <p className="opacity-90 leading-relaxed">
                  Strategically located with excellent connectivity to major cities and industrial hubs.
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl"
              >
                <Calendar className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Academic Calendar</h3>
                <p className="opacity-90 leading-relaxed">
                  Semester-based academic system with regular assessments and industry exposure programs.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

      

      </motion.div>
    </div>
   </Layout>
  )
}
