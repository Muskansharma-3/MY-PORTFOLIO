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
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Use environment variable for Service ID
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Use environment variable for Template ID
        e.target,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Use environment variable for Public Key
      )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' }); // Clear the form
      }, (error) => {
        console.log('FAILED...', error.text);
        // Optionally display an error message to the user
      });
    }
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Me</h2>
      {submitted ? (
        <p className="text-center text-green-600">Thank you for reaching out! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.firstName && <p className="text-red-600 text-sm mt-1">{formErrors.firstName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.lastName && <p className="text-red-600 text-sm mt-1">{formErrors.lastName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.subject && <p className="text-red-600 text-sm mt-1">{formErrors.subject}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.message && <p className="text-red-600 text-sm mt-1">{formErrors.message}</p>}
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Send
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;