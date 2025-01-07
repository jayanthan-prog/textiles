import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Management from './pages/Management';
import WhyUs from './pages/WhyUs';
import Infrastructure from './pages/Infrastructure';
import Spinning from './pages/infrastructure/Spinning';
import Sizing from './pages/infrastructure/Sizing';
import Weaving from './pages/infrastructure/Weaving';
import Madeups from './pages/infrastructure/Madeups';
import Quality from './pages/Quality';
import CSR from './pages/CSR';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/infrastructure/spinning" element={<Spinning />} />
            <Route path="/infrastructure/sizing" element={<Sizing />} />
            <Route path="/infrastructure/weaving" element={<Weaving />} />
            <Route path="/infrastructure/madeups" element={<Madeups />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;