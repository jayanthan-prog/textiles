import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import OpenAI from "openai";

// Initialize OpenAI instance
const openai = new OpenAI({
    apiKey: "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",  // Replace with your actual OpenAI API key
    dangerouslyAllowBrowser: true  // Allowing usage directly in the frontend for demo purposes
});

// Function to generate a random captcha
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
    const [aiQuestion, setAiQuestion] = useState('');
    const [aiResponse, setAiResponse] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.captchaInput === captcha) {
            console.log('Form submitted:', formData);
            alert("Form submitted successfully!");
        } else {
            alert('Captcha incorrect! Please try again.');
            setCaptcha(generateCaptcha());
        }
    };

    // Handle OpenAI response for Ashok Assist
    const handleAIResponse = async () => {
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are Ashok Assist, a helpful chatbot for answering user inquiries." },
                    { role: "user", content: aiQuestion }
                ]
            });
            setAiResponse(completion.choices[0].message.content);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            alert('Error communicating with Ashok Assist. Please try again later.');
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
                    {/* Contact Info Section */}
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

                    {/* Message Form Section */}
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
                                    className="mt-1 block w-full rounded-md border-gray-300"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Captcha: {captcha}</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300"
                                    value={formData.captchaInput}
                                    onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md"
                            >
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Ashok Assist Section */}
                <div className="mt-12 p-8 bg-gray-100 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Ashok Assist (AI Chatbot)</h2>
                    <div className="space-y-4">
                        <textarea
                            rows={3}
                            placeholder="Ask me anything..."
                            className="w-full p-4 border rounded-md"
                            value={aiQuestion}
                            onChange={(e) => setAiQuestion(e.target.value)}
                        />
                        <button
                            onClick={handleAIResponse}
                            className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center"
                        >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Ask Ashok Assist
                        </button>
                        {aiResponse && (
                            <div className="mt-4 p-4 bg-white border rounded-md">
                                <strong>Response:</strong> {aiResponse}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
