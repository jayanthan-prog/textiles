import { motion } from "framer-motion";
import { Award, Clock, ThumbsUp, Trophy, CheckCircle } from "lucide-react";

const WhyUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container bg-gray-50 py-12"
    >
      Hero Section
      {/* <div
        className="relative h-72 bg-cover bg-center rounded-lg shadow-lg mb-12"
        style={{
          backgroundImage: `url('https://www.shutterstock.com/image-photo/why-choose-us-businessman-holding-600nw-1431803342.jpg')`,
        }}
      >
         
      </div> */}

      {/* Core Content Section */}
      <div className="max-w-6xl mx-auto">
        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Quality Excellence
            </h3>
            <p className="text-gray-600">
              We stand out in quality compared to competitors by adapting to
              eco-friendly textile production technologies. Our commitment to
              100% quality adherence to global standards sets us apart.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <Clock className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Timely Delivery
            </h3>
            <p className="text-gray-600">
              We pride ourselves on delivering orders before deadlines. Our
              world-class client base consistently appreciates our punctuality
              and reliability.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <ThumbsUp className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Client Transparency
            </h3>
            <p className="text-gray-600">
              We maintain complete transparency with clients about
              manufacturing processes and provide regular updates on order
              progress. Our management team is always accessible for inquiries.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <Trophy className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Award-Winning Excellence
            </h3>
            <p className="text-gray-600">
              Our excellence is recognized through multiple awards, including
              three prestigious awards from ABK-AOTS DOSOKAI for our outstanding
              exports to Japan.
            </p>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <div className="flex items-center mb-6">
            <CheckCircle className="h-12 w-12 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">
              Our Certifications
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Ashok Textile Mills Pvt. Ltd. has acquired 5 international
            certifications, proving our commitment to global standards in
            manufacturing and employee welfare.
          </p>
          <ul className="space-y-3 text-gray-600 list-disc pl-6">
            <li>SA 8000:2014</li>
            <li>ISO 9001:2015</li>
            <li>GOTS Scope</li>
            <li>GRS Scope</li>
            <li>C-TPAT SGS</li>
          </ul>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <Trophy className="h-12 w-12 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Awards We Have Won</h2>
          </div>
          <p className="text-gray-600 mb-6">
            We are honored to have received prestigious awards for our excellent
            export performance and overall business practices.
          </p>
          <ul className="space-y-3 text-gray-600 list-disc pl-6">
            <li>2011: 5’S Excellence Award</li>
            <li>2012: 5’S Sustenance Award</li>
            <li>2014: 5’S Model Company Award</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
