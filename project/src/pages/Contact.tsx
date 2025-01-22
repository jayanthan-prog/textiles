import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for AI Chatbot
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', message: 'Hello! How can I assist you today?' },
  ]);
  const [userMessage, setUserMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      <div className="flex items-center">
        <Send className="h-5 w-5 mr-2" />
        <span>Form submitted successfully!</span>
      </div>,
      {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  // Handle chatbot message
  const handleChatSubmit = (e) => {
    e.preventDefault();
    const newChatMessages = [
      ...chatMessages,
      { sender: 'user', message: userMessage },
      { sender: 'bot', message: `You said: ${userMessage}` }, // Simulate bot response
    ];
    setChatMessages(newChatMessages);
    setUserMessage('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black-900 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    10/243, Thuraiyur Main Road,<br />
                    Ponneri (PO), Namakkal – 637013<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">
                    Mobile: +91 98433 99161<br />
                    Landline: 04286 253077
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contactus@ashoktextilemills.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <User className="h-5 w-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="mt-1 block w-full rounded-md border-0 focus:ring-0 focus:outline-none pl-2"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded-md">
                <Mail className="h-5 w-5 text-gray-400 ml-3" />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="mt-1 block w-full rounded-md border-0 focus:ring-0 focus:outline-none pl-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded-md">
                <MessageCircle className="h-5 w-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  className="mt-1 block w-full rounded-md border-0 focus:ring-0 focus:outline-none pl-2"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded-md">
                <MessageCircle className="h-5 w-5 text-gray-400 ml-3" />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="mt-1 block w-full rounded-md border-0 focus:ring-0 focus:outline-none pl-2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        Chatbot - Ashok Assist
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Ashok Assist</h2>
          <div className="space-y-4">
            {/* Chat messages */}
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`p-3 rounded-md ${
                      msg.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-600 text-white'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Input and submit for chat */}
            <form onSubmit={handleChatSubmit} className="flex items-center border border-gray-300 rounded-md">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Ask a question..."
                className="mt-1 block w-full rounded-md border-0 focus:ring-0 focus:outline-none pl-3 py-2"
              />
              <button
                type="submit"
                className="text-white bg-blue-600 px-4 py-2 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Embed Google Map */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.64813403719475!2d78.28518978476687!3d11.160205951106294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babca7d84c97715%3A0x2c0e83f5c61798e8!2sAshok%20Textile%20Mills%20(P)Ltd!5e0!3m2!1sen!2sus!4v1736223715950!5m2!1sen!2us"
            width="100%" height="450" style={{ border: 0 }} loading="lazy"
          ></iframe>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
