import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error.text);
      });
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-100 to-white min-h-screen py-12 px-6 sm:px-12">
      <h2 className="text-3xl font-bold text-center text-[#00BCD4] mb-10">📬 Contact Me</h2>

      {submitted ? (
        <div className="text-center text-[#00BCD4] font-medium text-lg">
          Thank you for reaching out! I'll get back to you soon. 😊
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#00BCD4] focus:border-[#00BCD4]"
              />
              {formErrors.firstName && <p className="text-red-600 text-sm mt-1">{formErrors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#00BCD4] focus:border-[#00BCD4]"
              />
              {formErrors.lastName && <p className="text-red-600 text-sm mt-1">{formErrors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#00BCD4] focus:border-[#00BCD4]"
            />
            {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#00BCD4] focus:border-[#00BCD4]"
            />
            {formErrors.subject && <p className="text-red-600 text-sm mt-1">{formErrors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#00BCD4] focus:border-[#00BCD4] resize-none"
            />
            {formErrors.message && <p className="text-red-600 text-sm mt-1">{formErrors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#00BCD4] text-white text-lg font-semibold rounded-md hover:bg-[#00acc1] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
          >
            ✉️ Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
