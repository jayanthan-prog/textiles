import { motion } from 'framer-motion';
import { Factory, Award, BarChart } from 'lucide-react';

const Spinning = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Spinning Division</h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Factory className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">World-Class Yarn Production</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our spinning division produces premium quality yarns using state-of-the-art machinery and advanced technology.
            With a production capacity of 40 Tons/Day, we ensure consistent quality and timely delivery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <BarChart className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Production Capacity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Daily Output: 40 Tons</li>
                <li>• Annual Capacity: 14,000+ Tons</li>
                <li>• Viscose Count Range: 60+</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <Award className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Quality Standards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ISO 9001:2015 Certified</li>
                <li>• Advanced Quality Control</li>
                <li>• International Standards</li>
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
          <h2 className="text-2xl font-bold mb-6">Our Machinery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Ring Frames</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rieter Latest Models</li>
                <li>• LMW Advanced Systems</li>
                <li>• High-Speed Operation</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Special Equipment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Murata Vortex Spinning</li>
                <li>• Rieter Airjet Technology</li>
                <li>• Advanced Control Systems</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Spinning;