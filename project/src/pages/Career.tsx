import { motion } from 'framer-motion';
import { Briefcase, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    captcha: '',
    resume: null
  });
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !formData.captcha ||
      !formData.resume
    ) {
      setFormError(true);
      toast.error("Please fill out all fields and upload your resume!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored"
      });
      return;
    }

    // Display success notification
    toast.success("Your application has been submitted successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      theme: "colored"
    });

    // Clear form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      captcha: '',
      resume: null
    });
    setFormError(false);
  };

   
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="page-container bg-gradient-to-r from-white to-indigo-100"
      >
        <div className="max-w-4xl mx-auto py-16 px-8">
          <h1 className="text-5xl font-semibold text-gray-800 text-center mb-10">
            Join Our Talented Team
          </h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-10"
          >
            <div className="flex items-center mb-8">
              <Briefcase className="h-10 w-10 text-indigo-600 mr-4" />
              <h2 className="text-3xl font-semibold text-gray-800">Career Opportunities</h2>
            </div>

            <p className="text-gray-600 mb-8 text-lg text-center">
              We're always looking for talented individuals to join our team.
              Submit your application, and we'll contact you when relevant opportunities arise.
            </p>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    required
                    className={`mt-2 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${formError && !formData.firstName ? 'border-red-500' : ''}`}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    required
                    className={`mt-2 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${formError && !formData.lastName ? 'border-red-500' : ''}`}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className={`mt-2 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${formError && !formData.email ? 'border-red-500' : ''}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    required
                    className={`mt-2 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${formError && !formData.phone ? 'border-red-500' : ''}`}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className={`mt-2 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${formError && !formData.message ? 'border-red-500' : ''}`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <label className="block text-sm font-medium text-gray-700">Add Resume (PDF Only)</label>
                <input
                  type="file"
                  required
                  className="mt-2 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleFileChange}
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
                >
                  <Send className="h-5 w-5 mr-3" />
                  Submit Application
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Career;
