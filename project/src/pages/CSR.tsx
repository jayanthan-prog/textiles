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

        {/* Sustainable Water Resource */}
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

        {/* Water Conservation Image */}
        <div className="mb-8">
          <img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/about-1.jpg"
            alt="Water Conservation Project"
            className="w-full rounded-lg"
          />
        </div>

        {/* Community Welfare Initiatives */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold">Community Welfare Initiatives</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our community welfare initiatives focus on health, education, and economic empowerment.
            We've provided scholarships, organized health camps, and supported local businesses.
          </p>
        </motion.div>

        {/* Environmental Conservation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Leaf className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold">Environmental Conservation</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our environmental conservation efforts include tree planting campaigns, waste management programs, and efforts to reduce carbon emissions.
            We aim to promote sustainability in every aspect of our operations.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CSR;
