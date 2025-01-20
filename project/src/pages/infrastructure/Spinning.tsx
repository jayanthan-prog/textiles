import { Factory, Award, BarChart } from 'lucide-react';
import { useState, useEffect } from 'react';

const Spinning = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-container relative min-h-screen">
      {/* Spinning Animation Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-600"></div>
        </div>
      )}

      {/* Spinning Animation Background */}
      <div
        className="absolute inset-0 bg-transparent"
        style={{
          backgroundImage: 'url("https://www.rubymills.com/frontend/img/home/fabric.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mt-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Spinning Division</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Factory className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">World-Class Yarn Production</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our spinning division produces premium quality yarns using state-of-the-art machinery and advanced technology.
            With a production capacity of 40 Tons/Day, we ensure consistent quality and timely delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <BarChart className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Production Capacity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Daily Output: 40 Tons</li>
                <li>• Annual Capacity: 14,000+ Tons</li>
                <li>• Viscose Count Range: 60+</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <Award className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Quality Standards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ISO 9001:2015 Certified</li>
                <li>• Advanced Quality Control</li>
                <li>• International Standards</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Machinery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ring Frames Section */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Ring Frames</h3>
              <img 
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/Ring-Frame.jpg" 
                alt="Ring Frame" 
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-600">
                <li>• Rieter Latest Models</li>
                <li>• LMW Advanced Systems</li>
                <li>• High-Speed Operation</li>
              </ul>
            </div>

            {/* Vortex and Airjet Section */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Special Equipment</h3>
              <img 
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/Vortex.jpg" 
                alt="Vortex" 
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-600">
                <li>• Murata Vortex Spinning</li>
              </ul>
              <img 
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/Airjet.jpg" 
                alt="Airjet" 
                className="w-full h-56 object-cover rounded-lg mb-4 mt-6"
              />
              <ul className="space-y-2 text-gray-600">
                <li>• Rieter Airjet Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinning;
