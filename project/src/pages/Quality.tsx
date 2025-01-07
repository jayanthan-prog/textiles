import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award } from 'lucide-react';

const Quality = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Quality Assurance</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Our Commitment to Quality</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Client satisfaction through quality excellence is our primary focus. We maintain 
            eco-friendly production processes with proper Quality Management Systems, 
            validated by international certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Quality Control Process</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Raw material inspection</li>
              <li>• Process quality monitoring</li>
              <li>• Final product testing</li>
              <li>• Quality documentation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• ISO 9001:2015 Certified</li>
              <li>• SA 8000:2014 Certified</li>
              <li>• Bureau Veritas Certification</li>
              <li>• International Quality Standards</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Quality;