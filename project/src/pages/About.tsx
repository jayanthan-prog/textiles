import { motion } from 'framer-motion';
import { History, MapPin, Award, Users, Globe, ShieldCheck, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  // State to control the visibility of the preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading time of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // After 2 seconds, hide preloader and show the content
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  if (isLoading) {
    // Display preloader animation
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f7f7f7]">
        <motion.div
          className="text-4xl text-blue-600"
          animate={{ y: [0, -20, 0] }} // Bouncing effect
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 0.8,
          }}
        >
          ?
        </motion.div>
      </div>
    );
  }

  // Display the main content once the preloader is done
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container bg-[#f7f7f7] min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

        {/* Our Journey Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <History className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Our Journey</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Ashok Textile Mills Pvt. Ltd is an experienced manufacturer of Yarn and Fabrics for more than 2 decades. 
            Since our establishment in 1997, we have consistently equipped ourselves with the latest technology 
            to manufacture and export world-class fabrics. Recently, we expanded into made-up products, 
            specializing in premium home textile products.
          </p>
        </motion.div>

        {/* Strategic Location Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Strategic Location</h2>
          </div>
          <p className="text-gray-600 mb-6">
            We are strategically located in the Namakkal district of the Kongu region in Tamil Nadu, 
            an area renowned for textile manufacturing and exports. The region's climate is ideal for 
            yarn production, knitting, and weaving, complemented by soil conditions perfect for 
            cultivating high-quality cotton.
          </p>
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Award className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Vision & Mission</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our vision is to become a vertically integrated textile company while continuously developing and expanding our product range. We are committed to improving our infrastructure to global standards, ensuring the best quality for our exports, and focusing on eco-friendly textile manufacturing.
          </p>
          <p className="text-gray-600 mb-6">
            We aim to provide 100% customer satisfaction by maintaining transparent communication throughout the manufacturing process, ensuring timely delivery, and guaranteeing quality in our products.
          </p>
        </motion.div>

        {/* Milestone Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Milestones</h2>
          </div>
          <p className="text-gray-600 mb-6">
            The growth of Ashok Textile Mills Pvt. Ltd has been consistent from its start. We began with just 100 employees and 3,528 spindles, and over the years, our infrastructure and manpower have grown significantly. 
          </p>
          <p className="text-gray-600 mb-6">
            Our current high-end infrastructure and machinery include:
            <ul className="list-disc ml-6">
              <li>12,000 Spindles</li>
              <li>Looms</li>
              <li>Warping Machinery</li>
              <li>Sizing Machinery</li>
              <li>Vortex Machinery</li>
              <li>Airjet Machinery</li>
              <li>Compact Machinery with 12,000 Spindles</li>
              <li>Made-ups Division for Home Textile Products</li>
            </ul>
          </p>
        </motion.div>

        {/* Employee Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Our Employees</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Currently, we employ more than 500 professionals who are the backbone of Ashok Textile Mills. 
            We place a strong emphasis on employee welfare, ensuring a safe and comfortable working environment at all levels.
          </p>
        </motion.div>

        {/* Other Sections (Production & Fabrics, Employee Welfare, etc.) */}
        {/* These can follow similar motion div patterns for animations */}
      </div>
    </motion.div>
  );
};

export default About;
