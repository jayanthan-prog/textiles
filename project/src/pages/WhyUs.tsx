import { motion } from 'framer-motion';
import { Award, Clock, ThumbsUp, Trophy } from 'lucide-react';

const WhyUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Quality Excellence</h3>
            <p className="text-gray-600">
              We stand out in quality compared to competitors by adapting to new 
              eco-friendly textile production technologies. Our commitment to 100% 
              quality adherence to global standards sets us apart.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <Clock className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Timely Delivery</h3>
            <p className="text-gray-600">
              We pride ourselves on delivering orders before deadlines. Our world-class 
              client base consistently appreciates our punctual delivery and reliability.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <ThumbsUp className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Client Transparency</h3>
            <p className="text-gray-600">
              We maintain complete transparency with clients about manufacturing processes 
              and provide regular updates on order progress. Our management team is always 
              accessible for inquiries.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <Trophy className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Award-Winning Excellence</h3>
            <p className="text-gray-600">
              Our excellence is recognized through multiple awards, including three 
              prestigious awards from ABK-AOTS DOSOKAI for our outstanding exports to Japan.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;