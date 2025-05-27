import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaGraduationCap } from "react-icons/fa";
import { Layout } from "../components/Layout";

const NotFoundPage = () => {
  // Binary rain animation (falling 0s and 1s)
  const BinaryRain = () => {
    const binaryChars = ["0", "1"];
    const columns = 20;
    const rows = 15;

    return (
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <div
            key={colIndex}
            className="absolute top-0 left-0 h-full"
            style={{
              left: `${(100 / columns) * colIndex}%`,
              animation: `fall ${Math.random() * 5 + 3}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <span
                key={rowIndex}
                className="text-green-400 text-xs font-mono"
                style={{
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `flicker ${Math.random() * 3 + 1}s infinite alternate`,
                }}
              >
                {binaryChars[Math.floor(Math.random() * binaryChars.length)]}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Glitch effect animation
  const GlitchText = ({ text }) => {
    return (
      <motion.span
        className="relative inline-block"
        animate={{
          textShadow: [
            "0 0 8px #00fffc",
            "0 0 12px #0084ff",
            "0 0 16px #ff00e4",
            "0 0 8px #00fffc",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              y: [0, -5, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.05,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
 <Layout>
       <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden font-sans">
      {/* Binary Rain Background */}
      <BinaryRain />

      {/* Glowing Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />

      {/* Main Container */}
      <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center relative z-10">
        {/* Holographic Card Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 md:p-12 shadow-2xl w-full max-w-3xl relative overflow-hidden"
        >
          {/* Glowing Border */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none">
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl animate-border-pulse" />
          </div>

          {/* Glitchy 404 Text */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-center mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              <GlitchText text="404" />
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
              <GlitchText text="Page Not Found" />
            </h2>
          </motion.div>

          {/* Error Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          >
            The page you're looking for has been lost in the digital void. Maybe it was abducted, or perhaps it never existed. Either way, let's get you back on track.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaHome className="text-lg" />
              Back to Home
            </Link>

            <Link
              to="/courses-offered"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaGraduationCap className="text-lg" />
              Explore Courses
            </Link>

           
          </motion.div>
        </motion.div>

       
      </div>

      {/* CSS for animations (add to your global CSS) */}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-border-pulse {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          background-size: 200% 100%;
          animation: borderPulse 3s infinite linear;
        }
        @keyframes borderPulse {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
 </Layout>
  );
};

export default NotFoundPage;