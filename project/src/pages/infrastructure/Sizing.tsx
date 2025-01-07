import { motion } from 'framer-motion';
import { Cog, Ruler, CheckCircle } from 'lucide-react';

const Sizing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sizing Division</h1>

        {/* Sizing Process Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Cog className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Advanced Sizing Process</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Sizing is the essential procedure we follow for our yarns before weaving them, reducing yarn breakage and improving fabric quality. 
            We employ cutting-edge technology to ensure superior quality, with the help of Karl Mayer Pro Size and Warping machines.
          </p>
          <p className="text-gray-600 mb-6">
            The benefits of our sizing process extend to the end consumers. Fabrics made from sized yarn are easy to iron, add a good body to the fabric, are soil-resistant, and easy to wash. Apparel, garments, and textile products made from such high-quality fabrics have high demand in the market.
          </p>
          <p className="text-gray-600 mb-6">
            Our Sizing Division is also equipped with state-of-the-art warping machinery, further enhancing the fabric quality.
          </p>
        </motion.div>

        {/* Production Specifications and Benefits */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <Ruler className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Production Specifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Daily Capacity: 150,000 Meters</li>
                <li>• Annual Output: 54+ Million Meters</li>
                <li>• Beam Width: 50 – 150 inches</li>
                <li>• Count Range: 16s – 120s</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Quality Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Enhanced Yarn Strength</li>
                <li>• Reduced Breakage</li>
                <li>• Improved Weaving Efficiency</li>
                <li>• Superior Fabric Quality</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Equipment Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Equipment Highlights</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Karl Mayer Pro Size</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced Size Application System</li>
                <li>• Precise Temperature Control</li>
                <li>• Uniform Size Distribution</li>
                <li>• Digital Process Monitoring</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Warping</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Karl Mayer Warping Machine</li>
                <li>• High Precision Warping</li>
                <li>• Efficient Yarn Tension Control</li>
                <li>• Reliable and Durable Machinery</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 mt-8 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">
          Under Go The Sizing Process
           </h3>
          <p className="text-gray-600">
          Sizing is the essential procedure we follow for our yarns before weaving them to reduce the breakage of yarn and increase the fabric quality.
          There are many phenomenal benefits of sizing. Fabrics made from sizing yarn are easy for ironing, add a good body to the fabric, are soil resistant, easy to wash, etc. The benefits of the sizing procedure which we do to our yarns reach the end consumers. Apparel, garments and textile products made out of such high-quality fabrics have a high demand in the market. Warping machinery is also available in our Sizing Division.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sizing;
