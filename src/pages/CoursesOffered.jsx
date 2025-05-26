import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Computer,
  Zap,
  Building,
  Car,
  Snowflake,
  Cog,
  Film,
  Monitor,
  Camera,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Layout } from "../components/Layout";

export default function CoursesOffered() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // B.Tech Programs Data
  const btechPrograms = [
    {
      name: "Civil Engineering",
      icon: Building,
      intake: 30,
      duration: "4 Years",
      description:
        "Design and construction of infrastructure, buildings, roads, and bridges.",
      highlights: [
        "Structural Design",
        "Construction Management",
        "Environmental Engineering",
        "Surveying",
      ],
    },
    {
      name: "Electrical Engineering",
      icon: Zap,
      intake: 30,
      duration: "4 Years",
      description:
        "Power systems, electrical machines, and electronic circuits design.",
      highlights: [
        "Power Systems",
        "Control Systems",
        "Electronics",
        "Renewable Energy",
      ],
    },
    {
      name: "Mechanical Engineering (Automobile)",
      icon: Car,
      intake: 30,
      duration: "4 Years",
      description:
        "Automotive design, manufacturing, and maintenance technologies.",
      highlights: [
        "Vehicle Design",
        "Engine Technology",
        "Automotive Systems",
        "Manufacturing",
      ],
    },
    {
      name: "Mechanical Engineering (Refrigeration & Air Conditioning)",
      icon: Snowflake,
      intake: 30,
      duration: "4 Years",
      description:
        "HVAC systems, refrigeration technology, and thermal engineering.",
      highlights: [
        "HVAC Design",
        "Refrigeration Systems",
        "Thermal Engineering",
        "Energy Efficiency",
      ],
    },
    {
      name: "Mechanical Engineering (Production)",
      icon: Cog,
      intake: 30,
      duration: "4 Years",
      description:
        "Manufacturing processes, production planning, and industrial automation.",
      highlights: [
        "Manufacturing",
        "Production Planning",
        "Quality Control",
        "Industrial Automation",
      ],
    },
    {
      name: "Computer Science and Engineering",
      icon: Computer,
      intake: 60,
      duration: "4 Years",
      description:
        "Software development, algorithms, data structures, and emerging technologies.",
      highlights: [
        "Programming",
        "Data Structures",
        "AI/ML",
        "Web Development",
      ],
    },
  ];

  // Diploma Programs Data
  const diplomaPrograms = [
    {
      name: "Computer Science and Engineering",
      icon: Computer,
      intake: 60,
      duration: "3 Years",
      description:
        "Fundamentals of programming, software development, and computer applications.",
      highlights: [
        "Programming Languages",
        "Database Management",
        "Web Technologies",
        "Software Testing",
      ],
    },
    {
      name: "Civil Engineering",
      icon: Building,
      intake: 30,
      duration: "3 Years",
      description:
        "Basic civil engineering principles, construction techniques, and project management.",
      highlights: [
        "Construction Technology",
        "Building Materials",
        "Surveying",
        "Project Planning",
      ],
    },
    {
      name: "Electrical Engineering",
      icon: Zap,
      intake: 30,
      duration: "3 Years",
      description:
        "Electrical systems, power distribution, and electronic devices.",
      highlights: [
        "Electrical Circuits",
        "Power Systems",
        "Electronics",
        "Instrumentation",
      ],
    },
    {
      name: "Mechanical Engineering (Automobile)",
      icon: Car,
      intake: 30,
      duration: "3 Years",
      description:
        "Automotive technology, vehicle maintenance, and repair techniques.",
      highlights: [
        "Engine Systems",
        "Vehicle Maintenance",
        "Automotive Electronics",
        "Repair Techniques",
      ],
    },
    {
      name: "Mechanical Engineering (Refrigeration & Air-Conditioning)",
      icon: Snowflake,
      intake: 30,
      duration: "3 Years",
      description:
        "Refrigeration systems, air conditioning technology, and maintenance.",
      highlights: [
        "Refrigeration Cycles",
        "AC Systems",
        "Maintenance",
        "Energy Conservation",
      ],
    },
    {
      name: "Mechanical Engineering (Production)",
      icon: Cog,
      intake: 30,
      duration: "3 Years",
      description:
        "Production processes, manufacturing technology, and quality assurance.",
      highlights: [
        "Manufacturing Processes",
        "Quality Assurance",
        "Production Planning",
        "Industrial Safety",
      ],
    },
    {
      name: "Cinematography",
      icon: Camera,
      intake: 30,
      duration: "3 Years",
      description:
        "Film production, camera techniques, and visual storytelling.",
      highlights: [
        "Camera Operations",
        "Lighting Techniques",
        "Film Production",
        "Visual Composition",
      ],
    },
    {
      name: "Direction Screen Play Writing and TV Production",
      icon: Film,
      intake: 30,
      duration: "3 Years",
      description:
        "Film direction, screenplay writing, and television production techniques.",
      highlights: [
        "Script Writing",
        "Direction Techniques",
        "TV Production",
        "Post-Production",
      ],
    },
    {
      name: "Film Technology (Animation and Visual Effects)",
      icon: Monitor,
      intake: 30,
      duration: "3 Years",
      description:
        "Animation techniques, visual effects, and digital media production.",
      highlights: [
        "2D/3D Animation",
        "Visual Effects",
        "Digital Media",
        "Motion Graphics",
      ],
    },
  ];

  const stats = [
    { icon: BookOpen, number: "15+", label: "Total Courses" },
    { icon: Users, number: "390", label: "Total Intake" },
    { icon: GraduationCap, number: "2", label: "Program Levels" },
    { icon: Award, number: "AICTE", label: "Approved" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative"
        >
          {/* Hero Section */}
          <motion.section
            variants={itemVariants}
            className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden"
          >
            <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-20'></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  Courses Offered
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl opacity-90 leading-relaxed"
                >
                  Comprehensive technical education programs designed to meet
                  industry demands and foster innovation
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Institution Info */}
          <motion.section variants={itemVariants} className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl font-bold text-center text-gray-800 mb-8"
                >
                  Institution Information
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600">
                          Chand Sarai, Near Gosainganj, Sultanpur Road, Lucknow,
                          Uttar Pradesh, 226006
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Institution Type
                        </h3>
                        <p className="text-gray-600">Private-Self Financing</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Affiliation
                        </h3>
                        <p className="text-gray-600">
                          Uttar Pradesh Board of Technical Education, Lucknow
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Established
                        </h3>
                        <p className="text-gray-600">2014</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* B.Tech Programs */}
          <motion.section variants={itemVariants} className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-center text-gray-800 mb-4"
              >
                B.Tech Programs
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-center text-gray-600 mb-12 text-lg"
              >
                4-Year Bachelor of Technology Programs
              </motion.p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {btechPrograms.map((program, index) => (
                  <motion.div
                    key={program.name}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6">
                      <program.icon className="w-12 h-12 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                      <div className="flex items-center justify-between text-sm opacity-90">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {program.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {program.intake} Seats
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Key Highlights:
                        </h4>
                        {program.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Diploma Programs */}
          <motion.section variants={itemVariants} className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-center text-gray-800 mb-4"
              >
                Diploma Programs
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-center text-gray-600 mb-12 text-lg"
              >
                3-Year Diploma in Engineering and Technology Programs
              </motion.p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diplomaPrograms.map((program, index) => (
                  <motion.div
                    key={program.name}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6">
                      <program.icon className="w-12 h-12 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                      <div className="flex items-center justify-between text-sm opacity-90">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {program.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {program.intake} Seats
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Key Highlights:
                        </h4>
                        {program.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Button  */}
          <div className="flex justify-center py-6">
  <a
    href="https://seglko.in8.nopaperforms.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 flex justify-center text-white font-semibold py-4 px-12 rounded-lg shadow transition duration-300"
  >
    Apply Now
  </a>
</div>

        </motion.div>
      </div>
    </Layout>
  );
}
