import { motion } from 'framer-motion';
import { History, MapPin, Award, Users, Globe, ShieldCheck, Star } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container bg-[#f7f7f7] min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

        {/* Our Journey Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <History className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Our Journey</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Ashok Textile Mills Pvt. Ltd is an experienced manufacturer of Yarn and Fabrics for more than 2 decades. 
            Since our establishment in 1997, we have consistently equipped ourselves with the latest technology 
            to manufacture and export world-class fabrics. Recently, we expanded into made-up products, 
            specializing in premium home textile products.
          </p>
        </motion.div>

        {/* Strategic Location Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Strategic Location</h2>
          </div>
          <p className="text-gray-600 mb-6">
            We are strategically located in the Namakkal district of the Kongu region in Tamil Nadu, 
            an area renowned for textile manufacturing and exports. The region's climate is ideal for 
            yarn production, knitting, and weaving, complemented by soil conditions perfect for 
            cultivating high-quality cotton.
          </p>
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Award className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Vision & Mission</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our vision is to become a vertically integrated textile company while continuously developing and expanding our product range. We are committed to improving our infrastructure to global standards, ensuring the best quality for our exports, and focusing on eco-friendly textile manufacturing.
          </p>
          <p className="text-gray-600 mb-6">
            We aim to provide 100% customer satisfaction by maintaining transparent communication throughout the manufacturing process, ensuring timely delivery, and guaranteeing quality in our products.
          </p>
        </motion.div>

        {/* Milestone Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Milestones</h2>
          </div>
          <p className="text-gray-600 mb-6">
            The growth of Ashok Textile Mills Pvt. Ltd has been consistent from its start. We began with just 100 employees and 3,528 spindles, and over the years, our infrastructure and manpower have grown significantly. 
          </p>
          <p className="text-gray-600 mb-6">
            Our current high-end infrastructure and machinery include:
            <ul className="list-disc ml-6">
              <li>12,000 Spindles</li>
              <li>Looms</li>
              <li>Warping Machinery</li>
              <li>Sizing Machinery</li>
              <li>Vortex Machinery</li>
              <li>Airjet Machinery</li>
              <li>Compact Machinery with 12,000 Spindles</li>
              <li>Made-ups Division for Home Textile Products</li>
            </ul>
          </p>
        </motion.div>

        
        {/* Employee Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Our Employees</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Currently, we employ more than 500 professionals who are the backbone of Ashok Textile Mills. 
            We place a strong emphasis on employee welfare, ensuring a safe and comfortable working environment at all levels.
          </p>
        </motion.div>

        {/* New Sections */}
        {/* Our Production & Fabrics Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Star className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Our Production & Fabrics</h2>
          </div>
          <p className="text-gray-600 mb-6">
            The total production of Ashok Textile Mills is around 60+ million metres of fabric per annum. 
            We produce a wide range of high-quality fabrics such as Superior quality Viscose, Modal, Livaeco, 
            Excel, and more, all adhering to global standards.
          </p>
          <p className="text-gray-600 mb-6">
            Ashok Textile Mills focuses on manufacturing 100% high-quality fabrics, and our commitment to 
            excellence is evident through our international certifications and recognitions.
          </p>
        </motion.div>

        {/* Employee Welfare Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Employee Welfare</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our employees are the important pillars of Ashok Textile Mills. We place great emphasis on 
            employee welfare at all levels, ensuring a safe and comfortable working environment for everyone.
          </p>
        </motion.div>

        {/* Key Stats moved here */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">25+</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Global</h3>
            <p className="text-gray-600">Export Network</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShieldCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
            <p className="text-gray-600">Certified Quality</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
