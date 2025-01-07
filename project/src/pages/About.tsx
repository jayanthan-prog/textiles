import { motion } from 'framer-motion';
import { History, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

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

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">25+</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Global</h3>
            <p className="text-gray-600">Export Network</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
            <p className="text-gray-600">Certified Quality</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;