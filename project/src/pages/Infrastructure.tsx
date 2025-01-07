import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Factory, Cog, Scissors, Box } from 'lucide-react';

const Infrastructure = () => {
  const divisions = [
    {
      title: "Spinning",
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      description: "Rieter & LMW Ring Frames, Murata Vortex, Rieter Airjet",
      capacity: "40 Tons/Day",
      link: "/infrastructure/spinning"
    },
    {
      title: "Sizing",
      icon: <Cog className="h-12 w-12 text-blue-600" />,
      description: "Sizing - Karl Mayer Pro Size, Warping - Karl Mayer",
      capacity: "150,000 Meters/Day",
      link: "/infrastructure/sizing"
    },
    {
      title: "Weaving",
      icon: <Box className="h-12 w-12 text-blue-600" />,
      description: "Weaving - Toyota Looms, Dobby Looms – Toyota",
      capacity: "150,000 Meters/Day",
      link: "/infrastructure/weaving"
    },
    {
      title: "Made-ups",
      icon: <Scissors className="h-12 w-12 text-blue-600" />,
      description: "Juki Sewing unit for premium quality finished products",
      capacity: "Custom Production",
      link: "/infrastructure/madeups"
    }
  ];

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
          >
            <Link to={division.link}>
              <div className="p-8">
                <div className="mb-4">{division.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{division.title}</h3>
                <p className="text-gray-600 mb-4">{division.description}</p>
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