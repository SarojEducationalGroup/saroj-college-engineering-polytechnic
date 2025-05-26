import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Layout } from "../components/Layout";

export default function TechnologiesDeveloped() {
  const technologies = [
    {
      id: 1,
      details: "Generation of Concave Surfaces with GUI",
      faculty: "Dr. Sunil Singh",
      department: "Mathematics"
    },
    {
      id: 2,
      details: "Graphs Theoretic Algorithms for Equations",
      faculty: "Dr. Sunil Singh",
      department: "Mathematics"
    },
    {
      id: 3,
      details: "Energy Efficient Design of a Milk Processing Plant",
      faculty: "Dr. Dhirendra Thakural",
      department: "Mechanical"
    },
    {
      id: 4,
      details: "R & D aspect Design concept of 3 – wheeler Vikram",
      faculty: "Dr. O. P. Tiwari",
      department: "Mechanical"
    },
    {
      id: 5,
      details: "Fubeceh Agenct Anti Technology",
      faculty: "Prof. (Dr.) S.N Pandyaa",
      department: "Pharmacy"
    },
    {
      id: 6,
      details: "Potential anti HIV Agent-Man rich",
      faculty: "Prof. (Dr.) S.N. Pandyaa",
      department: "Pharmacy"
    },
    {
      id: 7,
      details: "Laser displacement transducer for accurate displacement measurements",
      faculty: "Prof. M.U. Khan",
      department: "Electrical Engineering"
    }
  ];

  return (
 <Layout>
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
            <GraduationCap className="h-10 w-10 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Technologies Developed
            </h1>
          </motion.div>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Innovations and research contributions from our faculty members
          </p>
        </div>

        {/* Technologies Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-indigo-600 to-blue-600">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Sr. No
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Technology Transfer Details
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Faculty Name
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Department
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {technologies.map((tech) => (
                  <motion.tr
                    key={tech.id}
                    whileHover={{ backgroundColor: "#f8fafc" }}
                    transition={{ duration: 0.2 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {tech.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {tech.details}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {tech.faculty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {tech.department}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 bg-indigo-50 rounded-lg p-6 border border-indigo-100"
        >
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">About Our Research</h2>
          <p className="text-gray-700 mb-4">
            Saroj College of Engineering & Polytechnic has been at the forefront of technological innovation, with our faculty members developing cutting-edge solutions that bridge the gap between academia and industry.
          </p>
          <p className="text-gray-700">
            These technology transfers represent our commitment to practical, impactful research that benefits both our students and society at large.
          </p>
        </motion.div>
      </div>
    </motion.div>
 </Layout>
  );
}