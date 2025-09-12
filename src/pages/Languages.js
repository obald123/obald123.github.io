import React from 'react';

export default function Languages() {
  const languages = [
    'English',
    'French',
    'Kinyarwanda',
    'Swahili (basic)'
  ];

  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-700 border-b-4 border-blue-300 inline-block pb-2">
          Languages
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
