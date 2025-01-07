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
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Quality Assurance</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Our Commitment to Quality</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Client satisfaction through quality excellence is our primary focus. We maintain
            eco-friendly production processes with proper Quality Management Systems, validated
            by international certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
          {/* SA 8000:2014 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://ashoktextilemills.com/file/wp-content/uploads/2024/07/SA-8000.jpg"
              alt="SA 8000:2014"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">SA 8000:2014 Certified</h3>
              <p className="text-gray-600">
                Proof for Transparency, Trustability & Social Responsibility (Bureau Veritas Certification).
              </p>
            </div>
          </motion.div>
            {/* ISO 9001:2015 */}
            <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://ashoktextilemills.com/file/wp-content/uploads/2022/11/iso-9001-300x300.jpg"
              alt="ISO 9001:2015"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ISO 9001:2015 Certified</h3>
              <p className="text-gray-600">
                International Standard for Quality Management System (QMS).
              </p>
            </div>
          </motion.div>


          {/* GOTS Certification */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://ashoktextilemills.com/file/wp-content/uploads/2022/11/gots-300x300.jpg"
              alt="GOTS SCOPE Certificate"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">GOTS SCOPE Certificate</h3>
              <p className="text-gray-600">
                Certification for Textile Products Produced from Organic Raw Materials with Environmentally & Socially Responsible Manufacturing Process.
              </p>
            </div>
          </motion.div>

          {/* GRS Certification */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://ashoktextilemills.com/file/wp-content/uploads/2022/11/GRS-300x300.jpg"
              alt="GRS SCOPE Certification"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">GRS SCOPE Certification</h3>
              <p className="text-gray-600">
                Tracking of Any Recycled Materials Processes in Textile Manufacturing.
              </p>
            </div>
          </motion.div>

          {/* C-TPAT Certification */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://ashoktextilemills.com/file/wp-content/uploads/2022/11/ct-300x300.jpg"
              alt="C-TPAT SGS Certification"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">C-TPAT SGS Certification</h3>
              <p className="text-gray-600">
                Supply Chain Security Audit Program of Customs-Trade Partnership.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Quality;
