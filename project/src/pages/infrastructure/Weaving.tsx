import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Target, Settings } from 'lucide-react';

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 ${className}`}></div>
);

const Weaving = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="page-container relative"
      >
        {/* Skeleton UI */}
        <div className="max-w-4xl mx-auto relative z-10">
          <Skeleton className="h-10 w-3/4 mb-8" />
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Skeleton className="h-8 w-8 rounded-full mr-3" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <Skeleton className="h-4 w-full mb-6" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <Skeleton className="h-8 w-8 mb-3" />
                <Skeleton className="h-5 w-1/2 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-2" />
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <Skeleton className="h-8 w-8 mb-3" />
                <Skeleton className="h-5 w-1/2 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-2" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Skeleton className="h-6 w-1/3 mb-6" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container relative"
    >
      {/* Main page content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Weaving Division</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Box className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">Premium Fabric Production</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our weaving division features state-of-the-art Toyota looms that produce high-quality fabrics with perfect interlacing.
            We specialize in customized fabric production meeting international quality standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <Target className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Production Capacity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Daily Output: 150,000 Meters</li>
                <li>• Annual Production: 54+ Million Meters</li>
                <li>• Custom Width Options</li>
                <li>• Multiple Fabric Types</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <Settings className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Technical Capabilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced Dobby Systems</li>
                <li>• Multiple Weave Patterns</li>
                <li>• High-Speed Operation</li>
                <li>• Digital Monitoring</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Toyota Looms Excellence</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Advanced Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Electronic Weft Selection</li>
                <li>• Automatic Stop Motion</li>
                <li>• Real-time Monitoring</li>
                <li>• Quality Control Systems</li>
                <li>• Energy-Efficient Operation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Weaving;
