import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { History, MapPin, Award, Users } from 'lucide-react';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="page-container bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen"
        >
          <div className="max-w-4xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>

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

            {/* Milestones Section */}
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
              <ul className="list-disc ml-6 text-gray-600">
                <li>12,000 Spindles</li>
                <li>Looms</li>
                <li>Warping Machinery</li>
                <li>Sizing Machinery</li>
                <li>Vortex Machinery</li>
                <li>Airjet Machinery</li>
                <li>Compact Machinery with 12,000 Spindles</li>
                <li>Made-ups Division for Home Textile Products</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default About;
