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

        {/* Premium Home Textiles Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="h-8 w-8 text-blue-600 mr-3"
            >
              <Scissors />
            </motion.div>
            <h2 className="text-2xl font-bold">Premium Home Textiles</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Established in 2016, our Made-ups division specializes in high-quality home textile products. 
            We focus on internal space furnishing with products like bed linens, curtains, and other decorative textiles. 
            The manufacturing facility is equipped with the latest JUKI machines and operates in a fully air-conditioned environment, ensuring a comfortable and productive work atmosphere.
          </p>
          <p className="text-gray-600 mb-6">
            Our products are known for their superior quality, and the facility includes dedicated sections for Cutting, Stitching, Ironing, and Packing to ensure every product meets global standards.
          </p>

          {/* Product Range and Quality Assurance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 rounded-lg p-6"
            >
              <Package className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Product Range</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bed Linens</li>
                <li>• Home Furnishings</li>
                <li>• Decorative Textiles</li>
                <li>• Custom Products</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 rounded-lg p-6"
            >
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• International Standards</li>
                <li>• Quality Control Lab</li>
                <li>• Expert Craftsmanship</li>
                <li>• Premium Finishing</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Production Facility Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
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

        {/* Mission and Commitment */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 140 }}
          className="bg-white rounded-lg shadow-lg p-8 mt-8 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600">
            At Ashok Textile Mills, our mission is to deliver premium made-up textile products that enhance the beauty and functionality of living spaces. 
            We strive for excellence through advanced machinery, skilled labor, and rigorous quality control. Every product is crafted to meet international standards, ensuring that our clients receive the best in home textiles.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Madeups;
