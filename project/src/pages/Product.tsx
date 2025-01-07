import { motion } from 'framer-motion';

const Product = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Products</h1>

        {/* Product Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Product Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/p2-1-300x211.jpg"
                alt="product 1"
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-center">Product 1</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/product-g1-1-300x211.jpg"
                alt="product g1"
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-center">Product G1</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/product-g2-1-300x211.jpg"
                alt="product g2"
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-center">Product G2</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/product-g3-1-300x211.jpg"
                alt="product g3"
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-center">Product G3</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/product-g4-1-300x211.jpg"
                alt="product g4"
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-center">Product G4</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/product-g5-1-300x211.jpg"
                alt="product g5"
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-center">Product G5</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/product-g6-1-300x211.jpg"
                alt="product g6"
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-center">Product G6</p>
            </div>
            
          </div>
        </section>

        {/* Spinning Products Box */}
        <motion.section
          className="mb-12 p-6 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Spinning Products</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Compact Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Murata Vortex Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Reiter Airjet Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Hank Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Modal Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Excel Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Liva Eco Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>High Twist Yarn (Tpi 28-48)</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Siro – Eli Twist Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Slub Yarn</motion.li>
          </ul>
        </motion.section>

        {/* Weaving Products Box */}
        <motion.section
          className="mb-12 p-6 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Weaving Products</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Plain Sheeting / Poplin</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Drill / Twill / Gaberdine / Broken Twill</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Sateen / Satin</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Stripe Satin</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Oxford / Chambray</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>RipStop</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Dobby Designs</motion.li>
          </ul>
        </motion.section>

        {/* Sizing Products Box */}
        <motion.section
          className="mb-12 p-6 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Sizing Products</h2>
          <p className="text-lg text-gray-600 mb-4">
            Sizing is done for the following yarn products to improve the fabric's durability and strength during weaving:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Modal Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Excel Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Liva Eco Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>High Twist Yarn (Tpi 28-48)</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Siro – Eli Twist Yarn</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Slub Yarn</motion.li>
          </ul>
        </motion.section>

        {/* Made-up Products Box */}
        <motion.section
          className="mb-12 p-6 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Made-up Products</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Flat Sheet</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Fitted Sheet</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Duvet Cover</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Pillow Cover</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Hospitality Linen products for Hotels</motion.li>
          </ul>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Product;
