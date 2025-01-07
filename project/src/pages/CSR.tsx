import { motion } from 'framer-motion';
import { Droplet, Heart, Leaf } from 'lucide-react';

const CSR = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Corporate Social Responsibility</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Droplet className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Sustainable Water Resource</h2>
          </div>
          <p className="text-gray-600 mb-6">
            We have created a significant water conservation project by excavating a lake in 
            Erumapatti, Namakkal district. This initiative has dramatically improved water 
            resources in the surrounding area.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Lake Specifications</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Area: 7.25 acres (29,357 sq. meters)</li>
              <li>• Perimeter: 771 meters</li>
              <li>• Depth: 15 feet</li>
              <li>• Water Capacity: 90,126 cubic meters (90,125,990 Liters)</li>
            </ul>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <Heart className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Community Impact</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Agricultural irrigation support</li>
              <li>• Drinking water source</li>
              <li>• Recreational facilities</li>
              <li>• Improved groundwater levels</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <Leaf className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Environmental Benefits</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Biodiversity conservation</li>
              <li>• Aquatic habitat protection</li>
              <li>• Bird sanctuary development</li>
              <li>• Ecosystem restoration</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CSR;