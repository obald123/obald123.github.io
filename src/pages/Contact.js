import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_v1l88rl';
    const templateID = 'template_ssg200o';
    const userID = 'VC4RgW42eRUke6wh4';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        setStatusMessage('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-700 border-b-4 border-blue-300 inline-block pb-2">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:simugomwaobald250@gmail.com" className="text-blue-600 hover:underline">simugomwaobald250@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📱</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+250789934421" className="text-blue-600 hover:underline">+250789934421</a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">💼</span>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/simugomwa-obald-4a4402216/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🐙</span>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a href="https://github.com/obald123" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/obald123</a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-center text-sm text-gray-700">{statusMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
