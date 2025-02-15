import { motion } from 'framer-motion';
 import CountUp from 'react-countup'; // Import CountUp
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
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(https://ashoktextilemills.com/file/wp-content/uploads/2022/11/Infrastructure.jpg)'
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

      {/* Animated Image Carousel */}
      <motion.section className="relative w-full overflow-hidden py-16">
        <div className="absolute inset-0 bg-gray-900 opacity-50 z-10"></div>
        <motion.div
          className="flex space-x-4 z-20"
          animate={{
            x: ['0%', '-100%', '-200%', '-300%'],
          }}
          transition={{
            duration: 11, // Reduced from 15 to 9 for faster speed
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/home-1.jpg"
            alt="Image 1"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2022/05/05-150x150.jpg"
            alt="Image 2"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/banner1-2.jpg"
            alt="Image 3"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/banner2-1.jpg"
            alt="Image 4"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/banner4-1.jpg"
            alt="Image 5"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          {/* New Images */}
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/RingFrame-Linkconer.jpg"
            alt="RingFrame Linkconer"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/Vortex.jpg"
            alt="Vortex"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/Airjet.jpg"
            alt="Airjet"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/sizing.jpg"
            alt="Sizing"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/weaving.jpg"
            alt="Weaving"
            className="w-full h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </motion.section>

      <section className="py-16 bg-gradient-to-r from-[#8f999f] to-[#8f999f] text-center text-white">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[
      {
        number: "54",
        label: "Million Metres Fabric / Annum",
      },
      {
        number: "14000",
        label: "Tons Spinning Production Capacity / Annum",
      },
      {
        number: "54",
        label: "Million Metres Sizing Production Capacity / Annum",
      },
      {
        number: "54",
        label: "Million Metres Weaving Production Capacity / Annum",
      },
    ].map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
        className="bg-[#8f999f] p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300"
      >
        <div className="text-4xl font-bold text-white">
          <CountUp
            start={0}
            end={parseFloat(stat.number)}
            duration={2}
            separator=","
          />{" "}
          {index === 0 || index > 1 ? "Million Metres" : "Tons"}
        </div>
        <p className="text-lg text-white mt-2">{stat.label}</p>
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
<section
  className="py-20 text-center relative"
  style={{
    background: 'linear-gradient(to right, #c1c9d1, #e0e5eb)', // Subtle gradient background
    backgroundImage: `url('https://textiledivision.com/resources/slides/2.jpg')`, // Background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
  
  {/* Content */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold mb-6 text-white">Our Division</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: 'Spinning', link: '/infrastructure/spinning' },
        { title: 'Sizing', link: '/infrastructure/sizing' },
        { title: 'Weaving', link: '/infrastructure/weaving' },
        { title: 'Made-ups', link: '/infrastructure/madeups' },
      ].map((div, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800">{div.title}</h3>
          <Link to={div.link} className="mt-4 text-blue-600 hover:underline">
            Explore
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;


 