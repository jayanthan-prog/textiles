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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, resume: file });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="page-container"
      >
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Career Opportunities</h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Join Our Team</h2>
            </div>
            <p className="text-gray-400 mb-6 text-center">
              We're always looking for talented individuals to join our team. Submit your
              application below, and we'll contact you when relevant opportunities arise.
            </p>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-200">First Name</label>
                  <input
                    type="text"
                    required
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${formError && !formData.firstName ? 'border-red-500' : ''}`}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-200">Last Name</label>
                  <input
                    type="text"
                    required
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${formError && !formData.lastName ? 'border-red-500' : ''}`}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-200">Email</label>
                  <input
                    type="email"
                    required
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${formError && !formData.email ? 'border-red-500' : ''}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-200">Phone</label>
                  <input
                    type="tel"
                    required
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${formError && !formData.phone ? 'border-red-500' : ''}`}
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
                <label className="block text-sm font-medium text-gray-200">Message</label>
                <textarea
                  rows={4}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${formError && !formData.message ? 'border-red-500' : ''}`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <label className="block text-sm font-medium text-gray-200">Verify: 20-5?</label>
                <input
                  type="text"
                  required
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${formError && !formData.captcha ? 'border-red-500' : ''}`}
                  value={formData.captcha}
                  onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <label className="block text-sm font-medium text-gray-200">Add Resume (PDF Only)</label>
                <input
                  type="file"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
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
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  <Send className="h-4 w-4 mr-2" />
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
