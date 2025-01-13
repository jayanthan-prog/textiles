import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const generateCaptcha = () => {
  return Math.random().toString(36).substring(2, 7);
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captchaInput: ''
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());

  // Chatbot state
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [userMessage, setUserMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captchaInput === captcha) {
      console.log('Form submitted:', formData);
    } else {
      alert('Captcha incorrect! Please try again.');
      setCaptcha(generateCaptcha());
    }
  };

  // Handle user message in the chatbot
  const handleUserMessage = async () => {
    const userMessageText = userMessage.trim();
    if (!userMessageText) return;

    // Add user message to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: 'user', message: userMessageText },
    ]);

    // Get chatbot response using OpenAI API
    const botResponse = await getChatGPTResponse(userMessageText);
    
    // Add bot response to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: 'bot', message: botResponse },
    ]);
    setUserMessage('');
  };

  /// Function to get a response from Gemini API
const getGeminiResponse = async (message: string): Promise<string> => {
  const API_KEY = 'AIzaSyA80w_auc2GZ2iYqk91ekvIgl5lrYY1NTs';  // Replace with your Gemini API key
  const endpoint = 'https://gemini-api-url.com/v1/completions';  // Replace with actual Gemini API URL
  
  const body = JSON.stringify({
    model: 'gemini-model-id',  // Replace with the correct model ID for Gemini
    prompt: message,
    max_tokens: 150,
    temperature: 0.7,  // Optional: You can adjust temperature for randomness
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error('Error fetching response from Gemini API');
    }

    const data = await response.json();
    // Assuming Gemini API responds in a similar format to OpenAI's
    return data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching from Gemini API:', error);
    return 'Sorry, I couldn’t understand that. Please try again.';
  }
};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Captcha: {captcha}</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.captchaInput}
                  onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
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

        {/* Chatbot Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Chat With Ashok Assist
          </h2>
          <div className="space-y-4">
            <div className="h-64 overflow-y-auto p-4 bg-gray-100 rounded-md mb-4">
              {chatHistory.map((chat, index) => (
                <div key={index} className={chat.sender === 'user' ? 'text-right' : 'text-left'}>
                  <p className={chat.sender === 'user' ? 'font-bold text-blue-600' : 'font-semibold text-gray-800'}>
                    {chat.message}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Ask me about Ashok Textile Mills..."
              />
              <button
                onClick={handleUserMessage}
                className="ml-2 bg-blue-600 text-white p-2 rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Embed Google Map */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.64813403719475!2d78.28518978476687!3d11.160205951106294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babca7d84c97715%3A0x2c0e83f5c61798e8!2sAshok%20Textile%20Mills%20(P)Ltd!5e0!3m2!1sen!2sus!4v1736223715950!5m2!1sen!2sus"
            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

