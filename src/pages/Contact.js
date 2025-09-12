import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-700 border-b-4 border-blue-300 inline-block pb-2">
          Contact
        </h2>
        <p className="text-lg mb-3">
          Email: <a href="mailto:simugomwaobald250@gmail.com" className="text-blue-600 hover:underline">simugomwaobald250@gmail.com</a>
        </p>
        <p className="text-lg mb-3">
          Phone: <a href="tel:0789934421" className="text-blue-600 hover:underline">0789934421</a>
        </p>
        <p className="text-lg">
          LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/johndoe</a>
        </p>
      </div>
    </div>
  );
}
