import { motion } from 'framer-motion';
import { Cog, Ruler, CheckCircle } from 'lucide-react';

const Sizing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sizing Division</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Cog className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Advanced Sizing Process</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our sizing division employs cutting-edge technology to enhance yarn quality and reduce breakage during weaving.
            With Karl Mayer Pro Size and Warping machines, we ensure superior fabric quality and consistency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <Ruler className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Production Specifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Daily Capacity: 150,000 Meters</li>
                <li>• Annual Output: 54+ Million Meters</li>
                <li>• Beam Width: 50 – 150 inches</li>
                <li>• Count Range: 16s – 120s</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Quality Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Enhanced Yarn Strength</li>
                <li>• Reduced Breakage</li>
                <li>• Improved Weaving Efficiency</li>
                <li>• Superior Fabric Quality</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Equipment Highlights</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Karl Mayer Pro Size</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced Size Application System</li>
                <li>• Precise Temperature Control</li>
                <li>• Uniform Size Distribution</li>
                <li>• Digital Process Monitoring</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sizing;