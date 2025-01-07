import { motion } from 'framer-motion';
import { ArrowRight, Award, Factory, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(https://ashoktextilemills.com/file/wp-content/uploads/2022/11/Infrastructure.jpg'
        }}
      >
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white max-w-3xl">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              Excellence in Textile Manufacturing
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl mb-8 text-gray-200"
            >
              Manufacturing world-class fabrics and yarns since 1997, with a commitment to quality and innovation.
            </motion.p>
            <Link
              to="/about"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Key Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200 text-center text-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{
            number: "54+ Million Metres",
            label: "Fabric / Annum"
          }, {
            number: "14000+ Tons",
            label: "Spinning Production Capacity / Annum"
          }, {
            number: "54+ Million Meters",
            label: "Sizing Production Capacity / Annum"
          }, {
            number: "54+ Million Meters",
            label: "Weaving Production Capacity / Annum"
          }].map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              className="bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <div className="text-4xl font-bold text-blue-700">{stat.number}</div>
              <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">About Ashok Textile Mills</h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg max-w-4xl mx-auto mb-8"
        >
          Ashok Textile Mills Pvt. Ltd is an experienced manufacturer of Yarn and Fabrics for more than two decades. We are located in the Namakkal district of the Kongu region of Tamil Nadu, India.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg max-w-4xl mx-auto"
        >
          Textile production is famous in this Kongu Nādu belt for its climatic conditions suitable for yarn production, knitting, and weaving, along with the richness of soil to cultivate high-quality cotton.
        </motion.p>
      </section>

      {/* Division Section */}
      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Division</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            title: "Spinning", 
            link: "/infrastructure/spinning"
          }, {
            title: "Sizing", 
            link: "/infrastructure/sizing"
          }, {
            title: "Weaving", 
            link: "/infrastructure/weaving"
          }, {
            title: "Made-ups", 
            link: "/infrastructure/madeups"
          }].map((division, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4">{division.title}</h3>
              <Link to={division.link} className="text-blue-600 font-semibold">
                READ MORE
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scroll-based Animation Example */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="text-center py-20 bg-gray-200"
      >
        <h3 className="text-2xl font-bold mb-4">Explore Our Story</h3>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Scroll down to discover more about our history, products, and values that drive us forward.
        </p>
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", stiffness: 200 }}
          className="w-10 h-10 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <ArrowRight className="h-5 w-5" />
        </motion.div>
      </motion.div>

       

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2023 Ashok Textile Mills. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
