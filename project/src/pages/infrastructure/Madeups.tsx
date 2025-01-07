import { motion } from 'framer-motion';
import { Scissors, Package, Shield } from 'lucide-react';

const Madeups = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Made-ups Division</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Scissors className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Premium Home Textiles</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Established in 2016, our Made-ups division specializes in high-quality home textile products.
            The facility features modern JUKI machines in a fully air-conditioned environment for optimal production conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <Package className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Product Range</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bed Linens</li>
                <li>• Home Furnishings</li>
                <li>• Decorative Textiles</li>
                <li>• Custom Products</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• International Standards</li>
                <li>• Quality Control Lab</li>
                <li>• Expert Craftsmanship</li>
                <li>• Premium Finishing</li>
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
          <h2 className="text-2xl font-bold mb-6">Production Facility</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Facility Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Modern JUKI Machinery</li>
                <li>• Climate-Controlled Environment</li>
                <li>• Dedicated Cutting Section</li>
                <li>• Professional Stitching Unit</li>
                <li>• Advanced Ironing Facility</li>
                <li>• Quality Control Department</li>
                <li>• Efficient Packaging Area</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Madeups;