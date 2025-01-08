import { motion } from 'framer-motion';
import { Users, Target, Shield, Phone, MapPin } from 'lucide-react';

const Management = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Management</h1>

        {/* Leadership Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Leadership</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Success and consistency in the field of textile manufacturing for more than two decades is possible only with proper management. Our Managing Director, Mr. P. Ashokkumar, is the backbone of Ashok Textile Mills. His leadership and vision have ensured seamless coordination between various departments, resulting in timely order fulfillment and consistent product quality.
          </p>
          <p className="text-gray-600 mb-6">
            The efficiency of our International Standard for Quality Management System (QMS) is certified with ISO 9001:2015 certification by TUV SUD South Asia Private Limited. This certification affirms our commitment to delivering 100% quality products, adhering to protocols at every stage of the manufacturing process.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-[#cfa079]">Our Mission</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Deliver 100% quality products</li>
              <li>• Maintain international standards</li>
              <li>• Ensure customer satisfaction</li>
              <li>• Drive sustainable growth</li>
            </ul>
          </motion.div>

          {/* Quality Management Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-[#cfa079]">Quality Management</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• ISO 9001:2015 certified</li>
              <li>• Strict quality protocols</li>
              <li>• Regular audits</li>
              <li>• Continuous improvement</li>
            </ul>
          </motion.div>
        </div>

      
      </div>
    </motion.div>
  );
};

export default Management;
