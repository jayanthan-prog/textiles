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
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80")'
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

      {/* New Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-center text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "54+ Million Metres", label: "Fabric / Annum" },
            { number: "14000+ Tons", label: "Spinning Production Capacity / Annum" },
            { number: "54+ Million Meters", label: "Sizing Production Capacity / Annum" },
            { number: "54+ Million Meters", label: "Weaving Production Capacity / Annum" }
          ].map((stat, index) => (
            <motion.div key={index} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
              <div className="text-4xl font-bold">{stat.number}</div>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">About Ashok Textile Mills</h2>
        <p className="text-lg max-w-4xl mx-auto mb-8">
          Ashok Textile Mills Pvt. Ltd is an experienced manufacturer of Yarn and Fabrics for more than two decades. We are located in the Namakkal district of the Kongu region of Tamil Nadu, India.
        </p>
        <p className="text-lg max-w-4xl mx-auto">
          Textile production is famous in this Kongu Nādu belt for its climatic conditions suitable for yarn production, knitting, and weaving, along with the richness of soil to cultivate high-quality cotton.
        </p>
      </section>

      {/* Division Section */}
      <section className="py-20 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Division</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Spinning", link: "/infrastructure/spinning" },
            { title: "Sizing", link: "/infrastructure/sizing" },
            { title: "Weaving", link: "/infrastructure/weaving" }
          ].map((division, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{division.title}</h3>
              <Link to={division.link} className="text-blue-600 font-semibold">
                READ MORE
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
