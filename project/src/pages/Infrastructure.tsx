import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Factory, Cog, Scissors, Box } from 'lucide-react';
import { useEffect, useState } from 'react';

const Infrastructure = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set the loader to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  const divisions = [
    {
      title: "Spinning",
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      description: "Rieter & LMW Ring Frames, Murata Vortex, Rieter Airjet",
      capacity: "40 Tons/Day",
      link: "/infrastructure/spinning",
      backgroundImage: "url('https://ashoktextilemills.com/file/wp-content/uploads/2023/03/Airjet.jpg')"
    },
    {
      title: "Sizing",
      icon: <Cog className="h-12 w-12 text-blue-600" />,
      description: "Sizing - Karl Mayer Pro Size, Warping - Karl Mayer",
      capacity: "150,000 Meters/Day",
      link: "/infrastructure/sizing",
      backgroundImage: "url('https://ashoktextilemills.com/file/wp-content/uploads/2023/03/sizing.jpg')"
    },
    {
      title: "Weaving",
      icon: <Box className="h-12 w-12 text-blue-600" />,
      description: "Weaving - Toyota Looms, Dobby Looms – Toyota",
      capacity: "150,000 Meters/Day",
      link: "/infrastructure/weaving",
      backgroundImage: "url('https://ashoktextilemills.com/file/wp-content/uploads/2023/03/weaving.jpg')"
    },
    {
      title: "Made-ups",
      icon: <Scissors className="h-12 w-12 text-blue-600" />,
      description: "Juki Sewing unit for premium quality finished products",
      capacity: "Custom Production",
      link: "/infrastructure/madeups",
      backgroundImage: "url('https://ashoktextilemills.com/file/wp-content/uploads/2023/03/made-up-products-1.jpg')"
    }
  ];

  if (isLoading) {
    // Preloader: Construction Animation
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f7f7f7]">
        <motion.div
          className="relative w-32 h-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Building Blocks Animation */}
          <div className="absolute inset-0 w-full h-full flex justify-center items-center">
            <motion.div
              className="w-8 h-8 bg-gray-800 rounded-lg"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 1,
                delay: 0.2
              }}
            />
          </div>
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 1.5,
              delay: 0.4
            }}
          >
            <motion.div
              className="w-12 h-12 bg-blue-600 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 1.5
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Infrastructure</h1>
        <p className="text-xl text-gray-600">
          State-of-the-art facilities equipped with the latest technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {divisions.map((division, index) => (
          <motion.div
            key={division.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ backgroundImage: division.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <Link to={division.link}>
              <div className="p-8 bg-black bg-opacity-50 rounded-lg">
                <div className="mb-4">{division.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{division.title}</h3>
                <p className="text-white mb-4">{division.description}</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-600 font-semibold">
                    Production Capacity: {division.capacity}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Infrastructure;
