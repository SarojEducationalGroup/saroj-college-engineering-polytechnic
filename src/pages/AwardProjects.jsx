import { motion } from "framer-motion";
import { Award, FlaskConical, HeartPulse, Cpu, Database } from "lucide-react";

export default function AwardWinningProjects() {
  const projects = [
    {
      faculty: "Prof. (Dr.) S.N. Pandeya",
      department: "Pharmacy",
      icon: <FlaskConical className="h-6 w-6 text-purple-600" />,
      projects: [
        "Synthesis and biological activity of fluoroquinolones – as Anti-tubercular Agent",
        "Synthesis of Novel Semicarbazones as Anticonvulsant",
        "Potential anti HIV Agent-Man rich",
        "Novel Anticancer Agents, Isatin derivatives"
      ]
    },
    {
      faculty: "Dr. D.N. Mishra",
      department: "Community Medicine",
      icon: <HeartPulse className="h-6 w-6 text-red-600" />,
      projects: [
        "Community Based Distribution Project",
        "Update Primary Health Care services in Mohanlal Ganj Block",
        "Study of NHRM (National Rural Health Mission) Asha in Gosaiganj Block"
      ]
    },
    {
      faculty: "Er. D. K. Singh",
      department: "Computer Engineering",
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      projects: [
        "Task allocation using B2B e-commerce (under the guidance of Prof. Dr. R.B. Mishra, Dept. of Computer Engg. IT BHU)"
      ]
    },
    {
      faculty: "Dr. Pramod Kr. Pandey",
      department: "Electrical Engineering",
      icon: <Database className="h-6 w-6 text-green-600" />,
      projects: [
        "An investigation into reduced order modeling via ISE minimization technique"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <Award className="h-10 w-10 text-yellow-500 mr-3" />
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Award Winning Projects
            </h1>
          </motion.div>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Celebrating excellence in research and innovation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((facultyProjects, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-opacity-20 bg-gray-200 mr-4">
                    {facultyProjects.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{facultyProjects.faculty}</h3>
                    <p className="text-sm text-gray-500">{facultyProjects.department}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Projects under investigation
                  </h4>
                  <ul className="space-y-3">
                    {facultyProjects.projects.map((project, projectIndex) => (
                      <motion.li 
                        key={projectIndex}
                        whileHover={{ x: 5 }}
                        className="flex items-start"
                      >
                        <span className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2 mt-0.5">•</span>
                        <span className="text-gray-700">{project}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-100"
        >
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">About Our Awarded Research</h2>
          <p className="text-gray-700 mb-4">
            The faculty at Saroj College of Engineering & Polytechnic have been recognized nationally and internationally for their groundbreaking research across diverse disciplines.
          </p>
          <p className="text-gray-700">
            These award-winning projects demonstrate our institution's commitment to solving real-world problems through innovative research and interdisciplinary collaboration.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}